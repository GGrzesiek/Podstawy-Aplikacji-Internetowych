var productForm = document.getElementById('productForm');
var saveProductBtn = document.getElementById('saveProduct');
var displayCartBtn = document.getElementById('displayCart');
var clearCartBtn = document.getElementById('clearCart');
var cartDisplay = document.getElementById('cartDisplay');

saveProductBtn.addEventListener('click', () => {
    var product = {
        name: productForm.productName.value,
        price: productForm.productPrice.value,
        color: productForm.productColor.value,
        quantity: productForm.productQuantity.value
    };

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Produkt dodany do koszyka!');
});

displayCartBtn.addEventListener('click', () => {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    if (cartItems.length === 0) {
        cartDisplay.innerHTML = "<p>Koszyk jest pusty.</p>";
    } else {
        var tableHTML = "<table><tr><th>Nazwa</th><th>Cena</th><th>Kolor</th><th>Liczba sztuk</th></tr>";
        cartItems.forEach(item => {
            tableHTML += `<tr><td>${item.name}</td><td>${item.price}</td><td>${item.color}</td><td>${item.quantity}</td></tr>`;
        });
        tableHTML += "</table>";
        cartDisplay.innerHTML = tableHTML;
    }
});

clearCartBtn.addEventListener('click', () => {
    localStorage.removeItem('cartItems');
    cartDisplay.innerHTML = "<p>Koszyk został opróżniony.</p>";
});
