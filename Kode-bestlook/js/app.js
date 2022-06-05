//select elements//
const productsEl = document.querySelector('.products');

// RENDER PRODUCTS
function renderProdcuts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
        <div class="column">
          <img class ="img" src="${product.imgSrc}" alt="${product.name}">
          <h1>${product.name}</h1>
          <h2>${product.description}</h2>
          <p>${product.price}</p>
          <button type="button" name="button" class="btn addToCart">Tilføj til <br> kurv</button>
          <div class="icon-column">
            <i class="fa-solid fa-heart"></i>
          </div>
        `;
  });
}
renderProdcuts();
//Add to Cart//
function addToCart(id){
  console.log(id);
}
