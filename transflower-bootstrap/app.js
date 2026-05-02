// ============= TRANSFLOWER APP.JS =============
// Authentication & Cart Management with LocalStorage

// Initialize users from localStorage or create demo users
function initializeUsers() {
  let users = localStorage.getItem('tf_users');
  if (!users) {
    const demoUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', password: 'pass123', phone: '9876543210' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'pass123', phone: '9123456789' }
    ];
    localStorage.setItem('tf_users', JSON.stringify(demoUsers));
  }
}

// Get current logged-in user
function getCurrentUser() {
  const user = localStorage.getItem('tf_currentUser');
  return user ? JSON.parse(user) : null;
}

// Register new user
function registerUser(userData) {
  const users = JSON.parse(localStorage.getItem('tf_users') || '[]');
  
  // Check if email already exists
  if (users.some(u => u.email === userData.email)) {
    return { success: false, message: 'Email already registered!' };
  }
  
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name: userData.name,
    email: userData.email,
    password: userData.password,
    phone: userData.phone,
    registeredAt: new Date().toLocaleString()
  };
  
  users.push(newUser);
  localStorage.setItem('tf_users', JSON.stringify(users));
  return { success: true, message: 'Registration successful! Please login.' };
}

// Login user
function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem('tf_users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    const loggedInUser = { ...user };
    delete loggedInUser.password; // Don't store password in currentUser
    localStorage.setItem('tf_currentUser', JSON.stringify(loggedInUser));
    return { success: true, message: 'Login successful!', user: loggedInUser };
  }
  
  return { success: false, message: 'Invalid email or password!' };
}

// Logout user
function logoutUser() {
  localStorage.removeItem('tf_currentUser');
  return { success: true, message: 'Logged out successfully!' };
}

// Get or initialize cart
function getCart() {
  let cart = localStorage.getItem('tf_cart');
  return cart ? JSON.parse(cart) : [];
}

// Add item to cart
function addToCart(product) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  localStorage.setItem('tf_cart', JSON.stringify(cart));
  return { success: true, message: `${product.name} added to cart!` };
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('tf_cart', JSON.stringify(cart));
  return { success: true, message: 'Item removed from cart!' };
}

// Update cart item quantity
function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
    localStorage.setItem('tf_cart', JSON.stringify(cart));
    return { success: true, message: 'Cart updated!' };
  }
  
  return { success: false, message: 'Item not found in cart!' };
}

// Get cart total
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Place order
function placeOrder(orderData) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return { success: false, message: 'Please login to place an order!' };
  }
  
  const cart = getCart();
  if (cart.length === 0) {
    return { success: false, message: 'Cart is empty!' };
  }
  
  const order = {
    orderId: 'ORD-' + Date.now(),
    userId: currentUser.id,
    userName: currentUser.name,
    userEmail: currentUser.email,
    items: cart,
    total: getCartTotal(),
    address: orderData.address,
    phone: orderData.phone,
    paymentMethod: orderData.paymentMethod,
    status: 'Pending',
    orderDate: new Date().toLocaleString()
  };
  
  let orders = JSON.parse(localStorage.getItem('tf_orders') || '[]');
  orders.push(order);
  localStorage.setItem('tf_orders', JSON.stringify(orders));
  
  // Clear cart after order
  localStorage.removeItem('tf_cart');
  
  return { success: true, message: 'Order placed successfully!', orderId: order.orderId };
}

// Get user orders
function getUserOrders() {
  const currentUser = getCurrentUser();
  if (!currentUser) return [];
  
  const orders = JSON.parse(localStorage.getItem('tf_orders') || '[]');
  return orders.filter(order => order.userId === currentUser.id);
}

// Update navbar based on login status
function updateNavbar() {
  const currentUser = getCurrentUser();
  const navbarNav = document.getElementById('navbarNav');
  
  if (!navbarNav) return;
  
  const loginLink = navbarNav.querySelector('a[href="login.html"]');
  const registerLink = navbarNav.querySelector('a[href="register.html"]');
  
  if (currentUser) {
    // User is logged in
    if (loginLink) loginLink.textContent = `${currentUser.name} (Logout)`;
    if (loginLink) loginLink.href = '#';
    if (loginLink) loginLink.onclick = function(e) {
      e.preventDefault();
      logoutUser();
      alert('Logged out successfully!');
      window.location.href = 'index.html';
    };
    if (registerLink) registerLink.style.display = 'none';
  } else {
    // User is not logged in
    if (loginLink) loginLink.textContent = 'Login';
    if (loginLink) loginLink.href = 'login.html';
    if (loginLink) loginLink.onclick = null;
    if (registerLink) registerLink.style.display = 'block';
  }
}

// Add cart count badge to navbar
function updateCartBadge() {
  const count = getCartCount();
  let badge = document.getElementById('cart-badge');
  
  if (count > 0) {
    if (!badge) {
      const cartNav = document.querySelector('a[href="cart.html"]');
      if (cartNav) {
        badge = document.createElement('span');
        badge.id = 'cart-badge';
        badge.className = 'badge bg-danger position-absolute';
        badge.style.top = '-5px';
        badge.style.right = '-10px';
        cartNav.style.position = 'relative';
        cartNav.appendChild(badge);
      }
    }
    if (badge) badge.textContent = count;
  } else if (badge) {
    badge.remove();
  }
}

// Initialize app on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeUsers();
  updateNavbar();
  updateCartBadge();
});

// Listen for storage changes (for multi-tab sync)
window.addEventListener('storage', function() {
  updateNavbar();
  updateCartBadge();
});
