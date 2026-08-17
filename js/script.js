/* -------------------------------------------------------------
 * PRASHANT AYUSH PORTFOLIO INTERACTIVITY & HYDRATION SCRIPT
 * Target Domain: prashantayush.online
 * ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hydrate content from Admin Portal CMS (if present in localStorage)
  hydrateCmsContent();

  // 2. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 3. Dark / Light Theme Switcher
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem('pa_portfolio_theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('pa_portfolio_theme', newTheme);
    });
  }

  // 4. Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }

  // 5. Scrollspy Active Section Highlighter
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          targetNavLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // 6. Scroll Reveal Intersection Observer Animation
  const revealElements = document.querySelectorAll('.reveal-item');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 7. Contact Form Handling via Mailto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      const emailRecipient = 'prashantayush52@gmail.com';
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} from ${name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCategory: ${subject}\n\nMessage:\n${message}\n\n---\nSent from prashantayush.online`
      );

      const mailtoUrl = `mailto:${emailRecipient}?subject=${mailtoSubject}&body=${mailtoBody}`;
      window.location.href = mailtoUrl;
    });
  }
});

// Dynamic Hydration of Admin Portal CMS Content
function hydrateCmsContent() {
  const cmsData = JSON.parse(localStorage.getItem('pa_portfolio_cms_data') || '{}');
  if (!cmsData || Object.keys(cmsData).length === 0) return;

  // Hydrate Hero
  if (cmsData.heroName) {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = `Hi, I'm <span class="highlight-name">${cmsData.heroName}</span>.`;
  }
  if (cmsData.heroBadge) {
    const badgeSpan = document.querySelector('.hero-badge-pill span:last-child');
    if (badgeSpan) badgeSpan.textContent = cmsData.heroBadge;
  }
  if (cmsData.heroSubtitle) {
    const subTitle = document.querySelector('.hero-subtitle');
    if (subTitle) subTitle.innerHTML = cmsData.heroSubtitle;
  }
  if (cmsData.heroDesc) {
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.textContent = cmsData.heroDesc;
  }

  // Hydrate About
  if (cmsData.aboutHeadline) {
    const abHeadline = document.querySelector('.card-headline');
    if (abHeadline) abHeadline.textContent = cmsData.aboutHeadline;
  }
  if (cmsData.aboutP1) {
    const abP1 = document.querySelectorAll('.about-text')[0];
    if (abP1) abP1.innerHTML = cmsData.aboutP1;
  }
  if (cmsData.aboutP2) {
    const abP2 = document.querySelectorAll('.about-text')[1];
    if (abP2) abP2.innerHTML = cmsData.aboutP2;
  }

  // Hydrate Book
  if (cmsData.bookTitle) {
    const bTitle = document.querySelector('.book-title');
    if (bTitle) bTitle.textContent = cmsData.bookTitle;
  }
  if (cmsData.bookAuthor) {
    const bAuthor = document.querySelector('.book-author strong');
    if (bAuthor) bAuthor.textContent = cmsData.bookAuthor;
  }
  if (cmsData.bookDesc) {
    const bDesc = document.querySelector('.book-description');
    if (bDesc) bDesc.textContent = cmsData.bookDesc;
  }

  // Hydrate Contact
  if (cmsData.contactEmail) {
    const infoEmail = document.querySelector('a[href^="mailto:"] .info-val');
    if (infoEmail) infoEmail.textContent = cmsData.contactEmail;
  }
  if (cmsData.contactPhone) {
    const infoPhone = document.querySelector('a[href^="tel:"] .info-val');
    if (infoPhone) infoPhone.textContent = cmsData.contactPhone;
  }
  if (cmsData.contactLocation) {
    const infoLoc = document.querySelectorAll('.info-val')[2];
    if (infoLoc) infoLoc.textContent = cmsData.contactLocation;
  }
  if (cmsData.contactLinkedin) {
    const infoLin = document.querySelector('a[href*="linkedin.com"] .info-val');
    if (infoLin) infoLin.textContent = cmsData.contactLinkedin.replace('https://', '').replace('www.', '');
  }
}
