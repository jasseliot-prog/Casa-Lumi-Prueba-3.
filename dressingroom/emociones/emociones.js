<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#160b25">
<title>Mi Clóset Mágico | Casa-Lumi</title>

<style>
*{box-sizing:border-box}

body{
 margin:0;
 min-height:100vh;
 background:radial-gradient(circle at top,#38204e,#160b25 75%);
 color:#f5efff;
 font-family:Arial,sans-serif;
 text-align:center;
}

main{
 max-width:650px;
 margin:auto;
 padding:24px 14px 50px;
}

h1{color:#d4b2ff;font-size:30px}
h2{font-size:24px}
p{line-height:1.6}

.escenario,.panel{
 background:#29183d;
 border:2px solid #76529b;
 border-radius:26px;
 padding:22px 12px;
 margin:22px 0;
}

.escenario{
 box-shadow:0 0 24px #a77cdb44;
}

.casilleros{
 display:grid;
 grid-template-columns:repeat(2,minmax(0,1fr));
 gap:12px;
 align-items:stretch;
}

.casillero{
 min-width:0;
 background:#21132f;
 border:2px solid #76529b;
 border-radius:20px;
 padding:12px 8px;
}

.casillero h3{
 color:#e9caff;
 font-size:16px;
 margin:4px 0 12px;
}

.personaje{
 display:block;
 width:100%;
 max-height:340px;
 height:auto;
 object-fit:contain;
 margin:0 auto;
 filter:drop-shadow(0 0 18px #b17eff55);
 animation:respirar 3s ease-in-out infinite;
}

.personaje[hidden]{display:none}

@keyframes respirar{
 0%,100%{transform:translateY(0)}
 50%{transform:translateY(-5px)}
}

button,.volver{
 display:inline-block;
 margin:5px;
 padding:12px 15px;
 border:2px solid #c38aff;
 border-radius:16px;
 background:linear-gradient(145deg,#77449d,#48235e);
 color:white;
 font-weight:bold;
 font-size:15px;
 cursor:pointer;
 text-decoration:none;
}

button.activo{
 background:#b78ae7;
 color:#160b25;
 border-color:white;
}

.botones{
 display:flex;
 flex-wrap:wrap;
 justify-content:center;
 gap:6px;
}

#frase,#estado-clima,#emocion-actual{
 color:#e9caff;
}

.aviso{
 color:#e9caff;
 font-size:13px;
 overflow-wrap:anywhere;
}

#temperatura{
 width:min(100%,350px);
 accent-color:#b783f5;
}

.nota{
 color:#cbb4df;
 font-size:13px;
}

/* DIÁLOGOS DE LUMI */

.dialogo-lumi{
 margin:14px 2px 5px;
 padding:12px 9px;
 min-height:75px;
 display:flex;
 align-items:center;
 justify-content:center;
 background:linear-gradient(145deg,#49265f,#342044);
 border:1px solid #b783f5;
 border-radius:17px;
 color:#f5dfff;
 font-size:13px;
 font-weight:600;
 line-height:1.5;
 text-align:center;
 overflow-wrap:anywhere;
 box-shadow:0 0 12px #a77cdb33;
}

.dialogo-lumi.animar{
 animation:aparecerDialogo .4s ease;
}

@keyframes aparecerDialogo{
 from{
  opacity:0;
  transform:translateY(6px);
 }
 to{
  opacity:1;
  transform:translateY(0);
 }
}

@media(max-width:360px){
 .casilleros{gap:6px}
 .casillero{padding:10px 5px}
 .casillero h3{font-size:14px}
 .dialogo-lumi{font-size:12px;padding:9px 5px}
}

@media(prefers-reduced-motion:reduce){
 .personaje,.dialogo-lumi.animar{
  animation:none;
 }
}
</style>
</head>

<body>
<main>

<a class="volver" href="../index.html">
 ☾ Volver a Casa-Lumi
</a>

<h1>👗 Mi Clóset Mágico</h1>

<p>
 Mi ropa cambia con el clima,
 la hora y las celebraciones.
</p>

<section class="escenario">

 <div class="casilleros">

  <!-- PRIMER CASILLERO: VESTUARIO -->

  <div class="casillero">
   <h3>👗 Mi vestuario</h3>

   <img
    id="lumi-imagen"
    class="personaje"
    alt="Traje original de Lumi"
    hidden
   >

   <p
    id="aviso-imagen"
    class="aviso"
    role="status"
   ></p>
  </div>

  <!-- SEGUNDO CASILLERO: EMOCIONES -->

  <div class="casillero">
   <h3>💜 Mi emoción</h3>

   <img
    id="lumi-emocion"
    class="personaje"
    alt="Emoción animada de Lumi"
    hidden
   >

   <p
    id="aviso-emocion"
    class="aviso"
    role="status"
   ></p>

   <div
    id="dialogo-lumi"
    class="dialogo-lumi"
    aria-live="polite"
   >
    ✨ Estoy disfrutando mi día.
   </div>
  </div>

 </div>

 <h2 id="conjunto">
  Preparando vestuario...
 </h2>

 <p id="frase"></p>

 <p
  id="emocion-actual"
  aria-live="polite"
 ></p>

</section>

<!-- EMOCIONES -->

<section class="panel">
 <h2>💜 Mis emociones</h2>

 <div
  id="opciones-emociones"
  class="botones"
 ></div>

 <p class="nota">
  Lumi elige sus emociones sola.
  Si eliges una, la respeta durante 10 minutos.
 </p>
</section>

<!-- VESTUARIO -->

<section class="panel">
 <h2>👗 Mis conjuntos</h2>

 <div
  id="opciones"
  class="botones"
 ></div>
</section>

<!-- CLIMA -->

<section class="panel">
 <h2>🌤️ Vestuario automático</h2>

 <p>
  <label for="temperatura">
   Temperatura de prueba:
  </label>

  <span id="temperatura-valor">20</span> °C
 </p>

 <input
  id="temperatura"
  type="range"
  min="0"
  max="40"
  value="20"
 >

 <p>
  <button
   id="automatico"
   type="button"
  >
   ✨ Vestuario automático
  </button>
 </p>

 <p
  id="estado-clima"
  role="status"
 ></p>
</section>

<p class="nota">
 ✦ Casa-Lumi · Mi pequeño mundo digital ✦
</p>

</main>

<script>
"use strict";

document.addEventListener("DOMContentLoaded",()=>{

 // ==================================
 // CONJUNTOS
 // ==================================

 const nombres={
  invierno:"❄️ Invierno",
  verano:"☀️ Verano",
  primavera:"🌸 Primavera",
  otono:"🍂 Otoño",
  navidad:"🎄 Navidad",
  "ano-nuevo":"✨ Año Nuevo",
  "san-valentin":"💕 San Valentín",
  "fiestas-patrias":"🇨🇱 Fiestas Patrias",
  "pijama-verano":"🌙 Pijama verano",
  "pijama-invierno":"⭐ Pijama invierno"
 };

 // ==================================
 // EMOCIONES
 // ==================================

 const emociones={
  feliz:"😊 Feliz",
  triste:"😢 Triste",
  enojada:"😠 Enojada",
  sorprendida:"😮 Sorprendida",
  tranquila:"😌 Tranquila",
  somnolienta:"😴 Con sueño",
  emocionada:"🤩 Emocionada"
 };

 // ==================================
 // FRASES ORIGINALES
 // ==================================

 const frases={
  feliz:"¡Qué bonito día!",
  triste:"Hoy estoy un poquito triste.",
  enojada:"¡Grrr! Necesito un momento.",
  sorprendida:"¡Oh! ¡Qué sorpresa!",
  tranquila:"Estoy disfrutando mi día.",
  somnolienta:"Creo que tengo sueño...",
  emocionada:"¡Qué emoción!"
 };

 // ==================================
 // DIÁLOGOS
 // ==================================

 const dialogosLumi={

  feliz:[
   "¡Hoy tengo muchas ganas de hacer cosas bonitas!",
   "¡Qué alegría! Hoy será un día especial.",
   "¡Me encanta estar así de contenta!"
  ],

  triste:[
   "Hoy necesito un poquito de tranquilidad.",
   "A veces también tengo días tristes.",
   "Voy a darme tiempo para sentirme mejor."
  ],

  enojada:[
   "¡Grrr! Voy a tomarme un momento.",
   "Necesito un poquito de espacio.",
   "¡Estoy molesta! Mejor me tranquilizo."
  ],

  sorprendida:[
   "¡Wow! ¡Eso no me lo esperaba!",
   "¡Ohhh! ¡Qué sorpresa tan grande!",
   "¡No puedo creer lo que acaba de pasar!"
  ],

  tranquila:[
   "Qué agradable es disfrutar de un momento de paz.",
   "Estoy disfrutando de mi tranquilidad.",
   "Hoy quiero hacer todo con calma."
  ],

  somnolienta:[
   "Creo que necesito una siestita...",
   "Mis ojitos ya quieren descansar.",
   "Cinco minutitos más, por favor..."
  ],

  emocionada:[
   "¡Tengo tantas cosas que quiero hacer!",
   "¡No puedo contener mi emoción!",
   "¡Esto será una aventura maravillosa!"
  ]

 };

 // PENSATIVA RESERVADA
 // Se activará cuando tengamos su GIF.

 const emocionPendiente={
  pensativa:{
   imagen:"pensativa.gif",
   mensaje:"Mmm... estoy pensando ✨"
  }
 };

 // ==================================
 // ARCHIVOS GIF DE VERANO
 // ==================================

 const archivosVerano={
  feliz:"feliz.gif",
  triste:"verano-triste.gif",
  enojada:"verano-enojada.gif",
  sorprendida:"verano-sorprendida.gif",
  tranquila:"verano-tranquila.gif",
  somnolienta:"verano-sonolienta.gif",
  emocionada:"emocionada.gif"
 };

 // ==================================
 // ELEMENTOS
 // ==================================

 const $=id=>document.getElementById(id);

 const imagen=$("lumi-imagen");
 const imagenEmocion=$("lumi-emocion");

 const avisoImagen=$("aviso-imagen");
 const avisoEmocion=$("aviso-emocion");

 const conjunto=$("conjunto");
 const frase=$("frase");
 const emocionTexto=$("emocion-actual");

 const estadoClima=$("estado-clima");
 const temperatura=$("temperatura");
 const temperaturaValor=$("temperatura-valor");

 // ==================================
 // ESTADO
 // ==================================

 let ropaActual="verano";
 let emocionActual="tranquila";

 let solicitudImagen=0;
 let solicitudEmocion=0;
 let solicitudClima=0;

 let modoAutomatico=false;
 let temperaturaActual=20;

 let pausaEmocionalHasta=0;
 let temporizadorEmociones=null;

 const rutaOriginales="originales/";
 const rutaEmociones="emociones/";

 // ==================================
 // IMÁGENES ORIGINALES
 // ==================================

 function rutasOriginales(){

  return [
   "jpg",
   "jpeg",
   "webp",
   "png"
  ].map(extension=>
   `${rutaOriginales}${ropaActual}.${extension}`
  );

 }

 // ==================================
 // GIF DE EMOCIONES
 // ==================================

 function rutasEmociones(){

  let archivos=[];

  if(ropaActual==="verano"){

   archivos=[
    archivosVerano[emocionActual]
   ];

  }else{

   archivos=[
    `${emocionActual}.gif`
   ];

   if(emocionActual==="somnolienta"){
    archivos.push("sonolienta.gif");
   }

  }

  return archivos
   .filter(Boolean)
   .map(nombre=>
    `${rutaEmociones}${ropaActual}/${nombre}`
   );

 }

 // ==================================
 // CARGADOR DE IMÁGENES
 // ==================================

 function cargarArchivo(
  elemento,
  aviso,
  rutas,
  tipo
 ){

  const solicitud=tipo==="original"
   ? ++solicitudImagen
   : ++solicitudEmocion;

  const vigente=()=>tipo==="original"
   ? solicitud===solicitudImagen
   : solicitud===solicitudEmocion;

  elemento.hidden=true;
  elemento.removeAttribute("src");

  aviso.textContent=tipo==="original"
   ? "✨ Preparando vestuario..."
   : "✨ Preparando emoción...";

  let indice=0;

  function siguiente(){

   if(!vigente())return;

   if(indice>=rutas.length){

    elemento.hidden=true;
    elemento.removeAttribute("src");

    aviso.textContent=tipo==="original"
     ? `💜 No encuentro el traje ${ropaActual} en originales.`
     : `💜 No encuentro la emoción ${emocionActual} de ${ropaActual}.`;

    return;
   }

   const ruta=rutas[indice++];
   const prueba=new Image();

   prueba.onload=()=>{

    if(!vigente())return;

    elemento.src=ruta;
    elemento.hidden=false;
    aviso.textContent="";

   };

   prueba.onerror=()=>{

    if(vigente()){
     siguiente();
    }

   };

   prueba.src=ruta;

  }

  siguiente();

 }

 function cargarImagen(){

  cargarArchivo(
   imagen,
   avisoImagen,
   rutasOriginales(),
   "original"
  );

 }

 function cargarEmocion(){

  cargarArchivo(
   imagenEmocion,
   avisoEmocion,
   rutasEmociones(),
   "emocion"
  );

 }

 // ==================================
 // BOTONES ACTIVOS
 // ==================================

 function actualizarBotones(
  contenedor,
  actual
 ){

  $(contenedor)
   .querySelectorAll("button")
   .forEach(boton=>{

    boton.classList.toggle(
     "activo",
     boton.dataset.id===actual
    );

   });

 }

 // ==================================
 // CAMBIAR ROPA
 // ==================================

 function cambiarRopa(id){

  if(!Object.prototype.hasOwnProperty.call(
   nombres,id
  ))return;

  // Evitar recargar imágenes innecesariamente.

  if(
   ropaActual===id &&
   imagen.hasAttribute("src")
  )return;

  ropaActual=id;

  conjunto.textContent=nombres[id];

  actualizarBotones(
   "opciones",
   id
  );

  cargarImagen();
  cargarEmocion();

 }

 // ==================================
 // MOSTRAR DIÁLOGO
 // ==================================

 function mostrarDialogoLumi(id){

  const elemento=$("dialogo-lumi");
  const opciones=dialogosLumi[id];

  if(!opciones)return;

  const indice=Math.floor(
   Math.random()*opciones.length
  );

  elemento.textContent=opciones[indice];

  elemento.classList.remove("animar");

  void elemento.offsetWidth;

  elemento.classList.add("animar");

 }

 // ==================================
 // CAMBIAR EMOCIÓN
 // ==================================

 function cambiarEmocion(id,manual=false){

  if(!Object.prototype.hasOwnProperty.call(
   emociones,id
  ))return;

  // Si se elige manualmente,
  // respetar la emoción 10 minutos.

  if(manual){
   pausaEmocionalHasta=Date.now()+10*60*1000;
  }

  const cambio=id!==emocionActual;

  emocionActual=id;

  emocionTexto.textContent=emociones[id];
  frase.textContent=frases[id];

  mostrarDialogoLumi(id);

  actualizarBotones(
   "opciones-emociones",
   id
  );

  if(
   cambio ||
   !imagenEmocion.hasAttribute("src")
  ){
   cargarEmocion();
  }

 }

 // ==================================
 // CREAR BOTONES
 // ==================================

 function crearBotones(
  datos,
  contenedor,
  accion
 ){

  Object.entries(datos).forEach(
   ([id,nombre])=>{

    const boton=document.createElement("button");

    boton.type="button";
    boton.dataset.id=id;
    boton.textContent=nombre;

    boton.addEventListener(
     "click",
     ()=>accion(id)
    );

    $(contenedor).appendChild(boton);

   }
  );

 }

 // BOTONES DE ROPA

 crearBotones(
  nombres,
  "opciones",
  id=>{

   solicitudClima++;
   modoAutomatico=false;

   cambiarRopa(id);

   estadoClima.textContent=
    "Mostrando el traje que elegiste.";

  }
 );

 // BOTONES DE EMOCIONES

 crearBotones(
  emociones,
  "opciones-emociones",
  id=>cambiarEmocion(id,true)
 );

 // ==================================
 // NUEVO: EMOCIONES AUTÓNOMAS
 // ==================================

 function elegirEmocionLumi(){

  const hora=new Date().getHours();

  let opciones=[];

  // NOCHE

  if(hora>=21||hora<7){

   opciones=[
    "somnolienta",
    "somnolienta",
    "tranquila",
    "feliz",
    "sorprendida"
   ];

  }

  // MAÑANA

  else if(hora<12){

   opciones=[
    "feliz",
    "feliz",
    "tranquila",
    "emocionada",
    "sorprendida",
    "triste",
    "enojada"
   ];

  }

  // TARDE

  else{

   opciones=[
    "feliz",
    "tranquila",
    "tranquila",
    "emocionada",
    "sorprendida",
    "triste",
    "enojada"
   ];

  }

  const indice=Math.floor(
   Math.random()*opciones.length
  );

  return opciones[indice];

 }

 // ==================================
 // PROGRAMAR CAMBIOS DE EMOCIÓN
 // ==================================

 function programarEmocionAutonoma(){

  clearTimeout(temporizadorEmociones);

  // Esperar entre 3 y 7 minutos.

  const minutos=3+Math.random()*4;

  temporizadorEmociones=setTimeout(()=>{

   if(
    document.visibilityState==="visible" &&
    Date.now()>=pausaEmocionalHasta
   ){

    const nueva=elegirEmocionLumi();

    cambiarEmocion(nueva);

   }

   programarEmocionAutonoma();

  },minutos*60000);

 }

 // ==================================
 // VESTUARIO INTELIGENTE
 // ==================================

 function elegirRopa(grados){

  const ahora=new Date();

  const mes=ahora.getMonth()+1;
  const dia=ahora.getDate();
  const hora=ahora.getHours();

  // NAVIDAD

  if(
   mes===12 &&
   (dia===24||dia===25)
  ){
   return "navidad";
  }

  // AÑO NUEVO

  if(
   (mes===12&&dia===31) ||
   (mes===1&&dia===1)
  ){
   return "ano-nuevo";
  }

  // SAN VALENTÍN

  if(mes===2&&dia===14){
   return "san-valentin";
  }

  // FIESTAS PATRIAS

  if(
   mes===9 &&
   (dia===18||dia===19)
  ){
   return "fiestas-patrias";
  }

  // PIJAMA

  if(hora>=21||hora<7){

   return grados<18
    ? "pijama-invierno"
    : "pijama-verano";

  }

  // TEMPERATURAS

  if(grados<=14){
   return "invierno";
  }

  if(grados>=27){
   return "verano";
  }

  // OTOÑO

  if(mes>=3&&mes<=5){
   return "otono";
  }

  // PRIMAVERA

  if(mes>=9&&mes<=11){
   return "primavera";
  }

  return grados<19
   ? "invierno"
   : "verano";

 }

 // ==================================
 // APLICAR TEMPERATURA
 // ==================================

 function aplicarTemperatura(grados){

  cambiarRopa(
   elegirRopa(grados)
  );

 }

 // ==================================
 // OBTENER UBICACIÓN
 // ==================================

 function obtenerUbicacion(){

  return new Promise(
   (resolver,rechazar)=>{

    if(!navigator.geolocation){

     rechazar(
      new Error("Ubicación no disponible")
     );

     return;
    }

    navigator.geolocation.getCurrentPosition(
     resolver,
     rechazar,
     {
      timeout:12000,
      enableHighAccuracy:false
     }
    );

   }
  );

 }

 // ==================================
 // CLIMA REAL
 // ==================================

 async function automatico(){

  const solicitud=++solicitudClima;

  modoAutomatico=true;

  estadoClima.textContent=
   "Consultando el clima...";

  try{

   const posicion=await obtenerUbicacion();

   if(solicitud!==solicitudClima)return;

   const latitud=posicion.coords.latitude;
   const longitud=posicion.coords.longitude;

   const url=new URL(
    "https://api.open-meteo.com/v1/forecast"
   );

   url.search=new URLSearchParams({
    latitude:latitud.toFixed(2),
    longitude:longitud.toFixed(2),
    current:"temperature_2m",
    temperature_unit:"celsius"
   });

   const controlador=new AbortController();

   const limite=setTimeout(
    ()=>controlador.abort(),
    10000
   );

   let respuesta;

   try{

    respuesta=await fetch(url,{
     signal:controlador.signal
    });

   }finally{

    clearTimeout(limite);

   }

   if(!respuesta.ok){

    throw new Error(
     "Error al consultar clima"
    );

   }

   const datos=await respuesta.json();

   const grados=datos.current?.temperature_2m;

   if(!Number.isFinite(grados)){

    throw new Error(
     "Temperatura no disponible"
    );

   }

   if(solicitud!==solicitudClima)return;

   temperaturaActual=grados;

   temperatura.value=Math.max(
    0,
    Math.min(40,Math.round(grados))
   );

   temperaturaValor.textContent=grados;

   aplicarTemperatura(grados);

   estadoClima.textContent=
    `🌤️ Temperatura actual: ${grados} °C`;

  }catch(error){

   if(solicitud!==solicitudClima)return;

   const grados=Number(temperatura.value);

   temperaturaActual=grados;

   aplicarTemperatura(grados);

   estadoClima.textContent=
    "No pude consultar el clima real. Usando temperatura de prueba.";

  }

 }

 // ==================================
 // TEMPERATURA MANUAL
 // ==================================

 temperatura.addEventListener(
  "input",
  ()=>{

   solicitudClima++;
   modoAutomatico=false;

   const grados=Number(
    temperatura.value
   );

   temperaturaActual=grados;

   temperaturaValor.textContent=grados;

   aplicarTemperatura(grados);

   estadoClima.textContent=
    `Modo prueba: ${grados} °C`;

  }
 );

 // ==================================
 // BOTÓN AUTOMÁTICO
 // ==================================

 $("automatico").addEventListener(
  "click",
  automatico
 );

 // ==================================
 // ACCESO A EMOCIONES
 // ==================================

 window.LumiEmociones={
  cambiar:id=>cambiarEmocion(id,true),
  obtener:()=>emocionActual
 };

 // ==================================
 // INICIAR CASA-LUMI
 // ==================================

 // Lumi elige una emoción al entrar.

 cambiarEmocion(
  elegirEmocionLumi()
 );

 // Cargar vestuario.

 cambiarRopa("verano");

 // Iniciar emociones automáticas.

 programarEmocionAutonoma();

 // Consultar clima.

 automatico();

 // ==================================
 // CAMBIOS DE HORARIO
 // ==================================

 setInterval(()=>{

  if(
   document.visibilityState!=="visible"
  )return;

  if(modoAutomatico){

   aplicarTemperatura(
    temperaturaActual
   );

  }

 },60000);

});
</script>

</body>
</html>
