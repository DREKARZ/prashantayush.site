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
    document.documentElement.setAttribute('data-theme', themeValue);
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
