import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Upload, Image, Heart, Camera, Trash2 } from 'lucide-react';
import { db, isFirebaseConfigured } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { AVATARS } from '../data/avatarData';
import '../icebreaker.css';

const MOCK_POSTS = [
  {
    id: 'mock1',
    username: 'Demir_Kaan',
    avatarId: 'alex',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60',
    caption: 'İlk robot tasarımımı tamamladım! Motorlar harika çalışıyor. 🤖⚡',
    likes: { student1: true, student2: true },
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: 'mock2',
    username: 'Siber_Deniz',
    avatarId: 'steve',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=60',
    caption: 'Robotumun gövdesini tasarladım, hem şık hem sağlam çıktı! 🦾✨ #Robocraft',
    likes: { student3: true },
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: 'mock3',
    username: 'Yazilimci_Arda',
    avatarId: 'creeper',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60',
    caption: 'İlk robot prototipi hazır! Biraz acemi göründü ama gurur duyuyorum 🛠️🤖',
    likes: { student1: true, student4: true, student5: true },
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
  }
];

const IceBreakerView = ({ setActiveTab, playerData, currentUser, currentUserObj }) => {
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [caption, setCaption] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  // displayName: Firestore → Firebase Auth → 'RoboGezgin'
  const displayName = playerData?.displayName?.trim() || currentUserObj?.displayName?.trim() || 'RoboGezgin';

  // Firestore veya LocalStorage'dan gönderileri yükleme
  useEffect(() => {
    if (!isFirebaseConfigured) {
      const localData = localStorage.getItem('icebreaker_uploads');
      if (localData) {
        setPosts(JSON.parse(localData));
      } else {
        setPosts(MOCK_POSTS);
        localStorage.setItem('icebreaker_uploads', JSON.stringify(MOCK_POSTS));
      }
      return;
    }

    const q = query(collection(db, 'icebreakers'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPosts = snapshot.docs.map(docData => {
        const data = docData.data();
        let dateStr = new Date().toISOString();
        if (data.createdAt) {
          if (typeof data.createdAt.toDate === 'function') {
            dateStr = data.createdAt.toDate().toISOString();
          } else if (data.createdAt.seconds) {
            dateStr = new Date(data.createdAt.seconds * 1000).toISOString();
          } else {
            dateStr = new Date(data.createdAt).toISOString();
          }
        }
        return {
          id: docData.id,
          ...data,
          createdAt: dateStr
        };
      });
      setPosts(fetchedPosts);
    }, (error) => {
      console.warn("Firestore real-time sync failed, using localStorage fallback:", error);
      const localData = localStorage.getItem('icebreaker_uploads');
      setPosts(localData ? JSON.parse(localData) : MOCK_POSTS);
    });

    return () => unsubscribe();
  }, []);

  // Zaman formatı yardımcısı
  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    if (diffSec < 60) return 'Şimdi';
    if (diffMin < 60) return `${diffMin}d önce`;
    if (diffHr < 24) return `${diffHr}sa önce`;
    return `${diffDay}g önce`;
  };

  // Avatar emoji bulma yardımcısı
  const getAvatarEmoji = (avatarId) => {
    const av = AVATARS.find(a => a.id === avatarId);
    return av ? av.emoji : '🤖';
  };

  // Sürükle bırak olayları
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        handleImageSelect(file);
      } else {
        alert("Lütfen geçerli bir görsel dosyası seçin!");
      }
    }
  };

  // Resim seçimi ve önizleme oluşturma
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleImageSelect(e.target.files[0]);
    }
  };

  const handleImageSelect = (file) => {
    setImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Canvas ile görseli sıkıştırma (Maks. 600px ve 0.7 JPEG Kalitesi)
  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new window.Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const max_size = 600;

          if (width > height) {
            if (width > max_size) {
              height *= max_size / width;
              width = max_size;
            }
          } else {
            if (height > max_size) {
              width *= max_size / height;
              height = max_size;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Base64 formatında sıkıştırılmış JPEG çıktısı alıyoruz
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
          resolve(compressedBase64);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  // Gönderi Paylaşma
  const handleShare = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Lütfen paylaşmak için bir görsel seçin!");
      return;
    }
    setIsUploading(true);

    try {
      const compressedBase64 = await compressImage(image);
      const newPost = {
        username: displayName,
        userId: currentUser || 'misafir',
        avatarId: playerData?.avatarId || 'steve',
        imageUrl: compressedBase64,
        caption: caption.trim() || 'İşte benim robot tasarımım! 🤖✨',
        likes: {},
        createdAt: isFirebaseConfigured ? serverTimestamp() : new Date().toISOString()
      };

      if (isFirebaseConfigured) {
        await addDoc(collection(db, 'icebreakers'), newPost);
      } else {
        // Çevrimdışı modda localStorage'a kaydet
        const localData = localStorage.getItem('icebreaker_uploads');
        const currentLocal = localData ? JSON.parse(localData) : [...MOCK_POSTS];
        
        const localPost = {
          ...newPost,
          id: 'local_' + Date.now(),
          createdAt: new Date().toISOString()
        };

        const updated = [localPost, ...currentLocal];
        localStorage.setItem('icebreaker_uploads', JSON.stringify(updated));
        setPosts(updated);
      }

      // Formu temizle
      setImage(null);
      setImagePreview(null);
      setCaption('');
    } catch (err) {
      console.error("Görsel paylaşılırken hata oluştu:", err);
      alert("Görsel paylaşılırken bir hata oluştu. Lütfen tekrar deneyin!");
    } finally {
      setIsUploading(false);
    }
  };

  // Beğeni Yönetimi
  const handleLike = async (postId, currentLikes = {}) => {
    const userId = currentUser || 'misafir';
    const updatedLikes = { ...currentLikes };

    if (updatedLikes[userId]) {
      delete updatedLikes[userId];
    } else {
      updatedLikes[userId] = true;
    }

    if (isFirebaseConfigured && !postId.startsWith('local_')) {
      try {
        const postRef = doc(db, 'icebreakers', postId);
        await updateDoc(postRef, { likes: updatedLikes });
      } catch (err) {
        console.error("Beğeni güncellenirken hata oluştu:", err);
      }
    } else {
      const localData = localStorage.getItem('icebreaker_uploads');
      const currentLocal = localData ? JSON.parse(localData) : [...MOCK_POSTS];
      const updated = currentLocal.map(p => {
        if (p.id === postId) {
          return { ...p, likes: updatedLikes };
        }
        return p;
      });
      localStorage.setItem('icebreaker_uploads', JSON.stringify(updated));
      setPosts(updated);
    }
  };

  const isMyPost = (post) => {
    const userId = currentUser || 'misafir';
    return (post.userId === userId) || (post.username === displayName) || (post.username === currentUser);
  };

  const handleDelete = async (postId) => {
    if (window.confirm("Bu paylaşımınızı silmek istediğinize emin misiniz?")) {
      try {
        if (isFirebaseConfigured && !postId.startsWith('local_')) {
          await deleteDoc(doc(db, 'icebreakers', postId));
        } else {
          const localData = localStorage.getItem('icebreaker_uploads');
          const currentLocal = localData ? JSON.parse(localData) : [...MOCK_POSTS];
          const updated = currentLocal.filter(p => p.id !== postId);
          localStorage.setItem('icebreaker_uploads', JSON.stringify(updated));
          setPosts(updated);
        }
      } catch (err) {
        console.error("Paylaşım silinirken hata oluştu:", err);
        alert("Silme işlemi başarısız oldu. Lütfen tekrar deneyin.");
      }
    }
  };

  return (
    <div className="icebreaker-container">
      {/* Üst Kısım / Geri Dönme */}
      <header className="icebreaker-header">
        <button className="btn-secondary btn-back" onClick={() => setActiveTab('dashboard')}>
          <ArrowLeft size={18} /> Ana Sayfaya Dön
        </button>
        <div className="icebreaker-title-group">
          <h1>Giriş: Buz Kırma Etkinliği 🧩</h1>
          <p>Sınıf arkadaşlarınla tanışmak için tasarladığın robotu veya çalışmalarını paylaş!</p>
        </div>
      </header>

      {/* Ana Grid Düzeni */}
      <div className="icebreaker-content">
        {/* Sol Kolon: Paylaşım Formu */}
        <section className="icebreaker-upload-section">
          <div className="card upload-card">
            <h3>Görsel Paylaş 📸</h3>
            <form onSubmit={handleShare}>
              {/* Sürükle Bırak / Yükleme Alanı */}
              <div 
                className={`upload-zone ${isDragOver ? 'dragover' : ''} ${imagePreview ? 'has-preview' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                
                {imagePreview ? (
                  <div className="preview-container">
                    <img src={imagePreview} alt="Önizleme" className="upload-preview" />
                    <div className="preview-overlay">
                      <Camera size={24} />
                      <span>Farklı Bir Görsel Seç</span>
                    </div>
                  </div>
                ) : (
                  <div className="upload-placeholder">
                    <Upload size={36} className="text-cyan animate-pulse" />
                    <p className="upload-title">Görsel Seç veya Sürükle Bırak</p>
                    <p className="upload-subtitle">Robot tasarımının veya projenin fotoğrafı (PNG, JPG)</p>
                  </div>
                )}
              </div>

              {/* Açıklama Kutusu */}
              <div className="input-group" style={{ marginTop: '1.5rem' }}>
                <label>Robot Tasarımın Hakkında Açıklama</label>
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Robotunu nasıl tasarladın? Ne tür malzemeler kullandın? Ya da sadece merhaba de! 👋"
                  maxLength={150}
                  rows={3}
                />
                <span className="char-count">{caption.length}/150</span>
              </div>

              <button 
                type="submit" 
                className="btn-primary btn-share" 
                disabled={isUploading || !image}
                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '1rem' }}
              >
                {isUploading ? (
                  <>Sıkıştırılıyor ve Yükleniyor...</>
                ) : (
                  <>Paylaş ve Sınıfa Katıl 🚀</>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Sağ Kolon: Topluluk Galerisi */}
        <section className="icebreaker-gallery-section">
          <div className="gallery-header">
            <h3>Topluluk Paylaşımları ({posts.length})</h3>
            <span className="gallery-status-badge">
              {isFirebaseConfigured ? '🟢 Bulut Bağlantısı Aktif' : '🟡 Yerel Mod (Çevrimdışı)'}
            </span>
          </div>

          {posts.length === 0 ? (
            <div className="empty-gallery">
              <Image size={48} className="text-muted" />
              <p>Henüz kimse bir şey paylaşmadı. İlk paylaşan sen ol!</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {posts.map((post) => {
                const isLikedByMe = post.likes && post.likes[currentUser || 'misafir'];
                const likeCount = Object.keys(post.likes || {}).length;

                return (
                  <div className="gallery-card" key={post.id}>
                    {/* Gönderi Sahibi */}
                    <div className="gallery-card-header">
                      <div className="user-info">
                        <span className="username">{post.username}</span>
                        <span className="timestamp">{formatTimeAgo(post.createdAt)}</span>
                      </div>
                      {isMyPost(post) && (
                        <button
                          className="btn-delete"
                          onClick={() => handleDelete(post.id)}
                          title="Paylaşımı Sil"
                          style={{
                            marginLeft: 'auto',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer',
                            padding: '0.4rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--accent-red)';
                            e.currentTarget.style.backgroundColor = 'rgba(248, 113, 113, 0.08)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>

                    {/* Paylaşılan Görsel */}
                    <div className="gallery-card-image-wrapper">
                      <img src={post.imageUrl} alt="Topluluk Paylaşımı" className="gallery-image" />
                    </div>

                    {/* Gönderi Metni ve Etkileşimler */}
                    <div className="gallery-card-body">
                      <p className="caption">{post.caption}</p>
                      
                      <div className="gallery-card-footer">
                        <button 
                          className={`btn-like ${isLikedByMe ? 'liked' : ''}`}
                          onClick={() => handleLike(post.id, post.likes)}
                          title={isLikedByMe ? 'Beğenmekten Vazgeç' : 'Beğen'}
                        >
                          <Heart size={16} fill={isLikedByMe ? 'var(--accent-red)' : 'transparent'} />
                          <span>{likeCount} Beğeni</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default IceBreakerView;
