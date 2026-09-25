/* -------------------------------------------------------------
 * PRASHANT AYUSH PORTFOLIO & MARKETING AGENCY — UNIFIED MASTER ENGINE
 * Target Domain: prashantayush.site
 * ------------------------------------------------------------- */

// Global Cart Basket State
window.paCart = JSON.parse(localStorage.getItem('pa_agency_cart') || '[]');

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Bright & Dark Theme Engine
  initThemeEngine();

  // 3. Entrance Choice Portal Modal Engine
  initEntranceModal();

  // 4. Language Switcher Engine
  initLanguageSwitcher();

  // 5. Category Filter Tabs Engine
  initCategoryFilters();

  // 6. Quote Modal Engine
  initQuoteModal();

  // 7. Interactive Billing Basket Cart Engine
  initBillingCart();

  // 8. Mobile & Desktop GST Invoice Generator Engine
  initGstInvoiceGenerator();
});

/* -------------------------------------------------------------
 * 2. THEME ENGINE (BRIGHT / DARK MODE)
 * ------------------------------------------------------------- */
function initThemeEngine() {
  const agencyThemeBtn = document.getElementById('themeToggleBtn');
  const savedThemeMode = localStorage.getItem('pa_agency_theme_mode') || 'dark';

  if (savedThemeMode === 'light') {
    document.body.classList.add('light-mode');
    document.body.setAttribute('data-agency-theme', 'light');
    if (agencyThemeBtn) {
      const toggleText = agencyThemeBtn.querySelector('.theme-toggle-text');
      if (toggleText) toggleText.textContent = 'Dark';
    }
  } else {
    document.body.classList.remove('light-mode');
    document.body.setAttribute('data-agency-theme', 'dark');
    if (agencyThemeBtn) {
      const toggleText = agencyThemeBtn.querySelector('.theme-toggle-text');
      if (toggleText) toggleText.textContent = 'Bright';
    }
  }

  if (agencyThemeBtn) {
    agencyThemeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-mode');
      if (isLight) {
        document.body.classList.remove('light-mode');
        document.body.setAttribute('data-agency-theme', 'dark');
        localStorage.setItem('pa_agency_theme_mode', 'dark');
        const toggleText = agencyThemeBtn.querySelector('.theme-toggle-text');
        if (toggleText) toggleText.textContent = 'Bright';
      } else {
        document.body.classList.add('light-mode');
        document.body.setAttribute('data-agency-theme', 'light');
        localStorage.setItem('pa_agency_theme_mode', 'light');
        const toggleText = agencyThemeBtn.querySelector('.theme-toggle-text');
        if (toggleText) toggleText.textContent = 'Dark';
      }
    });
  }
}

/* -------------------------------------------------------------
 * 3. ENTRANCE CHOICE PORTAL MODAL ENGINE
 * ------------------------------------------------------------- */
function initEntranceModal() {
  const entranceOverlay = document.getElementById('entranceModalOverlay');
  const closeEntranceBtn = document.getElementById('closeEntranceModalBtn');
  const hasSeenModal = sessionStorage.getItem('pa_seen_entrance_modal');

  if (!hasSeenModal && entranceOverlay) {
    setTimeout(() => {
      entranceOverlay.classList.add('active');
    }, 600);
  }

  document.querySelectorAll('.open-entrance-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (entranceOverlay) entranceOverlay.classList.add('active');
    });
  });

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
}

/* -------------------------------------------------------------
 * 4. LANGUAGE SWITCHER ENGINE
 * ------------------------------------------------------------- */
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

function initLanguageSwitcher() {
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
}

function applyLanguage(lang) {
  const dict = langDict[lang] || langDict.en;
  
  const heroTagEl = document.querySelector('.hero-tagline-pill span:last-child');
  if (heroTagEl) heroTagEl.textContent = dict.heroTag;

  const heroSubEl = document.querySelector('.hero-subtitle');
  if (heroSubEl) heroSubEl.textContent = `"${dict.heroSub}"`;

  const catTagEl = document.querySelector('.section-tag');
  if (catTagEl) catTagEl.textContent = dict.catTag;

  const catTitleEl = document.querySelector('#services .section-title');
  if (catTitleEl) catTitleEl.textContent = dict.catTitle;

  document.querySelectorAll('.add-to-bill-btn span').forEach(el => {
    el.textContent = dict.addBill;
  });
}

