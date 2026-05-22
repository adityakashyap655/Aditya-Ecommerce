let cart = [];
let total = 0;

const cartSidebar = document.getElementById("cart-sidebar");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cartIcon = document.querySelector(".cart-icon");
const closeCart = document.getElementById("close-cart");

// Open Cart
cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("active");
});

// Close Cart
closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});

// Add To Cart
function addToCart(productName, productPrice) {

    cart.push({
        name: productName,
          price: productPrice
    });

    total += productPrice;

    updateCart();
}

// Update Cart
function updateCart() {

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        let div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
       