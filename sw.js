
"use strict";

/* =====================================
   CASA-LUMI 💜
   SERVICE WORKER ANDROID PWA
   ===================================== */

const CACHE_NAME = "casa-lumi-v2";
const BASE = "/Casa-Lumi-Prueba-3/";

const ARCHIVOS = [
  BASE,
  BASE + "styles.css",
  BASE + "app.js",
  BASE + "manifest.webmanifest"
];

/* INSTALACIÓN */

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      await Promise.all(
        ARCHIVOS.map(async (archivo) => {
          try {
            const respuesta = await fetch(archivo, {
              cache: "reload"
            });

            if (respuesta.ok) {
              await cache.put(archivo, respuesta);
            }
          } catch (error) {
            console.warn(
              "No se pudo guardar:",
              archivo,
              error
            );
          }
        })
      );

      await self.skipWaiting();
    })()
  );
});

/* ACTIVACIÓN Y LIMPIEZA */

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const nombres = await caches.keys();

      await Promise.all(
        nombres
          .filter((nombre) =>
            nombre.startsWith("casa-lumi-") &&
            nombre !== CACHE_NAME
          )
          .map((nombre) => caches.delete(nombre))
      );

      await self.clients.claim();
    })()
  );
});

/* ACTUALIZACIONES Y MODO SIN CONEXIÓN */

self.addEventListener("fetch", (event) => {
  const solicitud = event.request;

  if (solicitud.method !== "GET") return;

  const url = new URL(solicitud.url);

  if (url.origin !== self.location.origin) return;

  if (!url.pathname.startsWith(BASE)) return;

  event.respondWith(
    (async () => {
      try {
        const respuesta = await fetch(solicitud);

        if (respuesta.ok) {
          const cache = await caches.open(CACHE_NAME);

          await cache.put(
            solicitud,
            respuesta.clone()
          );
        }

        return respuesta;
      } catch (error) {
        const guardado = await caches.match(solicitud);

        if (guardado) {
          return guardado;
        }

        if (solicitud.mode === "navigate") {
          const inicio = await caches.match(BASE);

          if (inicio) {
            return inicio;
          }
        }

        return Response.error();
      }
    })()
  );
});
