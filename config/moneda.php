<?php
function formatPrice($price) {
    // Formatear el precio con el formato de moneda colombiana
    $precioFormateado = number_format($price, 0, ',', '.');
    return "$" . $precioFormateado;
}
?>