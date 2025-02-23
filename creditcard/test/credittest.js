// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector(".payment-container");
//     const cardNumber = document.getElementById("card-number");
//     const cardHolder = document.getElementById("card-holder");
//     const expiryMM = document.getElementById("expiry-mm");
//     const expiryYY = document.getElementById("expiry-yy");
//     const cvv = document.getElementById("cvv");
//     const submitButton = document.querySelector("button");

//     submitButton.addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent form from submitting immediately

//         let isValid = true;
//         let messages = [];

//         // Validate card number (must be 16 digits)
//         const cardNumberValue = cardNumber.value.replace(/\s/g, ""); // Remove spaces
//         if (!/^\d{16}$/.test(cardNumberValue)) {
//             isValid = false;
//             messages.push("Card number must be 16 digits.");
//         }

//         // Validate cardholder name (must not be empty)
//         if (cardHolder.value.trim() === "") {
//             isValid = false;
//             messages.push("Cardholder name is required.");
//         }

//         // Validate expiration date (MM & YY must be numbers)
//         if (!/^\d{2}$/.test(expiryMM.value) || expiryMM.value < 1 || expiryMM.value > 12) {
//             isValid = false;
//             messages.push("Expiration month must be between 01 and 12.");
//         }
//         if (!/^\d{2}$/.test(expiryYY.value) || expiryYY.value < 24) { // Assuming cards expire beyond 2024
//             isValid = false;
//             messages.push("Expiration year must be a valid future year.");
//         }

//         // Validate CVV (must be 3 or 4 digits)
//         if (!/^\d{3,4}$/.test(cvv.value)) {
//             isValid = false;
//             messages.push("CVV must be 3 or 4 digits.");
//         }

//         // Show alert or process the form
//         if (!isValid) {
//             alert(messages.join("\n"));
//         } else {
//             alert("Payment processed successfully!");
//             form.reset(); // Clear the form
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const cardNumber = document.getElementById("card-number");
    const expiryMM = document.getElementById("expiry-mm");
    const expiryYY = document.getElementById("expiry-yy");
    const cvv = document.getElementById("cvv");
    const cardHolder = document.getElementById("card-holder");
    const submitButton = document.querySelector("button");

    // Auto-format card number (adds spaces after every 4 digits)
    cardNumber.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        value = value.replace(/(\d{4})/g, "$1 ").trim(); // Add space every 4 digits
        e.target.value = value;
    });

    // Ensure expiry month is between 01-12
    expiryMM.addEventListener("input", function () {
        let value = expiryMM.value.replace(/\D/g, ""); // Remove non-numeric characters
        if (value.length === 2 && (value < "01" || value > "12")) {
            expiryMM.value = "";
            alert("Enter a valid month (01-12).");
        }
    });

    // Ensure expiry year is in the future
    expiryYY.addEventListener("input", function () {
        let value = expiryYY.value.replace(/\D/g, ""); // Remove non-numeric characters
        let currentYear = new Date().getFullYear() % 100; // Get last 2 digits of the current year
        if (value.length === 2 && value < currentYear) {
            expiryYY.value = "";
            alert("Enter a valid future year.");
        }
    });

    // Limit CVV input to 3 or 4 digits
    cvv.addEventListener("input", function () {
        cvv.value = cvv.value.replace(/\D/g, "").slice(0, 4);
    });

    // Form Validation on Submit
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent actual form submission

        let errors = [];

        // Validate Card Number
        if (cardNumber.value.replace(/\s/g, "").length !== 16) {
            errors.push("Card number must be 16 digits.");
        }

        // Validate Cardholder Name
        if (cardHolder.value.trim() === "") {
            errors.push("Cardholder name is required.");
        }

        // Validate Expiry Date
        if (expiryMM.value.length !== 2 || expiryYY.value.length !== 2) {
            errors.push("Expiration date must be complete (MM/YY).");
        }

        // Validate CVV
        if (cvv.value.length < 3 || cvv.value.length > 4) {
            errors.push("CVV must be 3 or 4 digits.");
        }

        // Display errors or process payment
        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            alert("Payment processed successfully!");
            document.querySelector(".credit-card").reset(); // Reset the form
        }
    });
});

