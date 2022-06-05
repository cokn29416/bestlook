/* app.js */

// SELECT ELEMENTS
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart")

// RENDER PRODUCTS
function renderProducts() {
  products.forEach((product) => {
    productsEl.innerHTML += //used to not overwrite innerhtml//
    `         <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>$</small>${product.price}</h2>
                        <p>
                            ${product.description}
                        </p>
                    </div>
                    <div class="add-to-wishlist">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <button class="add-to-cart btn" onclick="addToCart(${product.id})">Tilføj til kurv</button>
                </div>
            </div>
        `;
  });
}
renderProducts();

//Cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();
//Add to cart
function addToCart(id){
  //Check if product exist
  if(cart.some((item) => item.id === id)){
    changeNumberOfUnits("plus", id)
  }else{
    const item = products.find ((product) => product.id === id) //Want to find the product ind the product array

    cart.push({
      ...item,
      numberOfUnits : 1
    });
  }

  updateCart();
}

//Update CART
function updateCart(){
  renderCartItems();
  renderSubtotal();

  //save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

//calculate and render Subtotal
function renderSubtotal() {
  let totalPrice = 0, totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  })

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): ${totalPrice} DKK`;
  totalItemsInCartEl.innerHTML = totalItems;
}

//Render cart items
function renderCartItems(){
  cartItemsEl.innerHTML = ""; //Clear cart element
  cart.forEach ((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                ${item.price} <small>DKK</small>
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
            </div>
        </div>
    `
  })
}

//Remove cart items
function removeItemFromCart (id){
  cart = cart.filter((item) => item.id !== id)

  updateCart();
}
//Filter will filter array cart based on the condition

//Change number og units for an item
function changeNumberOfUnits(action, id){
  cart = cart.map((item) => {

    let numberOfUnits = item.numberOfUnits;

    if(item.id === id){
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits --
      }else if(action === "plus" && numberOfUnits <item.instock){
        numberOfUnits++;
      }
    }
    return{
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

//Map is just in arrays. Maps find an old array and update it
