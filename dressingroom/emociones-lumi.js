"use strict";

// CASA-LUMI: emociones y vestuario 2D
(() => {
  const emociones = {
    feliz: "¡Qué bonito día!",
    tranquila: "Estoy disfrutando mi día.",
    sorprendida: "¡Oh, qué sorpresa!",
    pensativa: "Mmm... estoy pensando.",
    emocionada: "¡Qué emoción!",
    sonolienta: "Creo que tengo sueño..."
  };

  const ropas = [
    "invierno", "verano", "primavera", "otono",
    "navidad", "ano-nuevo", "san-valentin",
    "fiestas-patrias", "pijama-verano", "pijama-invierno"
  ];

  let ropaActual = "primavera";
  let emocionActual = "tranquila";

  function cambiarRopa(ropa) {
    if (!ropas.includes(ropa)) return;
    ropaActual = ropa;
    actualizar();
  }

  function cambiarEmocion(emocion) {
    if (!emociones[emocion]) return;
    emocionActual = emocion;
    actualizar();
  }

  function actualizar() {
    const personaje = document.getElementById("lumi-personaje-2d");
    if (personaje) {
      personaje.dataset.ropa = ropaActual;
      personaje.dataset.emocion = emocionActual;
    }

    const dialogo = document.getElementById("lumi-dialogo");
    if (dialogo) dialogo.textContent = emociones[emocionActual];

    document.dispatchEvent(new CustomEvent("lumi:cambio", {
      detail: { ropa: ropaActual, emocion: emocionActual }
    }));
  }

  window.CasaLumiEmociones = {
    cambiarRopa,
    cambiarEmocion,
    actualizar,
    obtenerEstado: () => ({
      ropa: ropaActual,
      emocion: emocionActual
    })
  };

  document.addEventListener("DOMContentLoaded", actualizar);
})();
