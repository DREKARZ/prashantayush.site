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
