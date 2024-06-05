var productForm = document.getElementById('productForm');
var saveProductBtn = document.getElementById('saveProduct');
var displayCartBtn = document.getElementById('displayCart');
var clearCartBtn = document.getElementById('clearCart');
var cartDisplay = document.getElementById('cartDisplay');
var searchInput = document.getElementById('searchInput');

saveProductBtn.addEventListener('click', saveProduct);

function saveProduct() {
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
    productForm.reset();
}

displayCartBtn.addEventListener('click', () => {
    displayCart(); 
});

clearCartBtn.addEventListener('click', () => {
    localStorage.removeItem('cartItems');
    cartDisplay.innerHTML = "<p>Koszyk został opróżniony.</p>";
});

function displayCart(filter = '') {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var filteredItems = cartItems.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    if (filteredItems.length === 0) {
        cartDisplay.innerHTML = "<p>Koszyk jest pusty.</p>";
    } else {
        var tableHTML = "<table><tr><th>Nazwa</th><th>Cena</th><th>Kolor</th><th>Liczba sztuk</th><th>Akcje</th></tr>";
        filteredItems.forEach((item, index) => {
            tableHTML += `<tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.color}</td>
                <td>${item.quantity}</td>
                <td class="actions">
                    <button onclick="editItem(${index})">Edytuj</button>
                    <button onclick="deleteItem(${index})">Usuń</button>
                </td>
            </tr>`;
        });
        tableHTML += "</table>";
        cartDisplay.innerHTML = tableHTML;
    }
}

function editItem(index) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var item = cartItems[index];

    productForm.productName.value = item.name;
    productForm.productPrice.value = item.price;
    productForm.productColor.value = item.color;
    productForm.productQuantity.value = item.quantity;

    saveProductBtn.textContent = "Aktualizuj produkt";
    saveProductBtn.removeEventListener('click', saveProduct);

    saveProductBtn.addEventListener('click', function updateHandler() {
        updateProduct(index);
        saveProductBtn.textContent = "Zapisz produkt";
        saveProductBtn.removeEventListener('click', updateHandler);
        saveProductBtn.addEventListener('click', saveProduct); 
    });
}

function updateProduct(index) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems[index] = {
        name: productForm.productName.value,
        price: productForm.productPrice.value,
        color: productForm.productColor.value,
        quantity: productForm.productQuantity.value
    };
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Produkt zaktualizowany!');
    productForm.reset();
    saveProductBtn.textContent = "Zapisz produkt";
    saveProductBtn.removeEventListener('click', updateProduct);
    saveProductBtn.addEventListener('click', saveProduct);
    displayCart();
}

function deleteItem(index) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCart(); 
}

searchInput.addEventListener('input', () => {
    displayCart(searchInput.value);
});

displayCart();
