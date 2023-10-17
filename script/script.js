let numberOfCartItem = document.querySelector('.result');
const increaseCartItem = document.querySelector('.increment');
const decreaseCartItem = document.querySelector('.decrement');
const submit = document.querySelector('.submit');
const products = document.querySelector('.products');
const cartContentImage = document.querySelector('.cart-content-image');
const contentPara = document.querySelector('.content-para');
console.log(contentPara);
const cartContent = document.querySelector('.cart-content');

let value = 0;
increaseCartItem.addEventListener('click', () => {
    value = Number(numberOfCartItem.textContent);
    value += 1;
    numberOfCartItem.textContent = value;
});
decreaseCartItem.addEventListener('click', () => {
    value = Number(numberOfCartItem.textContent);
    value -= 1;
    numberOfCartItem.textContent = value;
});
const cartItems = document.querySelector('#cart');
const cartBox = document.querySelector('.cart-box');

// display the number of cart item after being added to cart
const cartReading = document.createElement('span');
const cartDiv = document.querySelector('.cart-div');
cartDiv.appendChild(cartReading);
cartReading.style.position = 'absolute';
cartReading.style.top = '12px';
cartReading.style.marginLeft = '9px';
cartReading.style.fontSize = '8px';
cartReading.style.backgroundColor = 'hsl(26, 100%, 55%)';
cartReading.style.color = '#fff';
cartReading.style.padding = '1px 3px';
cartReading.style.display = 'none';
cartReading.style.borderRadius = '5px';

//mobile display selector
const displayImage = document.querySelector('.displayimage');
const forward = document.querySelector('.foward');
const backward = document.querySelector('.backward');

const imageLocations = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'];
let test = 0;

//scroll through products in mbile mode
forward.addEventListener('click', () => {
    test++;
    if (test === 1) {
        displayImage.src = `images/${imageLocations[1]}`;
    };

    if (test === 2) {
        displayImage.src = `images/${imageLocations[2]}`;
    };
    if (test === 3) {
        displayImage.src = `images/${imageLocations[imageLocations.length - 1]}`;
    }
});

backward.addEventListener('click', () => {
    test--;
    if (test === 1) {
        displayImage.src = `images/${imageLocations[1]}`;
    };

    if (test === 2) {
        displayImage.src = `images/${imageLocations[2]}`;
    };
    if (test === 3) {
        displayImage.src = `images/${imageLocations[imageLocations.length - 1]}`;
    }
    if (test === 0) {
        displayImage.src = `images/${imageLocations[0]}`;
    }
});
let clickNum = 0;

clickNum++;

products.addEventListener('click', (e) => {
    e.target.style.opacity = '0.3';
    e.target.style.border = '3px solid hsl(26,100%,55%)';
    displayImage.src = e.target.src;

});


submit.addEventListener('click', (e) => {
    cartReading.style.display = 'block';
    cartReading.textContent = numberOfCartItem.textContent;
    submit.style.opacity = '0.6';
    contentPara.textContent += ` x ${numberOfCartItem.textContent}  $${numberOfCartItem.textContent * 125}.00`;
    cartContentImage.src = displayImage.src;

    if (value !== 0) {
        cartContent.style.display = 'block';
    } else if (value === 0 || value === ' ') {
        cartContent.style.display = 'none';
        const para = document.createElement('p');
        para.textContent = 'Your cart is empty.';
        cartBox.appendChild(para);
        /*para.style.display = 'none';
        para.style.textAlign = 'center';
        para.style.margin = '4.5em 0';
        para.style.fontWeight = '6000';
        para.style.color = '#999';*/
        para.setAttribute('class', 'emptycart');
    }
    e.currentTarget.disabled = 'true';
});
cartItems.addEventListener('click', () => {
    cartBox.style.display = 'block';
});