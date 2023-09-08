//Buscar por parámetro en la url el id del pj, obtenerlo del localstorage y reemplazarlo en la tarjeta
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
let listaPersonajes = JSON.parse(localStorage.getItem("listaPjs")) || [];
let pj = {};
pj = listaPersonajes.find((p) => p.id === id);
console.log(id);
console.log(listaPersonajes);
console.log(pj);
// Dibujar Aspectos
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
