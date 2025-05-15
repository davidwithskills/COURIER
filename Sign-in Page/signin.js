document.addEventListener("DOMContentLoaded", function () {
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById("username").value.trim();
    const address = document.getElementById("address").value.trim();
    const itemName = document.getElementById("itemName").value.trim();
    const weight = document.getElementById("weight").value.trim();
    const description = document.getElementById("description").value.trim();

    // Validation
    if (!validateUsername(username)) return;
    if (!validateAddress(address)) return;
    if (!validateItemName(itemName)) return;
    if (!validateWeight(weight)) return;
    if (!validateDescription(description)) return;

    // Store data in local storage
    const userData = { username, address, itemName, weight, description };

    try {
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log("User data stored:", userData);
    } catch (error) {
        console.error("Error storing data in localStorage:", error);
        alert("An error occurred while saving your data. Please try again.");
        return;
    }

    // Redirect to profile page
    console.log("Redirecting to profile page...");
    window.location.href = "../Profile/profile.html";
});

// Validation functions
function validateUsername(username) {
    if (!username) {
        alert("Username cannot be empty.");
        return false;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        alert("Username can only contain letters, numbers, and underscores.");
        return false;
    }
    if (username.length > 50) {
        alert("Username cannot exceed 50 characters.");
        return false;
    }
    return true;
}

function validateAddress(address) {
    if (!address) {
        alert("Address cannot be empty.");
        return false;
    }
    if (address.length > 100) {
        alert("Address cannot exceed 100 characters.");
        return false;
    }
    return true;
}

function validateItemName(itemName) {
    if (!itemName) {
        alert("Item Name cannot be empty.");
        return false;
    }
    if (!/^[a-zA-Z0-9\s]+$/.test(itemName)) {
        alert("Item Name can only contain letters, numbers, and spaces.");
        return false;
    }
    return true;
}

function validateWeight(weight) {
    if (!weight || isNaN(weight) || weight <= 0) {
        alert("Weight must be a positive number.");
        return false;
    }
    if (weight > 1000) {
        alert("Weight cannot exceed 1000 kg.");
        return false;
    }
    return true;
}

function validateDescription(description) {
    if (description.length > 500) {
        alert("Description cannot exceed 500 characters.");
        return false;
    }
    return true;
}}
