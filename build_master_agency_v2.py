import os, re

mktg_path  = r'C:\Users\impra\prashantayush.online\marketing-agency.html'
index_path = r'C:\Users\impra\prashantayush.online\index.html'
css_path   = r'C:\Users\impra\prashantayush.online\css\style.css'
js_path    = r'C:\Users\impra\prashantayush.online\js\script.js'

print("--- 1. UPDATING STYLE.CSS ---")
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

v2_styles = '''
/* -------------------------------------------------------------
 * V2 ADVANCED REVAMP: ENTRANCE MODAL, LANG SWITCHER, MULTI-COLOR ACCENTS & CART DRAWER
 * ------------------------------------------------------------- */

/* ENTRANCE MODAL */
.entrance-modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(4, 6, 12, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}
.entrance-modal-overlay.active {
  opacity: 1;
  pointer-events: auto;
}
.entrance-card-container {
  background: var(--bg-secondary);
  border: 2px solid #F59E0B;
  border-radius: 28px;
  max-width: 820px;
  width: 100%;
  padding: 2.25rem 2rem;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.8), 0 0 50px rgba(245, 158, 11, 0.35);
  text-align: center;
  position: relative;
  transform: scale(0.92);
  transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.entrance-modal-overlay.active .entrance-card-container {
  transform: scale(1);
}
.entrance-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 1.75rem;
}
@media (max-width: 640px) {
  .entrance-grid { grid-template-columns: 1fr; }
  .entrance-card-container { padding: 1.75rem 1.25rem; }
}
.entrance-choice-card {
  background: var(--card-bg);
  border: 1.5px solid var(--card-border);
  border-radius: 20px;
  padding: 1.75rem 1.25rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
}
.entrance-choice-card:hover {
  transform: translateY(-6px) scale(1.02);
}
.entrance-choice-card.card-portfolio:hover {
  border-color: #38BDF8;
  box-shadow: 0 15px 35px rgba(56, 189, 248, 0.35);
}
.entrance-choice-card.card-agency:hover {
  border-color: #F59E0B;
  box-shadow: 0 15px 35px rgba(245, 158, 11, 0.35);
}

/* LANGUAGE SWITCHER */
.lang-switcher-select {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--card-border);
  color: var(--text-primary);
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.4rem 0.75rem;
  border-radius: 9999px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;
}
.lang-switcher-select option {
  background: #0F172A;
  color: #F8FAFC;
}

/* MULTI-COLOR VIBRANT ACCENTS */
.theme-gold { border: 1.5px solid rgba(245, 158, 11, 0.5) !important; background: linear-gradient(145deg, rgba(245, 158, 11, 0.07), rgba(15, 23, 42, 0.7)) !important; }
.theme-cyan { border: 1.5px solid rgba(6, 182, 212, 0.5) !important; background: linear-gradient(145deg, rgba(6, 182, 212, 0.07), rgba(15, 23, 42, 0.7)) !important; }
.theme-red { border: 1.5px solid rgba(239, 68, 68, 0.5) !important; background: linear-gradient(145deg, rgba(239, 68, 68, 0.07), rgba(15, 23, 42, 0.7)) !important; }
.theme-blue { border: 1.5px solid rgba(59, 130, 246, 0.5) !important; background: linear-gradient(145deg, rgba(59, 130, 246, 0.07), rgba(15, 23, 42, 0.7)) !important; }
.theme-green { border: 1.5px solid rgba(16, 185, 129, 0.5) !important; background: linear-gradient(145deg, rgba(16, 185, 129, 0.07), rgba(15, 23, 42, 0.7)) !important; }
.theme-purple { border: 1.5px solid rgba(139, 92, 246, 0.5) !important; background: linear-gradient(145deg, rgba(139, 92, 246, 0.07), rgba(15, 23, 42, 0.7)) !important; }

/* BILLING BASKET / CART SYSTEM */
.cart-floating-bar {
  position: fixed;
  bottom: 25px;
  left: 25px;
  z-index: 9990;
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  border: 2px solid #10B981;
  border-radius: 9999px;
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6), 0 0 25px rgba(16, 185, 129, 0.35);
  cursor: pointer;
  color: #FFF;
  font-weight: 800;
  font-size: 0.88rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.cart-floating-bar:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 15px 40px rgba(16, 185, 129, 0.5);
}
.cart-badge-count {
  background: #10B981;
  color: #042F2E;
  font-weight: 900;
  font-size: 0.78rem;
  padding: 0.15rem 0.55rem;
  border-radius: 9999px;
}
.cart-drawer-overlay {
  position: fixed;
  top: 0; right: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 100000;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.cart-drawer-overlay.active {
  opacity: 1;
  pointer-events: auto;
}
.cart-drawer-card {
  width: 100%;
  max-width: 480px;
  height: 100%;
  background: var(--bg-secondary);
  border-left: 2px solid #10B981;
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: -10px 0 40px rgba(0,0,0,0.7);
}
.cart-drawer-overlay.active .cart-drawer-card {
  transform: translateX(0);
}
.add-to-bill-btn {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid #10B981;
  color: #34D399;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.3rem 0.65rem;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.2s ease;
}
.add-to-bill-btn:hover {
  background: #10B981;
  color: #064E3B;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
}
'''

