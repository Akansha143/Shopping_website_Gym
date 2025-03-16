document.addEventListener("DOMContentLoaded", function () {
    // Retrieve product details from localStorage
    const productData = JSON.parse(localStorage.getItem("selectedProduct"));

    if (productData) {
        // Update the product details section
        document.getElementById("product-image").src = productData.image;
        document.getElementById("product-name").textContent = productData.name;
        document.getElementById("product-description").textContent = productData.description;
        document.getElementById("product-price").textContent = productData.price;

        // Ensure quantity is a number, if it's not set, default to 1
        let quantity = parseInt(productData.quantity, 10) || 1;

        // Display the quantity
        const quantityElement = document.querySelector('.quantity');
        quantityElement.textContent = quantity;

        // Quantity controls on product details page
        const decreaseButton = document.getElementById("decrease");
        const increaseButton = document.getElementById("increase");

        // Increase quantity
        increaseButton.addEventListener("click", () => {
            quantity++;
            quantityElement.textContent = quantity;
        });

        // Decrease quantity
        decreaseButton.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });

        // Size selection functionality
        let selectedSize = null; // Variable to store the selected size
        const sizeButtons = document.querySelectorAll('.size-btn');
        sizeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'selected' class from all buttons
                sizeButtons.forEach(btn => btn.classList.remove('selected'));
                // Add 'selected' class to the clicked button
                button.classList.add('selected');
                // Store the selected size
                selectedSize = button.textContent.trim();
            });
        });

        // Add to cart functionality
        document.getElementById("add-to-cart").addEventListener("click", () => {
            // Show the success message as an alert
            alert(`${productData.name} has been added to the cart!`);

            // Optionally, show a message on the page
            const cartMessage = document.getElementById("cart-message");
            cartMessage.style.display = "block";  // Show the message

            // Optionally, hide the message after 3 seconds
            setTimeout(() => {
                cartMessage.style.display = "none";  // Hide the message after 3 seconds
            }, 3000);

            // Prepare the product to be added to the cart
            const product = {
                name: productData.name,
                image: productData.image,
                price: productData.price,
                quantity: quantity,
                size: selectedSize || 'Not specified', // Include the selected size
            };

            // Get the cart from localStorage, or create an empty cart if none exists
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if the product is already in the cart
            const existingProduct = cart.find(item => item.name === product.name && item.size === product.size);

            if (existingProduct) {
                existingProduct.quantity += product.quantity; // Update quantity
            } else {
                cart.push(product); // Add new product to the cart
            }

            // Save the updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update cart icon and quantity
            updateCartIcon();
        });

    } else {
        // Display a message if no product is found in localStorage
        document.body.innerHTML = "<h2 style='color: white; text-align: center;'>No product details found. Please add a product first.</h2>";
    }

    // Update the cart icon and quantity display
    const cartIcon = document.getElementById("cart-icon");
    const cartCount = document.getElementById("cart-count");

    // Function to update the cart icon
    function updateCartIcon() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);  // Show total quantity
        cartCount.style.display = cart.length > 0 ? "block" : "none";
    }

    // Initialize the cart icon on page load
    updateCartIcon();

    // Cart Icon click event to redirect to the cart page
    cartIcon.addEventListener("click", function () {
        window.location.href = "cart.html";  // Redirect to cart.html
    });
});