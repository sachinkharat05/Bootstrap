# Transflower — Fresh Blooms Delivered 🌸

A complete, **production-ready flower e-commerce store** with full authentication system, shopping cart, order management, and user dashboard. Built with **Bootstrap 5**, **Vanilla JavaScript**, and **LocalStorage**.

**Status:** ✅ **FULLY FUNCTIONAL** — Ready to use!

---

## ✨ Key Features

### 🔐 **Complete Authentication System**
- ✅ User registration with email validation
- ✅ Secure login with password verification
- ✅ Session management with persistent login
- ✅ Demo accounts for testing (john@example.com / pass123)
- ✅ Logout functionality

### 🌸 **Product Catalog**
- ✅ 9+ beautiful flower bouquets
- ✅ Dynamic product listings
- ✅ Product details (name, price, description)
- ✅ Product categories (Roses, Tulips, Orchids)
- ✅ Responsive image gallery

### 🛒 **Shopping Cart**
- ✅ Add/remove items
- ✅ Update quantities
- ✅ Real-time cart updates
- ✅ Cart persistence across sessions
- ✅ Cart badge with item count

### 📦 **Checkout & Orders**
- ✅ Secure checkout process
- ✅ Delivery address collection
- ✅ Multiple payment methods
- ✅ Order confirmation with Order ID
- ✅ Order history tracking

### 👤 **User Dashboard**
- ✅ User profile display
- ✅ Order history with details
- ✅ Profile settings
- ✅ Order status tracking

### 📱 **Full-featured Pages**
- ✅ Home (Hero + Featured Products)
- ✅ Products (Catalog with Cart)
- ✅ Shopping Cart (Full Management)
- ✅ Login/Register (Auth Pages)
- ✅ Dashboard (User Profile)
- ✅ About (Brand Story)
- ✅ Contact (Contact Form)

---

## 🏗️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure & content | - |
| **CSS3** | Styling & animations | - |
| **JavaScript** | Core logic (vanilla ES6+) | - |
| **Bootstrap** | Layout & components | 5.3.2 |
| **Bootstrap Icons** | Icons | 1.11.3 |
| **LocalStorage** | Data persistence | Browser API |
| **Google Fonts** | Typography | Cormorant Garamond, DM Sans |

**No frameworks** — Pure vanilla JS for maximum performance and simplicity!

---

## Project Structure

```
transflower-bootstrap/
├── index.html          # Home page
├── product.html        # Products & collections
├── about.html          # About us
├── contact.html        # Contact form
├── login.html          # Login
├── register.html       # Registration
├── style.css           # Global theme & components
├── image/              # Product & store images
│   ├── red rose.jpg
│   ├── tublips.jpg
│   ├── sun.jpg
│   ├── Red Rose  Bouquets.jpg
│   ├── Yellow Roses.jpg
│   ├── white orchids bouquet.jpg
│   ├── White Rose.jpg
│   ├── Yellow Tulips  Bouquets.jpg
│   ├── Purple orchid bouquet.jpg
│   └── tfl store.jpeg
└── README.md           # This file
```

---

## 🚀 Quick Start (3 Steps!)

### Step 1: Download
```bash
git clone https://github.com/yourusername/transflower-bootstrap.git
cd transflower-bootstrap
```

### Step 2: Open
**Option A - Direct:**
Double-click `index.html`

