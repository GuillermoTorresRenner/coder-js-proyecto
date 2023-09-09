const misPersonajes = document.getElementById("misPersonajes");
const listaPersonajes = JSON.parse(localStorage.getItem("listaPjs"));

listaPersonajes &&
  listaPersonajes.forEach((pj) => {
    misPersonajes.innerHTML += `
<div class="card mb-3" >
  <div class="card-body">
  <i class="fa fa-lg fa-user "></i> 
  <div>ID=${pj.id} </div>
    <h5 class="card-title text-center">${pj.nombre}</h5>
    <p class="card-text text-muted">${pj.descripcion}</p>
    <div class="row justify-content-center">
<a href='./pages/editarPJ.html?id=${pj.id}' id="editar" class="btn btn-warning col-2 mx-2"><i class="fa fa-eye"></i></a>  
    <a href="./pages/jugar.html?id=${pj.id}" class= "btn btn-success col-2 mx-2"><i class="fa fa-play"></i></a>
    </div>
    
  </div>
</div>
`;
  });
