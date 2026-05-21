import React, { useState } from 'react';
import { Zap, Mail, Lock, Eye, EyeOff, PlusCircle, LogIn, AlertCircle, ArrowRight, Check, User, KeyRound } from 'lucide-react';
import { AVATARS } from '../data/avatarData';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  saveUserData,
  isAuthConfigured,
  getAuthErrorMessage,
} from '../firebase';

const LoginView = ({ onLoginSuccess, INITIAL_PLAYER_DATA }) => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register' | 'reset'

  // Login fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Register fields
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerFullName, setRegisterFullName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('');
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterPasswordConfirm, setShowRegisterPasswordConfirm] = useState(false);
  const [selectedAvatarId, setSelectedAvatarId] = useState('steve');

  // Password reset fields
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const availableAvatars = AVATARS.filter(a => a.unlockLevel <= 0);

  const resetFields = () => {
    setErrorMsg('');
    setSuccessMsg('');
    setLoginPassword('');
    setRegisterPassword('');
    setRegisterPasswordConfirm('');
    setShowLoginPassword(false);
    setShowRegisterPassword(false);
    setShowRegisterPasswordConfirm(false);
    setResetSent(false);
  };

  // ─── Giriş ──────────────────────────────────────────────────────────────────
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!loginEmail.trim()) { setErrorMsg('Lütfen e-posta adresinizi girin.'); return; }
    if (!loginPassword) { setErrorMsg('Lütfen şifrenizi girin.'); return; }

    setLoading(true);
    try {
      if (isAuthConfigured) {
        const userCred = await signInWithEmailAndPassword(auth, loginEmail.trim(), loginPassword);
        // onAuthStateChanged in App.jsx will handle the rest; we just need to signal success
        // Pass null data so App.jsx loads it via onAuthStateChanged
        onLoginSuccess(userCred.user.uid, null);
      } else {
        setErrorMsg('Firebase Authentication yapılandırılmamış. Lütfen yöneticinizle iletişime geçin.');
      }
    } catch (err) {
      setErrorMsg(getAuthErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  // ─── Kayıt ──────────────────────────────────────────────────────────────────
  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!registerEmail.trim()) { setErrorMsg('Lütfen e-posta adresinizi girin.'); return; }
    if (!registerFullName.trim()) { setErrorMsg('Lütfen adınızı ve soyadınızı girin.'); return; }
    if (registerFullName.trim().length < 2) { setErrorMsg('Ad soyad en az 2 karakter olmalıdır.'); return; }
    if (!registerPassword) { setErrorMsg('Lütfen bir şifre belirleyin.'); return; }
    if (registerPassword.length < 6) { setErrorMsg('Şifre en az 6 karakter olmalıdır.'); return; }
    if (registerPassword !== registerPasswordConfirm) { setErrorMsg('Şifreler eşleşmiyor! Lütfen kontrol edin.'); return; }

    setLoading(true);
    try {
      if (isAuthConfigured) {
        const userCred = await createUserWithEmailAndPassword(auth, registerEmail.trim(), registerPassword);

        // Set display name in Firebase Auth profile
        await updateProfile(userCred.user, { displayName: registerFullName.trim() });

        // Save initial player data to Firestore
        const initData = {
          ...INITIAL_PLAYER_DATA,
          displayName: registerFullName.trim(),
          avatarId: selectedAvatarId,
        };
        await saveUserData(userCred.user.uid, initData);

        onLoginSuccess(userCred.user.uid, initData);
      } else {
        setErrorMsg('Firebase Authentication yapılandırılmamış. Lütfen yöneticinizle iletişime geçin.');
      }
    } catch (err) {
      setErrorMsg(getAuthErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  // ─── Şifremi Unuttum ────────────────────────────────────────────────────────
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!resetEmail.trim()) { setErrorMsg('Lütfen e-posta adresinizi girin.'); return; }

    setLoading(true);
    try {
      if (isAuthConfigured) {
        await sendPasswordResetEmail(auth, resetEmail.trim());
        setResetSent(true);
        setSuccessMsg(`Şifre sıfırlama bağlantısı ${resetEmail.trim()} adresine gönderildi. Gelen kutunuzu kontrol edin.`);
      } else {
        setErrorMsg('Firebase Authentication yapılandırılmamış.');
      }
    } catch (err) {
      setErrorMsg(getAuthErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

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
          <p className="login-subtitle">LMS &amp; Adventure Platform</p>
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
          <button
            type="button"
            className={`login-tab-btn ${activeTab === 'reset' ? 'active' : ''}`}
            onClick={() => { setActiveTab('reset'); resetFields(); }}
          >
            <KeyRound size={16} />
            Şifremi Unuttum
          </button>
        </div>

        {/* Hata Bildirimi */}
        {errorMsg && (
          <div className="login-error-alert animate-bounce-short">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Başarı Bildirimi */}
        {successMsg && (
          <div className="login-success-alert">
            <Check size={16} className="flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* ── Giriş Formu ─────────────────────────────────────────────────────── */}
        {activeTab === 'login' && (
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>E-POSTA ADRESİ</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  placeholder="ornek@email.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  disabled={loading}
                  className="cyber-input"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label>ŞİFRE</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  placeholder="Şifrenizi girin"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  disabled={loading}
                  className="cyber-input password-input"
                  maxLength={60}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  disabled={loading}
                  title={showLoginPassword ? 'Şifreyi Gizle' : 'Şifreyi Göster'}
                >
                  {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-cyber btn-login-submit" disabled={loading}>
              {loading ? <div className="spinner-small"></div> : <>Sanal Ağa Bağlan <ArrowRight size={18} /></>}
            </button>

            <button
              type="button"
              className="login-forgot-link"
              onClick={() => { setActiveTab('reset'); resetFields(); }}
            >
              Şifremi unuttum
            </button>
          </form>
        )}

        {/* ── Kayıt Formu ─────────────────────────────────────────────────────── */}
        {activeTab === 'register' && (
          <form className="login-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label>E-POSTA ADRESİ</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  placeholder="ornek@email.com"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  disabled={loading}
                  className="cyber-input"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label>TAM ADINIZ</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  value={registerFullName}
                  onChange={(e) => setRegisterFullName(e.target.value)}
                  disabled={loading}
                  className="cyber-input"
                  maxLength={50}
                  autoComplete="name"
                />
              </div>
              <span className="input-help">Profil ve skor tablosunda görünecek adınız.</span>
            </div>

            <div className="form-group">
              <label>ŞİFRE</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type={showRegisterPassword ? 'text' : 'password'}
                  placeholder="En az 6 karakter"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  disabled={loading}
                  className="cyber-input password-input"
                  maxLength={60}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                  disabled={loading}
                  title={showRegisterPassword ? 'Şifreyi Gizle' : 'Şifreyi Göster'}
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
                  type={showRegisterPasswordConfirm ? 'text' : 'password'}
                  placeholder="Şifreyi tekrar girin"
                  value={registerPasswordConfirm}
                  onChange={(e) => setRegisterPasswordConfirm(e.target.value)}
                  disabled={loading}
                  className="cyber-input password-input"
                  maxLength={60}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowRegisterPasswordConfirm(!showRegisterPasswordConfirm)}
                  disabled={loading}
                  title={showRegisterPasswordConfirm ? 'Şifreyi Gizle' : 'Şifreyi Göster'}
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
              {loading ? <div className="spinner-small"></div> : <>Karakteri Oluştur &amp; Başlat <ArrowRight size={18} /></>}
            </button>
          </form>
        )}

        {/* ── Şifremi Unuttum ─────────────────────────────────────────────────── */}
        {activeTab === 'reset' && (
          <form className="login-form" onSubmit={handlePasswordReset}>
            {!resetSent ? (
              <>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Kayıtlı e-posta adresinizi girin. Şifre sıfırlama bağlantısı göndereceğiz.
                </p>
                <div className="form-group">
                  <label>E-POSTA ADRESİ</label>
                  <div className="input-wrapper">
                    <Mail size={18} className="input-icon" />
                    <input
                      type="email"
                      placeholder="ornek@email.com"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      disabled={loading}
                      className="cyber-input"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-cyber btn-login-submit" disabled={loading}>
                  {loading ? <div className="spinner-small"></div> : <>Sıfırlama Linki Gönder <ArrowRight size={18} /></>}
                </button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Şifre sıfırlama bağlantısı <strong>{resetEmail}</strong> adresine gönderildi.
                  <br />Gelen kutunuzu kontrol edin (spam klasörünü de).
                </p>
                <button
                  type="button"
                  className="btn-cyber btn-login-submit"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => { setActiveTab('login'); resetFields(); }}
                >
                  Giriş Sayfasına Dön
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginView;