if 'V2 ADVANCED REVAMP' not in css_content:
    css_content += v2_styles

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)

print("--- 2. UPDATING SCRIPT.JS ---")
with open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

v2_js_engine = '''
/* -------------------------------------------------------------
 * V2 ENGINE: ENTRANCE MODAL, LANG SWITCHER & CART BASKET SYSTEM
 * ------------------------------------------------------------- */

// Global Cart State
window.paCart = JSON.parse(localStorage.getItem('pa_agency_cart') || '[]');

document.addEventListener('DOMContentLoaded', () => {
  // Check Entrance Modal (Show on first visit per session)
  const hasSeenModal = sessionStorage.getItem('pa_seen_entrance_modal');
  const entranceOverlay = document.getElementById('entranceModalOverlay');
  if (!hasSeenModal && entranceOverlay) {
    setTimeout(() => {
      entranceOverlay.classList.add('active');
    }, 600);
  }

  // Open Entrance Modal manually via trigger buttons
  document.querySelectorAll('.open-entrance-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (entranceOverlay) entranceOverlay.classList.add('active');
    });
  });

  const closeEntranceBtn = document.getElementById('closeEntranceModalBtn');
  if (closeEntranceBtn && entranceOverlay) {
    closeEntranceBtn.addEventListener('click', () => {
      sessionStorage.setItem('pa_seen_entrance_modal', 'true');
      entranceOverlay.classList.remove('active');
    });
    entranceOverlay.addEventListener('click', (e) => {
      if (e.target === entranceOverlay) {
        sessionStorage.setItem('pa_seen_entrance_modal', 'true');
        entranceOverlay.classList.remove('active');
      }
    });
  }

  // Language Switcher Setup
  const langSelect = document.getElementById('agencyLangSelect');
  if (langSelect) {
    const savedLang = localStorage.getItem('pa_agency_lang') || 'en';
    langSelect.value = savedLang;
    applyLanguage(savedLang);

    langSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      localStorage.setItem('pa_agency_lang', selected);
      applyLanguage(selected);
    });
  }

  // Add to Bill Click Delegation
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-to-bill-btn');
    if (addBtn) {
      e.preventDefault();
      e.stopPropagation();
      const name = addBtn.getAttribute('data-svc') || 'Service';
      const rate = parseFloat(addBtn.getAttribute('data-rate') || '0');
      const unit = addBtn.getAttribute('data-unit') || 'pcs';
      const sac = addBtn.getAttribute('data-sac') || '998314';
      addToCart(name, rate, unit, sac);
    }
  });

  // Floating Cart Bar Click
  const cartFloatingBar = document.getElementById('cartFloatingBar');
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const closeCartDrawerBtn = document.getElementById('closeCartDrawerBtn');

  if (cartFloatingBar && cartDrawerOverlay) {
    cartFloatingBar.addEventListener('click', () => {
      cartDrawerOverlay.classList.add('active');
    });
  }
  if (closeCartDrawerBtn && cartDrawerOverlay) {
    closeCartDrawerBtn.addEventListener('click', () => cartDrawerOverlay.classList.remove('active'));
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) cartDrawerOverlay.classList.remove('active');
    });
  }

  // Render initial Cart state
  renderCartUI();
});

// Add Item to Billing Cart
function addToCart(svcName, rate, unit, sac) {
  const existingIndex = window.paCart.findIndex(item => item.name === svcName);
  if (existingIndex > -1) {
    window.paCart[existingIndex].qty += 1;
  } else {
    window.paCart.push({ name: svcName, rate: rate, qty: 1, unit: unit, sac: sac });
  }
  saveCart();
  renderCartUI();

  // Highlight Cart Floating Bar
  const cartBar = document.getElementById('cartFloatingBar');
  if (cartBar) {
    cartBar.style.transform = 'scale(1.15)';
    setTimeout(() => cartBar.style.transform = 'none', 300);
  }
}

function updateCartQty(index, delta) {
  if (window.paCart[index]) {
    window.paCart[index].qty += delta;
    if (window.paCart[index].qty <= 0) {
      window.paCart.splice(index, 1);
    }
    saveCart();
    renderCartUI();
  }
}

function removeFromCart(index) {
  if (window.paCart[index]) {
    window.paCart.splice(index, 1);
    saveCart();
    renderCartUI();
  }
}

function saveCart() {
  localStorage.setItem('pa_agency_cart', JSON.stringify(window.paCart));
}

function renderCartUI() {
  const cartBar = document.getElementById('cartFloatingBar');
  const countBadge = document.getElementById('cartBarCount');
  const totalText = document.getElementById('cartBarTotal');
  const itemsContainer = document.getElementById('cartItemsList');
  const cartDrawerTotal = document.getElementById('cartDrawerTotalText');

  let totalItems = 0;
  let totalCost = 0;

  window.paCart.forEach(item => {
    totalItems += item.qty;
    totalCost += item.rate * item.qty;
  });

  if (countBadge) countBadge.textContent = totalItems;
  if (totalText) totalText.textContent = `₹${totalCost.toLocaleString('en-IN')}`;
  if (cartDrawerTotal) cartDrawerTotal.textContent = `₹${totalCost.toLocaleString('en-IN')}`;

  if (cartBar) {
    cartBar.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  if (itemsContainer) {
    if (window.paCart.length === 0) {
      itemsContainer.innerHTML = '<div style="text-align: center; color: var(--text-secondary); margin: 3rem 0;"><i data-lucide="shopping-bag" style="width: 48px; height: 48px; opacity: 0.4;"></i><p style="margin-top: 0.75rem;">Your bill basket is currently empty.</p></div>';
    } else {
      let html = '';
      window.paCart.forEach((item, idx) => {
        html += `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 0; border-bottom: 1px solid var(--card-border);">
            <div style="flex: 1; padding-right: 0.5rem;">
              <strong style="display: block; font-size: 0.88rem; color: var(--text-primary);">${item.name}</strong>
              <span style="font-size: 0.78rem; color: var(--text-secondary);">₹${item.rate} / ${item.unit}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <button onclick="updateCartQty(${idx}, -1)" style="background: rgba(255,255,255,0.08); border: 1px solid var(--card-border); color: #fff; width: 24px; height: 24px; border-radius: 4px; cursor: pointer;">-</button>
              <span style="font-weight: 800; font-size: 0.88rem; min-width: 20px; text-align: center;">${item.qty}</span>
              <button onclick="updateCartQty(${idx}, 1)" style="background: rgba(255,255,255,0.08); border: 1px solid var(--card-border); color: #fff; width: 24px; height: 24px; border-radius: 4px; cursor: pointer;">+</button>
              <button onclick="removeFromCart(${idx})" style="background: rgba(239,68,68,0.2); border: 1px solid #EF4444; color: #FCA5A5; width: 24px; height: 24px; border-radius: 4px; cursor: pointer; margin-left: 0.35rem;">✕</button>
            </div>
          </div>
        `;
      });
      itemsContainer.innerHTML = html;
    }
  }

  if (window.lucide) window.lucide.createIcons();
}

// Transfer Basket to GST Invoice Generator & Print
function printCartAsInvoice() {
  if (window.paCart.length === 0) {
    alert('Your billing basket is empty!');
    return;
  }
  const invSection = document.getElementById('invoice-section');
  if (invSection) invSection.scrollIntoView({ behavior: 'smooth' });

  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  if (cartDrawerOverlay) cartDrawerOverlay.classList.remove('active');
}

const langDict = {
  en: {
    heroTag: "Idea to Impact • Local Business Ka Digital Partner",
    heroTitle: "PRASHANT MARKETING AGENCY",
    heroSub: "Your One-Stop Solution for Digital, Printing & Marketing Needs",
    catTag: "COMPREHENSIVE AGENCY CATALOGUE",
    catTitle: "Explore All Offered Services & Digital Solutions",
    addBill: "+ Add to Bill",
  },
  hi: {
    heroTag: "आइडिया से प्रभाव • डिजिटल एवं प्रिंटिंग पार्टनर",
    heroTitle: "प्रशांत मार्केटिंग एजेंसी",
    heroSub: "डिजिटल, प्रिंटिंग, फ्लैक्स एवं सरकारी सेवाओं का संपूर्ण समाधान",
    catTag: "संपूर्ण एजेंसी कैटलॉग एवं मूल्य सूची",
    catTitle: "हमारी सभी सेवाएं एवं डिजिटल समाधान देखें",
    addBill: "+ बिल में जोड़ें",
  },
  hinglish: {
    heroTag: "Idea Se Impact • Apka Digital & Print Partner",
    heroTitle: "PRASHANT MARKETING AGENCY",
    heroSub: "Digital, Printing, Banners & Online Work Ka Complete Solution",
    catTag: "SABHI AGENCY SERVICES KI LIST",
    catTitle: "Explore Karein Apne Business Ke Liye Best Services",
    addBill: "+ Bill Me Jodein",
  }
};

function applyLanguage(lang) {
  const dict = langDict[lang] || langDict.en;
  
  const heroTagEl = document.querySelector('.hero-tagline-pill span');
  if (heroTagEl) heroTagEl.textContent = dict.heroTag;

  const heroSubEl = document.querySelector('.hero-subtitle');
  if (heroSubEl) heroSubEl.textContent = dict.heroSub;

  const catTagEl = document.querySelector('.section-tag');
  if (catTagEl) catTagEl.textContent = dict.catTag;

  const catTitleEl = document.querySelector('.section-title');
  if (catTitleEl && catTitleEl.closest('#services')) catTitleEl.textContent = dict.catTitle;

  document.querySelectorAll('.add-to-bill-btn span').forEach(el => {
    el.textContent = dict.addBill;
  });
}
'''

