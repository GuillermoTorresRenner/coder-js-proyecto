//Buscar por parámetro en la url el id del pj, obtenerlo del localstorage y reemplazarlo en el formulario
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
const personajesEjemploJson = async () => {
  const resp = await fetch("../assets/personajesEjemplos.json");
  const listaPersonajes = await resp.json();
  const pj = listaPersonajes.find((p) => p.id === id);

  //se Reemplazan los valores del pj en el formulario
  document.getElementById("nombre").value = pj.nombre;
  document.getElementById("descripcion").value = pj.descripcion;
  document.getElementById("aspecto_principal").value = pj.aspecto_principal;
  document.getElementById("complicacion").value = pj.complicacion;
  document.getElementById("aspecto_3").value = pj.aspecto_3;
  document.getElementById("aspecto_4").value = pj.aspecto_4;
  document.getElementById("aspecto_5").value = pj.aspecto_5;
  document.getElementById("cauto").value = pj.cauto = pj.llamativo;
  document.getElementById("furtivo").value = pj.furtivo;
  document.getElementById("ingenioso").value = pj.ingenioso;
  document.getElementById("llamativo").value = pj.llamativo;
  document.getElementById("rapido").value = pj.rapido;
  document.getElementById("vigoroso").value = pj.vigoroso;
  document.getElementById("proeza_1").value = pj.proeza_1;
  document.getElementById("proeza_2").value = pj.proeza_2;
  document.getElementById("proeza_3").value = pj.proeza_3;
  document.getElementById("proeza_4").value = pj.proeza_4;
  document.getElementById("proeza_5").value = pj.proeza_5;
};

personajesEjemploJson();
console.log("id URL", id);
console.log("pj", pj);
