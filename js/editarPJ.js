//Buscar por parámetro en la url el id del pj, obtenerlo del localstorage y reemplazarlo en el formulario
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
const listaPersonajes = JSON.parse(localStorage.getItem("listaPjs"));
let pjModificado = {};
const pj = listaPersonajes.find((pj) => pj.id === id);
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
document.getElementById("estres_1").value = pj.estres_1;
document.getElementById("estres_2").value = pj.estres_2;
document.getElementById("estres_3").value = pj.estres_3;
document.getElementById("consecuencia_2").value = pj.consecuencia_2;
document.getElementById("consecuencia_4").value = pj.consecuencia_4;
document.getElementById("consecuencia_6").value = pj.consecuencia_6;

//Evento para guardar las modificaciones reescribiendo el local storage
// const form = document.getElementById("formPJ");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   pjModificado.nombre = document.getElementById("nombre").value;
//   pjModificado.descripcion = document.getElementById("descripcion").value;
//   pjModificado.aspecto_principal =
//     document.getElementById("aspecto_principal").value;
//   pjModificado.complicacion = document.getElementById("complicacion").value;
//   pjModificado.aspecto_3 = document.getElementById("aspecto_3").value;
//   pjModificado.aspecto_4 = document.getElementById("aspecto_4").value;
//   pjModificado.aspecto_5 = document.getElementById("aspecto_5").value;
//   pjModificado.cauto = parseInt(document.getElementById("cauto").value);
//   pjModificado.furtivo = parseInt(document.getElementById("furtivo").value);
//   pjModificado.ingenioso = parseInt(document.getElementById("ingenioso").value);
//   pjModificado.llamativo = parseInt(document.getElementById("llamativo").value);
//   pjModificado.rapido = parseInt(document.getElementById("rapido").value);
//   pjModificado.vigoroso = parseInt(document.getElementById("vigoroso").value);
//   pjModificado.proeza_1 = document.getElementById("proeza_1").value;
//   pjModificado.proeza_2 = document.getElementById("proeza_2").value;
//   pjModificado.proeza_3 = document.getElementById("proeza_3").value;
//   pjModificado.proeza_4 = document.getElementById("proeza_4").value;
//   pjModificado.proeza_5 = document.getElementById("proeza_5").value;
//   pjModificado.estres_1 = false;
//   pjModificado.estres_2 = false;
//   pjModificado.estres_3 = false;
//   pjModificado.consecuencia_2 = "";
//   pjModificado.consecuencia_4 = "";
//   pjModificado.consecuencia_6 = "";

//   const indicePjReemplazo = listaPersonajes.findIndex((pj) => pj.id === id);
//   listaPersonajes[indicePjReemplazo] = pj;
//   localStorage.setItem("listaPjs", JSON.stringify(listaPjs));
//   form.reset();
// });
