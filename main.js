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

// --- Custom Electronics Products Data (Fallback) ---
const customProducts = [
  {
    id: 1,
    title: "MacBook Pro 16-inch",
    price: 2499.99,
    category: "laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Powerful 16-inch laptop with M2 Pro chip, perfect for professionals and creatives."
  },
  {
    id: 2,
    title: "Dell XPS 13 Ultrabook",
    price: 1299.99,
    category: "laptops",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Sleek ultrabook with 13-inch InfinityEdge display and Intel Core i7 processor."
  },
  {
    id: 3,
    title: "Samsung 2TB SSD",
    price: 189.99,
    category: "storage",
    image: "https://images.unsplash.com/photo-1739742473328-eddb0e0fd3a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "High-speed 2TB solid state drive with read speeds up to 3500MB/s."
  },
  {
    id: 4,
    title: "Western Digital 4TB HDD",
    price: 89.99,
    category: "storage",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Reliable 4TB hard disk drive for mass storage and backup solutions."
  },
  {
    id: 5,
    title: "Logitech MX Master 3S",
    price: 99.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1613141412501-9012977f1969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Premium wireless mouse with 8000 DPI sensor and ergonomic design."
  },
  {
    id: 6,
    title: "Corsair K100 RGB Keyboard",
    price: 229.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Mechanical gaming keyboard with Cherry MX switches and per-key RGB lighting."
  },
  {
    id: 7,
    title: "Canon EOS R6 Mark II",
    price: 2499.99,
    category: "cameras",
    image: "https://images.unsplash.com/photo-1621958054700-7af166501105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Full-frame mirrorless camera with 24.2MP sensor and 4K video recording."
  },
  {
    id: 8,
    title: "Sony A7 IV",
    price: 2499.99,
    category: "cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Professional mirrorless camera with 33MP sensor and advanced autofocus."
  },
  {
    id: 9,
    title: "HP LaserJet Pro M404n",
    price: 299.99,
    category: "printers",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Monochrome laser printer with fast printing speeds up to 40 ppm."
  },
  {
    id: 10,
    title: "Epson EcoTank ET-4760",
    price: 399.99,
    category: "printers",
    image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "All-in-one inkjet printer with refillable ink tanks for cost-effective printing."
  },
  {
    id: 11,
    title: "iPhone 15 Pro Max",
    price: 1199.99,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1709528922659-8f86b0f02b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system."
  },
  {
    id: 12,
    title: "Samsung Galaxy S24 Ultra",
    price: 1299.99,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Premium Android smartphone with S Pen and 200MP camera system."
  },
  {
    id: 13,
    title: "Apple Watch Series 9",
    price: 399.99,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Advanced smartwatch with health monitoring and fitness tracking features."
  },
  {
    id: 14,
    title: "Sony WH-1000XM5",
    price: 399.99,
    category: "audio",
    image: "https://images.unsplash.com/photo-1674658556545-f18d4080ab6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Premium noise-cancelling headphones with exceptional sound quality."
  },
  {
    id: 15,
    title: "DJI Mini 3 Pro Drone",
    price: 759.99,
    category: "drones",
    image: "https://images.unsplash.com/photo-1543235074-5e7ce5446433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Compact drone with 4K camera and advanced flight modes for aerial photography."
  },
  {
    id: 16,
    title: "Nintendo Switch OLED",
    price: 349.99,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1612801799511-1ee0705f3212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Gaming console with 7-inch OLED screen and enhanced audio-visual experience."
  },
  {
    id: 17,
    title: "ASUS ROG Strix G15",
    price: 1499.99,
    category: "laptops",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Gaming laptop with RTX 4070 graphics and 165Hz refresh rate display."
  },
  {
    id: 18,
    title: "Seagate 8TB External HDD",
    price: 159.99,
    category: "storage",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Portable 8TB external hard drive for backup and data storage."
  },
  {
    id: 19,
    title: "Razer DeathAdder V3 Pro",
    price: 159.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1613141412501-9012977f1969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Wireless gaming mouse with 30K DPI sensor and ultra-lightweight design."
  },
  {
    id: 20,
    title: "GoPro HERO11 Black",
    price: 499.99,
    category: "cameras",
    image: "https://images.unsplash.com/photo-1609895314390-cb64c186466a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Action camera with 5.3K video recording and advanced stabilization."
  }
];

// --- Product Loading from Fake Store API with Fallback ---
const productList = document.getElementById('product-list');
const API_URL = 'https://fakestoreapi.com/products/category/electronics';
let allProducts = []; // Will be populated from API or fallback

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
    // Try to fetch from Fake Store API first
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error('API request failed');
    }
    const apiProducts = await res.json();
    
    // Check if API has enough variety
    const hasSmartphones = apiProducts.some(p => 
      p.title.toLowerCase().includes('phone') || 
      p.title.toLowerCase().includes('mobile')
    );
    
    if (!hasSmartphones || apiProducts.length < 10) {
      console.log('API has limited variety, using custom products');
      allProducts = customProducts;
    } else {
      // Map API products to our category system for filtering
      allProducts = apiProducts.map(product => ({
        ...product,
        category: getProductCategory(product.title, product.description)
      }));
      console.log('Products loaded from Fake Store API');
    }
    
    renderProducts(allProducts);
    debugProductCategories(); // Show category breakdown
  } catch (err) {
    console.log('API failed, using fallback products:', err.message);
    // Use custom products as fallback
    allProducts = customProducts;
    renderProducts(allProducts);
    debugProductCategories(); // Show category breakdown
  }
}

