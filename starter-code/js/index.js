//MIA - Ironhack Lab - Merchandising Shopping Cart Project

//--------------------------------------------------------------------------------------------------------------------

function createProduct() {
  //Checking products already in current inventory.
  var products = document.getElementsByClassName('product-wrapper');

  //Creating a new product mumber.
  var productNumber = products.length + 1;

  //Obtaining new product information.
  var productName = document.getElementById("product-name").value;
  var productPrice = parseInt(document.getElementById("product-price").value);
  floatPrice = productPrice.toFixed(2);

  //Generating new product tags.
  var newProduct = document.createElement("div");
  newProduct.innerHTML = "<div id='product-" + productNumber + "' class='product-wrapper'><span class='product-name'>" + productName + "</span><div><span class='dolar-sign'>$</span><span class='product-price'>" + floatPrice + "</span></div><div><label>Quantity</label><input type='number' name='qty' class='input product-qty' value='1' onchange='updateProductPrice()' /></div><div><span>$</span><span class='total-price'>" + floatPrice + "</span></div><div><button class='btn-delete' onclick='deleteProduct(`product-" + productNumber + "`)'>Delete</button></div></div>";

  //Positioning and setting the new products.
  var parent = document.getElementsByTagName("body");
  var before = document.getElementsByClassName("calculate-price");
  parent[0].insertBefore(newProduct, before[0]);
}

//-------------------------------------------------------------------------------------------------------------------------

//This function will delete existing or newly created products.
function deleteProduct(num) {
  var parent = document.getElementsByTagName("body");
  var child = document.getElementById(num);
  child.parentElement.removeChild(child);
}

//--------------------------------------------------------------------------------------------------------------------------

function updateProductPrice() {
  //Obtainng product prices.
  var getProdPrices = document.getElementsByClassName('product-price');
  var prodPrices = [];
  for (i = 0; i < getProdPrices.length; i++) {
    prodPrices.push(getProdPrices[i].innerHTML);
  }

  //Obtaining a products info and current inventory quantity.
  var getProdQty = document.getElementsByClassName('product-qty');
  var prodQty = [];
  for (a = 0; a < getProdQty.length; a++) {
    prodQty.push(getProdQty[a].value);
  }

  //Producing the results of product info, prices.
  var res = prodPrices.map(function (productPrice, index) {
    return prodPrices[index] * prodQty[index];
  });

  //Generate and print results outcome for products info, total price.
  for (b = 0; b < res.length; b++) {
    price = res[b].toFixed(2);
    document.getElementsByClassName("total-price")[b].innerHTML = price;
  }
}

//--------------------------------------------------------------------------------------------------------------------------

function calculateFinalPrice() {
  //Producing a products updated prices.
  var getPrices = document.getElementsByClassName('total-price');
  var finalPrices = [];
  for (c = 0; c < getPrices.length; c++) {
    var toInteger = parseInt(getPrices[c].innerHTML);
    finalPrices.push(toInteger);
  }
  //Summing up the results for final pricing on products.
  var res = finalPrices.reduce(function (res1, res2) {
    return res1 + res2;
  });
  //Generate and print results outcome for products info, final price.
  price = res.toFixed(2);
  document.getElementsByClassName("final-price")[0].innerHTML = price;
}

//--------------------------------------------------------------------------------------------------------------------------

window.onload = updateProductPrice;

