document.addEventListener("DOMContentLoaded", function () {
    const productButtons = document.querySelectorAll(".buy-button");

    productButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            const productName = product.querySelector("h2").textContent;
            const productPrice = product.querySelector(".price").textContent;

            // Aquí podrías implementar lógica para agregar el producto al carrito o mostrar detalles
            alert(`Has agregado "${productName}" al carrito por ${productPrice}`);
        });
    });
});