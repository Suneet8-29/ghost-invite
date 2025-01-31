import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoWUXxuYJGVH17ItcaE_eXnaWMSQ-6zgA",
  authDomain: "tripimagestore-57c72.firebaseapp.com",
  databaseURL: "https://tripimagestore-57c72.firebaseio.com",
  projectId: "tripimagestore-57c72",
  storageBucket: "tripimagestore-57c72.appspot.com",
  messagingSenderId: "480783548206",
  appId: "1:480783548206:web:b8c7110c52de48519084bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
