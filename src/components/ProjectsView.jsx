import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, PlusCircle, Star, ThumbsUp, X, Upload } from 'lucide-react';
import { getAllProjects, saveProject } from '../firebase';
import AvatarDisplay from './AvatarDisplay';
import { AVATARS } from '../data/avatarData';

const ProjectsView = ({ playerData }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newImage, setNewImage] = useState('');
  const [commentInputs, setCommentInputs] = useState({});

  const isTeacher = playerData?.role === 'teacher';

  const fetchProjects = async () => {
    setLoading(true);
    const data = await getAllProjects();
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Use FileReader to convert to base64 for local storage prototyping
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim() || !newImage) {
      alert("Lütfen başlık, açıklama ve fotoğraf alanlarını doldurun.");
      return;
    }

    const newProject = {
      id: `proj_${Date.now()}`,
      studentName: playerData.displayName || 'İsimsiz Öğrenci',
      avatarId: playerData.avatarId || 'steve',
      customSkin: playerData.customSkin || null,
      equippedItems: playerData.equippedItems || null,
      title: newTitle,
      description: newDesc,
      imageUrl: newImage,
      score: null,
      likes: 0,
      comments: [],
      createdAt: Date.now()
    };

    const success = await saveProject(newProject);
    if (success) {
      setShowUploadModal(false);
      setNewTitle('');
      setNewDesc('');
      setNewImage('');
      fetchProjects(); // refresh list
    }
  };

  const handleCommentSubmit = async (project, e) => {
    e.preventDefault();
    const text = commentInputs[project.id];
    if (!text || !text.trim()) return;

    const newComment = {
      id: `comment_${Date.now()}`,
      studentName: playerData.displayName || (isTeacher ? 'Öğretmen' : 'İsimsiz Öğrenci'),
      avatarId: playerData.avatarId || (isTeacher ? 'villager' : 'steve'),
      customSkin: playerData.customSkin || null,
      equippedItems: playerData.equippedItems || null,
      text: text.trim(),
      createdAt: Date.now()
    };

    const updatedProject = {
      ...project,
      comments: [...(project.comments || []), newComment]
    };

    await saveProject(updatedProject);
    setCommentInputs(prev => ({ ...prev, [project.id]: '' }));
    fetchProjects();
  };

  const handleGrade = async (project, scoreValue) => {
    const score = parseInt(scoreValue, 10);
    if (isNaN(score) || score < 0 || score > 100) {
      alert("Lütfen 0 ile 100 arasında geçerli bir puan girin.");
      return;
    }
    const updatedProject = { ...project, score };
    await saveProject(updatedProject);
    fetchProjects(); // refresh
  };

  const handleLike = async (project) => {
    if (isTeacher) return; // Teachers don't like, they grade
    const updatedProject = { ...project, likes: (project.likes || 0) + 1 };
    await saveProject(updatedProject);
    fetchProjects();
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '2.5rem', color: 'var(--text-primary)' }}>
            <ImageIcon className="text-cyan" size={36} />
            Proje Sergisi
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            {isTeacher 
              ? 'Öğrencilerin projelerini incele ve puan ver.'
              : 'Yaptığın projeleri paylaş ve diğer öğrencilerin projelerini incele!'}
          </p>
        </div>
        
        {!isTeacher && (
          <button 
            className="btn-primary" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}
            onClick={() => setShowUploadModal(true)}
          >
            <PlusCircle size={20} />
            Yeni Proje Yükle
          </button>
        )}
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-secondary)' }}>
          <div className="spinner-small" style={{ margin: '0 auto 1rem', width: '40px', height: '40px' }}></div>
          <p>Projeler yükleniyor...</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', paddingBottom: '3rem' }}>
          {projects.map(project => (
            <div key={project.id} style={{ 
              width: '100%',
              backgroundColor: 'var(--bg-card)', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
            }}>
              
              {/* Post Header (User Info) */}
              <div style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--accent-cyan)' }}>
                  <AvatarDisplay 
                    avatar={(project.studentName === (playerData.displayName || 'İsimsiz Öğrenci') && !isTeacher) ? (AVATARS.find(a => a.id === playerData.avatarId) || AVATARS[0]) : (AVATARS.find(a => a.id === project.avatarId) || AVATARS[0])} 
                    customSkin={(project.studentName === (playerData.displayName || 'İsimsiz Öğrenci') && !isTeacher) ? playerData.customSkin : project.customSkin}
                    equippedItems={(project.studentName === (playerData.displayName || 'İsimsiz Öğrenci') && !isTeacher) ? playerData.equippedItems : project.equippedItems}
                    profileMode={true}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '1.1rem' }}>{project.studentName}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Öğrenci Projesi</div>
                </div>
                {project.score !== null && (
                  <div style={{ backgroundColor: 'var(--accent-yellow)', color: '#000', padding: '0.3rem 0.8rem', borderRadius: '20px', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>
                    <Star size={16} /> {project.score}/100
                  </div>
                )}
              </div>

              {/* Project Image */}
              <div style={{ width: '100%', aspectRatio: '4/4', backgroundColor: '#000', position: 'relative' }}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Post Actions & Details */}
              <div style={{ padding: '1.5rem' }}>
                {/* Actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  {!isTeacher ? (
                    <button 
                      onClick={() => handleLike(project)}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', transition: 'transform 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
                      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <ThumbsUp size={24} /> 
                      <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>{project.likes || 0} Beğeni</span>
                    </button>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1rem' }}>
                      <ThumbsUp size={24} /> {project.likes || 0} Beğeni
                    </div>
                  )}

                  {isTeacher && project.score === null && (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input 
                        type="number" 
                        min="0" max="100" 
                        placeholder="Not" 
                        id={`score_${project.id}`}
                        style={{ width: '60px', padding: '0.4rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-dark)', color: 'white', textAlign: 'center', fontWeight: 'bold' }}
                      />
                      <button 
                        className="btn-success"
                        style={{ padding: '0.4rem 1rem', fontSize: '0.9rem', borderRadius: '8px', fontWeight: 'bold' }}
                        onClick={() => {
                          const val = document.getElementById(`score_${project.id}`).value;
                          if (val) handleGrade(project, val);
                        }}
                      >
                        Puanla
                      </button>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div>
                  <span style={{ fontWeight: 'bold', color: 'var(--text-primary)', marginRight: '0.5rem', fontSize: '1.1rem' }}>
                    {project.studentName}
                  </span>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: '600', marginRight: '0.5rem' }}>
                    [{project.title}]
                  </span>
                  <span style={{ color: 'var(--text-primary)', lineHeight: '1.5' }}>
                    {project.description}
                  </span>
                </div>
                
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '1rem', textTransform: 'uppercase', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  {new Date(project.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>

                {/* Comments Section */}
                <div style={{ paddingTop: '1rem' }}>
                  {(project.comments || []).length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1rem' }}>
                      {(project.comments || []).map(comment => (
                        <div key={comment.id} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0, border: '1px solid var(--border-color)' }}>
                            <AvatarDisplay 
                              avatar={(comment.studentName === (playerData.displayName || 'İsimsiz Öğrenci') && !isTeacher) ? (AVATARS.find(a => a.id === playerData.avatarId) || AVATARS[0]) : (AVATARS.find(a => a.id === comment.avatarId) || AVATARS[0])} 
                              customSkin={(comment.studentName === (playerData.displayName || 'İsimsiz Öğrenci') && !isTeacher) ? playerData.customSkin : comment.customSkin}
                              equippedItems={(comment.studentName === (playerData.displayName || 'İsimsiz Öğrenci') && !isTeacher) ? playerData.equippedItems : comment.equippedItems}
                              profileMode={true}
                            />
                          </div>
                          <div style={{ fontSize: '0.9rem', lineHeight: '1.4', flex: 1 }}>
                            <span style={{ fontWeight: 'bold', color: 'var(--text-primary)', marginRight: '0.4rem' }}>{comment.studentName}</span>
                            <span style={{ color: 'var(--text-secondary)' }}>{comment.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Comment Input */}
                  <form onSubmit={(e) => handleCommentSubmit(project, e)} style={{ display: 'flex', gap: '0.5rem' }}>
                    <input 
                      type="text" 
                      placeholder="Yorum ekle..." 
                      value={commentInputs[project.id] || ''}
                      onChange={(e) => setCommentInputs(prev => ({ ...prev, [project.id]: e.target.value }))}
                      style={{ flex: 1, padding: '0.6rem 1rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-dark)', color: 'white', fontSize: '0.9rem' }}
                    />
                    <button 
                      type="submit" 
                      style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', fontWeight: 'bold', cursor: 'pointer', padding: '0 0.5rem', opacity: commentInputs[project.id]?.trim() ? 1 : 0.5 }}
                      disabled={!commentInputs[project.id]?.trim()}
                    >
                      Gönder
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div style={{ width: '100%', textAlign: 'center', color: 'var(--text-secondary)', padding: '5rem 0' }}>
              {isTeacher 
                ? 'Henüz hiçbir öğrenci proje yüklememiş.'
                : 'Henüz hiç proje yüklenmemiş. İlk projeyi sen yükle!'
              }
            </div>
          )}
        </div>
      )}

      {/* Yükleme Modalı */}
      {showUploadModal && (
        <div className="golem-modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="golem-modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <button className="golem-modal-close" onClick={() => setShowUploadModal(false)}><X size={24} /></button>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Upload size={24} /> Projeni Yükle
            </h2>
            
            <form onSubmit={handlePostSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Proje Başlığı</label>
                <input 
                  type="text" 
                  className="cyber-input" 
                  placeholder="Örn: Otomatik Çöp Kutusu" 
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  maxLength={50}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Proje Açıklaması</label>
                <textarea 
                  className="cyber-input" 
                  placeholder="Projen nasıl çalışıyor? Hangi malzemeleri kullandın?" 
                  value={newDesc}
                  onChange={e => setNewDesc(e.target.value)}
                  style={{ minHeight: '100px', resize: 'vertical' }}
                  maxLength={200}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Proje Fotoğrafı (Zorunlu)</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'block', width: '100%', padding: '0.5rem', color: 'var(--text-secondary)' }}
                  required
                />
                {newImage && (
                  <div style={{ marginTop: '1rem', width: '100%', height: '150px', background: '#000', borderRadius: '8px', overflow: 'hidden' }}>
                    <img src={newImage} alt="Önizleme" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>
              
              <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
                Sergiye Gönder
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsView;