if 'V2 ENGINE: ENTRANCE MODAL' not in js_content:
    js_content += v2_js_engine

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)


print("--- 3. UPDATING MARKETING-AGENCY.HTML ---")
with open(mktg_path, 'r', encoding='utf-8') as f:
    mktg_html = f.read()

# Update Nav Bar Header Controls with Lang Switcher & Portal Switch Button
header_controls_new = '''<div style="display: flex; align-items: center; gap: 0.6rem;">
        <select id="agencyLangSelect" class="lang-switcher-select" aria-label="Language Selector">
          <option value="en">🇬🇧 English</option>
          <option value="hi">🇮🇳 हिंदी</option>
          <option value="hinglish">🔤 Hinglish</option>
        </select>
        <button class="btn btn-outline btn-sm open-entrance-modal-btn" style="border-radius: 9999px; font-size: 0.8rem; padding: 0.4rem 0.8rem; gap: 0.35rem;" aria-label="Switch Portal">
          <i data-lucide="compass"></i> <span>Portals</span>
        </button>
        <a href="index.html" class="btn btn-outline btn-sm" style="border-radius: 9999px; font-size: 0.8rem; padding: 0.4rem 0.85rem;" aria-label="Portfolio">
          <span>Portfolio</span>
        </a>
        <button class="btn-theme-toggle" id="themeToggleBtn" aria-label="Toggle Brightness Mode">
          <i data-lucide="sun" class="sun-icon"></i>
          <i data-lucide="moon" class="moon-icon"></i>
          <span class="theme-toggle-text">Bright</span>
        </button>
      </div>'''

