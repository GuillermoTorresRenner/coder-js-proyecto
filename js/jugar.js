//Buscar por parámetro en la url el id del pj, obtenerlo del localstorage y reemplazarlo en la tarjeta
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
let listaPersonajes = JSON.parse(localStorage.getItem("listaPjs")) || [];
let pj = {};
pj = listaPersonajes.find((p) => p.id === id);

//=========================cargar valores recuperados de local storage=====================================
document.getElementById("puntos").value = pj.puntosFate.toString() || "3";
document.getElementById("recuperacion").value =
  pj.recuperacion.toString() || "3";
document.getElementById("estres_1").checked = pj.estres_1 || false;
document.getElementById("estres_2").checked = pj.estres_2 || false;
document.getElementById("estres_3").checked = pj.estres_3 || false;
document.getElementById("consecencia_2").value = pj.consecuencia_2 || "";
document.getElementById("consecencia_4").value = pj.consecuencia_4 || "";
document.getElementById("consecencia_6").value = pj.consecuencia_6 || "";

const estilos = document.getElementById("estilos");
estilos.innerHTML = `
<table class="table table-dark ">
  <tbody>
    <tr>
      <td>CAUTO: <strong class="text-primary">${pj.cauto}</strong></td>
      <td>FURTIVO: <strong class="text-primary">${pj.furtivo}</strong></td>
      <td>INGENIOSO: <strong class="text-primary">${pj.ingenioso}</strong></td>
    </tr>
    <tr>
      <td>LLAMATIVO: <strong class="text-primary">${pj.llamativo}</strong></td>
      <td>RÁPIDO: <strong class="text-primary">${pj.rapido}</strong></td>
      <td>VIGOROSO: <strong class="text-primary">${pj.vigoroso}</strong></td>
    </tr>
   </tbody>
</table>
`;
//Dibujar tarjeta
const tarjeta = document.getElementById("ficha");
tarjeta.innerHTML = `<div class="card">
                <div class="card-header text-center "> <strong>${pj.nombre}</strong> </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="text-muted small ">DESCRIPCIÓN:</div> 
                        <div class="ficha"> ${pj.descripcion}</div> 

                    </li>
                    <div class=" bg-black text-white text-center" role="alert">
                         ASPECTOS   
                    </div>
                    <li class="list-group-item">
                        <div class="text-muted small ">ASPECTO PRINCIPAL:</div> 
                        <div class="ficha"> ${pj.aspecto_principal}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">COMPLICACIÓN:</div> 
                        <div class="ficha"> ${pj.complicacion}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">ASPECTO 3:</div> 
                        <div class="ficha"> ${pj.aspecto_3}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">ASPECTO 4:</div> 
                        <div class="ficha"> ${pj.aspecto_4}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">ASPECTO 5:</div> 
                        <div class="ficha"> ${pj.aspecto_5}</div> 

                    </li>
                    <div class=" bg-black text-white text-center" role="alert">
                         PROEZAS   
                    </div>
                    <li class="list-group-item">
                        <div class="text-muted small ">PROEZA 1:</div> 
                        <div class="ficha"> ${pj.proeza_1}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">PROEZA 2:</div> 
                        <div class="ficha"> ${pj.proeza_2}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">PROEZA 3:</div> 
                        <div class="ficha"> ${pj.proeza_3}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">PROEZA 4:</div> 
                        <div class="ficha"> ${pj.proeza_4}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">PROEZA 5:</div> 
                        <div class="ficha"> ${pj.proeza_5}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">DESCRIPCIÓN:</div> 
                        <div class="ficha"> ${pj.descripcion}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">DESCRIPCIÓN:</div> 
                        <div class="ficha"> ${pj.descripcion}</div> 

                    </li>
                    <li class="list-group-item">
                        <div class="text-muted small ">DESCRIPCIÓN:</div> 
                        <div class="ficha"> ${pj.descripcion}</div> 

                    </li>

                </ul>
            </div>`;

//tiradas
const resultado = document.getElementById("resultado");

//Guardar ficha antes de salir de la página

function guardarAntesDeSalir() {
  pj.puntosFate = parseInt(document.getElementById("puntos").value);
  pj.recuperacion = parseInt(document.getElementById("recuperacion").value);
  pj.estres_1 = document.getElementById("estres_1").checked;
  pj.estres_2 = document.getElementById("estres_2").checked;
  pj.estres_3 = document.getElementById("estres_3").checked;
  pj.consecuencia_2 = document.getElementById("consecencia_2").value;
  pj.consecuencia_4 = document.getElementById("consecencia_4").value;
  pj.consecuencia_6 = document.getElementById("consecencia_6").value;

  //Reemplazar pj actualizado y pj antiguo en array de pjs y guardarlo en local storage

  const i = listaPersonajes.findIndex((p) => p.id === id);
  listaPersonajes.splice(i, 1, pj);

  localStorage.setItem("listaPjs", JSON.stringify(listaPersonajes));
}
window.addEventListener("beforeunload", guardarAntesDeSalir);

// cambio de estado de los checkbox
let estres1 = document.getElementById("estres_1");
let estres2 = document.getElementById("estres_2");
let estres3 = document.getElementById("estres_3");
estres1.checked ? (estres1.checked = true) : (estres1.checked = false);
estres2.checked ? (estres1.checked = true) : (estres2.checked = false);
estres3.checked ? (estres1.checked = true) : (estres3.checked = false);
