/* -------------------------------------------------------------
 * PRASHANT AYUSH PORTFOLIO — 30 THEMES, 100 FONTS & CMS HYDRATION SCRIPT
 * ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- 30 MULTI-THEME ENGINE ---
  const themeFooter = document.getElementById('themePickerFooter');
  const savedTheme = localStorage.getItem('pa_portfolio_theme') || 'cyber';

  applyTheme(savedTheme);

  if (themeFooter) {
    themeFooter.addEventListener('change', (e) => applyTheme(e.target.value));
  }

  function applyTheme(themeValue) {
    if (document.body.classList.contains('agency-page-body')) {
      document.documentElement.setAttribute('data-theme', 'gold');
    } else {
      document.documentElement.setAttribute('data-theme', themeValue);
    }
    localStorage.setItem('pa_portfolio_theme', themeValue);
    if (themeFooter) themeFooter.value = themeValue;
  }

  // --- 100 DYNAMIC FONTS ENGINE ---
  const fontFooter = document.getElementById('fontPickerFooter');
  const savedFont = localStorage.getItem('pa_portfolio_font') || 'jakarta';

  applyFont(savedFont);

  if (fontFooter) {
    fontFooter.addEventListener('change', (e) => applyFont(e.target.value));
  }

  function applyFont(fontValue) {
    document.documentElement.setAttribute('data-font', fontValue);
    localStorage.setItem('pa_portfolio_font', fontValue);
    if (fontFooter) fontFooter.value = fontValue;
  }

  // --- MOBILE NAVIGATION DRAWER ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- ACTIVE LINK SCROLL HIGHLIGHT & STICKY NAV BAR ---
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (navbar) {
      if (scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }, { passive: true });

  // --- INTERACTION SCROLL REVEAL ANIMATIONS ---
  const revealElements = document.querySelectorAll('.reveal-item');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- DIRECT CONTACT FORM SUBMISSION HANDLERS (WHATSAPP & GMAIL) ---
  const contactForm = document.getElementById('contactForm');
  const submitEmailBtn = document.getElementById('submitEmailBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sendViaWhatsApp();
    });

    if (submitEmailBtn) {
      submitEmailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sendViaEmail();
      });
    }
  }

  function sendViaWhatsApp() {
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const subjectEl = document.getElementById('subject');
    const messageEl = document.getElementById('message');

    const name = nameEl ? nameEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const subject = subjectEl ? subjectEl.value : '';
    const message = messageEl ? messageEl.value.trim() : '';

    if (!name || !email || !message) {
      alert('Please fill in your Name, Email, and Message Details first!');
      return;
    }

    const text = `*New Hiring Inquiry for Prashant Ayush!*%0A%0A` +
                 `👤 *Name:* ${encodeURIComponent(name)}%0A` +
                 `✉️ *Email:* ${encodeURIComponent(email)}%0A` +
                 `🎯 *Opportunity Category:* ${encodeURIComponent(subject)}%0A` +
                 `💬 *Message Details:* ${encodeURIComponent(message)}`;

    window.open(`https://wa.me/917903388456?text=${text}`, '_blank');
  }

  function sendViaEmail() {
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const subjectEl = document.getElementById('subject');
    const messageEl = document.getElementById('message');

    const name = nameEl ? nameEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    const subject = subjectEl ? subjectEl.value : '';
    const message = messageEl ? messageEl.value.trim() : '';

    if (!name || !email || !message) {
      alert('Please fill in your Name, Email, and Message Details first!');
      return;
    }

    const emailSubject = encodeURIComponent(`Hiring Inquiry: ${subject} from ${name}`);
    const emailBody = encodeURIComponent(
      `Hiring Inquiry for Prashant Ayush\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Category: ${subject}\n\n` +
      `Message Details:\n${message}\n`
    );

    window.location.href = `mailto:prashantayush52@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  }

  
  // --- INTERACTIVE EXPERIENCE CATEGORY FILTER ENGINE ---
  const expFilterBtns = document.querySelectorAll('.exp-filter-btn');
  const expTimelineCards = document.querySelectorAll('.exp-timeline-card');

  if (expFilterBtns.length > 0 && expTimelineCards.length > 0) {
    expFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        expFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        expTimelineCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'block';
          } else {
            const categories = card.getAttribute('data-category') || '';
            if (categories.includes(filter)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // --- HYDRATE SAVED CMS DATA FROM LOCALSTORAGE ---
  hydrateCmsData();
});

// Hydrate Live CMS Edits from localStorage if set in Admin Portal
function hydrateCmsData() {
  const cmsData = JSON.parse(localStorage.getItem('pa_portfolio_cms_data') || '{}');
  if (!cmsData || Object.keys(cmsData).length === 0) return;

  const heroTitle = document.querySelector('.hero-title');
  if (cmsData.heroName && heroTitle) {
    heroTitle.innerHTML = `Hi, I'm <span class="highlight-name">${cmsData.heroName}</span>.`;
  }

  const heroBadge = document.querySelector('.hero-badge-pill span:last-child');
  if (cmsData.heroBadge && heroBadge) {
    heroBadge.textContent = cmsData.heroBadge;
  }

  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (cmsData.heroSubtitle && heroSubtitle) {
    heroSubtitle.innerHTML = cmsData.heroSubtitle;
  }

  const heroDesc = document.querySelector('.hero-description');
  if (cmsData.heroDesc && heroDesc) {
    heroDesc.innerHTML = cmsData.heroDesc;
  }

  const cardHeadline = document.querySelector('.card-headline');
  if (cmsData.aboutHeadline && cardHeadline) {
    cardHeadline.textContent = cmsData.aboutHeadline;
  }

  const bookTitle = document.querySelector('.book-title');
  if (cmsData.bookTitle && bookTitle) {
    bookTitle.textContent = cmsData.bookTitle;
  }

  const bookAuthor = document.querySelector('.book-author strong');
  if (cmsData.bookAuthor && bookAuthor) {
    bookAuthor.textContent = cmsData.bookAuthor;
  }

  const bookDesc = document.querySelector('.book-description');
  if (cmsData.bookDesc && bookDesc) {
    bookDesc.textContent = cmsData.bookDesc;
  }
}


  // --- AGENCY MODAL & QUOTE ENGINE ---
  const quoteModalOverlay = document.getElementById('quoteModalOverlay');
  const detailsModalOverlay = document.getElementById('detailsModalOverlay');
  const closeQuoteModalBtn = document.getElementById('closeQuoteModalBtn');
  const closeDetailsModalBtn = document.getElementById('closeDetailsModalBtn');
  const modalDetailsContent = document.getElementById('modalDetailsContent');
  const openQuoteBtns = document.querySelectorAll('.open-quote-modal-btn');
  const openDetailsBtns = document.querySelectorAll('.open-details-modal-btn');
  const quoteServiceSelect = document.getElementById('quoteService');
  const sendQuoteWhatsappBtn = document.getElementById('sendQuoteWhatsappBtn');
  const sendQuoteEmailBtn = document.getElementById('sendQuoteEmailBtn');

  // Global Document Event Delegation for Quote Modal Buttons (Works on 100% of buttons)
  document.addEventListener('click', (e) => {
    const quoteBtn = e.target.closest('.open-quote-modal-btn');
    if (quoteBtn) {
      e.preventDefault();
      const serviceName = quoteBtn.getAttribute('data-service') || 'General Agency Enquiry';
      if (detailsModalOverlay) detailsModalOverlay.classList.remove('active');
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

  // Close Modals
  if (closeQuoteModalBtn && quoteModalOverlay) {
    closeQuoteModalBtn.addEventListener('click', () => quoteModalOverlay.classList.remove('active'));
    quoteModalOverlay.addEventListener('click', (e) => {
      if (e.target === quoteModalOverlay) quoteModalOverlay.classList.remove('active');
    });
  }

  if (closeDetailsModalBtn && detailsModalOverlay) {
    closeDetailsModalBtn.addEventListener('click', () => detailsModalOverlay.classList.remove('active'));
    detailsModalOverlay.addEventListener('click', (e) => {
      if (e.target === detailsModalOverlay) detailsModalOverlay.classList.remove('active');
    });
  }

  // Send Quote via WhatsApp
  if (sendQuoteWhatsappBtn) {
    sendQuoteWhatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('quoteName').value.trim();
      const business = document.getElementById('quoteBusiness').value.trim();
      const phone = document.getElementById('quotePhone').value.trim();
      const service = document.getElementById('quoteService').value;
      const quantity = document.getElementById('quoteQuantity').value.trim();
      const budget = document.getElementById('quoteBudget').value.trim();
      const requirements = document.getElementById('quoteRequirements').value.trim();

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

  // Send Quote via Email
  if (sendQuoteEmailBtn) {
    sendQuoteEmailBtn.addEventListener('click', () => {
      const name = document.getElementById('quoteName').value.trim();
      const business = document.getElementById('quoteBusiness').value.trim();
      const phone = document.getElementById('quotePhone').value.trim();
      const service = document.getElementById('quoteService').value;
      const quantity = document.getElementById('quoteQuantity').value.trim();
      const budget = document.getElementById('quoteBudget').value.trim();
      const requirements = document.getElementById('quoteRequirements').value.trim();

      if (!name || !phone) {
        alert('Please fill in your Name and Phone Number first!');
        return;
      }

      const subject = encodeURIComponent(`Agency Quote Request: ${service} from ${name}`);
      const body = encodeURIComponent(
        `Hello Prashant Marketing Agency,

` +
        `I would like to request a quote for ${service}.

` +
        `Name: ${name}
` +
        `Business/Shop Name: ${business || 'N/A'}
` +
        `Phone Number: ${phone}
` +
        `Quantity: ${quantity || 'N/A'}
` +
        `Budget: ${budget || 'N/A'}
` +
        `Requirements:
${requirements || 'N/A'}
`
      );

      window.location.href = `mailto:prashantayush52@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Service Details Breakdown Data & Handler
  const serviceDetailsData = {
    'web-dev': {
      title: 'Website Development Services',
      included: ['Custom responsive HTML/CSS/JS design', 'Mobile & tablet optimization', 'Contact & Enquiry forms', 'WhatsApp 1-click button integration', 'Google Maps location embedding', 'Basic SEO meta setup'],
      forWho: 'Local business owners, shops, clinics, coaching institutes, real estate contractors, restaurants, and startups.',
      startingPrice: '₹4,999 (One-page) / ₹8,999 (Business)',
      turnaround: '3 to 7 working days',
      customerInputs: 'Business logo, photos, text info, contact details, and list of products/services.',
      serviceVal: 'Website Development'
    },
    'biz-apps': {
      title: 'Simple Business Apps',
      included: ['Custom Android app build', 'Business profile & digital catalogue', 'Customer enquiry & booking system', '1-click WhatsApp order button'],
      forWho: 'Shops, restaurants, local delivery services, and booking professionals.',
      startingPrice: '₹9,999+',
      turnaround: '7 to 12 working days',
      customerInputs: 'Product list, images, pricing, logo, and phone contact.',
      serviceVal: 'Simple Business Apps'
    },
    'printing': {
      title: 'Printing & Document Services',
      included: ['B/W & High-gloss color prints', 'PDF document printing', 'Document scanning & photocopy', 'Photo printing & letterheads'],
      forWho: 'Students, professionals, offices, shops, and institutions.',
      startingPrice: 'B/W ₹2/pg onwards • Color ₹10/pg onwards',
      turnaround: 'Same day or next day delivery',
      customerInputs: 'PDF document files, photos, paper size preference.',
      serviceVal: 'Printing & Document Services'
    },
    'lamination': {
      title: 'Lamination & Binding',
      included: ['ID card, A4 & A3 lamination', 'Plastic spiral ring binding', 'Hardcover book project binding', 'Document report finishing'],
      forWho: 'Students submitting project reports, schools, offices, and document preservation.',
      startingPrice: 'Lamination ₹20+ • Spiral ₹30+ • Hard Binding ₹100+',
      turnaround: 'Same day service',
      customerInputs: 'Printed pages/documents to bind or laminate.',
      serviceVal: 'Lamination & Binding'
    },
    'id-cards': {
      title: 'ID Card Printing Services',
      included: ['High-grade PVC plastic card print', 'Custom school/corporate design', 'Lanyard & card holder option', 'QR code / Barcode integration'],
      forWho: 'Schools, coaching institutes, colleges, corporate offices, and events.',
      startingPrice: '₹30/card (Paper) • ₹50/card (PVC)',
      turnaround: '2 to 4 days (Bulk orders supported)',
      customerInputs: 'Student/employee photo list, name, roll no/designation, and school logo.',
      serviceVal: 'ID Card Printing'
    },
    'paper-print': {
      title: 'Cards, Pamphlets & Brochures',
      included: ['Matt/Gloss visiting card prints', 'A4/A5 promotional pamphlets', 'Multi-fold business brochures', 'Bill books & receipt pads'],
      forWho: 'New shop launches, promotional events, local marketing campaigns.',
      startingPrice: 'Visiting Card ₹199/100 pcs • Pamphlets ₹499/100',
      turnaround: '2 to 3 working days',
      customerInputs: 'Business details, offer text, logo, contact number.',
      serviceVal: 'Cards, Pamphlets & Brochures'
    },
    'flex-print': {
      title: 'Poster & Promotional Flex Printing',
      included: ['Star flex & heavy banner prints', 'Promotional standees with frame', 'Shop signboard & hoarding design', 'Vinyl sticker printing'],
      forWho: 'Shop owners, event organizers, coaching institutes, real estate banners.',
      startingPrice: 'Flex ₹30/sq.ft • Poster ₹99+ • Standee ₹499+',
      turnaround: '24 to 48 hours',
      customerInputs: 'Banner size (ft x ft), content text, photos, and shop logo.',
      serviceVal: 'Poster & Flex Banner Printing'
    },
    'tshirt-print': {
      title: 'Custom T-Shirt Printing',
      included: ['Logo print T-shirts', 'Cotton & polyester fabric option', 'Front/Back printing', 'Bulk group discounts'],
      forWho: 'Staff uniforms, college groups, sports teams, event volunteers.',
      startingPrice: '₹299/t-shirt',
      turnaround: '3 to 5 days',
      customerInputs: 'T-shirt sizes list, color preference, and logo design file.',
      serviceVal: 'Custom T-Shirt Printing'
    },
    'graphic-design': {
      title: 'Graphic Design & Branding',
      included: ['Vector logo creation', 'Social media post designs', 'Poster & pamphlet layout design', 'Visiting card & menu layout'],
      forWho: 'Startups, shops, restaurants, doctors, and growing brands.',
      startingPrice: 'Poster Design ₹199+ • Logo ₹499+',
      turnaround: '1 to 3 days',
      customerInputs: 'Brand name, tagline, color preference, sample ideas.',
      serviceVal: 'Graphic Design & Branding'
    },
    'digital-mktg': {
      title: 'Online Digital Marketing',
      included: ['Instagram & Facebook page management', 'Google Business Profile setup', 'Ad campaign creation', 'Social media post graphics'],
      forWho: 'Local shops, clinics, restaurants, coaching institutes wanting local online visibility.',
      startingPrice: '₹1,999/month+',
      turnaround: 'Monthly active management',
      customerInputs: 'Target area location, business photos, offer details.',
      serviceVal: 'Online Digital Marketing'
    },
    'offline-mktg': {
      title: 'Offline Area Marketing',
      included: ['Targeted local area pamphlet distribution', 'Flyer handouts at key intersections', 'Banner positioning strategy'],
      forWho: 'Coaching admissions, shop grand openings, local clinics, event campaigns.',
      startingPrice: 'Campaigns ₹999+',
      turnaround: 'Scheduled campaign dates',
      customerInputs: 'Target location/locality for your business and pamphlet stock.',
      serviceVal: 'Offline Area Marketing'
    },
    'digital-biz': {
      title: 'Business Digitalization Solutions',
      included: ['Restaurant QR Code digital menu', 'WhatsApp Business catalogue setup', 'Excel management system', 'Customer booking form'],
      forWho: 'Restaurants, cafes, retail stores, and service professionals.',
      startingPrice: 'Digital Menu ₹499+ • Catalogue ₹999+',
      turnaround: '1 to 2 days',
      customerInputs: 'Menu list with prices or product catalogue photos.',
      serviceVal: 'Business Digitalization'
    },
    'assistance': {
      title: 'Online Application & Form Assistance',
      included: ['Online form filing guidance', 'Document scanning & upload assistance', 'Ticket booking support', 'Digital application assistance'],
      forWho: 'Individuals, students, job applicants, and local citizens needing online technical guidance.',
      startingPrice: 'Nominal service charge',
      turnaround: 'Same day online assistance',
      customerInputs: 'Relevant applicant details and required documents.',
      serviceVal: 'Online Application & Form Assistance'
    }
  };

  openDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const svcId = btn.getAttribute('data-svc-id');
      const data = serviceDetailsData[svcId];
      if (data && modalDetailsContent && detailsModalOverlay) {
        modalDetailsContent.innerHTML = `
          <span class="agency-hero-badge" style="font-size: 0.75rem; padding: 0.25rem 0.75rem;">SERVICE BREAKDOWN</span>
          <h3 style="font-size: 1.6rem; font-weight: 900; color: var(--text-primary); margin-bottom: 0.5rem;">${data.title}</h3>
          
          <div style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 0.75rem 1rem; margin-bottom: 1.25rem;">
            <strong style="color: #fbbf24;">Starting Price:</strong> <span style="font-weight: 800; color: #fff;">${data.startingPrice}</span><br>
            <strong style="color: var(--accent-secondary);">Estimated Turnaround:</strong> <span style="color: #fff;">${data.turnaround}</span>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <strong style="color: var(--text-primary); font-size: 0.95rem;">What is Included:</strong>
            <ul class="svc-bullets-list" style="margin-top: 0.4rem;">
              ${data.included.map(item => `<li><i data-lucide="check-circle-2"></i> ${item}</li>`).join('')}
            </ul>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <strong style="color: var(--text-primary); font-size: 0.95rem;">Who It's For:</strong>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.25rem;">${data.forWho}</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <strong style="color: var(--text-primary); font-size: 0.95rem;">Information You Need to Provide:</strong>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.25rem;">${data.customerInputs}</p>
          </div>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-primary open-quote-modal-btn" data-service="${data.serviceVal}" style="flex: 1; background: linear-gradient(135deg, #FF9900 0%, #FFB834 100%); color: #111; font-weight: 800; border: none;">
              <i data-lucide="calculator"></i>
              <span>Get Quote for this Service</span>
            </button>
          </div>
        `;

        if (window.lucide) window.lucide.createIcons();

        detailsModalOverlay.classList.add('active');

        // Bind quote button inside details modal
        const innerQuoteBtn = modalDetailsContent.querySelector('.open-quote-modal-btn');
        if (innerQuoteBtn) {
          innerQuoteBtn.addEventListener('click', () => {
            detailsModalOverlay.classList.remove('active');
            if (quoteServiceSelect) quoteServiceSelect.value = data.serviceVal;
            if (quoteModalOverlay) quoteModalOverlay.classList.add('active');
          });
        }
      }
    });
  });

  // Agency Services Category Filtering Engine
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


  // --- INTERACTIVE INVOICE & BILL GENERATOR LOGIC ---
  const addInvRowBtn = document.getElementById('addInvRowBtn');
  const invItemsInputBody = document.getElementById('invItemsInputBody');
  const generateInvoicePreviewBtn = document.getElementById('generateInvoicePreviewBtn');
  const printInvoiceBtn = document.getElementById('printInvoiceBtn');

  // Dynamic Add Row
  if (addInvRowBtn && invItemsInputBody) {
    addInvRowBtn.addEventListener('click', () => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="padding: 0.4rem;">
          <input type="text" class="inv-item-name admin-input" placeholder="e.g. ID Card Printing" value="ID Card Printing">
        </td>
        <td style="padding: 0.4rem;">
          <input type="number" class="inv-item-qty admin-input" value="50" min="1">
        </td>
        <td style="padding: 0.4rem;">
          <input type="number" class="inv-item-rate admin-input" value="50" min="0">
        </td>
        <td style="padding: 0.4rem;">
          <input type="number" class="inv-item-total admin-input" value="2500" readonly style="background: rgba(255,255,255,0.05);">
        </td>
        <td style="padding: 0.4rem; text-align: center;">
          <button type="button" class="remove-row-btn" style="background: none; border: none; color: #ef4444; cursor: pointer;"><i data-lucide="trash-2"></i></button>
        </td>
      `;
      invItemsInputBody.appendChild(tr);
      if (window.lucide) window.lucide.createIcons();
      attachRowEvents(tr);
      calculateTotals();
    });
  }

  // Row Calculation Events
  function attachRowEvents(row) {
    const qtyInput = row.querySelector('.inv-item-qty');
    const rateInput = row.querySelector('.inv-item-rate');
    const totalInput = row.querySelector('.inv-item-total');
    const removeBtn = row.querySelector('.remove-row-btn');

    function updateRowTotal() {
      const qty = parseFloat(qtyInput.value) || 0;
      const rate = parseFloat(rateInput.value) || 0;
      totalInput.value = (qty * rate).toFixed(0);
      calculateTotals();
    }

    if (qtyInput) qtyInput.addEventListener('input', updateRowTotal);
    if (rateInput) rateInput.addEventListener('input', updateRowTotal);
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        row.remove();
        calculateTotals();
      });
    }
  }

  // Attach events to initial rows
  const initialRows = document.querySelectorAll('#invItemsInputBody tr');
  initialRows.forEach(row => attachRowEvents(row));

  // Generate & Preview Invoice
  if (generateInvoicePreviewBtn) {
    generateInvoicePreviewBtn.addEventListener('click', calculateTotals);
  }

  // Print Invoice
  if (printInvoiceBtn) {
    printInvoiceBtn.addEventListener('click', () => {
      calculateTotals();
      window.print();
    });
  }

  function calculateTotals() {
    const custName = document.getElementById('invCustName')?.value.trim() || 'Ramesh Kumar';
    const custPhone = document.getElementById('invCustPhone')?.value.trim() || '+91 9876543210';
    const custShop = document.getElementById('invCustShop')?.value.trim() || '';
    const invNo = document.getElementById('invNumber')?.value.trim() || 'PMA-2026-101';
    const discount = parseFloat(document.getElementById('invDiscount')?.value) || 0;
    const advance = parseFloat(document.getElementById('invAdvance')?.value) || 0;
    const status = document.getElementById('invStatus')?.value || 'PAID';
    const payMode = document.getElementById('invPayMode')?.value || 'Cash';

    // Set Customer Info in Printable Sheet
    document.getElementById('printCustName').textContent = custName;
    document.getElementById('printCustPhone').textContent = 'Phone: ' + custPhone;
    document.getElementById('printCustShop').textContent = custShop || 'N/A';
    document.getElementById('printInvTitleNum').textContent = 'INVOICE #' + invNo;
    document.getElementById('printInvStatusBadge').textContent = status;
    document.getElementById('printPayMode').textContent = payMode;

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('printInvDate').textContent = 'Date: ' + today;

    // Build Table Rows
    const rows = document.querySelectorAll('#invItemsInputBody tr');
    let subtotal = 0;
    let html = '';

    rows.forEach((row, idx) => {
      const name = row.querySelector('.inv-item-name')?.value || 'Service Item';
      const qty = parseFloat(row.querySelector('.inv-item-qty')?.value) || 1;
      const rate = parseFloat(row.querySelector('.inv-item-rate')?.value) || 0;
      const rowTotal = qty * rate;
      subtotal += rowTotal;

      html += `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 0.65rem 0.85rem;">${idx + 1}</td>
          <td style="padding: 0.65rem 0.85rem; font-weight: 700;">${name}</td>
          <td style="padding: 0.65rem 0.85rem; text-align: center;">${qty}</td>
          <td style="padding: 0.65rem 0.85rem; text-align: right;">₹${rate.toLocaleString()}</td>
          <td style="padding: 0.65rem 0.85rem; text-align: right; font-weight: 800;">₹${rowTotal.toLocaleString()}</td>
        </tr>
      `;
    });

    document.getElementById('printInvTableBody').innerHTML = html;

    const balance = Math.max(0, subtotal - discount - advance);

    document.getElementById('printSubtotal').textContent = '₹' + subtotal.toLocaleString();
    document.getElementById('printDiscount').textContent = '- ₹' + discount.toLocaleString();
    document.getElementById('printAdvance').textContent = '₹' + advance.toLocaleString();
    document.getElementById('printBalance').textContent = '₹' + balance.toLocaleString();
  }


  // --- AGENCY BRIGHT / DARK MODE THEME TOGGLE HANDLER ---
  const agencyThemeToggleBtn = document.getElementById('agencyThemeToggleBtn');
  const agencyThemeIcon = document.getElementById('agencyThemeIcon');

  if (agencyThemeToggleBtn) {
    // Check saved agency theme or default to dark/gold
    const savedAgencyTheme = localStorage.getItem('pa_agency_theme_mode') || 'gold';
    applyAgencyThemeMode(savedAgencyTheme);

    agencyThemeToggleBtn.addEventListener('click', () => {
      const current = document.body.getAttribute('data-agency-theme') || 'gold';
      const nextTheme = current === 'gold' ? 'light' : 'gold';
      applyAgencyThemeMode(nextTheme);
    });
  }

  function applyAgencyThemeMode(mode) {
    document.body.setAttribute('data-agency-theme', mode);
    localStorage.setItem('pa_agency_theme_mode', mode);
    if (agencyThemeIcon) {
      agencyThemeIcon.textContent = mode === 'light' ? '🌙 Dark Mode' : '☀️ Bright Mode';
    }
  }

  // --- QUICK SERVICE PICKER TO ADD PRE-LOADED AGENCY SERVICES ---
  const quickServicePicker = document.getElementById('quickServicePicker');
  const addQuickServiceBtn = document.getElementById('addQuickServiceBtn');

  if (addQuickServiceBtn && quickServicePicker && invItemsInputBody) {
    addQuickServiceBtn.addEventListener('click', () => {
      const val = quickServicePicker.value;
      if (!val) return;
      const [svcName, qty, rate, sac] = val.split('|');

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="padding: 0.4rem;">
          <input type="text" class="inv-item-name admin-input" value="${svcName}">
        </td>
        <td style="padding: 0.4rem;">
          <input type="text" class="inv-item-sac admin-input" value="${sac || '998314'}">
        </td>
        <td style="padding: 0.4rem;">
          <input type="number" class="inv-item-qty admin-input" value="${qty}" min="1">
        </td>
        <td style="padding: 0.4rem;">
          <input type="number" class="inv-item-rate admin-input" value="${rate}" min="0">
        </td>
        <td style="padding: 0.4rem;">
          <input type="number" class="inv-item-total admin-input" value="${qty * rate}" readonly style="background: rgba(255,255,255,0.05);">
        </td>
        <td style="padding: 0.4rem; text-align: center;">
          <button type="button" class="remove-row-btn" style="background: none; border: none; color: #ef4444; cursor: pointer;"><i data-lucide="trash-2"></i></button>
        </td>
      `;
      invItemsInputBody.appendChild(tr);
      if (window.lucide) window.lucide.createIcons();
      attachRowEvents(tr);
      calculateGstTotals();
    });
  }

  // GST BILL CALCULATION ENGINE
  function calculateGstTotals() {
    const custName = document.getElementById('invCustName')?.value.trim() || 'Ramesh Kumar';
    const custPhone = document.getElementById('invCustPhone')?.value.trim() || '+91 9876543210';
    const custShop = document.getElementById('invCustShop')?.value.trim() || 'Kumar Medical Store';
    const invNo = document.getElementById('invNumber')?.value.trim() || 'PMA-2026-101';
    const gstRate = parseFloat(document.getElementById('invGstRate')?.value) || 0;
    const gstType = document.getElementById('invGstType')?.value || 'CGST_SGST';
    const discount = parseFloat(document.getElementById('invDiscount')?.value) || 0;
    const advance = parseFloat(document.getElementById('invAdvance')?.value) || 0;
    const status = document.getElementById('invStatus')?.value || 'FULL PAID';
    const payMode = document.getElementById('invPayMode')?.value || 'Cash';

    // Set Customer Info
    if (document.getElementById('printCustName')) document.getElementById('printCustName').textContent = custName;
    if (document.getElementById('printCustPhone')) document.getElementById('printCustPhone').textContent = 'Phone: ' + custPhone;
    if (document.getElementById('printCustShop')) document.getElementById('printCustShop').textContent = custShop || 'N/A';
    if (document.getElementById('printInvTitleNum')) document.getElementById('printInvTitleNum').textContent = 'TAX INVOICE #' + invNo;
    if (document.getElementById('printInvStatusBadge')) document.getElementById('printInvStatusBadge').textContent = status;
    if (document.getElementById('printPayMode')) document.getElementById('printPayMode').textContent = payMode;

    const today = new Date().toISOString().split('T')[0];
    if (document.getElementById('printInvDate')) document.getElementById('printInvDate').textContent = 'Date: ' + today;

    // Build Table Rows
    const rows = document.querySelectorAll('#invItemsInputBody tr');
    let subtotal = 0;
    let html = '';

    rows.forEach((row, idx) => {
      const name = row.querySelector('.inv-item-name')?.value || 'Service Item';
      const sac = row.querySelector('.inv-item-sac')?.value || '998314';
      const qty = parseFloat(row.querySelector('.inv-item-qty')?.value) || 1;
      const rate = parseFloat(row.querySelector('.inv-item-rate')?.value) || 0;
      const rowTotal = qty * rate;
      subtotal += rowTotal;

      html += `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 0.65rem;">${idx + 1}</td>
          <td style="padding: 0.65rem; font-weight: 700;">${name}</td>
          <td style="padding: 0.65rem; text-align: center;">${sac}</td>
          <td style="padding: 0.65rem; text-align: center;">${qty}</td>
          <td style="padding: 0.65rem; text-align: right;">₹${rate.toLocaleString()}</td>
          <td style="padding: 0.65rem; text-align: right; font-weight: 800;">₹${rowTotal.toLocaleString()}</td>
        </tr>
      `;
    });

    const tableBodyEl = document.getElementById('printInvTableBody');
    if (tableBodyEl) tableBodyEl.innerHTML = html;

    // Calculate GST Amounts
    const gstTotalAmt = (subtotal * (gstRate / 100));
    let cgstAmt = 0;
    let sgstAmt = 0;
    let igstAmt = 0;

    if (gstType === 'CGST_SGST') {
      cgstAmt = gstTotalAmt / 2;
      sgstAmt = gstTotalAmt / 2;
      if (document.getElementById('printCgstRow')) document.getElementById('printCgstRow').style.display = 'flex';
      if (document.getElementById('printSgstRow')) document.getElementById('printSgstRow').style.display = 'flex';
      if (document.getElementById('printCgst')) document.getElementById('printCgst').textContent = '₹' + cgstAmt.toFixed(2);
      if (document.getElementById('printSgst')) document.getElementById('printSgst').textContent = '₹' + sgstAmt.toFixed(2);
    } else {
      igstAmt = gstTotalAmt;
      if (document.getElementById('printCgstRow')) document.getElementById('printCgstRow').style.display = 'none';
      if (document.getElementById('printSgstRow')) document.getElementById('printSgstRow').style.display = 'flex';
      if (document.getElementById('printSgst')) document.getElementById('printSgst').textContent = 'IGST (18%): ₹' + igstAmt.toFixed(2);
    }

    const grandTotal = Math.max(0, subtotal + gstTotalAmt - discount);
    const balanceDue = Math.max(0, grandTotal - advance);

    if (document.getElementById('printSubtotal')) document.getElementById('printSubtotal').textContent = '₹' + subtotal.toLocaleString();
    if (document.getElementById('printDiscount')) document.getElementById('printDiscount').textContent = '- ₹' + discount.toLocaleString();
    if (document.getElementById('printGrandTotal')) document.getElementById('printGrandTotal').textContent = '₹' + grandTotal.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
    if (document.getElementById('printAdvance')) document.getElementById('printAdvance').textContent = '₹' + advance.toLocaleString();
    if (document.getElementById('printBalance')) document.getElementById('printBalance').textContent = '₹' + balanceDue.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
  }

  // Re-bind invoice calculation buttons to GST calculation
  const genBtn = document.getElementById('generateInvoicePreviewBtn');
  if (genBtn) genBtn.addEventListener('click', calculateGstTotals);

  const printBtn = document.getElementById('printInvoiceBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      calculateGstTotals();
      window.print();
    });
  }


  // --- 3-LINE MEGA NAVIGATION DRAWER ENGINE (LAPTOP, DESKTOP & MOBILE) ---
  const openMegaDrawerBtn = document.getElementById('openMegaDrawerBtn');
  const closeMegaDrawerBtn = document.getElementById('closeMegaDrawerBtn');
  const megaDrawerOverlay = document.getElementById('megaDrawerOverlay');
  const megaCloseActions = document.querySelectorAll('.mega-close-action');

  if (openMegaDrawerBtn && megaDrawerOverlay) {
    openMegaDrawerBtn.addEventListener('click', () => {
      megaDrawerOverlay.classList.add('active');
    });
  }

  if (closeMegaDrawerBtn && megaDrawerOverlay) {
    closeMegaDrawerBtn.addEventListener('click', () => {
      megaDrawerOverlay.classList.remove('active');
    });

    megaDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === megaDrawerOverlay) {
        megaDrawerOverlay.classList.remove('active');
      }
    });
  }

  megaCloseActions.forEach(link => {
    link.addEventListener('click', () => {
      if (megaDrawerOverlay) megaDrawerOverlay.classList.remove('active');
    });
  });


  // --- 100% MOBILE-FRIENDLY GST BILL GENERATOR SCRIPT ---
  const invMobileItemsList = document.getElementById('invMobileItemsList');
  const addInvRowBtn = document.getElementById('addInvRowBtn');
  const quickChips = document.querySelectorAll('.quick-chip-btn');
  const sendBillWhatsappBtn = document.getElementById('sendBillWhatsappBtn');

  // Add Item Line Function
  function addMobileInvItem(name = 'Business Website Development', rate = 8999, qty = 1, sac = '998314') {
    if (!invMobileItemsList) return;

    const card = document.createElement('div');
    card.className = 'mobile-inv-item-card';
    card.innerHTML = `
      <div class="item-row-top">
        <input type="text" class="inv-item-name admin-input" value="${name}" placeholder="Service / Item Name" style="min-height: 42px; font-size: 0.9rem;">
        <input type="text" class="inv-item-sac admin-input" value="${sac}" placeholder="SAC" style="width: 80px; min-height: 42px; font-size: 0.85rem;">
      </div>
      <div class="item-row-bottom">
        <div>
          <label style="font-size: 0.72rem; color: var(--text-muted);">Qty</label>
          <input type="number" class="inv-item-qty admin-input" value="${qty}" min="1" style="min-height: 40px; font-size: 0.88rem;">
        </div>
        <div>
          <label style="font-size: 0.72rem; color: var(--text-muted);">Rate (₹)</label>
          <input type="number" class="inv-item-rate admin-input" value="${rate}" min="0" style="min-height: 40px; font-size: 0.88rem;">
        </div>
        <div>
          <label style="font-size: 0.72rem; color: var(--text-muted);">Total (₹)</label>
          <input type="number" class="inv-item-total admin-input" value="${qty * rate}" readonly style="min-height: 40px; font-size: 0.88rem; background: rgba(255,255,255,0.05);">
        </div>
        <div style="text-align: center; padding-top: 14px;">
          <button type="button" class="remove-card-btn" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 1.1rem;"><i data-lucide="trash-2"></i></button>
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

  // Quick Chips Click Event
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

  // Initialize initial default item
  if (invMobileItemsList && invMobileItemsList.children.length === 0) {
    addMobileInvItem('Business Website Development', 8999, 1, '998314');
  }

  // Live Auto-Calculation Engine
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
    let textSummary = '';

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
          <td style="padding: 0.55rem; text-align: right;">₹${rate.toLocaleString()}</td>
          <td style="padding: 0.55rem; text-align: right; font-weight: 800;">₹${total.toLocaleString()}</td>
        </tr>
      `;

      textSummary += `${idx + 1}. ${name} (x${qty}) - ₹${total.toLocaleString()}%0A`;
    });

    const tableBody = document.getElementById('printInvTableBody');
    if (tableBody) tableBody.innerHTML = tableHtml;

    const gstTax = subtotal * (gstRate / 100);
    const grandTotal = Math.max(0, subtotal + gstTax - discount);
    const balanceDue = Math.max(0, grandTotal - advance);

    if (document.getElementById('printSubtotal')) document.getElementById('printSubtotal').textContent = '₹' + subtotal.toLocaleString();
    if (document.getElementById('printGstTax')) document.getElementById('printGstTax').textContent = '₹' + gstTax.toFixed(0);
    if (document.getElementById('printDiscount')) document.getElementById('printDiscount').textContent = '- ₹' + discount.toLocaleString();
    if (document.getElementById('printGrandTotal')) document.getElementById('printGrandTotal').textContent = '₹' + grandTotal.toLocaleString();
    if (document.getElementById('printBalance')) document.getElementById('printBalance').textContent = '₹' + balanceDue.toLocaleString();

    // Setup WhatsApp Bill Dispatcher
    if (sendBillWhatsappBtn) {
      sendBillWhatsappBtn.onclick = () => {
        const msg = `*OFFICIAL INVOICE FROM PRASHANT MARKETING AGENCY*%0A%0A` +
                    `📄 *Invoice No:* ${encodeURIComponent(invNo)}%0A` +
                    `👤 *Customer:* ${encodeURIComponent(custName)} (${encodeURIComponent(custShop)})%0A` +
                    `📞 *Phone:* ${encodeURIComponent(custPhone)}%0A%0A` +
                    `📋 *Services Billed:*%0A${textSummary}%0A` +
                    `💰 *Subtotal:* ₹${subtotal.toLocaleString()}%0A` +
                    `📊 *GST (${gstRate}%):* ₹${gstTax.toFixed(0)}%0A` +
                    `🏷️ *Discount:* -₹${discount.toLocaleString()}%0A` +
                    `💵 *Grand Total:* ₹${grandTotal.toLocaleString()}%0A` +
                    `💳 *Advance Received:* ₹${advance.toLocaleString()}%0A` +
                    `🚨 *Balance Due:* ₹${balanceDue.toLocaleString()}%0A` +
                    `📌 *Status:* ${encodeURIComponent(status)} (${encodeURIComponent(payMode)})%0A%0A` +
                    `Thank you for choosing Prashant Marketing Agency!%0Ahttps://prashantayush.site`;

        window.open(`https://wa.me/917903388456?text=${msg}`, '_blank');
      };
    }
  }

  // Input change listeners
  ['invCustName', 'invCustPhone', 'invCustShop', 'invNumber', 'invGstRate', 'invDiscount', 'invAdvance', 'invStatus', 'invPayMode'].forEach(id => {
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

/* -------------------------------------------------------------
 * V3 ADVANCED ULTIMATE REVAMP: BRIGHT/DARK TOGGLE, CART TO GST INVOICE & TOAST NOTIFICATIONS
 * ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Button Handler (Dark / Bright Mode Switch)
  const agencyThemeBtn = document.getElementById('themeToggleBtn');
  if (agencyThemeBtn) {
    const currentTheme = localStorage.getItem('pa_agency_theme_mode') || 'dark';
    if (currentTheme === 'light') {
      document.body.classList.add('light-mode');
      document.body.setAttribute('data-agency-theme', 'light');
      agencyThemeBtn.querySelector('.theme-toggle-text').textContent = 'Dark';
    }

    agencyThemeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-mode');
      if (isLight) {
        document.body.classList.remove('light-mode');
        document.body.setAttribute('data-agency-theme', 'dark');
        localStorage.setItem('pa_agency_theme_mode', 'dark');
        agencyThemeBtn.querySelector('.theme-toggle-text').textContent = 'Bright';
      } else {
        document.body.classList.add('light-mode');
        document.body.setAttribute('data-agency-theme', 'light');
        localStorage.setItem('pa_agency_theme_mode', 'light');
        agencyThemeBtn.querySelector('.theme-toggle-text').textContent = 'Dark';
      }
    });
  }
});

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

// Override addToCart to show Toast
const origAddToCart = window.addToCart;
window.addToCart = function(svcName, rate, unit, sac) {
  const existingIndex = window.paCart.findIndex(item => item.name === svcName);
  if (existingIndex > -1) {
    window.paCart[existingIndex].qty += 1;
  } else {
    window.paCart.push({ name: svcName, rate: rate, qty: 1, unit: unit, sac: sac });
  }
  saveCart();
  renderCartUI();
  showToast(`Added "${svcName}" to Customer Bill! 🛒`);
};

// Populate GST Bill Generator Table from Cart

// Populate GST Printable Invoice Sheet from Cart Basket
window.populateInvoiceFromCart = function(cartItems) {
  const printBody = document.getElementById('printInvTableBody');
  if (!printBody) return;

  let html = '';
  let subtotal = 0;
  cartItems.forEach((item, idx) => {
    const total = item.rate * item.qty;
    subtotal += total;
    html += `
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 0.55rem;">${idx + 1}</td>
        <td style="padding: 0.55rem; font-weight: 700;">${item.name}</td>
        <td style="padding: 0.55rem; text-align: center;">${item.sac || '998314'}</td>
        <td style="padding: 0.55rem; text-align: center;">${item.qty}</td>
        <td style="padding: 0.55rem; text-align: right;">₹${item.rate}</td>
        <td style="padding: 0.55rem; text-align: right; font-weight: 800;">₹${total.toLocaleString('en-IN')}</td>
      </tr>
    `;
  });
  printBody.innerHTML = html;

  const gstRate = 18;
  const gstTax = Math.round((subtotal * gstRate) / 100);
  const grandTotal = subtotal + gstTax;

  const printSubtotal = document.getElementById('printSubtotal');
  const printGstTax = document.getElementById('printGstTax');
  const printGrandTotal = document.getElementById('printGrandTotal');
  const printBalance = document.getElementById('printBalance');

  if (printSubtotal) printSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (printGstTax) printGstTax.textContent = `₹${gstTax.toLocaleString('en-IN')}`;
  if (printGrandTotal) printGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  if (printBalance) printBalance.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

  showToast('Customer Bill Basket Loaded into Printable GST Sheet! 📄');
};


// Cart Transfer to Invoice Trigger
window.printCartAsInvoice = function() {
  if (window.paCart.length === 0) {
    alert('Your billing basket is empty!');
    return;
  }
  const invSection = document.getElementById('invoice-section');
  if (invSection) invSection.scrollIntoView({ behavior: 'smooth' });

  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  if (cartDrawerOverlay) cartDrawerOverlay.classList.remove('active');

  window.populateInvoiceFromCart(window.paCart);
};
