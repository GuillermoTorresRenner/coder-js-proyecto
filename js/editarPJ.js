//Buscar por parámetro en la url el id del pj, obtenerlo del localstorage y reemplazarlo en el formulario
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
let listaPersonajes = JSON.parse(localStorage.getItem("listaPjs")) || [];
let pj = {};
pj = listaPersonajes.find((p) => p.id === id);
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

const form = document.getElementById("formPJ");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let pj = {};
  pj.id = id.toString();
  pj.nombre = document.getElementById("nombre").value;
  pj.descripcion = document.getElementById("descripcion").value;
  pj.aspecto_principal = document.getElementById("aspecto_principal").value;
  pj.complicacion = document.getElementById("complicacion").value;
  pj.aspecto_3 = document.getElementById("aspecto_3").value;
  pj.aspecto_4 = document.getElementById("aspecto_4").value;
  pj.aspecto_5 = document.getElementById("aspecto_5").value;
  pj.cauto = parseInt(document.getElementById("cauto").value);
  pj.furtivo = parseInt(document.getElementById("furtivo").value);
  pj.ingenioso = parseInt(document.getElementById("ingenioso").value);
  pj.llamativo = parseInt(document.getElementById("llamativo").value);
  pj.rapido = parseInt(document.getElementById("rapido").value);
  pj.vigoroso = parseInt(document.getElementById("vigoroso").value);
  pj.proeza_1 = document.getElementById("proeza_1").value;
  pj.proeza_2 = document.getElementById("proeza_2").value;
  pj.proeza_3 = document.getElementById("proeza_3").value;
  pj.proeza_4 = document.getElementById("proeza_4").value;
  pj.proeza_5 = document.getElementById("proeza_5").value;
  pj.puntosFate = 3;
  pj.recuperacion = 3;

  //Reemplazar pj actualizado y pj antiguo en array de pjs y guardarlo en local storage

  const i = listaPersonajes.findIndex((p) => p.id === id);
  listaPersonajes.splice(i, 1, pj);

  localStorage.setItem("listaPjs", JSON.stringify(listaPersonajes));

  //   // Mostrar toast
  const mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = `"${pj.nombre}" modificado exitosamente`;
  const toastLiveExample = document.getElementById("liveToast");
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();

  //Agregado de delay
  setTimeout(() => (window.location.href = "../index.html"), 1200);
});

//Funciones de eliminación de personaje
const btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", () => {
  console.log(listaPersonajes);
  listaPersonajes = listaPersonajes.filter((p) => p.id !== id);
  localStorage.setItem("listaPjs", JSON.stringify(listaPersonajes));

  //   // Mostrar toast
  const mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = `"${pj.nombre}" Eliminado exitosamente`;
  const toastLiveExample = document.getElementById("liveToast");
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();

  //Agregado de delay
  setTimeout(() => (window.location.href = "../index.html"), 1200); // 3000 milisegundos = 3 segundos
});
