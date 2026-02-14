# Transflower — Fresh Blooms Delivered

A modern, responsive flower store website built with **Bootstrap 5** and custom CSS. Browse bouquets, create an account, and get in touch—all with a clean, floral-themed design.

---

## Features

- **Home** — Hero section, featured blooms, and customer testimonials
- **Products** — Product grid, bestsellers, and tabbed collections (Roses, Tulips, Orchids)
- **About** — Brand story, stats, and values
- **Contact** — Contact form and WhatsApp quick link
- **Register** — Account registration with validation
- **Login** — Sign-in with success feedback

All pages share a consistent **navbar**, **footer**, and **theme** (cream, blush, rose, sage).

---

## Tech Stack

| Technology | Purpose |
|------------|--------|
| **HTML5** | Structure and content |
| **Bootstrap 5.3** | Layout, components, utilities |
| **Bootstrap Icons** | Icons |
| **Google Fonts** | Cormorant Garamond, DM Sans |
| **CSS3** | Custom theme, glassmorphism, animations |

No JavaScript frameworks—vanilla JS only for form validation and navbar scroll behavior.

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

## How to Run the Project

1. **Clone or download** the repository:
   ```bash
   git clone https://github.com/your-username/transflower-bootstrap.git
   cd transflower-bootstrap
   ```

2. **Open in browser** (no build step required):
   - Double-click `index.html`, or  
   - Use a local server, e.g.:
     ```bash
     # Python 3
     python -m http.server 8000
     ```
     Then visit: `http://localhost:8000`

3. **Optional:** Place all product/store images in an `image/` folder in the project root so paths like `./image/red rose.jpg` resolve correctly.

---

## Design Overview

- **Colors:** Cream (`#faf8f5`), Blush (`#e8d5d0`), Rose (`#b76e79`), Deep Rose (`#8b4d5a`), Sage (`#9aaf8a`), Charcoal (`#2c2c2c`)
- **Typography:** Cormorant Garamond (headings), DM Sans (body)
- **Components:** Glass-style cards, rounded inputs/buttons, hover effects on cards and nav links

---

## Credits

- **Designed & built by** — Sachin Kharat  
- **© 2025** Transflower Store

---


