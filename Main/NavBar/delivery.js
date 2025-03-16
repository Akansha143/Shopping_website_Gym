document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("delivery-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form data
        const formData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            phoneNumber: document.getElementById("phone-number").value,
            flatNo: document.getElementById("flat-no").value,
            buildingName: document.getElementById("building-name").value,
            street: document.getElementById("street").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            pinCode: document.getElementById("pin-code").value,
            paymentMethod: document.getElementById("payment-method").value,
        };

        // Save form data to localStorage (or send it to a server)
        localStorage.setItem("deliveryDetails", JSON.stringify(formData));

        // Redirect to a confirmation page (optional)
        window.location.href = "confirmation.html";
    });
});