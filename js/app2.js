
    document.addEventListener("DOMContentLoaded", function () {
        var bannerImage = document.getElementById('banner-image');
        var imageSources = ['images/products/Banner1/shirt-2.png', 'images/products/Banner1/shirt-1.png', 'images/products/Banner1/shoe-1.png'];
        var currentIndex = 0;

        function changeBannerImage() {
            bannerImage.src = imageSources[currentIndex];
            currentIndex = (currentIndex + 1) % imageSources.length;
        }

        setInterval(changeBannerImage, 5000); // Cambiar la imagen cada 5 segundos
    });

