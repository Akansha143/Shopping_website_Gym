// Get the cart items from localStorage (if any)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to update the cart UI
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const totalPriceElement = document.getElementById('total-price');

    // Clear previous cart items
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty!</p>';
        totalPriceElement.innerText = '0';
    } else {
        let total = 0;

        // Loop through the cart and display each item
        cart.forEach((item, index) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');

            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="Product Image" />
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Price: ₹${item.price}</p>
                    <p>Size: ${item.size || 'N/A'}</p>
                    <p>Quantity: <span class="quantity">${item.quantity}</span></p>
                </div>
                <button class="remove-item" data-index="${index}">
                    <i class="fa fa-trash"></i> Remove
                </button>
            `;

            cartItemsContainer.appendChild(cartItemElement);

            // Add to total price
            total += parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity;
        });

        totalPriceElement.innerText = total.toFixed(2);
    }
}

// Function to handle removing an item from the cart
function removeItemFromCart(event) {
    if (event.target.closest('.remove-item')) {
        const index = event.target.closest('.remove-item').getAttribute('data-index');
        cart.splice(index, 1); // Remove item from cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
        updateCart(); // Update cart UI
    }
}

// Function to clear the entire cart
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Function to proceed to checkout
function checkout() {
    
    // Function to proceed to checkout
    window.location.href = "delivery.html"; // Redirect to delivery.html

    // Add your checkout logic here
}

// Event listener for removing items from the cart
document.getElementById('cart-items-container').addEventListener('click', removeItemFromCart);

// Initialize the cart UI
updateCart();