/* -------------------------------------------------------------
 * 5. CATEGORY FILTERS ENGINE
 * ------------------------------------------------------------- */
function initCategoryFilters() {
  const catTabBtns = document.querySelectorAll('.cat-tab-btn');
  const serviceCards = document.querySelectorAll('.agency-service-grid .service-card-pro');

  if (catTabBtns.length > 0 && serviceCards.length > 0) {
    catTabBtns.forEach(tab => {
      tab.addEventListener('click', () => {
        catTabBtns.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-cat');

        serviceCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'flex';
          } else {
            const cat = card.getAttribute('data-category') || '';
            if (cat === filter) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }
}

/* -------------------------------------------------------------
 * 6. QUOTE MODAL ENGINE
 * ------------------------------------------------------------- */
function initQuoteModal() {
  const quoteModalOverlay = document.getElementById('quoteModalOverlay');
  const closeQuoteModalBtn = document.getElementById('closeQuoteModalBtn');
  const quoteServiceSelect = document.getElementById('quoteService');
  const sendQuoteWhatsappBtn = document.getElementById('sendQuoteWhatsappBtn');
  const sendQuoteEmailBtn = document.getElementById('sendQuoteEmailBtn');

  document.addEventListener('click', (e) => {
    const quoteBtn = e.target.closest('.open-quote-modal-btn');
    if (quoteBtn) {
      e.preventDefault();
      const serviceName = quoteBtn.getAttribute('data-service') || 'General Agency Enquiry';
      if (quoteServiceSelect) {
        let matchedOption = false;
        for (let opt of quoteServiceSelect.options) {
          if (opt.value.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(opt.value.toLowerCase())) {
            quoteServiceSelect.value = opt.value;
            matchedOption = true;
            break;
          }
        }
        if (!matchedOption && quoteServiceSelect.options.length > 0) {
          quoteServiceSelect.selectedIndex = 0;
        }
      }
      if (quoteModalOverlay) quoteModalOverlay.classList.add('active');
    }
  });

  if (closeQuoteModalBtn && quoteModalOverlay) {
    closeQuoteModalBtn.addEventListener('click', () => quoteModalOverlay.classList.remove('active'));
    quoteModalOverlay.addEventListener('click', (e) => {
      if (e.target === quoteModalOverlay) quoteModalOverlay.classList.remove('active');
    });
  }

  if (sendQuoteWhatsappBtn) {
    sendQuoteWhatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('quoteName')?.value.trim() || '';
      const business = document.getElementById('quoteBusiness')?.value.trim() || '';
      const phone = document.getElementById('quotePhone')?.value.trim() || '';
      const service = document.getElementById('quoteService')?.value || '';
      const quantity = document.getElementById('quoteQuantity')?.value.trim() || '';
      const budget = document.getElementById('quoteBudget')?.value.trim() || '';
      const requirements = document.getElementById('quoteRequirements')?.value.trim() || '';

      if (!name || !phone) {
        alert('Please fill in your Name and Phone/WhatsApp Number first!');
        return;
      }

      const msg = `*Hello Prashant Marketing Agency,*%0A%0A` +
                  `I would like to enquire about *${encodeURIComponent(service)}*.%0A%0A` +
                  `👤 *Name:* ${encodeURIComponent(name)}%0A` +
                  `🏢 *Business/Shop:* ${encodeURIComponent(business || 'N/A')}%0A` +
                  `📞 *Phone/WhatsApp:* ${encodeURIComponent(phone)}%0A` +
                  `📦 *Quantity:* ${encodeURIComponent(quantity || 'N/A')}%0A` +
                  `💰 *Budget:* ${encodeURIComponent(budget || 'N/A')}%0A` +
                  `💬 *Requirements:* ${encodeURIComponent(requirements || 'N/A')}%0A%0A` +
                  `Please share the pricing and details!`;

      window.open(`https://wa.me/917903388456?text=${msg}`, '_blank');
    });
  }

  if (sendQuoteEmailBtn) {
    sendQuoteEmailBtn.addEventListener('click', () => {
      const name = document.getElementById('quoteName')?.value.trim() || '';
      const phone = document.getElementById('quotePhone')?.value.trim() || '';
      const service = document.getElementById('quoteService')?.value || '';

      if (!name || !phone) {
        alert('Please fill in your Name and Phone Number first!');
        return;
      }

      const subject = encodeURIComponent(`Agency Quote Request: ${service} from ${name}`);
      const body = encodeURIComponent(`Quote request for ${service} from ${name} (Phone: ${phone})`);
      window.location.href = `mailto:prashantayush52@gmail.com?subject=${subject}&body=${body}`;
    });
  }
}

/* -------------------------------------------------------------
 * 7. INTERACTIVE BILLING BASKET CART ENGINE
 * ------------------------------------------------------------- */
function initBillingCart() {
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

  renderCartUI();
}

function addToCart(svcName, rate, unit, sac) {
  const existingIndex = window.paCart.findIndex(item => item.name === svcName);
  if (existingIndex > -1) {
    window.paCart[existingIndex].qty += 1;
  } else {
    window.paCart.push({ name: svcName, rate: rate, qty: 1, unit: unit, sac: sac });
  }
  saveCart();
  renderCartUI();
  showToast(`Added "${svcName}" to Customer Bill! 🛒`);
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

  // Populate mobile bill list
  const invMobileItemsList = document.getElementById('invMobileItemsList');
  if (invMobileItemsList) {
    invMobileItemsList.innerHTML = '';
    window.paCart.forEach(item => {
      if (typeof addMobileInvItem === 'function') {
        addMobileInvItem(item.name, item.rate, item.qty, item.sac);
      }
    });
  }

  if (typeof updateMobileBillCalculation === 'function') {
    updateMobileBillCalculation();
  }
}

// Toast Notification Engine
function showToast(message) {
  let toast = document.getElementById('paToastContainer');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'paToastContainer';
    toast.style.cssText = 'position: fixed; top: 25px; right: 25px; z-index: 100000; background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: #FFF; padding: 0.75rem 1.25rem; border-radius: 9999px; font-weight: 800; font-size: 0.88rem; box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4); opacity: 0; transform: translateY(-15px); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-15px)';
  }, 2400);
}