// Helper function to categorize API products
function getProductCategory(title, description) {
  const titleLower = title.toLowerCase();
  const descLower = description.toLowerCase();
  
  // More specific categorization for Fake Store API products
  if (titleLower.includes('laptop') || titleLower.includes('computer') || descLower.includes('laptop')) {
    return 'laptops';
  } else if (titleLower.includes('phone') || titleLower.includes('mobile') || titleLower.includes('smartphone') || descLower.includes('phone')) {
    return 'smartphones';
  } else if (titleLower.includes('headphone') || titleLower.includes('earphone') || titleLower.includes('earbud') || titleLower.includes('audio') || descLower.includes('audio')) {
    return 'audio';
  } else if (titleLower.includes('watch') || titleLower.includes('band') || titleLower.includes('fitbit') || titleLower.includes('smartwatch') || descLower.includes('wearable')) {
    return 'wearables';
  } else if (titleLower.includes('keyboard') || titleLower.includes('mouse') || titleLower.includes('pad') || titleLower.includes('wireless') || descLower.includes('accessory')) {
    return 'accessories';
  } else if (titleLower.includes('camera') || titleLower.includes('photo') || titleLower.includes('canon') || titleLower.includes('nikon') || descLower.includes('camera')) {
    return 'cameras';
  } else if (titleLower.includes('printer') || titleLower.includes('print') || descLower.includes('print')) {
    return 'printers';
  } else if (titleLower.includes('drone') || titleLower.includes('aerial') || descLower.includes('drone')) {
    return 'drones';
  } else if (titleLower.includes('game') || titleLower.includes('console') || titleLower.includes('nintendo') || titleLower.includes('playstation') || titleLower.includes('xbox') || descLower.includes('gaming')) {
    return 'gaming';
  } else if (titleLower.includes('ssd') || titleLower.includes('hard') || titleLower.includes('disk') || titleLower.includes('drive') || titleLower.includes('storage') || descLower.includes('storage')) {
    return 'storage';
  } else {
    // For any other electronics, categorize based on common patterns
    if (titleLower.includes('usb') || titleLower.includes('cable') || titleLower.includes('charger') || titleLower.includes('adapter')) {
      return 'accessories';
    } else if (titleLower.includes('monitor') || titleLower.includes('display') || titleLower.includes('screen')) {
      return 'accessories';
    } else if (titleLower.includes('speaker') || titleLower.includes('sound')) {
      return 'audio';
    } else {
      return 'accessories'; // Default category
    }
  }
}

// Debug function to show product counts by category
function debugProductCategories() {
  const categoryCounts = {};
  allProducts.forEach(product => {
    categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
  });
  console.log('Product categories:', categoryCounts);
  console.log('All products with categories:', allProducts.map(p => ({ 
    title: p.title, 
    category: p.category,
    price: p.price 
  })));
  
  // Show products that might be smartphones
  const potentialPhones = allProducts.filter(p => 
    p.title.toLowerCase().includes('phone') || 
    p.title.toLowerCase().includes('mobile') ||
    p.description.toLowerCase().includes('phone')
  );
  console.log('Potential smartphones:', potentialPhones);
}

loadProducts();

// --- Product Filtering ---
const filterButtons = document.querySelectorAll('.product-filters .btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    const category = button.getAttribute('data-category');
    filterProducts(category);
  });
});

function filterProducts(category) {
  // Reset all button texts first
  filterButtons.forEach(btn => {
    const originalText = btn.textContent.replace(/\s*\(\d+\)/, '');
    btn.textContent = originalText;
  });
  
  if (category === 'all') {
    renderProducts(allProducts);
    // Show total count for "All Products"
    const allButton = document.querySelector('[data-category="all"]');
    if (allButton) {
      allButton.textContent = `All Products (${allProducts.length})`;
    }
    return;
  }
  
  const filteredProducts = allProducts.filter(product => {
    return product.category === category;
  });
  
  if (filteredProducts.length === 0) {
    // Show message when no products found
    productList.innerHTML = `
      <div class="col-12 text-center">
        <div class="alert alert-info">
          <h4>No products found in ${category}</h4>
          <p>Try selecting a different category or check back later for new products.</p>
        </div>
      </div>
    `;
  } else {
    renderProducts(filteredProducts);
  }
  
  // Update button text to show count
  const activeButton = document.querySelector(`[data-category="${category}"]`);
  if (activeButton) {
    const originalText = activeButton.textContent.replace(/\s*\(\d+\)/, '');
    activeButton.textContent = `${originalText} (${filteredProducts.length})`;
  }
}

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
  
  let total = 0;
  cartItemsDiv.innerHTML = '';
  cart.forEach((item) => {
    const product = allProducts.find((p) => p.id === item.id);
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
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    if (!name || !lastname || !email || !message) {
      formFeedback.innerHTML = '<div class="alert alert-danger">Please fill in all required fields.</div>';
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      formFeedback.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
      return;
    }
    
    const fullName = `${name} ${lastname}`;
    const subjectText = subject ? ` (${subject})` : '';
    
    formFeedback.innerHTML = `<div class="alert alert-success">Thank you ${fullName} for contacting us${subjectText}! We will get back to you soon at ${email}.</div>`;
    contactForm.reset();
  });
}

// --- Newsletter Form ---
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value.trim();
    if (email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      showMessage('Thank you for subscribing to our newsletter!', 'success');
      e.target.reset();
    } else {
      showMessage('Please enter a valid email address.', 'danger');
    }
  });
}

// --- Footer Year ---
const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// ---  Update Cart Count ---
updateCartCount();