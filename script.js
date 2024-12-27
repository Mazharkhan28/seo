document.addEventListener('DOMContentLoaded', function () {
    // Initial cart setup
    let cart = [];
    let cartSection = document.getElementById('cart-section');
    let cartList = document.getElementById('cart-list');
    let cartTotal = document.getElementById('cart-total');
    let checkoutButton = document.getElementById('checkout-btn');
    let checkoutForm = document.getElementById('order-form');

    // Add to Cart Button Click Event
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            let itemName = event.target.getAttribute('data-item');
            let itemPrice = event.target.getAttribute('data-price');
            let itemImg = event.target.getAttribute('data-img');

            let cartItem = {
                name: itemName,
                price: itemPrice,
                img: itemImg
            };

            // Add item to the cart array
            cart.push(cartItem);
            updateCartDisplay();
        });
    });

    // Update Cart Display
    function updateCartDisplay() {
        if (cart.length === 0) {
            cartSection.style.display = 'none';
        } else {
            cartSection.style.display = 'block';
            cartList.innerHTML = '';  // Clear current cart
            let total = 0;

            cart.forEach(item => {
                let listItem = document.createElement('li');
                listItem.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px;">
                    <span>${item.name}</span
