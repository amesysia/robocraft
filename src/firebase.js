import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

// Firebase configuration using environment variables or your real credentials
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBOKhMuNNI0iH54V7XhUnBiFLbMsWl38nw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "aue-lms.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "aue-lms",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "aue-lms.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "785225731833",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:785225731833:web:32e1f8d806797409dc9c28",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-JVXJZ1SYTS"
};

// Check if the configuration has been customized
const isPlaceholder = (val) => !val || val.startsWith("YOUR_") || val === "";
const isConfigured = !Object.values(firebaseConfig).some(isPlaceholder);

let db = null;
let app = null;
let auth = null;
let analytics = null;

if (isConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    auth = getAuth(app);
    if (typeof window !== "undefined") {
      analytics = getAnalytics(app);
    }
    console.log("⚡ [Firebase] Firebase, Firestore, Auth ve Analytics başarıyla başlatıldı.");
  } catch (error) {
    console.warn("⚠️ [Firebase] Firebase başlatılırken hata oluştu, Yerel Mod aktif:", error);
  }
} else {
  console.log("ℹ️ [Firebase] Firebase yapılandırılmadı. Yerel Modda çalışılıyor.");
}


export { db, auth };
export const isFirebaseConfigured = isConfigured && db !== null;
export const isAuthConfigured = isConfigured && auth !== null;

// Re-export Firebase Auth functions
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
};

/**
 * Firebase Auth hata kodlarını Türkçe mesajlara çevirir.
 */
export const getAuthErrorMessage = (code) => {
  const messages = {
    "auth/email-already-in-use": "Bu e-posta adresi zaten kullanımda. Giriş yapmayı deneyin.",
    "auth/invalid-email": "Geçersiz e-posta adresi. Lütfen kontrol edin.",
    "auth/weak-password": "Şifre çok zayıf. En az 6 karakter kullanın.",
    "auth/user-not-found": "Bu e-posta ile kayıtlı bir hesap bulunamadı.",
    "auth/wrong-password": "Hatalı şifre. Lütfen tekrar deneyin.",
    "auth/invalid-credential": "E-posta veya şifre hatalı. Lütfen kontrol edin.",
    "auth/too-many-requests": "Çok fazla başarısız deneme. Lütfen bir süre bekleyin.",
    "auth/network-request-failed": "Bağlantı hatası. İnternet bağlantınızı kontrol edin.",
    "auth/operation-not-allowed": "Bu giriş yöntemi etkin değil. Yöneticinize başvurun.",
    "auth/requires-recent-login": "Bu işlem için yeniden giriş yapmanız gerekiyor.",
  };
  return messages[code] || "Bir hata oluştu. Lütfen tekrar deneyin.";
};

/**
 * Firestore veya localStorage'dan kullanıcı verisini yükler.
 * @param {string} userId Kullanıcı ID'si
 * @returns {Promise<object|null>} Kullanıcı veri nesnesi veya null
 */
export const loadUserData = async (userId) => {
  if (isFirebaseConfigured) {
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        // Yerel önbelleğe de yazalım
        localStorage.setItem(`playerData_${userId}`, JSON.stringify(data));
        return data;
      }
    } catch (error) {
      console.error("❌ [Firebase] Firestore'dan veri yüklenirken hata oluştu. Yerel yedek kullanılıyor:", error);
    }
  }

  // Yerel depolamadan yükle
  const localData = localStorage.getItem(`playerData_${userId}`);
  if (localData) {
    try {
      return JSON.parse(localData);
    } catch (e) {
      console.error("❌ [LocalData] Yerel veri parse hatası:", e);
      return null;
    }
  }
  return null;
};

/**
 * Kullanıcı verisini hem localStorage'a hem de (varsa) Firestore'a kaydeder.
 * @param {string} userId Kullanıcı ID'si
 * @param {object} data Kaydedilecek kullanıcı veri nesnesi
 * @returns {Promise<boolean>} İşlemin bulut tarafında başarılı olup olmadığı
 */
export const saveUserData = async (userId, data) => {
  // Her zaman yerel depolamaya yedek al
  localStorage.setItem(`playerData_${userId}`, JSON.stringify(data));

  if (isFirebaseConfigured) {
    try {
      const docRef = doc(db, "users", userId);
      await setDoc(docRef, data, { merge: true });
      return true;
    } catch (error) {
      console.error("❌ [Firebase] Firestore veri kaydetme hatası:", error);
      throw error; // App.jsx tarafında yakalanıp durum gösterilebilsin diye fırlatıyoruz
    }
  }
  return false; // Yerel modda kaydedildi
};