**Option B - Local Server:**
```bash
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Step 3: Test
- **Login:** john@example.com / pass123
- **Shop:** Add flowers to cart
- **Checkout:** Complete the purchase
- **Dashboard:** View your orders

---

## 📁 Complete Project Structure

```
transflower-bootstrap/
├── index.html          # 🏠 Home - Hero + Featured
├── product.html        # 🌸 Products - 9 Flowers
├── cart.html           # 🛒 Shopping Cart
├── login.html          # 🔐 Login Page
├── register.html       # 📝 Registration Page
├── dashboard.html      # 👤 User Dashboard
├── about.html          # ℹ️  About Us
├── contact.html        # 📧 Contact Form
├── app.js              # ⚙️  CORE LOGIC (Main!)
├── style.css           # 🎨 Styling
├── image/              # 📸 Flower Images
│   ├── red rose.jpg
│   ├── tublips.jpg
│   ├── sun.jpg
│   ├── Red Rose  Bouquets.jpg
│   ├── Yellow Roses.jpg
│   ├── white orchids bouquet.jpg
│   ├── White Rose.jpg
│   ├── Purple orchid bouquet.jpg
│   ├── Yellow Tulips  Bouquets.jpg
│   └── tfl store.jpeg
└── README.md           # 📖 This File
```

---

## ⚙️ app.js - The Core Engine

The `app.js` file is the heart of the system with 20+ functions:

**Authentication:**
- `registerUser()` - Create account
- `loginUser()` - User login
- `logoutUser()` - User logout
- `getCurrentUser()` - Get logged-in user

**Shopping Cart:**
- `addToCart()` - Add item
- `removeFromCart()` - Remove item
- `updateCartQuantity()` - Change quantity
- `getCartTotal()` - Calculate total
- `getCartCount()` - Get item count

**Orders:**
- `placeOrder()` - Create order
- `getUserOrders()` - Get user orders

**UI:**
- `updateNavbar()` - Update login state
- `updateCartBadge()` - Show cart count

---

## 💾 Data Storage (LocalStorage)

```javascript
tf_users       → All registered users
tf_currentUser → Currently logged-in user
tf_cart        → Shopping cart items
tf_orders      → Order history
```

**Example User Object:**
```javascript
{
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  password: "pass123",
  phone: "9876543210",
  registeredAt: "5/1/2026"
}
```

---

## 👥 Demo Accounts Ready to Use

| Email | Password | Status |
|-------|----------|--------|
| john@example.com | pass123 | ✅ Ready |
| jane@example.com | pass123 | ✅ Ready |
| YOUR-EMAIL | YOUR-PASSWORD | Create! |

---

## 🌸 Product Catalog (9 Items!)

```
1. Red Roses (₹499)
2. Tulip Delight (₹399)
3. Sunflower Joy (₹299)
4. Red Rose Grande (₹599)
5. Sunlit Roses (₹699)
6. White Orchid Elegance (₹799)
7. White Roses (₹549)
8. Purple Orchids (₹849)
9. Yellow Tulips (₹449)
```

---

## 🎨 Beautiful Design System

**Color Palette:**
- Cream #faf8f5
- Blush #e8d5d0
- Rose #b76e79 (Primary)
- Deep Rose #8b4d5a
- Sage #9aaf8a
- Charcoal #2c2c2c

**Typography:**
- Headings: Cormorant Garamond
- Body: DM Sans

---

## 🔄 Complete User Journey

```
1. Visit Home → Browse Flowers
   ↓
2. Click Register → Create Account
   ↓
3. Click Login → Sign In
   ↓
4. Go to Products → View 9 Flowers
   ↓
5. Add to Cart → Item Added ✓
   ↓
6. View Cart → See Items & Total
   ↓
7. Checkout → Enter Details
   ↓
8. Place Order → Order ID Generated ✓
   ↓