/* -------------------------------------------------------------
 * 8. MOBILE & DESKTOP GST INVOICE GENERATOR ENGINE
 * ------------------------------------------------------------- */
function initGstInvoiceGenerator() {
  const invMobileItemsList = document.getElementById('invMobileItemsList');
  const addInvRowBtn = document.getElementById('addInvRowBtn');
  const quickChips = document.querySelectorAll('.quick-chip-btn');
  const sendBillWhatsappBtn = document.getElementById('sendBillWhatsappBtn');

  // Quick Chips Handler
  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const svc = chip.getAttribute('data-svc');
      const rate = parseFloat(chip.getAttribute('data-rate')) || 0;
      const qty = parseFloat(chip.getAttribute('data-qty')) || 1;
      const sac = chip.getAttribute('data-sac') || '998314';
      addMobileInvItem(svc, rate, qty, sac);
    });
  });

  if (addInvRowBtn) {
    addInvRowBtn.addEventListener('click', () => addMobileInvItem('Custom Service', 500, 1, '998912'));
  }

  const inputs = ['invCustName', 'invCustPhone', 'invCustShop', 'invNumber', 'invGstRate', 'invDiscount', 'invAdvance', 'invStatus', 'invPayMode'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateMobileBillCalculation);
  });

  const printBtn = document.getElementById('printInvoiceBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      updateMobileBillCalculation();
      window.print();
    });
  }

  if (sendBillWhatsappBtn) {
    sendBillWhatsappBtn.addEventListener('click', () => {
      updateMobileBillCalculation();
      const custName = document.getElementById('invCustName')?.value.trim() || 'Ramesh Kumar';
      const custPhone = document.getElementById('invCustPhone')?.value.trim() || '+91 9876543210';
      const invNo = document.getElementById('invNumber')?.value.trim() || 'PMA-2026-101';
      const grandTotal = document.getElementById('printGrandTotal')?.textContent || '₹0';
      const balance = document.getElementById('printBalance')?.textContent || '₹0';

      const msg = `*OFFICIAL INVOICE FROM PRASHANT MARKETING AGENCY*%0A%0A` +
                  `📄 *Invoice No:* ${encodeURIComponent(invNo)}%0A` +
                  `👤 *Customer:* ${encodeURIComponent(custName)}%0A` +
                  `💵 *Grand Total:* ${encodeURIComponent(grandTotal)}%0A` +
                  `🚨 *Balance Due:* ${encodeURIComponent(balance)}%0A%0A` +
                  `Thank you for your business!%0Ahttps://prashantayush.site`;

      window.open(`https://wa.me/917903388456?text=${msg}`, '_blank');
    });
  }
}

