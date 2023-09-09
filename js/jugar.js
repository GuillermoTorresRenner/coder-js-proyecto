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
                   

                </ul>
            </div>`;

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

//tiradas

btnTirarDados.addEventListener("click", () => {
  const btnTirarDados = document.getElementById("btnTirarDados").value;
  const dificultad = parseInt(document.getElementById("dificultad").value);
  const modificador = parseInt(document.getElementById("modificador").value);
  const estilo = document.getElementById("estilo").value;
  const accion = document.getElementById("accion").value;
  let estiloValor = 0;

  switch (estilo) {
    case "CAUTO":
      estiloValor = pj.cauto;
      break;
    case "FURTIVO":
      estiloValor = pj.furtivo;
      break;
    case "INGENIOSO":
      estiloValor = pj.ingenioso;
      break;
    case "LLAMATIVO":
      estiloValor = pj.llamativo;
      break;
    case "RAPIDO":
      estiloValor = pj.rapido;
      break;
    case "VIGOROSO":
      estiloValor = pj.vigoroso;
      break;

    default:
      break;
  }
  let mensaje = `Tirada de ${accion} con estilo ${estilo} (${estiloValor}) y modificador (${modificador}) contra dificultad ${dificultad}  --> `;
  let dado = 0;
  let resultado = 0;
  for (let index = 0; index < 4; index++) {
    dado = Math.floor(Math.random() * 6) + 1;
    if (dado === 1 || dado === 2) {
      mensaje += "[-] ";
      resultado--;
    } else if (dado === 3 || dado === 4) {
      mensaje += "[O] ";
    } else {
      mensaje += "[+] ";
      resultado++;
    }
  }
  resultado += modificador + estiloValor;
  mensaje += "= " + resultado;
  const texto = document.getElementById("resultado");
  texto.innerText = mensaje;
  // definición de resultado de tirada realizada
  let resultadoFinal;
  if (resultado - dificultad >= 3) {
    resultadoFinal = "critico";
  } else if (resultado > dificultad) {
    resultadoFinal = "exito";
  } else if (resultado === dificultad) {
    resultadoFinal = "empate";
  } else if (resultado < dificultad) {
    resultadoFinal = "fallo";
  }

  let explicacion = "";

  switch (resultadoFinal) {
    case "critico":
      if (accion === "SUPERAR") {
        explicacion = "Consigues tu objetivo y generas un impulso";
      } else if (accion === "ATAQUE") {
        explicacion =
          "El ataque acierta y causa daño. Puedes reducir el daño en 1 para generar un impulso.";
      } else if (accion === "DEFENSA") {
        explicacion =
          "Tu oponente no consigue lo que quiere y tú recibes un impulso.";
      } else if (accion === "VENTAJA") {
        explicacion =
          "Generas dos invocaciones gratuitas del aspecto creado | Creas o descubres el aspecto y consigues dos invocaciones gratuitas de este.";
      }

      break;
    case "exito":
      if (accion === "SUPERAR") {
        explicacion = "Consigues tu objetivo ";
      } else if (accion === "ATAQUE") {
        explicacion = "El ataque acierta y causa daño ";
      } else if (accion === "DEFENSA") {
        explicacion = "Tu oponente no consigue lo que quiere ";
      } else if (accion === "VENTAJA") {
        explicacion =
          "Generas una invocacion gratuita del aspecto creado | Creas o descubres el aspecto y consigues una invocación gratuita de este.";
      }

      break;
    case "empate":
      if (accion === "SUPERAR") {
        explicacion = "Tienes éxito pagando un coste leve";
      } else if (accion === "ATAQUE") {
        explicacion = "El ataque no daña a tu objetivo, pero ganas un impulso.";
      } else if (accion === "DEFENSA") {
        explicacion = "Observa la acción de tu oponente para ver que sucede.";
      } else if (accion === "VENTAJA") {
        explicacion =
          "Generas una invocación gratuita del aspecto. | Recibes un impulso si creas un aspecto nuevo, o se considera un éxito si buscabas uno ya existente.";
      }

      break;
    case "fallo":
      if (accion === "SUPERAR") {
        explicacion = "Fallas o tienes éxito pagando un coste importante";
      } else if (accion === "ATAQUE") {
        explicacion = "Ningún efecto del ataque";
      } else if (accion === "DEFENSA") {
        explicacion = "Sufres las consecuencias del ataque de tu oponente.";
      } else if (accion === "VENTAJA") {
        explicacion =
          "Ni creas ni descubres un aspecto, o bien lo consigues pero tu oponente(no tú) consigue una invocación gratuita. | Ningún beneficio adicional.";
      }

      break;

    default:
      break;
  }

  const desenlace = document.getElementById("desenlace");
  desenlace.innerText = explicacion;
});
