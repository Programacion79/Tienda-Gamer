document.addEventListener("DOMContentLoaded", function () {
    const nuevoProductoForm = document.getElementById("nuevo-producto-form");
    const listaProductos = document.getElementById("lista-productos");

    nuevoProductoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const descripcion = document.getElementById("descripcion").value;
        const precio = parseFloat(document.getElementById("precio").value);
        const imagen = document.getElementById("imagen").value;

        // Validar los campos (puedes agregar más validaciones aquí)

        if (!nombre || !descripcion || isNaN(precio) || !imagen) {
            alert("Por favor, completa todos los campos correctamente.");
            return;
        }

        // Crear un nuevo elemento para mostrar el producto
        const productoElement = document.createElement("div");
        productoElement.classList.add("producto");

        // Crear la estructura para mostrar la información del producto
        productoElement.innerHTML = `
            <img src="${imagen}" alt="${nombre}">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
            <p class="precio">$${precio}</p>
        `;

        // Agregar el producto a la lista en la página "index.html"
        listaProductos.appendChild(productoElement);

        // Limpiar el formulario
        nuevoProductoForm.reset();
    });
});

//variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

//event listeners
listaCursos.addEventListener("click", agregarCurso);
carrito.addEventListener("click",eliminarCurso);
vaciarCarritoBtn.addEventListener("click",vaciarCarrito);


//funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

function leerDatosCurso(curso) {
  //crear un objeto con el contenido del curso
  const precioNuevo = curso.querySelector(".precio span").textContent;//guardo el precio con $
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: precioNuevo.slice(1),//le quito el carcater $
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  //revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
  if(existe){
      //actualizamos la cantidad
      articulosCarrito.map( curso =>{
        if(curso.id === infoCurso.id){
         curso.cantidad++;
         const precioNumero = Number.parseInt(infoCurso.precio);//convierto de string a int
         console.log(precioNumero);
         curso.precio = precioNumero * curso.cantidad;
         return curso;
        }else{
          return curso;
        }
      });
  }else{
    articulosCarrito.push(infoCurso); //agrega elementos al array
    console.log(articulosCarrito);
  }
  
  carritoHTML(); //llama funcion que guarda en el icono carrito
}

function carritoHTML() {
  //limpiar HTML
  limpiarHTML();
  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${curso.imagen}" width="100px"></td>
            <td>${curso.titulo}</td>
            <td>$ ${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
            </td>
       
    `;
    contenedorCarrito.appendChild(row); //agrega elementos a la etiqueta tbody
  });
}
//elimina los cursos del tbody
function limpiarHTML() {
  contenedorCarrito.innerHTML = "";
}
//elimina los cursos seleccionados del carrito
function eliminarCurso(e){
 if(e.target.classList.contains('borrar-curso')){
    const cursoId= e.target.getAttribute("data-id");
    //elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
    carritoHTML();//iterar sobre el carrito el HTML
 }
}
// vaciar elementos del carrito
function vaciarCarrito(e){
  if(e.target.classList.contains('button')){
    articulosCarrito = [];
    carritoHTML();
  }
}


alert("Hola");