function addMobileInvItem(name = 'Business Website Development', rate = 8999, qty = 1, sac = '998314') {
  const invMobileItemsList = document.getElementById('invMobileItemsList');
  if (!invMobileItemsList) return;

  const card = document.createElement('div');
  card.className = 'mobile-inv-item-card';
  card.innerHTML = `
    <div class="item-row-top" style="display: flex; gap: 0.5rem; margin-bottom: 0.4rem;">
      <input type="text" class="inv-item-name admin-input" value="${name}" placeholder="Service Name" style="flex: 1; min-height: 40px; font-size: 0.88rem; padding: 0.4rem 0.6rem;">
      <input type="text" class="inv-item-sac admin-input" value="${sac}" placeholder="SAC" style="width: 75px; min-height: 40px; font-size: 0.82rem; padding: 0.4rem 0.5rem;">
    </div>
    <div class="item-row-bottom" style="display: grid; grid-template-columns: 1fr 1fr 1fr 36px; gap: 0.5rem; align-items: center;">
      <div>
        <label style="font-size: 0.7rem; color: var(--text-muted); display: block;">Qty</label>
        <input type="number" class="inv-item-qty admin-input" value="${qty}" min="1" style="min-height: 38px; font-size: 0.85rem; padding: 0.3rem 0.5rem;">
      </div>
      <div>
        <label style="font-size: 0.7rem; color: var(--text-muted);">Rate (₹)</label>
        <input type="number" class="inv-item-rate admin-input" value="${rate}" min="0" style="min-height: 38px; font-size: 0.85rem; padding: 0.3rem 0.5rem;">
      </div>
      <div>
        <label style="font-size: 0.7rem; color: var(--text-muted);">Total (₹)</label>
        <input type="number" class="inv-item-total admin-input" value="${qty * rate}" readonly style="min-height: 38px; font-size: 0.85rem; padding: 0.3rem 0.5rem; background: rgba(255,255,255,0.05);">
      </div>
      <div style="text-align: center; padding-top: 12px;">
        <button type="button" class="remove-card-btn" style="background: none; border: none; color: #ef4444; cursor: pointer;"><i data-lucide="trash-2"></i></button>
      </div>
    </div>
  `;

  invMobileItemsList.appendChild(card);
  if (window.lucide) window.lucide.createIcons();

  attachMobileItemEvents(card);
  updateMobileBillCalculation();
}

function attachMobileItemEvents(card) {
  const qtyInput = card.querySelector('.inv-item-qty');
  const rateInput = card.querySelector('.inv-item-rate');
  const totalInput = card.querySelector('.inv-item-total');
  const removeBtn = card.querySelector('.remove-card-btn');

  function updateTotal() {
    const q = parseFloat(qtyInput.value) || 0;
    const r = parseFloat(rateInput.value) || 0;
    totalInput.value = (q * r).toFixed(0);
    updateMobileBillCalculation();
  }

  if (qtyInput) qtyInput.addEventListener('input', updateTotal);
  if (rateInput) rateInput.addEventListener('input', updateTotal);
  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      card.remove();
      updateMobileBillCalculation();
    });
  }
}

