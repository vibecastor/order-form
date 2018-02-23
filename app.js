'use strict'
//The main global array that stores the instances of Product.
Product.products = []; 

//a constructor function to make the product objects
function Product(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  Product.products.push(this);
  // console.log('New product instance ' + name + ' created.');
}

//instances of the object Product
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntan', 'img/tauntaun.jpg');
new Product('unicorm', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');


//click event handler for the dropdown
function populateCart() {
  console.log('submit was clicked');
  if (window.localStorage) {
    var submitWasClicked = document.getElementById('submit');
    submitWasClicked.value = localStorage.getItem('submit');
    submitWasClicked.addEventListener('input', function () {
      localStorage.setItem('submit', submitWasClicked.value);
    }, false);
    }
};

// document.getElementById("submit").addEventListener("click", populateCart);



// var cartItems = [];

// var cartItemsToExport = {
//   name: '',
//   quantity: '',
// };

// var storedCartItems;
//   if (localStorage.items)
//   items = JSON.parse.stringify()
//   else {
//     items = [];
//     items.push(cartItemsToExport)
//     localStorage.setItem(items, JSON.stringify(items))
//   };

