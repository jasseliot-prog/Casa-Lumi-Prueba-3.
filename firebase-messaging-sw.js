
/*
 * CASA-LUMI
 * Notificaciones del Buzón Mágico
 * Firebase Cloud Messaging
 */

"use strict";

// Firebase compatible con Service Workers
importScripts(
  "https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js"
);

// Configuración de Casa-Lumi
firebase.initializeApp({
  apiKey: "AIzaSyBIRYJbb7AGUv3cqkQAw-xaJ5DKUxH1BkA",
  authDomain: "casa-lumi-e61dc.firebaseapp.com",
  projectId: "casa-lumi-e61dc",
  storageBucket: "casa-lumi-e61dc.firebasestorage.app",
  messagingSenderId: "1095622759655",
  appId: "1:1095622759655:web:a80ea94270e8876b55be42"
});

// Activar Firebase Messaging
const messaging = firebase.messaging();

// Enlace del buzón
const BUZON_URL =
  "/Casa-Lumi-Prueba-3./buzon/";

// Mostrar notificaciones recibidas
// mientras la aplicación está en segundo plano.
messaging.onBackgroundMessage((payload) => {
  // Evitar duplicar notificaciones que
  // Firebase ya muestra automáticamente.
  if (payload.notification) return;

  const titulo = "💌 Buzón Mágico";

  const opciones = {
    body: "Tienes una nueva carta en Casa-Lumi 💜",
    tag: "casa-lumi-carta",
    data: {
      url: BUZON_URL
    }
  };

  self.registration.showNotification(
    titulo,
    opciones
  );
});

// Abrir el buzón al tocar una notificación.
self.addEventListener(
  "notificationclick",
  (event) => {
    event.notification.close();

    const destino = new URL(
      BUZON_URL,
      self.location.origin
    ).href;

    event.waitUntil(
      clients.matchAll({
        type: "window",
        includeUncontrolled: true
      }).then(async (ventanas) => {
        for (const ventana of ventanas) {
          if (ventana.url.startsWith(destino)) {
            return ventana.focus();
          }
        }

        return clients.openWindow(destino);
      })
    );
  }
);
