// Product page: log selected size
const sizeDropdown = document.getElementById('size');
if (sizeDropdown) {
  sizeDropdown.addEventListener('change', function () {
    console.log("Selected size:", this.value);
  });
}

// Add to Cart Button
const addToCartBtn = document.querySelector('.add-to-cart-btn');
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', function () {
    alert("Product added to cart!");
  });
}

// Search bar example (log input on Enter key)
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      console.log("Search for:", this.value);
    }
  });
}
