
"use strict";

/* =====================================
   CASA-LUMI 💜
   SISTEMA DE EMOCIONES AUTOMÁTICAS
   ===================================== */

const EMOCIONES_LUMI = {
  tranquila: {
    imagen: "tranquila.gif",
    mensaje: "Hoy estoy muy tranquila 💜"
  },

  triste: {
    imagen: "triste.gif",
    mensaje: "Hoy estoy un poquito triste 🥺"
  },

  pensativa: {
    imagen: "pensativa.gif",
    mensaje: "Mmm... estoy pensando ✨"
  },

  sorprendida: {
    imagen: "sorprendida.gif",
    mensaje: "¡Oh! ¡Qué sorpresa! 😮"
  },

  enojada: {
    imagen: "enojada.gif",
    mensaje: "¡Hoy estoy un poquito enojada! 😤"
  }
};

// Escoger una emoción al azar
function elegirEmocionLumi() {
  const nombres = Object.keys(EMOCIONES_LUMI);

  const indice = Math.floor(
    Math.random() * nombres.length
  );

  return nombres[indice];
}

// Mantener la emoción durante la visita
const EMOCION_ACTUAL_LUMI = elegirEmocionLumi();

// Mostrar la emoción en pantalla
function mostrarEmocionLumi() {
  const imagen = document.getElementById(
    "lumi-emocion"
  );

  const mensaje = document.getElementById(
    "lumi-mensaje"
  );

  const emocion =
    EMOCIONES_LUMI[EMOCION_ACTUAL_LUMI];

  if (imagen) {
    imagen.src =
      "emociones/" + emocion.imagen;

    imagen.alt =
      "Lumi está " + EMOCION_ACTUAL_LUMI;
  }

  if (mensaje) {
    mensaje.textContent = emocion.mensaje;
  }
}

document.addEventListener(
  "DOMContentLoaded",
  mostrarEmocionLumi
);
