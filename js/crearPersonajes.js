let pj = {};
let listaPjs = [];
listaPjs = listaPjs = JSON.parse(localStorage.getItem("listaPjs")) || [];
//Edición de mensaje de guardar

//Acciones de guardado desde modal
const form = document.getElementById("formPJ");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  pj.id = Math.floor(Math.random() * 5).toString();
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
  pj.estres_1 = false;
  pj.estres_2 = false;
  pj.estres_3 = false;
  pj.consecuencia_2 = "";
  pj.consecuencia_4 = "";
  pj.consecuencia_6 = "";

  listaPjs.push(pj);
  localStorage.setItem("listaPjs", JSON.stringify(listaPjs));

  // Mostrar toast
  const mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = `"${pj.nombre}" agregado a su lista de personajes`;
  const toastLiveExample = document.getElementById("liveToast");
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();

  //Agregado de delay
  setTimeout(() => (window.location.href = "../index.html"), 2500); // 3000 milisegundos = 3 segundos
});