mktg_html = re.sub(r'<div style="display: flex; align-items: center; gap: 0.75rem;">.*?<\/div>', header_controls_new, mktg_html, flags=re.DOTALL, count=1)


# Update 12 Master Categories HTML with Colorful Theme Classes & "+ Add to Bill" buttons
master_v2_services_html = '''
    <!-- PHASE 5 — COMPLETE 12 MASTER SERVICE CATEGORIES (MULTI-COLOR ACCENTS + ADD TO BILL) -->
    <section id="services" class="section-padding">
      <div class="container">
        <div class="section-header center">
          <span class="section-tag">COMPREHENSIVE AGENCY CATALOGUE</span>
          <h2 class="section-title">Explore All Offered Services &amp; Digital Solutions</h2>
          <div class="section-divider"></div>
          <p style="max-width: 720px; margin: 0.85rem auto 0; color: var(--text-secondary); font-size: 0.98rem;">
            Click any service button to get a quote, or tap <strong>+ Add to Bill</strong> to add items directly to your customer billing basket.
          </p>
        </div>

        <!-- Category Filter Tabs -->
        <div class="agency-cat-tabs">
          <button class="cat-tab-btn active" data-cat="all"><i data-lucide="layers"></i> All Verticals (12)</button>
          <button class="cat-tab-btn" data-cat="print"><i data-lucide="printer"></i> Print &amp; Binding</button>
          <button class="cat-tab-btn" data-cat="design"><i data-lucide="palette"></i> Design &amp; Flex</button>
          <button class="cat-tab-btn" data-cat="tshirt"><i data-lucide="shirt"></i> T-Shirts &amp; Gifts</button>
          <button class="cat-tab-btn" data-cat="writing"><i data-lucide="pen-tool"></i> Content &amp; Writing</button>
          <button class="cat-tab-btn" data-cat="web"><i data-lucide="globe"></i> Web &amp; Apps</button>
          <button class="cat-tab-btn" data-cat="marketing"><i data-lucide="trending-up"></i> Marketing &amp; Ads</button>
          <button class="cat-tab-btn" data-cat="govt"><i data-lucide="shield-check"></i> Govt &amp; Online Docs</button>
          <button class="cat-tab-btn" data-cat="land"><i data-lucide="wheat"></i> Land &amp; Farmer</button>
          <button class="cat-tab-btn" data-cat="realty"><i data-lucide="home"></i> Realty &amp; Insurance</button>
          <button class="cat-tab-btn" data-cat="travel"><i data-lucide="plane"></i> Travel &amp; Tickets</button>
          <button class="cat-tab-btn" data-cat="student"><i data-lucide="graduation-cap"></i> Student Support</button>
          <button class="cat-tab-btn" data-cat="office"><i data-lucide="monitor"></i> Office &amp; Electronics</button>
        </div>

        <!-- 12 Master Category Cards Grid -->
        <div class="agency-service-grid" id="agencyServiceGrid">

          <!-- 1. Printing & Document Services -->
          <div class="service-card-pro theme-gold" data-category="print">
            <div>
              <span class="svc-badge-top tag-gold">🖨️ PRINTING &amp; DOCUMENT SERVICES</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Printing &amp; Document Finishing</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Fast print, perfect results. High-grade B/W, color, PDF, scanning, photo printing, and book binding.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Black &amp; White Print"><i data-lucide="printer"></i> B/W Print (₹2/pg)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Color Print"><i data-lucide="image"></i> Color Print (₹10/pg)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="PDF &amp; Document Print"><i data-lucide="file-text"></i> PDF &amp; Doc Print</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Document Scan &amp; Photocopy"><i data-lucide="scan"></i> Document Scan &amp; Copy</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Studio Photo Print"><i data-lucide="camera"></i> Studio Photo Print</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="A4/A3 Lamination"><i data-lucide="layers"></i> A4 / A3 Lamination</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Spiral Book Binding"><i data-lucide="book-open"></i> Spiral Ring Binding</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Hardcover Book Binding"><i data-lucide="book"></i> Hardcover Binding</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Project &amp; Assignment Report"><i data-lucide="award"></i> Project Printing</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">B/W ₹2/pg • Color ₹10/pg • Binding ₹30+</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Printing &amp; Document Services" style="flex:1;">Get Quote</button>
                <button type="button" class="add-to-bill-btn" data-svc="Document Printing (B/W)" data-rate="2" data-unit="page" data-sac="998912"><i data-lucide="plus"></i> <span>+ Add to Bill</span></button>
              </div>
            </div>
          </div>

          <!-- 2. Design & Printing Services -->
          <div class="service-card-pro theme-cyan" data-category="design">
            <div>
              <span class="svc-badge-top tag-cyan">🎨 DESIGN &amp; PRINTING SERVICES</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Design, Flex, Banners &amp; Cards</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Creative designs, strong impressions. Banners, hoardings, visiting cards, pamphlets, and shop signboards.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Flex &amp; Banner Printing"><i data-lucide="flag"></i> Flex Banner (₹30/sq.ft)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Poster Printing"><i data-lucide="image"></i> Poster Printing (₹99+)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Visiting Cards Printing"><i data-lucide="credit-card"></i> Visiting Cards (₹199/100)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Pamphlets &amp; Flyers Printing"><i data-lucide="file-text"></i> Pamphlets (₹499/100)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Brochure &amp; Catalogue Printing"><i data-lucide="book-open"></i> Brochure &amp; Catalogues</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Invitation &amp; Wedding Cards"><i data-lucide="mail"></i> Wedding Cards</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Visiting Card ₹199 • Flex ₹30/sq.ft</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Design &amp; Flex Printing" style="flex:1;">Order Banner / Card</button>
                <button type="button" class="add-to-bill-btn" data-svc="Flex Banner Printing" data-rate="30" data-unit="sq.ft" data-sac="998912"><i data-lucide="plus"></i> <span>+ Add to Bill</span></button>
              </div>
            </div>
          </div>

          <!-- 3. T-Shirt Printing & Custom Gifts -->
          <div class="service-card-pro theme-red" data-category="tshirt">
            <div>
              <span class="svc-badge-top tag-red">👕 T-SHIRTS &amp; GIFTS</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Custom T-Shirts &amp; Corporate Gifts</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Wear your ideas. Custom printed T-shirts for staff, college groups, sports teams, custom mugs, and corporate gifts.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Custom T-Shirt Printing"><i data-lucide="shirt"></i> Custom T-Shirts (₹299/pc)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Logo T-Shirt &amp; Staff Uniform"><i data-lucide="briefcase"></i> Staff Logo Uniforms</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Custom Printed Photo Mugs"><i data-lucide="coffee"></i> Custom Photo Mugs</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Custom Printed Cushions"><i data-lucide="heart"></i> Printed Cushions</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">T-Shirt ₹299/pc • Bulk Discounts</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Custom T-Shirt Printing &amp; Gifts" style="flex:1;">Order T-Shirts</button>
                <button type="button" class="add-to-bill-btn" data-svc="Custom Printed T-Shirt" data-rate="299" data-unit="pc" data-sac="998912"><i data-lucide="plus"></i> <span>+ Add to Bill</span></button>
              </div>
            </div>
          </div>

          <!-- 4. Ghostwriting & Content Creation -->
          <div class="service-card-pro theme-blue" data-category="writing">
            <div>
              <span class="svc-badge-top tag-blue">✍️ CONTENT &amp; GHOSTWRITING</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Ghostwriting &amp; Content Creation</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Words that work. Professional book ghostwriting, articles, website copywriting, scripts, speeches, and branding content.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Book &amp; eBook Ghostwriting"><i data-lucide="book-open"></i> Book Ghostwriting</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Blog &amp; Article Writing"><i data-lucide="edit-3"></i> Blog Writing (₹499)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Website Copywriting"><i data-lucide="globe"></i> Website Copywriting</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="YouTube Video Scriptwriting"><i data-lucide="video"></i> YouTube Scripts</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Articles ₹499+ • Ghostwriting Quote</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Ghostwriting &amp; Content Creation" style="flex:1;">Hire Content Writer</button>
                <button type="button" class="add-to-bill-btn" data-svc="Blog & Article Writing" data-rate="499" data-unit="article" data-sac="998314"><i data-lucide="plus"></i> <span>+ Add to Bill</span></button>
              </div>
            </div>
          </div>

          <!-- 5. Web & Business Apps -->
          <div class="service-card-pro theme-purple" data-category="web">
            <div>
              <span class="svc-badge-top tag-cyan">🌐 WEB &amp; APPS</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Website Development &amp; Business Apps</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                High-converting custom websites and business Android apps for shops, clinics, schools, coaching &amp; contractors.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="One Page &amp; Portfolio Site"><i data-lucide="globe"></i> One Page Site (₹4,999)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Business Website Development"><i data-lucide="layout"></i> Business Site (₹8,999)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Simple Business Android App"><i data-lucide="smartphone"></i> Business App (₹9,999)</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">One-Page ₹4,999 • Business ₹8,999 • App ₹9,999</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Website Development &amp; Business Apps" style="flex:1;">Build My Site/App</button>
                <button type="button" class="add-to-bill-btn" data-svc="Business Website Development" data-rate="8999" data-unit="site" data-sac="998314"><i data-lucide="plus"></i> <span>+ Add to Bill</span></button>
              </div>
            </div>
          </div>

          <!-- 6. Online & Offline Marketing Services -->
          <div class="service-card-pro theme-green" data-category="marketing">
            <div>
              <span class="svc-badge-top tag-gold">📢 MARKETING &amp; ADS</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Online &amp; Offline Business Marketing</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Local business promotion, social media ads, Google Ads, local area pamphlet campaigns, and shop front branding.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Social Media Marketing (IG/FB)"><i data-lucide="share-2"></i> SMM (₹1,999/mo)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Google Business Profile &amp; Maps SEO"><i data-lucide="map-pin"></i> Google Maps Local SEO</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Local Area Pamphlet Distribution"><i data-lucide="file-text"></i> Area Pamphlet Campaign</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">SMM ₹1,999/mo • Local Campaign ₹999+</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Online &amp; Offline Marketing" style="flex:1;">Grow My Business</button>
                <button type="button" class="add-to-bill-btn" data-svc="Social Media Marketing" data-rate="1999" data-unit="mo" data-sac="998314"><i data-lucide="plus"></i> <span>+ Add to Bill</span></button>
              </div>
            </div>
          </div>

          <!-- 7. Government Documents & Online Services -->
          <div class="service-card-pro theme-cyan" data-category="govt">
            <div>
              <span class="svc-badge-top tag-cyan">📜 GOVT &amp; ONLINE DOCS</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Government Documents &amp; Certificates</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Easy process, hassle-free support. Online application assistance for Aadhaar, PAN, Voter, Certificates &amp; Govt schemes.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Aadhaar Card Print &amp; Update"><i data-lucide="credit-card"></i> Aadhaar Print / Update</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="New PAN Card &amp; Correction"><i data-lucide="file-text"></i> New PAN / Correction</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Ayushman Card Application"><i data-lucide="activity"></i> Ayushman Bharat Card</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Income, Residence &amp; Caste Certificates"><i data-lucide="award"></i> Income/Residence/Caste</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Nominal Technical Filing Charge</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Government Documents &amp; Online Services" style="flex:1;">Get Assistance</button>
                <button type="button" class="add-to-bill-btn" data-svc="Govt Card / Form Application" data-rate="150" data-unit="form" data-sac="998314"><i data-lucide="plus"></i> <span>+ Add to Bill</span></button>
              </div>
            </div>
          </div>

          <!-- 8. Land & Farmer Services (जमीन एवं किसान सेवाएं) -->
          <div class="service-card-pro theme-gold" data-category="land">
            <div>
              <span class="svc-badge-top tag-gold">🌾 LAND &amp; FARMER SERVICES</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">जमीन एवं किसान ऑनलाइन सेवाएं</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Land record Dakhil-Kharij, Lagaan receipt, PM Kisan, Fasal Bima, and farmer registration portal support.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Land Record Dakhil-Kharij (दाखिल-खारिज)"><i data-lucide="file-text"></i> दाखिल-खारिज (Dakhil Kharij)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Land Receipt (ऑनलाइन लगान रसीद)"><i data-lucide="receipt"></i> ऑनलाइन लगान रसीद</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Fasal Bima (फ़सल बीमा)"><i data-lucide="shield"></i> फ़सल बीमा (Crop Insurance)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="PM Kisan Panjikaran Support"><i data-lucide="landmark"></i> PM Kisan Panjikaran</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Fast Online Portal Assistance</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Land &amp; Farmer Services" style="flex:1;">Apply Kisan / Land</button>
                <button type="button" class="add-to-bill-btn" data-svc="Dakhil Kharij Online Application" data-rate="300" data-unit="record" data-sac="998314"><i data-lucide="plus"></i> <span>+ Add to Bill</span></button>
              </div>
            </div>
          </div>

          <!-- 9. Realty, Insurance & Utility Services -->
          <div class="service-card-pro theme-red" data-category="realty">
            <div>
              <span class="svc-badge-top tag-red">🏠 REALTY &amp; UTILITIES</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Realty, Insurance &amp; Utility Services</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Property marketing, lead generation, vehicle/health insurance, electricity bill payments &amp; pollution certificates.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Vehicle Insurance (Bike/Car)"><i data-lucide="shield-check"></i> Vehicle Insurance</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Electricity Bill Payment"><i data-lucide="receipt"></i> Electricity Bill Payment</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Instant Online Bill &amp; Policy Support</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Realty, Insurance &amp; Utilities" style="flex:1;">Inquire Service</button>
              </div>
            </div>
          </div>

          <!-- 10. Travel & Ticket Booking -->
          <div class="service-card-pro theme-blue" data-category="travel">
            <div>
              <span class="svc-badge-top tag-cyan">✈️ TRAVEL &amp; TICKETS</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Train, Flight &amp; Bus Ticket Booking</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Instant IRCTC train ticket reservation, flight booking, bus tickets, hotel stays &amp; holiday packages.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="IRCTC Train Ticket Booking"><i data-lucide="train"></i> IRCTC Train Tickets</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Flight Ticket Booking"><i data-lucide="plane"></i> Flight Ticket Booking</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Instant Confirmation &amp; Ticket Support</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Travel &amp; Ticket Booking" style="flex:1;">Book Tickets Now</button>
                <button type="button" class="add-to-bill-btn" data-svc="Ticket Booking Charge" data-rate="100" data-unit="ticket" data-sac="998314"><i data-lucide="plus"></i> <span>+ Add to Bill</span></button>
              </div>
            </div>
          </div>

          <!-- 11. Education & Student Support -->
          <div class="service-card-pro theme-gold" data-category="student">
            <div>
              <span class="svc-badge-top tag-gold">🎓 EDUCATION &amp; STUDENT SUPPORT</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Academic Counseling &amp; Student Services</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                College counseling, admission support, syllabus &amp; notes print, exam forms &amp; student ID card printing.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="College Counseling &amp; Guidance"><i data-lucide="compass"></i> College Counseling</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Syllabus &amp; Study Notes Printing"><i data-lucide="book-open"></i> Syllabus &amp; Notes Print</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Student Friendly Pricing</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Education &amp; Student Support" style="flex:1;">Get Student Support</button>
              </div>
            </div>
          </div>

          <!-- 12. Digital, Electronics & Office Services -->
          <div class="service-card-pro theme-purple" data-category="office">
            <div>
              <span class="svc-badge-top tag-blue">💻 DIGITAL, ELECTRONICS &amp; OFFICE</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Digital Work, Accessories &amp; Office Support</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Hindi/English data entry typing, document editing, AEPS banking cash withdrawal, chargers, pen drives &amp; computer accessories.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Hindi &amp; English Data Entry Typing"><i data-lucide="keyboard"></i> Data Entry Typing</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Biodata &amp; Resume Making"><i data-lucide="file-person"></i> Biodata / Resume Creation</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Office &amp; Digital Solutions</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Digital, Electronics &amp; Office Services" style="flex:1;">Order Data Work</button>
                <button type="button" class="add-to-bill-btn" data-svc="Professional Resume Creation" data-rate="250" data-unit="resume" data-sac="998314"><i data-lucide="plus"></i> <span>+ Add to Bill</span></button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>'''

