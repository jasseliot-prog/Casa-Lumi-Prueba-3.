
"use strict";

// CASA-LUMI: Vestuario automatico
// Selecciona ropa segun hora, temperatura y celebraciones.

(function () {
  function elegirRopaLumi(temperatura, fecha = new Date()) {
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const hora = fecha.getHours();

    // Celebraciones especiales
    if (mes === 12 && dia === 25) return "navidad";
    if (mes === 12 && dia === 31) return "ano-nuevo";
    if (mes === 1 && dia === 1) return "ano-nuevo";
    if (mes === 2 && dia === 14) return "san-valentin";
    if (mes === 9 && dia === 18) return "fiestas-patrias";

    // Pijamas de noche
    if (hora >= 21 || hora < 7) {
      return temperatura >= 20
        ? "pijama-verano"
        : "pijama-invierno";
    }

    // Ropa diaria segun temperatura
    if (temperatura >= 26) return "verano";
    if (temperatura >= 20) return "primavera";
    if (temperatura >= 13) return "otono";
    return "invierno";
  }

  const expresionesLumi = {
    invierno: "Brrr, que frio! Necesito mi bufanda.",
    verano: "Que lindo dia para disfrutar del sol!",
    primavera: "Hoy quiero lucir mis flores!",
    otono: "Me encantan las hojas de otono!",
    navidad: "Feliz Navidad!",
    "ano-nuevo": "Feliz Ano Nuevo!",
    "san-valentin": "Un dia lleno de amistad!",
    "fiestas-patrias": "Viva Chile!",
    "pijama-verano": "Buenas noches, que descanses!",
    "pijama-invierno": "Mi pijama calentito! A dormir!"
  };

  window.CasaLumiRopa = {
    elegirRopaLumi,
    expresionesLumi
  };
})();
