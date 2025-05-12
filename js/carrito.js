// Obtén una referencia al botón que mostrará el cart-body
const showCartButton = document.getElementById('show-cart-button');

// Obtén una referencia al elemento cart-body
const cartBody = document.querySelector('.cart-body');

// Agrega un evento para mostrar el cart-body al hacer clic en el botón
showCartButton.addEventListener('click', () => {
  cartBody.style.display = 'block'; // Muestra el cart-body
});
