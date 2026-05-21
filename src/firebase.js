import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration using environment variables or placeholders
// Users can configure this directly here or via a .env file (VITE_FIREBASE_*)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
};

// Check if the configuration has been customized by the user
const isPlaceholder = (val) => !val || val.startsWith("YOUR_") || val === "";
const isConfigured = !Object.values(firebaseConfig).some(isPlaceholder);

let db = null;
let app = null;

if (isConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    console.log("⚡ [Firebase] Firebase ve Firestore başarıyla başlatıldı.");
  } catch (error) {
    console.warn("⚠️ [Firebase] Firebase başlatılırken hata oluştu, Yerel Mod aktif:", error);
  }
} else {
  console.log("ℹ️ [Firebase] Firebase yapılandırılmadı (placeholders tespit edildi). Yerel Modda çalışılıyor.");
}

export { db };
export const isFirebaseConfigured = isConfigured && db !== null;

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
