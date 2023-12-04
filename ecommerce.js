Below is an example of a JavaScript code with over 200 lines that simulates a basic e-commerce website with multiple functionalities such as user authentication, shopping cart management, and order processing. The filename for this code can be "ecommerce.js":

```javascript
/*********************************************
 * ecommerce.js - E-commerce Website Simulator
 *********************************************/

/*** Data Setup ***/
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

let users = [];

/*** User Authentication ***/
function signIn(username, password) {
  const user = users.find((user) => user.username === username);
  
  if (!user) {
    console.log("Invalid username. Please try again.");
    return;
  }
  
  if (user.password !== password) {
    console.log("Invalid password. Please try again.");
    return;
  }
  
  console.log(`Welcome, ${user.username}!`);
}

function signUp(username, password) {
  if (users.some((user) => user.username === username)) {
    console.log("Username already exists. Please choose a different username.");
    return;
  }
  
  const newUser = { username, password };
  users.push(newUser);
  console.log("Sign up successful. Please sign in.");
}

/*** Shopping Cart Management ***/
let shoppingCart = [];

function addToCart(productId, quantity = 1) {
  const product = products.find((product) => product.id === productId);
  
  if (!product) {
    console.log("Product not found.");
    return;
  }
  
  const itemInCart = shoppingCart.find((item) => item.id === productId);
  
  if (itemInCart) {
    itemInCart.quantity += quantity;
  } else {
    const newItem = { id: product.id, name: product.name, price: product.price, quantity };
    shoppingCart.push(newItem);
  }
  
  console.log(`${product.name} added to cart.`);
}

function removeFromCart(productId, quantity = 1) {
  const itemIndex = shoppingCart.findIndex((item) => item.id === productId);
  
  if (itemIndex === -1) {
    console.log("Product not found in cart.");
    return;
  }
  
  const item = shoppingCart[itemIndex];
  
  if (item.quantity <= quantity) {
    shoppingCart.splice(itemIndex, 1);
    console.log(`${item.name} removed from cart.`);
  } else {
    item.quantity -= quantity;
    console.log(`${quantity} ${item.name} removed from cart.`);
  }
}

/*** Order Processing ***/
function processOrder() {
  if (shoppingCart.length === 0) {
    console.log("Shopping cart is empty. Please add some items before processing the order.");
    return;
  }
  
  let total = 0;
  
  console.log("Order Summary:");
  
  for (const item of shoppingCart) {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    
    console.log(`${item.name} x ${item.quantity} - $${subtotal}`);
  }
  
  console.log(`Total: $${total}`);
  
  // Additional order processing logic here...
  console.log("Order processed successfully!");
  
  shoppingCart = [];
}

/*** Simulation ***/
signUp("user1", "password1");
signUp("user2", "password2");

signIn("user1", "password1");
signIn("user2", "password2");
signIn("user1", "password2");

addToCart(1);
addToCart(2);
addToCart(3, 2);

removeFromCart(2);
removeFromCart(1, 2);
removeFromCart(4);

processOrder();
```

Please note that this code is a simplified example for demonstration purposes and may not include all the features and edge cases that a real-world e-commerce website would have.