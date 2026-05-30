import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import LiveClassroomView from './components/LiveClassroomView';
import CommunityView from './components/CommunityView';
import PlaceholderView from './components/PlaceholderView';
import ProfileView from './components/ProfileView';
import CoursesView from './components/CoursesView';
import AdventureMap from './components/AdventureMap';
import ShowcaseView from './components/ShowcaseView';
import VideoPlayerView from './components/VideoPlayerView';
import { Zap } from 'lucide-react';
import { loadUserData, saveUserData, isFirebaseConfigured, auth, onAuthStateChanged, signOut } from './firebase';
import LoginView from './components/LoginView';
import IceBreakerView from './components/IceBreakerView';

// Başlangıç oyuncu verisi
const INITIAL_PLAYER_DATA = {
  xp: 0,
  level: 0,
  displayName: '',
  avatarId: 'steve',
  inventory: [],       // sahip olunan eşya id'leri
  equippedItems: {},   // { head: 'iron_helmet', body: null, hand: null, feet: null }
  golemEquipment: { m1: {}, m2: {}, m3: {} }, // Golem'lerin giydikleri
  golemVariations: { m1: 'golem_m1', m2: 'golem_m2', m3: 'golem_m3', m4: 'golem_m4' },
  resources: { coal: 0, copper: 0, gold: 0, iron: 0 }, // Maden haritası kaynakları
  unlockedGolems: [], // 'coal', 'copper', 'gold', 'iron'
  energy: 0, // Kazma hakkı
  showcasePositions: { // Vitrin için pozisyonlar
    player: { x: 50, y: 50 },
    m1: { x: 20, y: 50 },
    m2: { x: 80, y: 50 },
    m3: { x: 50, y: 80 }
  },
  tasks: [
    { id: 'week1', title: "1. Hafta: Arduino'ya Giriş", xp: 150, done: false, unlocked: true, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week2', title: '2. Hafta: LED Yakıp Söndürme (Dijital Çıkış)', xp: 200, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week3', title: '3. Hafta: LDR ile Karanlıkta Yanan Lamba', xp: 150, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week4', title: '4. Hafta: Değişkenler', xp: 250, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week5', title: '5. Hafta: Akıllı Şehir Trafiği', xp: 200, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week6', title: '6. Hafta: Potansiyometre (Analog Giriş)', xp: 300, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week7', title: '7. Hafta: Sonsuz Döngüler: For Döngüsü', xp: 300, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week8', title: '8. Hafta: Buzzer ile Müzik Çalmak', xp: 250, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week9', title: '9. Hafta: Servo Motor Kontrolü', xp: 350, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week10', title: '10. Hafta: Ultrasonik Sensör ile Mesafe Ölçümü', xp: 300, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week11', title: '11. Hafta: Park Sensörü', xp: 400, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week12', title: '12. Hafta: Akıllı Sokak Lambası', xp: 500, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week13', title: '13. Hafta: While Döngüsü ve Sensör', xp: 1000, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
    { id: 'week14', title: '14. Hafta: Proje Sunumlarınız ve Büyük Kapanış', xp: 1000, done: false, unlocked: false, targetTab: 'courses', progress: 0, requiredProgress: 100 },
  ]
};

const App = () => {
  const [currentUser, setCurrentUser] = useState(null); // Firebase Auth user UID
  const [currentUserObj, setCurrentUserObj] = useState(null); // Full Firebase user object
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [playerData, setPlayerData] = useState(INITIAL_PLAYER_DATA);
  const [energyToast, setEnergyToast] = useState(null);
  const [activeVideoWeek, setActiveVideoWeek] = useState('week1');
  const [loadingData, setLoadingData] = useState(true); // Auth state is loading initially
  const [syncStatus, setSyncStatus] = useState(isFirebaseConfigured ? 'synced' : 'local');

  // Firebase Auth state listener — runs once on mount
  useEffect(() => {
    if (!auth) {
      // Offline/local mode: no auth
      setLoadingData(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setCurrentUser(firebaseUser.uid);
        setCurrentUserObj(firebaseUser);
        // Load player data
        setLoadingData(true);
        try {
          const data = await loadUserData(firebaseUser.uid);
          if (data) {
            // Sync tasks with latest INITIAL_PLAYER_DATA
            if (data.tasks) {
              const initialIds = INITIAL_PLAYER_DATA.tasks.map(t => t.id);
              let cleanedTasks = data.tasks.filter(t => initialIds.includes(t.id));
              const week1Index = cleanedTasks.findIndex(t => t.id === 'week1');
              if (week1Index !== -1 && !cleanedTasks[week1Index].unlocked) {
                cleanedTasks[week1Index].unlocked = true;
              }
              // Her zaman güncel başlıkları INITIAL_PLAYER_DATA'dan al
              cleanedTasks = cleanedTasks.map(task => {
                const initTask = INITIAL_PLAYER_DATA.tasks.find(t => t.id === task.id);
                return initTask ? { ...task, title: initTask.title } : task;
              });
              const cleanedTaskIds = cleanedTasks.map(t => t.id);
              const hasMissing = INITIAL_PLAYER_DATA.tasks.some(t => !cleanedTaskIds.includes(t.id));
              if (hasMissing) {
                cleanedTasks = INITIAL_PLAYER_DATA.tasks.map(initTask => {
                  const existing = cleanedTasks.find(t => t.id === initTask.id);
                  return existing ? { ...existing, title: initTask.title } : initTask;
                });
              }
              data.tasks = cleanedTasks;
            }
            // Merge displayName from Auth profile if not already stored
            if (!data.displayName && firebaseUser.displayName) {
              data.displayName = firebaseUser.displayName;
            }
            setPlayerData(data);
          } else if (isFirebaseConfigured) {
            // New user — save initial data
            const initData = {
              ...INITIAL_PLAYER_DATA,
              displayName: firebaseUser.displayName || '',
            };
            await saveUserData(firebaseUser.uid, initData);
            setPlayerData(initData);
          }
        } catch (error) {
          console.error('Uygulama yüklenirken Firebase hatası:', error);
          setSyncStatus('error');
        } finally {
          setLoadingData(false);
        }
      } else {
        // Signed out
        setCurrentUser(null);
        setCurrentUserObj(null);
        setPlayerData(INITIAL_PLAYER_DATA);
        setLoadingData(false);
      }
    });
    return () => unsubscribe();
  }, []);




  // Değişiklikleri otomatik kaydetme (Auto-save with Debounce)
  useEffect(() => {
    if (loadingData || !currentUser) return;

    if (!isFirebaseConfigured) {
      // Bulut bağlantısı yoksa sadece localStorage'a yedek alalım
      saveUserData(currentUser, playerData).catch(() => { });
      setSyncStatus('local');
      return;
    }

    setSyncStatus('saving');
    const timer = setTimeout(async () => {
      try {
        await saveUserData(currentUser, playerData);
        setSyncStatus('synced');
      } catch (error) {
        console.error("Firestore kaydetme hatası:", error);
        setSyncStatus('error');
      }
    }, 1500); // 1.5 saniye debounce gecikmesi

    return () => clearTimeout(timer);
  }, [playerData, loadingData, currentUser]);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleLoginSuccess = (uid, data) => {
    // Firebase Auth handles session persistence; just update state
    setPlayerData(data);
    setCurrentUser(uid);
  };

  const handleLogout = async () => {
    if (auth) {
      try {
        await signOut(auth);
      } catch (err) {
        console.error('Sign-out error:', err);
      }
    }
    setCurrentUser(null);
    setCurrentUserObj(null);
    setPlayerData(INITIAL_PLAYER_DATA);
    setActiveTab('dashboard');
  };

  // Görev ilerlemesini güncelleme fonksiyonu
  const updateTaskProgress = (taskId, progressAmount, metadata = {}) => {
    setPlayerData(prev => {
      const newTasks = prev.tasks.map(task => {
        if (task.id === taskId && !task.done) {
          const newProgress = Math.min(task.progress + progressAmount, task.requiredProgress);
          const isDone = newProgress >= task.requiredProgress;
          return { ...task, progress: newProgress, done: isDone, newlyDone: isDone, ...metadata };
        }
        return task;
      });

      // Biten görev var mı kontrol et ve XP ekle, sonraki haftayı aç
      const completedTaskIndex = newTasks.findIndex(t => t.id === taskId && t.newlyDone);

      let newXP = prev.xp;
      let newLevel = prev.level;
      let newEnergy = prev.energy || 0;

      if (completedTaskIndex !== -1) {
        const completedTask = newTasks[completedTaskIndex];
        newXP += completedTask.xp;
        newLevel = Math.floor(newXP / 500);
        newEnergy += 50;
        completedTask.newlyDone = false;

        // Enerji Toast animasyonu
        setEnergyToast('⚡ +50 Kazma Hakkı Kazanıldı!');
        setTimeout(() => setEnergyToast(null), 3000);

        // Sonraki haftanın kilidini aç
        if (completedTaskIndex + 1 < newTasks.length) {
          newTasks[completedTaskIndex + 1].unlocked = true;
        }
      }

      return { ...prev, xp: newXP, level: newLevel, energy: newEnergy, tasks: newTasks };
    });
  };

  // Enerji harcama fonksiyonu (Maden kazarken)
  const useEnergy = (amount = 1) => {
    let success = false;
    setPlayerData(prev => {
      if ((prev.energy || 0) >= amount) {
        success = true;
        return { ...prev, energy: prev.energy - amount };
      }
      return prev;
    });
    return success;
  };

  // Vitrin (Showcase) pozisyon güncelleme
  const updateShowcasePosition = (entityId, x, y) => {
    setPlayerData(prev => ({
      ...prev,
      showcasePositions: {
        ...prev.showcasePositions,
        [entityId]: { x, y }
      }
    }));
  };

  // Haritadan kaynak toplama fonksiyonu
  const collectResource = (resourceType, amount) => {
    setPlayerData(prev => ({
      ...prev,
      resources: {
        ...prev.resources,
        [resourceType]: (prev.resources[resourceType] || 0) + amount
      }
    }));
  };

  // Yeni golem kilit açma
  const unlockGolem = (resourceType) => {
    setPlayerData(prev => {
      if (prev.unlockedGolems.includes(resourceType)) return prev;
      return { ...prev, unlockedGolems: [...prev.unlockedGolems, resourceType] };
    });
  };

  // Madenlerle Golem Eşyası Satın Alma
  const buyGolemItem = (itemId, priceObj) => {
    let success = false;
    setPlayerData(prev => {
      if (prev.inventory.includes(itemId)) return prev; // Zaten sahip

      const res = prev.resources;
      // Yeterli maden var mı kontrol et
      for (const [resType, cost] of Object.entries(priceObj)) {
        if ((res[resType] || 0) < cost) return prev; // Yetersiz
      }

      success = true;
      const newResources = { ...res };
      for (const [resType, cost] of Object.entries(priceObj)) {
        newResources[resType] -= cost;
      }

      return {
        ...prev,
        resources: newResources,
        inventory: [...prev.inventory, itemId]
      };
    });
    return success;
  };

  // Golem Giydirme Fonksiyonu
  const handleGolemEquip = (golemId, item) => {
    setPlayerData(prev => {
      // Eğer item zaten aynı slota takılıysa çıkar (Unequip mantığı)
      const currentGolemEquips = prev.golemEquipment[golemId] || {};
      const newGolemEquips = { ...currentGolemEquips };

      if (newGolemEquips[item.slot] === item.id) {
        delete newGolemEquips[item.slot];
      } else {
        newGolemEquips[item.slot] = item.id;
      }

      return {
        ...prev,
        golemEquipment: {
          ...prev.golemEquipment,
          [golemId]: newGolemEquips
        }
      };
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView isDarkMode={isDarkMode} toggleTheme={toggleTheme} playerData={playerData} updateShowcasePosition={updateShowcasePosition} setActiveTab={setActiveTab} />;
      case 'icebreaker': return <IceBreakerView setActiveTab={setActiveTab} playerData={playerData} currentUser={currentUser} />;
      case 'live': return <LiveClassroomView />;
      case 'courses': return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <CoursesView
            tasks={playerData.tasks}
            updateTaskProgress={updateTaskProgress}
            setActiveTab={setActiveTab}
            setActiveVideoWeek={setActiveVideoWeek}
          />
          {energyToast && (
            <div className="energy-toast" style={{
              position: 'absolute', bottom: '2rem', right: '2rem',
              backgroundColor: 'var(--accent-cyan)', color: '#000',
              padding: '1rem 1.5rem', borderRadius: '8px',
              fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              animation: 'slideUp 0.5s ease-out'
            }}>
              {energyToast}
            </div>
          )}
        </div>
      );
      case 'video-player': return (
        <VideoPlayerView
          tasks={playerData.tasks}
          activeVideoWeek={activeVideoWeek}
          setActiveVideoWeek={setActiveVideoWeek}
          setActiveTab={setActiveTab}
          updateTaskProgress={updateTaskProgress}
        />
      );
      case 'adventure': return <AdventureMap tasks={playerData.tasks} playerData={playerData} collectResource={collectResource} useEnergy={useEnergy} unlockGolem={unlockGolem} />;
      case 'community': return <CommunityView isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
      case 'profile': return <ProfileView playerData={playerData} setPlayerData={setPlayerData} setActiveTab={setActiveTab} buyGolemItem={buyGolemItem} handleGolemEquip={handleGolemEquip} />;
      case 'showcase': return <ShowcaseView playerData={playerData} />;
      default: return <DashboardView isDarkMode={isDarkMode} toggleTheme={toggleTheme} playerData={playerData} updateShowcasePosition={updateShowcasePosition} setActiveTab={setActiveTab} />;
    }
  };

  if (!currentUser) {
    return (
      <LoginView
        onLoginSuccess={handleLoginSuccess}
        INITIAL_PLAYER_DATA={INITIAL_PLAYER_DATA}
      />
    );
  }

  if (loadingData) {
    return (
      <div className="firebase-loading-overlay">
        <div className="loading-card">
          <div className="pulse-circle">
            <Zap className="loading-zap" size={48} />
          </div>
          <h2 style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>ROBOCRAFT</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Sanal Ağa Bağlanılıyor...</p>
          <div className="loading-bar">
            <div className="loading-bar-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        playerData={playerData}
        syncStatus={syncStatus}
        onLogout={handleLogout}
      />

      {/* MAIN CONTENT */}
      <main className="main-content" style={{ padding: activeTab === 'live' ? '1.5rem' : activeTab === 'video-player' ? '0' : '2.5rem 3rem' }}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
