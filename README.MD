 # ElectroStore - Electronics E-Commerce  

A modern, responsive, and dynamic electronics e-commerce website built with HTML, CSS, and JavaScript. Products are loaded from the Fake Store API (Electronics category). Users can browse, add to cart, and contact the store—all in a single-page application (SPA) experience.

## Features

- **Home, About, Products, Contact, and Cart** sections
- **Dynamic product loading** from the Fake Store API (Electronics only)
- **Add to Cart** functionality with cart state saved in localStorage
- **Cart modal** for viewing, updating, and removing items
- **Contact form** with validation and user feedback
- **Responsive design** for all devices
- **SPA navigation** with sticky navbar and active link highlighting
 

## Tech Stack

- HTML5
- CSS3 (customs styles)
- JavaScript  
- [Fake Store API - Electronics](https://fakestoreapi.com/products/category/electronics)

## Directory Structure

```
/
├── index.html        # Main  entry point
├── styles.css        # Custom styles
├── script.js         # All dynamic JS logic (SPA, API, cart, etc.)
├── README.md         # Project documentation
 
```

## Setup & Usage

1. **Clone or Download** this repository.
2. **Open `index.html`** directly in your browser (no build tools required).
3. **Browse products, add to cart, and use the contact form.**

> **Note:** All product data is fetched live from the Fake Store API (Electronics category). Cart state is saved in your browser's localStorage.

GitHub: [@engai2025](https://github.com/engai2025) 
## Customization

- To use your own products, modify the API endpoint or replace the fetch logic in `Main.js`.
- All styling can be adjusted in `styles.css`.

## Project Structure & Best Practices

- **SPA:** All navigation is handled in-page for a seamless experience.
- **DOM Manipulation:** Products, cart, and feedback are rendered dynamically.
- **Event Handling:** All buttons, forms, and navigation links are interactive.
- **Local Storage:** Cart and last user message are persisted.
- **Responsive:** Mobile-first, works on all screen sizes.
- **Code Quality:** Well-commented, modular, and easy to extend.

## License

This project is for educational/demo purposes. Feel free to use and modify for your own learning or portfolio!

## Author

GitHub: [@engai2025](https://github.com/engai2025) 