// Datos de ejemplo de productos
const productos = [
    {
      nombre: 'Portátil',
      marca: 'HP',
      modelo: '240G7',
      descuento: '-13%',
      imagen: 'ruta_a_la_imagen.jpg',
      precio: '$1.800.000',
      precioDescuento: '$1.760.000',
      estrellas: 4, // Puedes ajustar esto según la calificación del producto
      descripcion: {
        procesador: 'CoreI5',
        ram: '8Gb',
        discoDuro: '512Gb',
        pantalla: '15"',
      },
    },
    // Agrega más objetos de productos según tus necesidades
  ];
  
  function insertarProductosEnHTML(productos) {
    const container = document.getElementById('product-container');
  
    productos.forEach((producto) => {
      const card = document.createElement('div');
      card.classList.add('card-product');
  
      // Estructura de la tarjeta de producto
      card.innerHTML = `
        <h3>${producto.nombre}</h3>
        <span>${producto.marca}</span>
        <span>${producto.modelo}</span>
        <div class="container-img">
          <span class="discount">${producto.descuento}</span>
          <img src="${producto.imagen}" alt="">
          <div class="button-group">
            <span><i class="fa-regular fa-eye"></i></span>
            <span><i class="fa-regular fa-heart"></i></span>
            <span><i class="fa-solid fa-code-compare"></i></span>
          </div>
        </div>
        <div class="content-card-product">
          <div class="stars">
            ${generarEstrellas(producto.estrellas)}
          </div>
          <div class="content-price-produc">
            <p class="produc-price">${producto.precio}</p>
            <p class="produc-discount">${producto.precioDescuento}</p>
          </div>
        </div>
        <div class="content-card-product-descrption">
          <h3 class="produc-description">Descripción</h3>
          <ul class="content-product-description">
            <li>Procesador: <span>${producto.descripcion.procesador}</span></li>
            <li>Ram: <span>${producto.descripcion.ram}</span></li>
            <li>Disco Duro: <span>${producto.descripcion.discoDuro}</span></li>
            <li>Pantalla: <span>${producto.descripcion.pantalla}</span></li>
          </ul>
        </div>
        <button type="button" class="add-cart" id="add-cart">
          <p class="add-cart-title">Agregar</p>  
          <span><i class="fa-solid fa-basket-shopping"></i></span>
        </button>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Función para generar las estrellas
  function generarEstrellas(calificacion) {
    const estrellasHTML = Array.from({ length: 5 }, (_, index) => {
      if (index < calificacion) {
        return '<i class="fa-solid fa-star"></i>';
      } else {
        return '<i class="fa-regular fa-star"></i>';
      }
    });
    return estrellasHTML.join('');
  }
  
  // Llama a la función para insertar los productos
  insertarProductosEnHTML(productos);
  