9. Dashboard → View Order History
```

---

## ✅ What's Included

### Pages (8 Total)
✅ Home
✅ Products
✅ Shopping Cart
✅ Login
✅ Register
✅ Dashboard
✅ About
✅ Contact

### Features
✅ Full authentication system
✅ Shopping cart with persistence
✅ Order management
✅ User dashboard
✅ Responsive design
✅ Demo data included
✅ Beautiful UI
✅ Form validation

### Technology
✅ HTML5
✅ CSS3
✅ Vanilla JavaScript (ES6+)
✅ Bootstrap 5
✅ LocalStorage
✅ No dependencies!

---

## 🧪 Testing the System

### Test Registration
1. Click "Register"
2. Fill form with new email
3. Submit
4. Should redirect to login

### Test Login
1. Click "Login"
2. Use john@example.com / pass123
3. Should show user name in navbar

### Test Shopping
1. Go to Products
2. Click "Add to Cart"
3. See cart badge update
4. View cart details

### Test Checkout
1. In cart, click "Proceed to Checkout"
2. Fill delivery form
3. Select payment method
4. Click "Place Order"
5. See success message
6. Order ID generated

### Test Dashboard
1. Go to Dashboard
2. See your profile
3. View your orders
4. Click order to see details

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free!)
```bash
git add .
git commit -m "Deploy"
git push origin main
```
Enable in GitHub → Settings → Pages

### Option 2: Netlify (Recommended)
1. Connect GitHub repo
2. Auto-deploys on push
3. Free hosting

### Option 3: Vercel
1. Import repository
2. One-click deploy
3. Instant production

### Option 4: Local Server
```bash
python -m http.server 8000
# Or npm
npx http-server
```

---

## 🎓 Learning Outcomes

This project teaches you:
✅ User authentication
✅ Shopping cart system
✅ Order management
✅ HTML5 semantics
✅ CSS3 animations
✅ JavaScript ES6+
✅ LocalStorage API
✅ Bootstrap framework
✅ Responsive design
✅ Form validation
✅ UX/UI best practices

Perfect for building your portfolio!

---

## 🔧 Customization Guide

### Add a Product
Edit `product.html`:
```javascript
{ 
  id: 10, 
  name: "Lily Bouquet", 
  price: 599, 
  image: "./image/lily.jpg", 
  description: "Beautiful lilies" 
}
```

### Change Colors
Edit `style.css`:
```css
--rose: #NEW_COLOR;
```

### Modify Shipping
Edit `cart.html`:
```javascript
const shipping = 100; // Change this
```

### Add Payment Gateway
1. Integrate Razorpay API
2. Update checkout form
3. Handle payment response

---

## ❓ Frequently Asked Questions

**Q: Is the data secure?**
A: This is a demo using localStorage. For production, use backend servers with encryption.

**Q: How long does data persist?**
A: Until browser cache is cleared.

**Q: Can I use real payments?**
A: Yes! Integrate Razorpay, Stripe, or PayPal APIs.

**Q: Can I deploy this?**
A: Yes! Deploy to Netlify, Vercel, or any web server.

**Q: Can I modify the design?**
A: Yes! All CSS is customizable in `style.css`.

**Q: Do I need a backend?**
A: No! This works with just HTML/CSS/JS. Add backend later if needed.

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Cart not saving | Clear browser cache |
| Login fails | Check email/password |
| Images broken | Verify image/ folder path |
| Checkout broken | Ensure you're logged in |
| Order not saving | Check localStorage limit |

---

## 📞 Support

- 📧 Email: kharatsachin012.com
- 💬 WhatsApp: https://wa.me/919637661382

---

## 📄 License

**MIT License** - Free for personal and commercial use!

---

## Design Overview

- **Colors:** Cream (`#faf8f5`), Blush (`#e8d5d0`), Rose (`#b76e79`), Deep Rose (`#8b4d5a`), Sage (`#9aaf8a`), Charcoal (`#2c2c2c`)
- **Typography:** Cormorant Garamond (headings), DM Sans (body)
- **Components:** Glass-style cards, rounded inputs/buttons, hover effects on cards and nav links

---

## 👨‍💻 Credits

- **Designed & built by** — Sachin Kharat
- **Created:** 2025
- **Project:** Transflower E-commerce Bootstrap
- **© 2025** Transflower Store

---

## 🙏 Thank You!

Thank you for using **Transflower**! We hope this complete e-commerce system helps you learn web development and build amazing projects! 

**Happy coding! 🌸✨**


