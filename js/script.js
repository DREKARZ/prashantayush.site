/* -------------------------------------------------------------
 * PRASHANT AYUSH PORTFOLIO — INTERACTIVITY, MULTI-THEME ENGINE & CMS HYDRATION
 * ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- MULTI-THEME ENGINE (4 THEMES: CYBER, GOLD, EMERALD, LIGHT) ---
  const themePicker = document.getElementById('themePicker');
  const savedTheme = localStorage.getItem('pa_portfolio_theme') || 'cyber';

  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themePicker) {
    themePicker.value = savedTheme;
    themePicker.addEventListener('change', (e) => {
      const selectedTheme = e.target.value;
      document.documentElement.setAttribute('data-theme', selectedTheme);
      localStorage.setItem('pa_portfolio_theme', selectedTheme);
    });
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
