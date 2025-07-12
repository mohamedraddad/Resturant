// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Floating label support for reservation form
const formGroups = document.querySelectorAll('.form-group input');
formGroups.forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value) {
      this.classList.add('filled');
    } else {
      this.classList.remove('filled');
    }
  });
});

// Sample menu data
const menuData = [
  { name: 'Classic Ratatouille', category: 'starters', price: '$8', desc: 'Sourdough, smashed avocado, chili flakes', img: 'https://www.vibrantplate.com/wp-content/uploads/2022/07/Homemade-Classic-French-Ratatouille-02-830x1245.jpg.webp' },
  { name: 'Duck Confit with Herb Jus', category: 'starters', price: '$7', desc: 'Crispy fries, truffle oil, parmesan', img: 'https://www.simplyrecipes.com/thmb/QP5-DbAUbPxuZjmW8Hni7C8AGOg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Duck-Confit-LEAD-10-f4af4e45fc0041cd995d4c11023c9a37.jpg' },
  { name: 'Caprese Skewers', category: 'starters', price: '$9', desc: 'Fresh mozzarella, cherry tomatoes, basil, balsamic glaze', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=120&q=80' },
  { name: 'Grilled Salmon', category: 'mains', price: '$18', desc: 'Salmon fillet, lemon butter, greens', img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=120&q=80' },
  { name: 'Boeuf Bourguignon', category: 'mains', price: '$22', desc: 'Sirloin steak, fries, herb butter', img: 'https://www.seriouseats.com/thmb/cWmawZkRaJKBKGXms_HLqn2qirc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MMPSOUPSANDSTEWS-SEA-BoeufBourguignon-FredHardyII-000-991c38a78f934722954c47567b6be97b.jpg' },
  { name: 'Poulet à la Crème', category: 'mains', price: '$15', desc: 'Quinoa, roasted veggies, chickpeas, tahini dressing', img: 'https://cache.marieclaire.fr/data/photo/w1000_ci/6r/recette-escalopes-poulet-creme-a-la-four-facile.jpg' },
  { name: 'Chocolate Lava Cake', category: 'mains', price: '$9', desc: 'Warm chocolate cake, molten center', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=120&q=80' },
  { name: 'Berry Cheesecake', category: 'mains', price: '$8', desc: 'Creamy cheesecake, berry compote', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=120&q=80' },
  { name: 'Lemon Tart', category: 'mains', price: '$7', desc: 'Tangy lemon curd, buttery crust', img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=120&q=80' },
  { name: 'Salmon en Papillote', category: 'mains', price: '$6', desc: 'Rum, mint, lime, soda', img: 'https://www.sac.coop/wp-content/uploads/2023/02/salmon-papilotte-768x512.webp' },
  { name: 'Seafood Bouillabaisse', category: 'mains', price: '$5', desc: 'Espresso, milk, ice', img: 'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_iw/v1/img/recipes/19/00/12/x5ymVhwSWSXj7PY0xzlQ_bouillabaisse-seafood-stew-1831.jpg' },
  { name: 'Coq au Vin', category: 'mains', price: '$6', desc: 'Fresh berries, mint, lemon, sparkling water', img: 'https://images.immediate.co.uk/production/volatile/sites/30/2012/01/coq-au-vin-3740fe3.jpg?resize=1366,1242' },
  { name: 'Herb-Crusted Rack of Lamb', category: 'mains', price: '$7', desc: 'Matcha, lemon, tonic, honey', img: 'https://puresouthshop.com/cdn/shop/articles/Walnut-Herb-Crusted-Lamb-Racks_Hero2_LR-scaled-e1606778942650_1200x1200.jpg?v=1607202602' }
];

document.addEventListener('DOMContentLoaded', function() {
  // Modern hamburger menu logic
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks && navOverlay) {
    hamburger.addEventListener('click', function() {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navOverlay.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        navOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
    // Close nav when overlay is clicked
    navOverlay.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      navOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Menu rendering
  const menuContainer = document.querySelector('.menu-items');
  const filterButtons = document.querySelectorAll('.menu-filter');
  function renderMenu(category = 'all') {
    if (!menuContainer) return;
    menuContainer.innerHTML = '';
    const filtered = category === 'all' ? menuData : menuData.filter(item => item.category === category);
    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="pick-type">${item.category === 'mains' ? 'Drink' : item.category === 'mains' ? 'Dessert' : item.category === 'starters' ? 'Starter' : 'Main'}</div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="price">${item.price || ''}</div>
        <button class="show-details-btn">Show Details <span class="chevron">›</span></button>
        <div class="card-details" style="display:none;"></div>
      `;
      const btn = card.querySelector('.show-details-btn');
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const detailsDiv = card.querySelector('.card-details');
        if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
          detailsDiv.innerHTML = `<p style='color:#555;'>${item.details || 'No further details.'}</p>`;
          detailsDiv.style.display = 'block';
          this.textContent = 'Hide Details ';
          const chevron = document.createElement('span');
          chevron.className = 'chevron';
          chevron.textContent = '›';
          this.appendChild(chevron);
          this.classList.add('open');
        } else {
          detailsDiv.style.display = 'none';
          this.textContent = 'Show Details ';
          const chevron = document.createElement('span');
          chevron.className = 'chevron';
          chevron.textContent = '›';
          this.appendChild(chevron);
          this.classList.remove('open');
        }
      });
      menuContainer.appendChild(card);
    });
  }
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.menu-filter.active').classList.remove('active');
      btn.classList.add('active');
      renderMenu(btn.dataset.category);
    });
  });
  renderMenu();

  // Today's Picks rendering
  const picksContainer = document.querySelector('.todays-picks-cards');
  function renderPicks() {
    if (!picksContainer) return;
    picksContainer.innerHTML = '';
    picksData.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'pick-card';
      card.style.animationDelay = (i * 0.12) + 's';
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="pick-type">${item.type}</div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <button class="show-details-btn">Show Details <span class="chevron">›</span></button>
        <div class="card-details" style="display:none;"></div>
      `;
      const btn = card.querySelector('.show-details-btn');
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const detailsDiv = card.querySelector('.card-details');
        if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
          detailsDiv.innerHTML = `<p style='color:#555;'>${item.details || 'No further details.'}</p>`;
          detailsDiv.style.display = 'block';
          this.textContent = 'Hide Details ';
          const chevron = document.createElement('span');
          chevron.className = 'chevron';
          chevron.textContent = '›';
          this.appendChild(chevron);
          this.classList.add('open');
        } else {
          detailsDiv.style.display = 'none';
          this.textContent = 'Show Details ';
          const chevron = document.createElement('span');
          chevron.className = 'chevron';
          chevron.textContent = '›';
          this.appendChild(chevron);
          this.classList.remove('open');
        }
      });
      picksContainer.appendChild(card);
    });
  }
  renderPicks();

  // Testimonials carousel
  const testimonialsData = [
    { name: 'Sarah M.', text: 'Absolutely loved the food and the ambiance! Will come again.', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'James K.', text: 'A creative menu and friendly staff. Highly recommended!', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Linda W.', text: 'The mains are to die for. Five stars!', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  ];

  const testimonialsContainer = document.querySelector('.testimonials-carousel');

  testimonialsData.forEach(t => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <img src="${t.img}" alt="${t.name}">
      <p>"${t.text}"</p>
      <div class="name">${t.name}</div>
    `;
    testimonialsContainer.appendChild(card);
  });

  // Simple carousel scroll (auto-scroll)
  let scrollPos = 0;
  setInterval(() => {
    if (testimonialsContainer.scrollWidth > testimonialsContainer.clientWidth) {
      scrollPos += 340;
      if (scrollPos > testimonialsContainer.scrollWidth - testimonialsContainer.clientWidth) {
        scrollPos = 0;
      }
      testimonialsContainer.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  }, 3500);

  // Reservation form validation
  const reservationForm = document.getElementById('reservation-form');
  const reservationMsg = document.getElementById('reservation-message');

  reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const date = this.date.value;
    const time = this.time.value;
    const guests = this.guests.value;
    if (!name || !email || !date || !time || !guests) {
      reservationMsg.textContent = 'Please fill in all fields.';
      return;
    }
    reservationMsg.textContent = 'Thank you for your reservation, ' + name + '!';
    this.reset();
    setTimeout(() => reservationMsg.textContent = '', 4000);
  });

  // Gallery Lightbox
  const galleryImages = document.querySelectorAll('.gallery-masonry img');
  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(0,0,0,0.8)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 9999;
      overlay.innerHTML = `<img src='${this.src}' style='max-width:90vw; max-height:80vh; border-radius:18px; box-shadow:0 8px 32px #0008;'>`;
      overlay.addEventListener('click', () => document.body.removeChild(overlay));
      document.body.appendChild(overlay);
    });
  });

  // FAQ Search/Filter
  const faqSearch = document.getElementById('faq-search');
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqSearch) {
    faqSearch.addEventListener('input', function() {
      const val = this.value.trim().toLowerCase();
      faqItems.forEach(item => {
        const q = item.querySelector('.faq-question').textContent.toLowerCase();
        const a = item.querySelector('.faq-answer').textContent.toLowerCase();
        if (q.includes(val) || a.includes(val)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Today's Picks Data & Creative Animation
  const picksData = [
    {
      name: 'Dragon Sushi Roll',
      type: 'Food',
      desc: 'Crispy shrimp tempura, avocado, spicy mayo, and eel sauce.',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=120&q=80',
      details: 'A TasteBite signature: crunchy, creamy, and a little spicy. Served with pickled ginger and wasabi.'
    },
    {
      name: 'Berry Sparkler',
      type: 'Drink',
      desc: 'Fresh berries, mint, lemon, and sparkling water.',
      img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=120&q=80',
      details: 'A refreshing, non-alcoholic drink perfect for summer. Sweet, tangy, and bubbly.'
    },
    {
      name: 'Truffle Parmesan Fries',
      type: 'Food',
      desc: 'Hand-cut fries, truffle oil, parmesan, and herbs.',
      img: 'https://images.unsplash.com/photo-1516685018646-5499d0a7d42f?auto=format&fit=crop&w=120&q=80',
      details: 'Golden fries tossed in aromatic truffle oil and finished with shaved parmesan.'
    },
    {
      name: 'Mango Tango',
      type: 'Drink',
      desc: 'Mango puree, coconut milk, and a hint of lime.',
      img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=120&q=80',
      details: 'A tropical, creamy drink with a zesty finish. Served chilled.'
    },
    {
      name: 'Chocolate Lava Cake',
      type: 'Food',
      desc: 'Warm chocolate cake with a gooey molten center.',
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=120&q=80',
      details: 'Rich, decadent, and served with vanilla ice cream and fresh berries.'
    },
    {
      name: 'Cucumber Cooler',
      type: 'Drink',
      desc: 'Cucumber, lime, and tonic with a splash of gin.',
      img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=120&q=80',
      details: 'A crisp, cooling cocktail with a botanical twist. Garnished with fresh cucumber.'
    },
    {
      name: 'Caprese Skewers',
      type: 'Food',
      desc: 'Fresh mozzarella, cherry tomatoes, basil, balsamic glaze.',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=120&q=80',
      details: 'A light and fresh starter, perfect for sharing.'
    },
    {
      name: 'Matcha Fizz',
      type: 'Drink',
      desc: 'Matcha, lemon, tonic, honey.',
      img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=120&q=80',
      details: 'A unique, energizing drink with a hint of sweetness.'
    },
    {
      name: 'Vegan Buddha Bowl',
      type: 'Food',
      desc: 'Quinoa, roasted veggies, chickpeas, tahini dressing.',
      img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=120&q=80',
      details: 'A nourishing bowl packed with flavor and nutrition.'
    },
    {
      name: 'Lemon Tart',
      type: 'Food',
      desc: 'Tangy lemon curd, buttery crust.',
      img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=120&q=80',
      details: 'A zesty dessert with a perfect balance of sweet and tart.'
    }
  ];

  const pickModal = document.getElementById('pick-modal');
  const pickModalBody = document.querySelector('.pick-modal-body');
  const pickModalClose = document.querySelector('.pick-modal-close');

  function showPickModal(item) {
    pickModalBody.innerHTML = `
      <img src="${item.img}" alt="${item.name}" style="width:90px;height:90px;border-radius:50%;margin-bottom:1rem;object-fit:cover;box-shadow:0 4px 24px #7f53ac22;">
      <div class="pick-type" style="margin-bottom:0.5rem;">${item.type}</div>
      <h3 style="color:#e94e77;margin-bottom:0.5rem;">${item.name}</h3>
      <p style="color:#555;font-size:1.05rem;margin-bottom:1rem;">${item.details}</p>
    `;
    pickModal.style.display = 'flex';
    pickModal.setAttribute('aria-modal', 'true');
    pickModal.setAttribute('role', 'dialog');
    pickModal.setAttribute('tabindex', '-1');
    document.body.style.overflow = 'hidden';
    pickModalContentAnimateIn();
    // Focus trap
    setTimeout(() => {
      pickModalClose.focus();
    }, 100);
  }

  function pickModalContentAnimateIn() {
    const content = document.querySelector('.pick-modal-content');
    content.style.animation = 'pick-modal-in 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
  }

  function closePickModal() {
    pickModal.style.display = 'none';
    document.body.style.overflow = '';
  }
  pickModalClose.addEventListener('click', closePickModal);
  pickModal.addEventListener('click', e => {
    if (e.target === pickModal) closePickModal();
  });
  // Close on Escape key
  window.addEventListener('keydown', function(e) {
    if (pickModal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) {
      closePickModal();
    }
  });
  // Trap focus inside modal
  pickModal.addEventListener('keydown', function(e) {
    if (pickModal.style.display !== 'flex') return;
    const focusable = pickModal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  // Animate cards in on scroll (re-trigger on section enter)
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 900,
      startEvent: 'DOMContentLoaded',
      useClassNames: true,
      animatedClassName: 'aos-animate',
      initClassName: 'aos-init',
    });
  }
});

// --- Animation Cleanup ---
// Only use AOS for entrance animations. No custom JS animation code.
// After rendering dynamic content, refresh AOS:
if (typeof AOS !== 'undefined' && typeof AOS.refresh === 'function') {
  setTimeout(() => { AOS.refresh(); }, 200);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function() {
      const item = this.closest('.faq-item'); // بدل parentElement بـ closest
      if (item) item.classList.toggle('open');
    });
  });
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.modern-navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('sticky-shadow');
  } else {
    navbar.classList.remove('sticky-shadow');
  }
});