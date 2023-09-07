const misPersonajes = document.getElementById("misPersonajes");
const listaPersonajes = JSON.parse(localStorage.getItem("listaPjs"));

listaPersonajes &&
  listaPersonajes.forEach((pj) => {
    console.log("Soy el console log que buscabas", pj);
    misPersonajes.innerHTML += `
<div class="card mb-3" >
  <div class="card-body">
  <i class="fa fa-lg fa-user "></i>
    <h5 class="card-title text-center">${pj.nombre}</h5>
   
    <p class="card-text text-muted">${pj.descripcion}</p>
    <div class="row justify-content-between">
<a href='./pages/editarPJ.html?id=${pj.id}' id="editar" class="btn btn-warning col-1"><i class="fa fa-eye"></i></a>  
    <a href="#" class= "btn btn-success col-1 "><i class="fa fa-play"></i></a>
    </div>
    
  </div>
</div>
`;
  });
