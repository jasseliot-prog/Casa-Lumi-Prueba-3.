
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

// Configuración oficial de Casa-Lumi
const firebaseConfig = {
  apiKey: "AIzaSyBIRYJbb7AGUv3cqkQAw-xaJ5DKUxH1BkA",
  authDomain: "casa-lumi-e61dc.firebaseapp.com",
  projectId: "casa-lumi-e61dc",
  storageBucket: "casa-lumi-e61dc.firebasestorage.app",
  messagingSenderId: "1095622759655",
  appId: "1:1095622759655:web:a80ea94270e8876b55be42"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar autenticación
const auth = getAuth(app);

// Exportar para otros archivos de Casa-Lumi
export { app, auth };
