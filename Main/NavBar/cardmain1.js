document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".buttonview").forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "product-details.html"; // Change URL dynamically if needed
        });
    });
});
document.querySelectorAll(".buttonview").forEach(button => {
    button.addEventListener("click", function () {
        const productCard = this.closest(".content");

        const productDetails = {
            image: productCard.querySelector("#im").src,
            name: productCard.querySelector("#heading").textContent.trim(),
            description: productCard.querySelector("p").textContent.trim(),
            price: productCard.querySelector("h6").textContent.trim()
        };

        localStorage.setItem("selectedProduct", JSON.stringify(productDetails));

        console.log("Product stored:", localStorage.getItem("selectedProduct")); // Debugging

        window.location.href = "product-details.html"; // Redirect to details page
    });
});
