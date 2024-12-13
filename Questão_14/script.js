let productsContainer = document.getElementById('productsContainer');

function displayProducts(products) {
    products.forEach(product => {
        let card = document.createElement('div');
        card.className = 'card';

        let productName = document.createElement('h2');
        productName.textContent = product.title;
        card.appendChild(productName);

        let productImage = document.createElement('img');
        productImage.src = product.image;
        card.appendChild(productImage);

        let productPrice = document.createElement('p');
        productPrice.className = 'price';
        productPrice.textContent = `$${product.price}`;
        card.appendChild(productPrice);

        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        card.appendChild(productDescription);

        productsContainer.appendChild(card);
    });
}

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        displayProducts(data);
    })
    .catch(error => {
        console.error('Erro ao buscar os produtos:', error);
    });
