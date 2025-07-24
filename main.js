// --- SPA Navigation & Sticky Navbar ---
const navbar = document.getElementById('navbar');
const cartBtn = document.getElementById('cartBtn');
const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
const cartCount = document.getElementById('cart-count');

// Sticky Navbar
if (navbar) {
  const stickyOffset = navbar.offsetTop + 100;
  function handleScroll() {
    if (window.pageYOffset > stickyOffset) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
  window.addEventListener('scroll', handleScroll);
}

// --- SPA Navigation Highlight ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
function changeNavOnScroll() {
  if (!navLinks || navLinks.length === 0) return;
  let currentSection = '';
  const offset = navbar ? navbar.offsetHeight + 20 : 100;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - offset) {
      currentSection = section.getAttribute('id');
    }
  });
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - 50
  ) {
    const lastSection = sections[sections.length - 1];
    if (lastSection) currentSection = lastSection.id;
  }
  navLinks.forEach((link) => {
    link.classList.remove('active');
    const linkHref = link.getAttribute('href');
    if (linkHref === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
  if (pageYOffset < sections[0].offsetTop - offset) {
    navLinks.forEach((link) => link.classList.remove('active'));
    const homeLink = document.querySelector('.navbar-nav .nav-link[href="#home"]');
    if (homeLink) homeLink.classList.add('active');
  }
}
window.addEventListener('scroll', changeNavOnScroll);
changeNavOnScroll();

// --- Product Loading from Fake Store API ---
const productList = document.getElementById('product-list');
const API_URL = 'https://fakestoreapi.com/products/category/electronics';

function renderProducts(products) {
  if (!productList) return;
  productList.innerHTML = '';
  products.forEach((product) => {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-4 col-sm-6 d-flex';
    col.innerHTML = `
      <div class="product-card w-100 d-flex flex-column">
        <img src="${product.image}" class="card-img-top" alt="${product.title}" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description.substring(0, 80)}...</p>
          <p class="price">$${product.price.toFixed(2)}</p>
          <button class="btn btn-primary mt-auto add-to-cart-btn" data-id="${product.id}"><i class="fas fa-cart-plus"></i> Add to Cart</button>
        </div>
      </div>
    `;
    productList.appendChild(col);
  });
}

async function loadProducts() {
  try {
    const res = await fetch(API_URL);
    const products = await res.json();
    renderProducts(products);
  } catch (err) {
    productList.innerHTML = '<div class="alert alert-danger">Failed to load products.</div>';
  }
}
loadProducts();

// --- Cart Functionality ---
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = count;
}
function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  setCart(cart);
  updateCartCount();
  showMessage('Added to cart!', 'success');
}
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  setCart(cart);
  updateCartCount();
  renderCartItems();
}
function changeCartQty(productId, delta) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty < 1) item.qty = 1;
    setCart(cart);
    renderCartItems();
    updateCartCount();
  }
}

// --- Render Cart Items in Modal ---
async function renderCartItems() {
  const cartItemsDiv = document.getElementById('cart-items');
  const cart = getCart();
  if (!cartItemsDiv) return;
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    document.getElementById('cart-total').textContent = '0.00';
    return;
  }
  // Fetch all products to get details
  const res = await fetch(API_URL);
  const products = await res.json();
  let total = 0;
  cartItemsDiv.innerHTML = '';
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    total += product.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${product.image}" class="cart-item-img" alt="${product.title}" />
      <div class="cart-item-details">
        <div class="cart-item-title">${product.title}</div>
        <div class="cart-item-qty">
          <button class="btn btn-sm btn-outline-secondary" onclick="changeCartQty(${product.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="btn btn-sm btn-outline-secondary" onclick="changeCartQty(${product.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-price">$${(product.price * item.qty).toFixed(2)}</div>
      <span class="cart-item-remove" onclick="removeFromCart(${product.id})"><i class="fas fa-trash"></i></span>
    `;
    cartItemsDiv.appendChild(div);
  });
  document.getElementById('cart-total').textContent = total.toFixed(2);
}
window.changeCartQty = changeCartQty;
window.removeFromCart = removeFromCart;

// --- Add to Cart Event Delegation ---
productList.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
    const btn = e.target.closest('.add-to-cart-btn');
    const id = parseInt(btn.getAttribute('data-id'));
    addToCart(id);
  }
});

// --- Cart Modal Open ---
cartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  renderCartItems();
  cartModal.show();
});

// --- Checkout Button ---
document.getElementById('checkoutBtn').addEventListener('click', () => {
  showMessage('Checkout is not implemented in this demo.', 'info');
});

// --- Show Message (for feedback, uses localStorage for last message) ---
function showMessage(msg, type = 'info') {
  localStorage.setItem('lastMessage', JSON.stringify({ msg, type, time: Date.now() }));
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.textContent = msg;
  document.body.appendChild(alert);
  setTimeout(() => alert.remove(), 2000);
}

// --- Contact Form Validation ---
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      formFeedback.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      formFeedback.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
      return;
    }
    formFeedback.innerHTML = '<div class="alert alert-success">Thank you for contacting us! We will get back to you soon.</div>';
    contactForm.reset();
  });
}

// --- Footer Year ---
const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// --- On Load: Update Cart Count ---
updateCartCount();