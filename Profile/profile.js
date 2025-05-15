document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Log data to verify
    console.log("Retrieved user data:", userData);

    if (userData) {
        // Display the data on the profile page
        document.getElementById("profileUsername").textContent = userData.username;
        document.getElementById("profileAddress").textContent = userData.address;
        document.getElementById("profileItemName").textContent = userData.itemName;
        document.getElementById("profileWeight").textContent = `${userData.weight} kg`;
        document.getElementById("profileDescription").textContent = userData.description;
    } else {
        // Handle case where no data is found
        document.querySelector(".container").innerHTML = "<p>No user data found.</p>";
    }
});