function updateMobileBillCalculation() {
  const custName = document.getElementById('invCustName')?.value.trim() || 'Ramesh Kumar';
  const custPhone = document.getElementById('invCustPhone')?.value.trim() || '+91 9876543210';
  const custShop = document.getElementById('invCustShop')?.value.trim() || '';
  const invNo = document.getElementById('invNumber')?.value.trim() || 'PMA-2026-101';
  const gstRate = parseFloat(document.getElementById('invGstRate')?.value) || 0;
  const discount = parseFloat(document.getElementById('invDiscount')?.value) || 0;
  const advance = parseFloat(document.getElementById('invAdvance')?.value) || 0;
  const status = document.getElementById('invStatus')?.value || 'FULL PAID';
  const payMode = document.getElementById('invPayMode')?.value || 'Cash';

  if (document.getElementById('printCustName')) document.getElementById('printCustName').textContent = custName;
  if (document.getElementById('printCustPhone')) document.getElementById('printCustPhone').textContent = 'Phone: ' + custPhone;
  if (document.getElementById('printCustShop')) document.getElementById('printCustShop').textContent = custShop || 'N/A';
  if (document.getElementById('printInvTitleNum')) document.getElementById('printInvTitleNum').textContent = 'INVOICE #' + invNo;
  if (document.getElementById('printInvStatusBadge')) document.getElementById('printInvStatusBadge').textContent = status;
  if (document.getElementById('printPayMode')) document.getElementById('printPayMode').textContent = payMode;

  const today = new Date().toISOString().split('T')[0];
  if (document.getElementById('printInvDate')) document.getElementById('printInvDate').textContent = 'Date: ' + today;

  const cards = document.querySelectorAll('.mobile-inv-item-card');
  let subtotal = 0;
  let tableHtml = '';

  cards.forEach((card, idx) => {
    const name = card.querySelector('.inv-item-name')?.value || 'Service';
    const sac = card.querySelector('.inv-item-sac')?.value || '998314';
    const qty = parseFloat(card.querySelector('.inv-item-qty')?.value) || 1;
    const rate = parseFloat(card.querySelector('.inv-item-rate')?.value) || 0;
    const total = qty * rate;
    subtotal += total;

    tableHtml += `
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 0.55rem;">${idx + 1}</td>
        <td style="padding: 0.55rem; font-weight: 700;">${name}</td>
        <td style="padding: 0.55rem; text-align: center;">${sac}</td>
        <td style="padding: 0.55rem; text-align: center;">${qty}</td>
        <td style="padding: 0.55rem; text-align: right;">₹${rate.toLocaleString('en-IN')}</td>
        <td style="padding: 0.55rem; text-align: right; font-weight: 800;">₹${total.toLocaleString('en-IN')}</td>
      </tr>
    `;
  });

  const tableBody = document.getElementById('printInvTableBody');
  if (tableBody) tableBody.innerHTML = tableHtml;

  const gstTax = subtotal * (gstRate / 100);
  const grandTotal = Math.max(0, subtotal + gstTax - discount);
  const balanceDue = Math.max(0, grandTotal - advance);

  if (document.getElementById('printSubtotal')) document.getElementById('printSubtotal').textContent = '₹' + subtotal.toLocaleString('en-IN');
  if (document.getElementById('printGstTax')) document.getElementById('printGstTax').textContent = '₹' + Math.round(gstTax).toLocaleString('en-IN');
  if (document.getElementById('printDiscount')) document.getElementById('printDiscount').textContent = '- ₹' + discount.toLocaleString('en-IN');
  if (document.getElementById('printGrandTotal')) document.getElementById('printGrandTotal').textContent = '₹' + Math.round(grandTotal).toLocaleString('en-IN');
  if (document.getElementById('printBalance')) document.getElementById('printBalance').textContent = '₹' + Math.round(balanceDue).toLocaleString('en-IN');
}