mktg_html = re.sub(r'<!-- PHASE 5 — COMPLETE 12 MASTER SERVICE CATEGORIES.*?<\/section>', master_v2_services_html, mktg_html, flags=re.DOTALL)


# Append Floating Cart Bar, Cart Drawer Overlay, and Entrance Choice Modal HTML before </body>
v2_overlays_html = '''
  <!-- FLOATING BILLING BASKET BAR -->
  <div id="cartFloatingBar" class="cart-floating-bar" style="display: none;">
    <i data-lucide="shopping-bag" style="color: #10B981; width: 20px; height: 20px;"></i>
    <span>Active Bill (<span id="cartBarCount" class="cart-badge-count">0</span>)</span>
    <span id="cartBarTotal" style="color: #F59E0B; margin-left: 0.25rem;">₹0</span>
  </div>

  <!-- BILLING CART SIDE DRAWER OVERLAY -->
  <div class="cart-drawer-overlay" id="cartDrawerOverlay">
    <div class="cart-drawer-card">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--card-border); padding-bottom: 1rem; margin-bottom: 1rem;">
        <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="receipt" style="color: #10B981;"></i> Customer Bill Basket
        </h3>
        <button id="closeCartDrawerBtn" style="background: none; border: none; color: var(--text-secondary); cursor: pointer;"><i data-lucide="x"></i></button>
      </div>

      <div id="cartItemsList" style="flex: 1; overflow-y: auto; margin-bottom: 1rem;">
        <!-- Cart Items Injected Dynamically -->
      </div>

      <div style="border-top: 1px solid var(--card-border); padding-top: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span style="font-weight: 700; color: var(--text-secondary);">Subtotal Amount:</span>
          <strong id="cartDrawerTotalText" style="font-size: 1.4rem; color: #F59E0B;">₹0</strong>
        </div>
        <button onclick="printCartAsInvoice()" class="btn btn-primary btn-full" style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: #FFF; font-weight: 800; border: none;">
          <i data-lucide="printer"></i> Print Invoice &amp; Estimate
        </button>
      </div>
    </div>
  </div>

  <!-- DUAL ENTRANCE PORTAL CHOICE MODAL -->
  <div class="entrance-modal-overlay" id="entranceModalOverlay">
    <div class="entrance-card-container">
      <button class="modal-close-btn" id="closeEntranceModalBtn" aria-label="Close Modal" style="position: absolute; top: 18px; right: 20px; background: rgba(255,255,255,0.08); border: 1px solid var(--card-border); color: #fff; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;"><i data-lucide="x"></i></button>

      <span class="agency-hero-badge" style="font-size: 0.8rem; padding: 0.3rem 0.85rem; background: rgba(245, 158, 11, 0.15); border: 1px solid #F59E0B; color: #F59E0B;">WELCOME TO PRASHANT AYUSH HUB</span>
      <h2 style="font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 900; margin: 0.6rem 0 0.2rem; color: var(--text-primary);">Choose Your Destination</h2>
      <p style="font-size: 0.92rem; color: var(--text-secondary); max-width: 580px; margin: 0 auto;">Select whether you want to explore Prashant's Professional Engineering Portfolio or Prashant Marketing Agency Services &amp; Digital Billing.</p>

      <div class="entrance-grid">
        <!-- Option 1: Portfolio -->
        <a href="index.html" class="entrance-choice-card card-portfolio">
          <div>
            <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(56, 189, 248, 0.15); border: 1px solid #38BDF8; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: #38BDF8;">
              <i data-lucide="graduation-cap" style="width: 28px; height: 28px;"></i>
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: #38BDF8; margin-bottom: 0.35rem;">Prashant Portfolio</h3>
            <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.45;">Civil Engineering, Software &amp; Web Development, Academic Support &amp; Official Resume.</p>
          </div>
          <div style="margin-top: 1.25rem;">
            <span class="btn btn-outline btn-sm" style="width: 100%; border-color: #38BDF8; color: #38BDF8;">Explore Portfolio →</span>
          </div>
        </a>

        <!-- Option 2: Marketing Agency -->
        <a href="marketing-agency.html" class="entrance-choice-card card-agency" onclick="document.getElementById('entranceModalOverlay').classList.remove('active'); return false;">
          <div>
            <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(245, 158, 11, 0.15); border: 1px solid #F59E0B; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: #F59E0B;">
              <i data-lucide="printer" style="width: 28px; height: 28px;"></i>
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: #F59E0B; margin-bottom: 0.35rem;">Marketing Agency</h3>
            <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.45;">Printing, Flex Banners, Custom T-Shirts, Website Dev, Govt Forms &amp; Instant Billing.</p>
          </div>
          <div style="margin-top: 1.25rem;">
            <span class="btn btn-primary btn-sm" style="width: 100%; background: #F59E0B; color: #0F172A; border: none; font-weight: 800;">Open Agency Portal →</span>
          </div>
        </a>
      </div>
    </div>
  </div>
'''

if 'cartFloatingBar' not in mktg_html:
    mktg_html = mktg_html.replace('</body>', v2_overlays_html + '\n</body>')

with open(mktg_path, 'w', encoding='utf-8') as f:
    f.write(mktg_html)

print("MARKETING-AGENCY.HTML UPDATED SUCCESSFULLY")


print("--- 4. UPDATING INDEX.HTML WITH ENTRANCE CHOICE POPUP ---")
with open(index_path, 'r', encoding='utf-8') as f:
    index_html = f.read()

if 'entranceModalOverlay' not in index_html:
    index_html = index_html.replace('</body>', v2_overlays_html + '\n</body>')

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(index_html)

print("INDEX.HTML UPDATED SUCCESSFULLY")
