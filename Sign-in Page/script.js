document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const address = document.getElementById('address').value;
    
    // Display order confirmation
    const orderOutput = document.getElementById('orderOutput');
    orderOutput.innerHTML = `<p>Order placed by <strong>${username}</strong> for delivery to <strong>${address}</strong>.</p>`;

    // Clear the form
    this.reset();
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const address = document.getElementById('address').value;
    const itemName = document.getElementById('itemName').value;
    const weight = document.getElementById('weight').value;
    const description = document.getElementById('description').value;

    // Store data in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('address', address);
    localStorage.setItem('itemName', itemName);
    localStorage.setItem('weight', weight);
    localStorage.setItem('description', description);

    // Redirect to profile page
    window.location.href = '../Profile/profile.html'; // This should work
});
