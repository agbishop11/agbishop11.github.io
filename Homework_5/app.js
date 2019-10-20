var rmvCartItemsButton = document.getElementsByClassName('rmv-button')
for (var i=0; i < rmvCartItemsButton.length; i++) {
    var button=rmvCartItemsButton[i]
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateTotalCart()
    })
}


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
        total = total + (price * qty)
    }
    document.getElementById('subtotal').innerText=total
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

var increaseQty = document.getElementsByClassName('more')
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
}


function updateCartIcon() {
let cartIcon = parseInt(document.getElementById('lblCartCount').innerText);
total = cartIcon
total = total + 1
document.getElementById('lblCartCount').innerText = total
console.log(total);
//let cartIconNum = parseInt(cartIcon.getElementById('lblCartCount'));
//cartIconNum++;
}


let buyProduct = document.getElementById('cart-button')
buyProduct.onclick = updateCartIcon;


var theButton = document.getElementById('cart-button');

`theButton.addEventListener('click', function(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName("prod-title")[0].innerText;
    var price = shopItem.getElementsByClassName("product-price")[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    console.log(title, price, imageSrc);
    addItemToCart(title,price,imageSrc);
})`

function addItemToCart(title,price,imageSrc) {
    var shoppingCartRow = document.createElement('div');
    shoppingCartRow.innerText = title;
    var cartItems = document.getElementsByClassName('item')[0];
    console.log(cartItems)
    //cartItems.append(shoppingCartRow);
}