/**
 * Firestore'dan tüm öğrencileri (role !== 'teacher') çeker.
 * @returns {Promise<Array>} Öğrenci verilerinin dizisi
 */
export const getAllStudents = async () => {
  if (!isFirebaseConfigured) {
    // Local modda tüm playerData_* öğelerini bul
    const students = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('playerData_')) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          if (!data.role || data.role === 'student') {
            students.push({ id: key.replace('playerData_', ''), ...data });
          }
        } catch (e) {
          console.error("Local veri okunurken hata", e);
        }
      }
    }
    return students;
  }

  try {
    const usersCol = collection(db, "users");
    const snapshot = await getDocs(usersCol);
    const students = [];
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      if (!data.role || data.role === 'student') {
        students.push({ id: docSnap.id, ...data });
      }
    });
    return students;
  } catch (error) {
    console.error("❌ [Firebase] Öğrenciler çekilirken hata oluştu:", error);
    return [];
  }
};

/**
 * Projeleri (Project Exhibition) getirir.
 */
export const getAllProjects = async () => {
  const mockProjects = [
    {
      id: 'mock_proj_1',
      studentId: 'student_123',
      studentName: 'Ahmet Yılmaz',
      avatarId: 'steve',
      title: 'Akıllı Çöp Kutusu',
      description: 'Ultrasonik sensör ve servo motor kullanarak kapağı otomatik açılan çöp kutusu projem.',
      imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      score: null,
      likes: 12,
      comments: [
        {
          id: 'mock_comment_1',
          studentId: 'teacher',
          studentName: 'Öğretmen',
          avatarId: 'villager',
          text: 'Harika bir proje olmuş, tebrikler!',
          createdAt: Date.now() - 40000000
        }
      ],
      createdAt: Date.now() - 86400000
    },
    {
      id: 'mock_proj_2',
      studentId: 'student_456',
      studentName: 'Ayşe Kaya',
      avatarId: 'alex',
      title: 'Işığa Duyarlı Lamba',
      description: 'LDR sensörü sayesinde karanlıkta otomatik yanan led lamba.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      score: 95,
      likes: 24,
      comments: [],
      createdAt: Date.now() - 172800000
    }
  ];

  if (!isFirebaseConfigured) {
    let result = [...mockProjects];
    const local = localStorage.getItem('robo_projects');
    if (local) {
      try {
        const parsed = JSON.parse(local);
        if (parsed && parsed.length > 0) {
          const mockIds = mockProjects.map(m => m.id);
          const newProjects = parsed.filter(p => !mockIds.includes(p.id));
          const updatedMocks = mockProjects.map(m => {
            const found = parsed.find(p => p.id === m.id);
            return found || m;
          });
          result = [...newProjects, ...updatedMocks];
          result.sort((a,b) => b.createdAt - a.createdAt);
        }
      } catch (e) {
        console.error("Local projeler okunamadı", e);
      }
    }
    return result;
  }

  try {
    const projCol = collection(db, "projects");
    const snapshot = await getDocs(projCol);
    const projs = [];
    snapshot.forEach(docSnap => {
      projs.push({ id: docSnap.id, ...docSnap.data() });
    });
    
    if (projs.length === 0) {
      return mockProjects;
    }
    return projs;
  } catch (error) {
    console.error("Projeler çekilirken hata:", error);
    return mockProjects;
  }
};

/**
 * Yeni veya güncellenmiş projeyi kaydeder.
 */
export const saveProject = async (project) => {
  if (!isFirebaseConfigured) {
    let projs = await getAllProjects(); // This already merges local and mocks perfectly
    
    const existingIndex = projs.findIndex(p => p.id === project.id);
    if (existingIndex >= 0) {
      projs[existingIndex] = project;
    } else {
      projs.unshift(project);
    }
    localStorage.setItem('robo_projects', JSON.stringify(projs));
    return true;
  }

  try {
    const docRef = doc(db, "projects", project.id);
    await setDoc(docRef, project, { merge: true });
    return true;
  } catch (error) {
    console.error("Proje kaydetme hatası:", error);
    throw error;
  }
};

