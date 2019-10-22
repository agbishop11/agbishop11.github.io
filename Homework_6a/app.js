
//Remove item from cart
var rmvCartItemsButton = document.getElementsByClassName('rmv-button')
for (var i=0; i < rmvCartItemsButton.length; i++) {
    var button=rmvCartItemsButton[i]
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateTotalCart()
    })
}



//Update shopping cart subtotal
function updateTotalCart() {
    var shoppingCartContainer = document.getElementsByClassName('shopping-cart')[0]
    var shoppingCartItems = shoppingCartContainer.getElementsByClassName('item')
    var total = 0
    for (var i = 0; i < shoppingCartItems.length; i++ ) {
        var singleItem = shoppingCartItems[i]
        var priceHolder = singleItem.getElementsByClassName('total-price')[0]
        var qtyHolder = singleItem.getElementsByClassName('cart-qty')[0]
        var price = parseFloat(priceHolder.innerText.replace('$', ''))
        var qty = qtyHolder.value
        total = (total + (price * qty))
    }
    let newTotal=total.toFixed(2)
    document.getElementById('subtotal').innerText='$'+newTotal
    var totalFinal= parseFloat(document.getElementById('total-final').innerText.replace('$',''));
    var taxCost= parseFloat(document.getElementById('tax-cost').innerText.replace('$',''));
    var shippingCost= parseFloat(document.getElementById('shipping-cost').innerText.replace('$',''));
}





//Update the cart icon with number of items currently in cart
//Increasing cart icon when items are added to cart
function updateCartIcon() {
let cartIcon = parseInt(document.getElementById('lblCartCount').innerText);
total = cartIcon
total = total + 1
document.getElementById('lblCartCount').innerText = total
console.log(total);
}

let browseBuy = document.getElementsByClassName('cart-button')
console.log(browseBuy)
for (var i=0; i < browseBuy.length; i++) {
    var button=browseBuy[i]
    button.addEventListener('click', function() {
        updateCartIcon()
    })
}

var qtyInputs = document.getElementsByClassName('cart-qty')
for (var i=0; i < qtyInputs.length; i++) {
    var input = qtyInputs[i]
    input.addEventListener('change', function(event) {
        var inputChanged = event.target
        if (isNaN(inputChanged.value)) {
            inputChanged.value=1
        }
    updateTotalCart()
    })
}

//Decrease the cart icon when items are removed from shopping cart
function decreaseCartIcon(){
  let cartIcon = parseInt(document.getElementById('lblCartCount').innerText);
total = cartIcon
total = total -1
document.getElementById('lblCartCount').innerText = total
}
  for (var i=0; i < rmvCartItemsButton.length; i++) {
    var button=rmvCartItemsButton[i]
    button.addEventListener('click', function() {
        decreaseCartIcon()
    })
}





//Select product filling
let fillingChoiceButton = document.getElementsByClassName('filling-option')
console.log(fillingChoiceButton)
for (var i=0; i <fillingChoiceButton.length; i++) {
    var button=fillingChoiceButton[i];
    button.addEventListener('click', function (event) {
        for (var u=0; u <fillingChoiceButton.length; u++) {
            console.log(fillingChoiceButton[u])
        fillingChoiceButton[u].style.backgroundColor = '';
        fillingChoiceButton[u].style.fontWeight = '';
        fillingChoiceButton[u].style.color = '';
    }
        var buttonClicked = event.target;
        buttonClicked.style.backgroundColor = 'grey';
        buttonClicked.style.fontWeight = 700;
        buttonClicked.style.color = 'white';
    })
}




//Select product color
let colorChoiceButton = document.getElementsByClassName('color-choice-btn')
for (var i=0; i <colorChoiceButton.length; i++) {
    var button=colorChoiceButton[i];
    button.addEventListener('click', function (event) {
        for (var u=0; u <colorChoiceButton.length; u++) {
        colorChoiceButton[u].style.backgroundColor = '';
        colorChoiceButton[u].style.fontWeight = '';
        colorChoiceButton[u].style.color = '';
    }
        var buttonClicked = event.target;
        buttonClicked.style.backgroundColor = 'grey';
        buttonClicked.style.fontWeight = 700;
        buttonClicked.style.color = 'white';
    })
}



//code that may be used for assignment 6B (adding items to cart). Currently not working. Cannot access the src element for images.
`theButton.addEventListener('click', function(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName("prod-title")[0].innerText;
    var price = shopItem.getElementsByClassName("product-price")[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    console.log(title, price, imageSrc);
    addItemToCart(title,price,imageSrc);
})

function addItemToCart(title,price,imageSrc) {
    var shoppingCartRow = document.createElement('div');
    shoppingCartRow.innerText = title;
    var cartItems = document.getElementsByClassName('item')[0];
    console.log(cartItems)
    cartItems.append(shoppingCartRow);
}`



//shopping cart functions for the qty increase and decrease buttons. Currently unable to access the input values of the qty buttons, so put onclick directly into the HTML. Failed code is below active code.
function increaseValue1() {
  var value = parseInt(document.getElementById('number-1').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number-1').value = value;
  updateTotalCart()
}

function decreaseValue1() {
  var value = parseInt(document.getElementById('number-1').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number-1').value = value;
  updateTotalCart()
}

function increaseValue2() {
  var value = parseInt(document.getElementById('number-2').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number-2').value = value;
  updateTotalCart()
}

function decreaseValue2() {
  var value = parseInt(document.getElementById('number-2').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number-2').value = value;
  updateTotalCart()
}

function increaseValue3() {
  var value = parseInt(document.getElementById('number-3').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number-3').value = value;
  updateTotalCart()
}

function decreaseValue3() {
  var value = parseInt(document.getElementById('number-3').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number-3').value = value;
  updateTotalCart()
}

`var increaseQty = document.getElementsByClassName('more')
for (var i=0; i < increaseQty.length; i++) {
    var button = increaseQty[i]
    var changedNum = document.getElementsByClassName('cart-qty')[0].value
    button.addEventListener('click', function(event) {
        console.log('clicked')
        var buttonClicked = event.target
        changedNum++
        console.log(changedNum)
        })
    document.getElementsByClassName('cart-qty')[0].textContent = changedNum

    updateTotalCart()
}`
