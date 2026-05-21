import React, { useState } from 'react';
import { Zap, User, Lock, Eye, EyeOff, PlusCircle, LogIn, AlertCircle, ArrowRight, Check } from 'lucide-react';
import { AVATARS } from '../data/avatarData';
import { loadUserData, saveUserData, hashPassword } from '../firebase';

const LoginView = ({ onLoginSuccess, INITIAL_PLAYER_DATA }) => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'
  const [loginUserId, setLoginUserId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUserId, setRegisterUserId] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('');
  
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterPasswordConfirm, setShowRegisterPasswordConfirm] = useState(false);
  
  const [selectedAvatarId, setSelectedAvatarId] = useState('steve');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const cleanUserId = (val) => {
    return val.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    const userId = cleanUserId(loginUserId);
    if (!userId) {
      setErrorMsg('Lütfen kullanıcı kodunuzu girin.');
      return;
    }

    if (!loginPassword) {
      setErrorMsg('Lütfen şifrenizi girin.');
      return;
    }

    setLoading(true);
    try {
      const data = await loadUserData(userId);
      if (data) {
        const hashedInputPassword = await hashPassword(loginPassword);

        if (data.passwordHash) {
          if (data.passwordHash === hashedInputPassword) {
            onLoginSuccess(userId, data);
          } else {
            setErrorMsg('Girdiğiniz şifre hatalı! Lütfen tekrar deneyin.');
          }
        } else {
          // Eski, şifresiz hesap - şifre tanımlatıp devam ettirelim
          if (loginPassword.length < 4) {
            setErrorMsg('Bu eski hesap için yeni bir şifre tanımlamanız gerekmektedir. Şifre en az 4 karakter olmalıdır.');
          } else {
            const updatedData = {
              ...data,
              passwordHash: hashedInputPassword
            };
            await saveUserData(userId, updatedData);
            onLoginSuccess(userId, updatedData);
          }
        }
      } else {
        setErrorMsg('Bu kullanıcı kodu bulunamadı! Yeni karakter oluşturmak için sağdaki sekmeyi seçin.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Bağlantı hatası oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const userId = cleanUserId(registerUserId);
    if (!userId) {
      setErrorMsg('Lütfen yeni bir kullanıcı kodu belirleyin.');
      return;
    }

    if (userId.length < 3) {
      setErrorMsg('Kullanıcı kodu en az 3 karakter olmalıdır.');
      return;
    }

    if (!registerPassword) {
      setErrorMsg('Lütfen bir şifre belirleyin.');
      return;
    }

    if (registerPassword.length < 4) {
      setErrorMsg('Şifre en az 4 karakter olmalıdır.');
      return;
    }

    if (registerPassword !== registerPasswordConfirm) {
      setErrorMsg('Şifreler eşleşmiyor! Lütfen kontrol edin.');
      return;
    }

    setLoading(true);
    try {
      // Önce bu kullanıcı adı alınmış mı diye kontrol et
      const existingData = await loadUserData(userId);
      if (existingData) {
        setErrorMsg('Bu kullanıcı kodu zaten alınmış! Lütfen başka bir kod seçin.');
        setLoading(false);
        return;
      }

      // Şifreyi hash'le
      const hashedPassword = await hashPassword(registerPassword);

      // Yeni veri oluştur
      const newPlayerData = {
        ...INITIAL_PLAYER_DATA,
        avatarId: selectedAvatarId,
        passwordHash: hashedPassword
      };

      // Veritabanına kaydet
      await saveUserData(userId, newPlayerData);
      onLoginSuccess(userId, newPlayerData);
    } catch (err) {
      console.error(err);
      setErrorMsg('Hesap oluşturulurken bağlantı hatası oluştu.');
    } finally {
      setLoading(false);
    }
  };

  const resetFields = () => {
    setErrorMsg('');
    setLoginPassword('');
    setRegisterPassword('');
    setRegisterPasswordConfirm('');
    setShowLoginPassword(false);
    setShowRegisterPassword(false);
    setShowRegisterPasswordConfirm(false);
  };

  const availableAvatars = AVATARS.filter(a => a.unlockLevel <= 0); // Steve ve Alex

  return (
    <div className="login-container">
      <div className="login-glow-bg"></div>
      <div className="login-card">
        {/* Logo/Başlık */}
        <div className="login-header">
          <div className="pulse-circle-small">
            <Zap className="login-zap-small" size={28} />
          </div>
          <h1 className="login-title">ROBOCRAFT</h1>
          <p className="login-subtitle">LMS & Adventure Platform</p>
        </div>

        {/* Sekme Seçici */}
        <div className="login-tabs">
          <button
            type="button"
            className={`login-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => { setActiveTab('login'); resetFields(); }}
          >
            <LogIn size={16} />
            Giriş Yap
          </button>
          <button
            type="button"
            className={`login-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => { setActiveTab('register'); resetFields(); }}
          >
            <PlusCircle size={16} />
            Karakter Oluştur
          </button>
        </div>

        {/* Hata Bildirimi */}
        {errorMsg && (
          <div className="login-error-alert animate-bounce-short">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Giriş Yapma Formu */}
        {activeTab === 'login' ? (
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>KULLANICI KODU / ID</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  placeholder="Kodu girin (örn: elif, default_user)"
                  value={loginUserId}
                  onChange={(e) => setLoginUserId(e.target.value)}
                  disabled={loading}
                  className="cyber-input"
                  maxLength={20}
                  autoComplete="username"
                />
              </div>
              <span className="input-help">Daha önce oluşturduğunuz kod ile sisteme bağlanın.</span>
            </div>

            <div className="form-group">
              <label>ŞİFRE</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type={showLoginPassword ? "text" : "password"}
                  placeholder="Şifrenizi girin"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  disabled={loading}
                  className="cyber-input password-input"
                  maxLength={30}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  disabled={loading}
                  title={showLoginPassword ? "Şifreyi Gizle" : "Şifreyi Göster"}
                >
                  {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-cyber btn-login-submit" disabled={loading}>
              {loading ? (
                <div className="spinner-small"></div>
              ) : (
                <>
                  Sanal Ağa Bağlan <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        ) : (
          /* Yeni Karakter Oluşturma Formu */
          <form className="login-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label>YENİ KULLANICI KODU / ID</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  placeholder="Benzersiz bir kod girin (örn: ahmet)"
                  value={registerUserId}
                  onChange={(e) => setRegisterUserId(e.target.value)}
                  disabled={loading}
                  className="cyber-input"
                  maxLength={15}
                  autoComplete="username"
                />
              </div>
              <span className="input-help">Boşluksuz, küçük harf ve rakamlardan oluşabilir.</span>
            </div>

            <div className="form-group">
              <label>ŞİFRE</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type={showRegisterPassword ? "text" : "password"}
                  placeholder="En az 4 karakter şifre belirleyin"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  disabled={loading}
                  className="cyber-input password-input"
                  maxLength={30}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                  disabled={loading}
                  title={showRegisterPassword ? "Şifreyi Gizle" : "Şifreyi Göster"}
                >
                  {showRegisterPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>ŞİFRE TEKRAR</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type={showRegisterPasswordConfirm ? "text" : "password"}
                  placeholder="Şifreyi tekrar girin"
                  value={registerPasswordConfirm}
                  onChange={(e) => setRegisterPasswordConfirm(e.target.value)}
                  disabled={loading}
                  className="cyber-input password-input"
                  maxLength={30}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowRegisterPasswordConfirm(!showRegisterPasswordConfirm)}
                  disabled={loading}
                  title={showRegisterPasswordConfirm ? "Şifreyi Gizle" : "Şifreyi Göster"}
                >
                  {showRegisterPasswordConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>BAŞLANGIÇ KARAKTERİ</label>
              <div className="avatar-selector">
                {availableAvatars.map((avatar) => {
                  const isSelected = selectedAvatarId === avatar.id;
                  return (
                    <div
                      key={avatar.id}
                      className={`avatar-option-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => !loading && setSelectedAvatarId(avatar.id)}
                    >
                      <div className="avatar-option-emoji">{avatar.emoji}</div>
                      <div className="avatar-option-info">
                        <span className="avatar-option-name">{avatar.name}</span>
                        {isSelected && <Check size={14} className="avatar-option-check" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button type="submit" className="btn-cyber btn-register-submit" disabled={loading}>
              {loading ? (
                <div className="spinner-small"></div>
              ) : (
                <>
                  Karakteri Oluştur & Başlat <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginView;
