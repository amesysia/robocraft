import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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
let analytics = null;

if (isConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    if (typeof window !== "undefined") {
      analytics = getAnalytics(app);
    }
    console.log("⚡ [Firebase] Firebase, Firestore ve Analytics başarıyla başlatıldı.");
  } catch (error) {
    console.warn("⚠️ [Firebase] Firebase başlatılırken hata oluştu, Yerel Mod aktif:", error);
  }
} else {
  console.log("ℹ️ [Firebase] Firebase yapılandırılmadı. Yerel Modda çalışılıyor.");
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

/**
 * Verilen düz metin şifreyi tarayıcı yerleşik SubtleCrypto API'si ile SHA-256 olarak özetler.
 * @param {string} password Düz metin şifre
 * @returns {Promise<string>} SHA-256 heksadesimal hash
 */
export const hashPassword = async (password) => {
  if (!password) return "";
  const msgBuffer = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
};

