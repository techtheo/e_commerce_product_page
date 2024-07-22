// // ## COUNTER FUNCTIONALITY ##// //

let counter = 0; 
// Initializes a counter variable to 0.

const counterValue = document.getElementById('counter-value'); 
// Selects the element with ID 'counter-value' and stores it in the counterValue variable.

const incrementBtn = document.getElementById('increment-btn'); 
// Selects the element with ID 'increment-btn' and stores it in the incrementBtn variable.

const decrementBtn = document.getElementById('decrement-btn'); 
// Selects the element with ID 'decrement-btn' and stores it in the decrementBtn variable.

const errorMessage = document.getElementById('error-message'); 
// Selects the element with ID 'error-message' and stores it in the errorMessage variable.

incrementBtn.addEventListener('click', function() {
  counter++; 
  // Increments the counter by 1.

  counterValue.textContent = counter; 
  // Updates the text content of the counterValue element to the new counter value.

  errorMessage.textContent = ''; 
  // Clears the error message when incrementing.
});

decrementBtn.addEventListener('click', function() {
  if (counter > 0) {
    counter--; 
    // Decrements the counter by 1 if it's greater than 0.

    counterValue.textContent = counter; 
    // Updates the text content of the counterValue element to the new counter value.

    errorMessage.textContent = ''; 
    // Clears the error message when decrementing.
  } else {
    errorMessage.textContent = "You can't go below 0!"; 
    // Displays an error message if the counter is already at 0.
  }
});


// // ## TOGGLE MENU ON MOBILE SCREEN # // //

function toggleMenu() {
    var menu = document.getElementById("list"); 
    // Selects the element with ID 'list' and stores it in the menu variable.
  
    var menuicon = document.getElementById("menu-icon"); 
    // Selects the element with ID 'menu-icon' and stores it in the menuicon variable.
  
    var overlay = document.querySelector('.overlay'); 
    // Selects the first element with class 'overlay' and stores it in the overlay variable.
  
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block'; 
    // Toggles the display of the overlay between 'block' and 'none'.
  
    // Check both the inline style and computed style
    var isNavHidden = window.getComputedStyle(menu, null).getPropertyValue("display") === "none";
    if (isNavHidden) {
      menu.classList.remove("d-none"); 
      // Removes the 'd-none' class from the menu element.
  
      menu.classList.add("d-flex"); 
      // Adds the 'd-flex' class to the menu element.
  
      menu.classList.add("menu-display"); 
      // Adds the 'menu-display' class to the menu element.
  
      menuicon.innerHTML = '<img src="images/icon-close.svg" alt="Close icon">'; 
      // Changes the menu icon to the close icon.
  
      menuicon.classList.add('rotate-icon1'); 
      // Adds the 'rotate-icon1' class to the menuicon element.
  
      menuicon.classList.remove('rotate-icon2'); 
      // Removes the 'rotate-icon2' class from the menuicon element.
    } else {
      menu.classList.remove("d-flex"); 
      // Removes the 'd-flex' class from the menu element.
  
      menu.classList.add("d-none"); 
      // Adds the 'd-none' class to the menu element.
  
      menu.classList.remove("menu-display"); 
      // Removes the 'menu-display' class from the menu element.
  
      menuicon.innerHTML = '<img src="images/icon-menu.svg" alt="Menu icon">'; 
      // Changes the menu icon back to the menu icon.
  
      menuicon.classList.remove('rotate-icon1'); 
      // Removes the 'rotate-icon1' class from the menuicon element.
  
      menuicon.classList.add('rotate-icon2'); 
      // Adds the 'rotate-icon2' class to the menuicon element.
    }
  }
  
 // // ## TOGGLE CART VISIBILITY ## \\ \\

 function togglecart() {
    var basket = document.getElementById("header-basket"); 
    // Selects the element with ID 'header-basket' and stores it in the basket variable.
  
    var cart = document.getElementById("cart"); 
    // Selects the element with ID 'cart' and stores it in the cart variable.
    
    // Check both the inline style and computed style
    var iscarthidden = window.getComputedStyle(cart, null).getPropertyValue("display") === "none" || cart.style.display === "none";
    if (iscarthidden) {
      cart.style.display = "block"; 
      // Sets the display of the cart to 'block' if it's currently hidden.
    } else {
      cart.style.display = "none"; 
      // Sets the display of the cart to 'none' if it's currently visible.
    }
  }
 
  // // ## ADD ITEMS TO CART ## \\ \\

  var itemName = document.getElementById("heading1"); 
// Selects the element with ID 'heading1' and stores it in the itemName variable.

var itemPrice = document.getElementById("price"); 
// Selects the element with ID 'price' and stores it in the itemPrice variable.

var quantity = document.getElementById("counter-value"); 
// Selects the element with ID 'counter-value' and stores it in the quantity variable.

let items = document.querySelector(".cart-items"); 
// Selects the element with class 'cart-items' and stores it in the items variable.

var totaldiv = document.getElementById("subtotal"); 
// Selects the element with ID 'subtotal' and stores it in the totaldiv variable.

var paragraphCounter = 1; 
// Initializes a counter for paragraphs to 1.

var subtotal = 0; 
// Initializes the subtotal to 0.

var totals = []; 
// Initializes an empty array to store individual item totals.

