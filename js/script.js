document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart");
    const promotionImages = [
        "images/img1920.jpg",
        "images/img1930.jpg",
        "images/img1940.jpg",
        "images/img1950.jpg",
        "images/img1960.jpg",
    ];

    // Fill the cart with images
    promotionImages.forEach((imageSrc, index) => {
        const imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.alt = `Promotion ${index + 1}`;

        cartContainer.appendChild(imageElement);
    });
});
