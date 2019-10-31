
//discover color of selected Product
/*
var colorArr = document.getElementsByClassName('color-choice-btn')
var color
for (vari=0; i <colorArr.length; i++) {
    var button=colorArr[i]
    button.addEventListener('click', function (event) {
        color = button.innerText
        console.log(color)
  })
}
console.log(colorArr)
*/


//creating and sending to session storage
var productArr=[]
var cartGuy = sessionStorage.getItem('cart');
var cart = JSON.parse(cartGuy);
if (cart!=null){
  productArr=cart
  console.log(productArr)
  console.log(cart)
}

//Send Couch Pillow in Product Page to Server
function sendProductToServer0(){
  var productObject = {};
  productObject.title='Couch Pillow'
  productObject.color=colorSelection;
  productObject.filling=fillingSelection;
  productObject.image='pillow1.png';
  productObject.price = "$19.99";
  productArr.push(productObject);
  sessionStorage.setItem("cart",JSON.stringify(productArr))
  console.log(productArr)
}

//Send Couch Pillow in Browse Page to Server
function sendProductToServer1(){
  var productObject1 = {};
  productObject1.title='Couch Pillow'
  productObject1.color='Rainy Day';
  productObject1.filling='Memory Foam';
  productObject1.price = "$19.99";
  productObject1.image='pillow1.png';
  productArr.push(productObject1);
  sessionStorage.setItem("cart",JSON.stringify(productArr))
  console.log(productArr)
}

//Send Bed pillow in Browse Page to server
function sendProductToServer2(){
  var productObject2 = {};
  productObject2.title='Bed Pillow'
  productObject2.color='Rainy Day';
  productObject2.filling='Memory Foam';
  productObject2.price = "29.99";
  productObject2.image='pillow2.png';
  productArr.push(productObject2);
  sessionStorage.setItem("cart",JSON.stringify(productArr))
  console.log(productArr)
}



//Send Round Pillow in Browse Page to server
function sendProductToServer3(){
  var productObject3 = {};
  productObject3.title='Round Pillow'
  productObject3.color='Rainy Day';
  productObject3.filling='Memory Foam';
  productObject3.price = "$39.99";
  productObject3.image='pillow3.png';
  productArr.push(productObject3);
  sessionStorage.setItem("cart",JSON.stringify(productArr))
  console.log(productArr)
}

//function to run at page load
function productLoad1(){
      function setCartTotal(){
      let numberOfItems= productArr.length + 3
      document.getElementById('lblCartCount').innerText = numberOfItems;}
  setCartTotal()
  // how to get this to run on page load? updateTotalCart()
  for (var i=0; i < productArr.length; i++){
    var cartRow = document.createElement('div')
    cartRow.classList.add('item')
    cartRow.setAttribute('id',i)
    var entireShoppingCart=document.getElementById('shopping-cart-id')
    var newImage = document.createElement('div')
    newImage.classList.add('image')
    cartRow.append(newImage)
    var actualImage = document.createElement('img')
    actualImage.src = productArr[i].image
    newImage.append(actualImage)
    var itemDesc = document.createElement('div')
    itemDesc.classList.add('item-desc')
    cartRow.append(itemDesc)
    var newTitle=document.createElement('span')
    newTitle.innerHTML = productArr[i].title
    itemDesc.append(newTitle)
    entireShoppingCart.append(cartRow)
    var newFilling = document.createElement('span')
    newFilling.innerHTML=productArr[i].filling
    itemDesc.append(newFilling)
    var newColor = document.createElement('span')
    newColor.innerHTML=productArr[i].color
    itemDesc.append(newColor)
    var quant = document.createElement('div')
    quant.classList.add('qty')
    cartRow.append(quant)
    var minusBtn = document.createElement('button')
    minusBtn.classList.add('less')
    quant.append(minusBtn)
    var minusIcon = document.createElement('i')
    minusIcon.classList.add('fas')
    minusIcon.classList.add('fa-minus')
    minusBtn.append(minusIcon)
    var inputSpace = document.createElement('input')
    inputSpace.classList.add('cart-qty')
    inputSpace.classList.add('cart-qty-1')
    inputSpace.value = 1
    quant.append(inputSpace)
    var plusBtn = document.createElement('button')
    plusBtn.classList.add('more')
    quant.append(plusBtn)
    var plusIcon = document.createElement('i')
    plusIcon.classList.add('fas')
    plusIcon.classList.add('fa-plus')
    plusBtn.append(plusIcon)
    var remvElement= document.createElement('div')
    remvElement.classList.add('remove')
    quant.append(remvElement)
    var remvBtn = document.createElement('button')
    remvBtn.classList.add('rmv-button')
    remvBtn.innerHTML='Remove'
    remvBtn.type = 'button'
    remvElement.append(remvBtn)
    var newPrice = document.createElement('div')
    newPrice.classList.add('total-price')
    newPrice.innerHTML=productArr[i].price
    cartRow.append(newPrice)
    updateTotalCart()
    //remvBtn.onclick = function removeStorage(){
      //productArr.splice(i,1)
      //sessionStorage.setItem("cart",JSON.stringify(productArr))
//}
}

var rmvCartItemsButton = document.getElementsByClassName('rmv-button')
for (var j=0; j < rmvCartItemsButton.length; j++) {
    var button=rmvCartItemsButton[j]
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
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
        //updateTotalCart()
    })
}
}


//set the number of items in the cart icon
function setCartTotal(){
let numberOfItems= productArr.length + 3
document.getElementById('lblCartCount').innerText = numberOfItems;}



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
}


//Capture and set selected color in Product Page
var colorSelection
function selectColor(){
  colorSelection = event.target.innerText
  console.log(colorSelection)
}
//Capture and set selected filling in Product Page
var fillingSelection
function selectFilling(){
  fillingSelection = event.target.innerText
  console.log(fillingSelection)
}

//Update the cart icon with number of items currently in cart
//Increasing cart icon when items are added to cart

console.log('hi from here')

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


//Select product filling
//has global variable
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
//has global variable

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