function addToCart() {
  // Add item to the cart
  if (quantity.textContent == 0) {
    alert("Can't add empty quantity to cart."); 
    // Displays an alert if the quantity is 0.
  } else { 
    // Remove the dollar sign
    var itemPriceValue = ((itemPrice.textContent).substring(1));
    // Calculate the new price based on the multiplication (quantity*price)
    var totalprice = parseFloat(itemPriceValue) * parseFloat(quantity.textContent);
    // Ensure total price has two decimal places and ends with ".00"
    var formattedTotalPrice = totalprice.toFixed(2);
    subtotal = parseFloat(formattedTotalPrice) + parseFloat(subtotal);
    totals.push(formattedTotalPrice);
    totaldiv.style.display = "block";
    totaldiv.innerHTML = `<strong> SUBTOTAL : $${subtotal}</strong>`;

    // Create a new paragraph element
    var newparagraph = document.createElement("p");
    // Create a new delete icon element
    var newicon = document.createElement("div");
    // Create a new item element 
    var newitem = document.createElement("div");
    newitem.style.display = "flex";
    newitem.style.justifyContent = "space-between";
    // Assign a unique ID based on the counter
    newitem.id = String(paragraphCounter);
    console.log(newitem.id);
    // Increment the counter for the next paragraph
    paragraphCounter++;
    // Call the active carousel item function
    var activeImageElement = getActiveCarouselItem();
    // Set the inner HTML of the paragraph with the values of the items
    newparagraph.innerHTML = `<img src="${activeImageElement.src}" alt="Active Item Image" width="50" 
    height="50"  style="float: left; margin-right: 10px;  border-radius: 5px;"> ${itemName.textContent} <br>
    <span style="margin-right: 3px;">${itemPrice.textContent}</span> <span style="margin-right: 3px;">x</span>
    <span style="margin-right: 3px;">${quantity.textContent}</span> <strong style="color: black;">$${formattedTotalPrice}</strong>`;
    newicon.innerHTML = `<img src="images/icon-delete.svg" onclick="removeItem('${newitem.id}')" style="cursor: pointer;">`;
    newitem.appendChild(newparagraph);
    newitem.appendChild(newicon);
    // Append the new item as paragraph to the cart items container
    items.appendChild(newitem);

    // Notification function (display the number of items in the cart)
    notification();
  }
  Checkcartempty();
  checkoutbuttondisplay();
}

// // ## NOTIFICATION AND CART MANAGEMENT ## \\ \\

// Notification (number of items in the cart)
var notf = document.getElementById("notification");
function notification() {
  if (items.childElementCount === 0) {
    notf.style.display = 'none'; 
    // Hide notification if no items are in the cart.
  } else {
    notf.style.display = 'block'; 
    // Show notification if there are items in the cart.

    notf.innerHTML = items.childElementCount; 
    // Display the number of items in the cart.
  }
}

// Remove items from the cart
function removeItem(ItemID) {
  var itemToRemove = document.getElementById(ItemID);
  itemToRemove.remove(); 
  // Remove the item with the specified ID from the cart.

  Checkcartempty();
  checkoutbuttondisplay(); 
  notification();  

  subtotal = parseFloat(subtotal) - parseFloat(totals[ItemID - 1]);
  if (subtotal > 0) {
    totaldiv.innerHTML = `<strong> SUBTOTAL : $${subtotal}</strong>`;
  } else {
    totaldiv.style.display = "none";
  }
}

let cartemptymsg = document.getElementById("cartemptymsg");
function Checkcartempty() {
  // If cart is empty
  if (items.childElementCount === 0) {
    cartemptymsg.innerHTML = 'Your cart is empty'; 
    // Display "Your cart is empty" message if no items are in the cart.

    return true; 
    // Indicates that the cart is empty.
  } else {
    cartemptymsg.innerHTML = ''; 
    // Clear the empty cart message if there are items in the cart.

    return false; 
    // Indicates that the cart is not empty.
  }
}
Checkcartempty();

let checkoutbtn = document.getElementById("checkoutbtn");
function checkoutbuttondisplay() {
  if (Checkcartempty()) {
    checkoutbtn.style.display = "none"; 
    // Hide the checkout button if the cart is empty.
  } else {
    checkoutbtn.style.display = "block"; 
    // Show the checkout button if the cart is not empty.
  }
}
checkoutbuttondisplay();

// // ## CAROUSEL AND MODAL MANAGEMENT ## \\ \\
// Get the active carousel item
function getActiveCarouselItem() {
    return document.querySelector('.carousel-indicators img.active'); 
    // Returns the active carousel item.
  }
  
  // Function to conditionally remove data-bs-toggle (modal lightbox) on small screens
  function toggleModal() {
    var modalToggleBtns = document.querySelectorAll('.modal-toggle-btn');
    // Selects all elements with class 'modal-toggle-btn'.
  
    modalToggleBtns.forEach(function(btn) {
      if (window.innerWidth <= 767.98) {
        btn.removeAttribute('data-bs-toggle'); 
        // Remove the 'data-bs-toggle' attribute on small screens.
      } else {
        btn.setAttribute('data-bs-toggle', 'modal'); 
        // Add the 'data-bs-toggle' attribute on larger screens.
      }
    });
  }
  
  // Call the function on window load and resize
  window.addEventListener('load', toggleModal); 
  // Calls toggleModal function when the window loads.
  
  window.addEventListener('resize', toggleModal); 
  // Calls toggleModal function when the window is resized.
  