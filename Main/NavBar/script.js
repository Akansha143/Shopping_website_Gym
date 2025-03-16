document.querySelectorAll('.content').forEach((content) => {
    let increaseBtn = content.querySelector('.increase');
    let decreaseBtn = content.querySelector('.decrease');
    let quantitySpan = content.querySelector('.quantity');
    
    let count = 0;

    increaseBtn.addEventListener('click', () => {
        count++;
        quantitySpan.textContent = count;
        
        // Show the quantity and decrease button when count is at least 1
        quantitySpan.classList.remove('hidden');
        decreaseBtn.classList.remove('hidden');
    });

    decreaseBtn.addEventListener('click', () => {
        if (count > 1) {
            count--;
            quantitySpan.textContent = count;
        } else {
            // Hide the quantity and decrease button when count reaches 0
            count = 0;
            quantitySpan.classList.add('hidden');
            decreaseBtn.classList.add('hidden');
        }
    });
});

// Get the Add to Cart button and quantity info
const addToCartButton = document.getElementById("add-to-cart");
const quantityDisplay = document.querySelector('.quantity');

// Get the product information
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        const productCard = this.closest(".content");

        const productDetails = {
            image: productCard.querySelector("#im").src,
            name: productCard.querySelector("#heading").textContent,
            description: productCard.querySelector("p").textContent,
            price: productCard.querySelector("h6").textContent
        };

        localStorage.setItem("selectedProduct", JSON.stringify(productDetails));

        window.location.href = "product-details.html"; // Redirect to details page
    });
});


