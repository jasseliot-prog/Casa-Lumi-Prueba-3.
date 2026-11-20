
"use strict";

/* =====================================
   CASA-LUMI 💜
   NAVEGACIÓN PRINCIPAL CORREGIDA
===================================== */

const nombres = {
  inicio: [
    "Inicio",
    "Bienvenida a Casa-Lumi"
  ],
  dormitorio: [
    "Dormitorio",
    "Aquí Lumi descansará y elegirá su ropa."
  ],
  bano: [
    "Baño",
    "Aquí estará su rutina de aseo."
  ],
  cocina: [
    "Cocina",
    "Aquí Lumi preparará sus comidas."
  ],
  calendario: [
    "Calendario",
    "Aquí registraremos eventos con fecha, hora y recordatorios."
  ],
  patio: [
    "Patio jardín",
    "Aquí Lumi cuidará a Lulú y las plantas."
  ],
  sala: [
    "Sala de estar",
    "Aquí Lumi descansará y compartirá su tiempo."
  ],
  lavanderia: [
    "Lavandería",
    "Aquí Lumi lavará y guardará su ropa."
  ],
  musica: [
    "Música y videos",
    "Aquí podrás guardar enlaces de YouTube y Spotify."
  ]
};

/* =====================================
   ABRIR CALENDARIO MÁGICO
===================================== */

function abrirCalendarioLumi() {
  window.location.href = "calendario/index.html";
}

/* =====================================
   NAVEGACIÓN ENTRE HABITACIONES
===================================== */

function navegar(destino) {

  // Calendario tiene su propia página.
  if (destino === "calendario") {
    abrirCalendarioLumi();
    return;
  }

  const info = nombres[destino];

  if (!info) return;

  const inicio = document.getElementById("inicio");
  const habitacion = document.getElementById("habitacion");

  if (inicio) {
    inicio.classList.toggle(
      "visible",
      destino === "inicio"
    );
  }

  if (habitacion) {
    habitacion.classList.toggle(
      "visible",
      destino !== "inicio"
    );
  }

  document.querySelectorAll("[data-seccion]")
    .forEach(boton => {

      boton.classList.toggle(
        "activo",
        boton.dataset.seccion === destino
      );

    });

  if (destino !== "inicio") {

    const titulo = document.getElementById(
      "titulo-habitacion"
    );

    const detalle = document.getElementById(
      "detalle-habitacion"
    );

    if (titulo) {
      titulo.textContent = info[0];
    }

    if (detalle) {
      detalle.textContent = info[1];
    }

  }

  history.replaceState(
    null,
    "",
    "#" + destino
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

/* =====================================
   BOTONES DEL MENÚ
===================================== */

document.querySelectorAll(
  "[data-seccion], [data-ir]"
).forEach(boton => {

  boton.addEventListener("click", () => {

    const destino =
      boton.dataset.seccion ||
      boton.dataset.ir;

    navegar(destino);

  });

});

/* =====================================
   CAMBIO DE ILUMINACIÓN
===================================== */

const botonLuz = document.getElementById("luz");

if (botonLuz) {

  botonLuz.addEventListener("click", () => {

    document.body.classList.toggle("claro");

  });

}

/* =====================================
   SALUDO DE LUMI
===================================== */

const lumi = document.getElementById("lumi");

if (lumi) {

  lumi.addEventListener("click", () => {

    lumi.classList.remove("saludando");

    void lumi.offsetWidth;

    lumi.classList.add("saludando");

    const saludo = document.getElementById("saludo");

    if (saludo) {
      saludo.textContent =
        "¡Holaaa! Bienvenida a Casa-Lumi 💜";
    }

  });

}

/* =====================================
   INICIAR CASA-LUMI
===================================== */

const seccionInicial = location.hash.slice(1);

if (seccionInicial === "calendario") {

  abrirCalendarioLumi();

} else {

  navegar(
    nombres[seccionInicial]
      ? seccionInicial
      : "inicio"
  );

}
