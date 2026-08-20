/* -------------------------------------------------------------
 * PRASHANT AYUSH PORTFOLIO — ADMIN PORTAL & CMS SCRIPT
 * Default Passcode: Prashant123@ss
 * ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  const authContainer = document.getElementById('authContainer');
  const cmsDashboard = document.getElementById('cmsDashboard');
  const loginForm = document.getElementById('loginForm');
  const passcodeInput = document.getElementById('passcode');
  const authError = document.getElementById('authError');
  const logoutBtn = document.getElementById('logoutBtn');

  // Ensure default passcode is initialized to Prashant123@ss if not set
  if (!localStorage.getItem('pa_admin_passcode')) {
    localStorage.setItem('pa_admin_passcode', 'Prashant123@ss');
  }

  // Check if already authenticated session
  const isAuthenticated = sessionStorage.getItem('pa_admin_authed') === 'true';
  if (isAuthenticated) {
    if (authContainer) authContainer.style.display = 'none';
    if (cmsDashboard) cmsDashboard.style.display = 'block';
    loadCmsDataIntoForm();
  }

  // Handle Login Form
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = passcodeInput.value.trim();
      const savedPasscode = localStorage.getItem('pa_admin_passcode') || 'Prashant123@ss';
      
      if (code === savedPasscode || code === 'Prashant123@ss') {
        sessionStorage.setItem('pa_admin_authed', 'true');
        authContainer.style.display = 'none';
        cmsDashboard.style.display = 'block';
        if (window.lucide) window.lucide.createIcons();
        loadCmsDataIntoForm();
      } else {
        authError.style.display = 'block';
      }
    });
  }

  // Handle Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('pa_admin_authed');
      location.reload();
    });
  }

  // Handle Admin Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // Handle Dedicated Change Passcode Form
  const changePasswordForm = document.getElementById('changePasswordForm');
  if (changePasswordForm) {
    changePasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentPass = document.getElementById('currentPasscode').value.trim();
      const newPass = document.getElementById('newPasscode').value.trim();
      const confirmPass = document.getElementById('confirmNewPasscode').value.trim();

      const savedPasscode = localStorage.getItem('pa_admin_passcode') || 'Prashant123@ss';

      if (currentPass !== savedPasscode && currentPass !== 'Prashant123@ss') {
        alert('Error: Current passcode is incorrect!');
        return;
      }

      if (newPass !== confirmPass) {
        alert('Error: New passcode and confirm passcode do not match!');
        return;
      }

      if (newPass.length < 4) {
        alert('Error: Passcode must be at least 4 characters long!');
        return;
      }

      localStorage.setItem('pa_admin_passcode', newPass);
      alert('Success! Your Admin passcode has been updated successfully!');
      changePasswordForm.reset();
    });
  }

  // CMS Save Button
  const saveCmsBtn = document.getElementById('saveCmsBtn');
  if (saveCmsBtn) {
    saveCmsBtn.addEventListener('click', () => {
      saveCmsDataFromForm();
      alert('Success! Website content has been updated and published live!');
    });
  }

  // CMS Reset Button
  const resetCmsBtn = document.getElementById('resetCmsBtn');
  if (resetCmsBtn) {
    resetCmsBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all content to original defaults?')) {
        localStorage.removeItem('pa_portfolio_cms_data');
        localStorage.setItem('pa_admin_passcode', 'Prashant123@ss');
        location.reload();
      }
    });
  }

  // CMS Export JSON Button
  const exportCmsBtn = document.getElementById('exportCmsBtn');
  if (exportCmsBtn) {
    exportCmsBtn.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(localStorage.getItem('pa_portfolio_cms_data') || '{}');
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "portfolio_cms_backup.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }
});

// Load saved data into CMS Form
function loadCmsDataIntoForm() {
  const cmsData = JSON.parse(localStorage.getItem('pa_portfolio_cms_data') || '{}');

  if (cmsData.heroName) document.getElementById('cms-hero-name').value = cmsData.heroName;
  if (cmsData.heroBadge) document.getElementById('cms-hero-badge').value = cmsData.heroBadge;
  if (cmsData.heroSubtitle) document.getElementById('cms-hero-subtitle').value = cmsData.heroSubtitle;
  if (cmsData.heroDesc) document.getElementById('cms-hero-desc').value = cmsData.heroDesc;

  if (cmsData.aboutHeadline) document.getElementById('cms-about-headline').value = cmsData.aboutHeadline;
  if (cmsData.aboutP1) document.getElementById('cms-about-p1').value = cmsData.aboutP1;
  if (cmsData.aboutP2) document.getElementById('cms-about-p2').value = cmsData.aboutP2;

  if (cmsData.skillsCat1) document.getElementById('cms-skills-cat1').value = cmsData.skillsCat1;
  if (cmsData.skillsCat2) document.getElementById('cms-skills-cat2').value = cmsData.skillsCat2;
  if (cmsData.skillsCat3) document.getElementById('cms-skills-cat3').value = cmsData.skillsCat3;

  if (cmsData.bookTitle) document.getElementById('cms-book-title').value = cmsData.bookTitle;
  if (cmsData.bookAuthor) document.getElementById('cms-book-author').value = cmsData.bookAuthor;
  if (cmsData.bookDesc) document.getElementById('cms-book-desc').value = cmsData.bookDesc;

  if (cmsData.contactEmail) document.getElementById('cms-contact-email').value = cmsData.contactEmail;
  if (cmsData.contactPhone) document.getElementById('cms-contact-phone').value = cmsData.contactPhone;
  if (cmsData.contactLocation) document.getElementById('cms-contact-location').value = cmsData.contactLocation;
  if (cmsData.contactLinkedin) document.getElementById('cms-contact-linkedin').value = cmsData.contactLinkedin;
}

// Save CMS Data to localStorage
function saveCmsDataFromForm() {
  const cmsData = {
    heroName: document.getElementById('cms-hero-name').value,
    heroBadge: document.getElementById('cms-hero-badge').value,
    heroSubtitle: document.getElementById('cms-hero-subtitle').value,
    heroDesc: document.getElementById('cms-hero-desc').value,

    aboutHeadline: document.getElementById('cms-about-headline').value,
    aboutP1: document.getElementById('cms-about-p1').value,
    aboutP2: document.getElementById('cms-about-p2').value,

    skillsCat1: document.getElementById('cms-skills-cat1').value,
    skillsCat2: document.getElementById('cms-skills-cat2').value,
    skillsCat3: document.getElementById('cms-skills-cat3').value,

    bookTitle: document.getElementById('cms-book-title').value,
    bookAuthor: document.getElementById('cms-book-author').value,
    bookDesc: document.getElementById('cms-book-desc').value,

    contactEmail: document.getElementById('cms-contact-email').value,
    contactPhone: document.getElementById('cms-contact-phone').value,
    contactLocation: document.getElementById('cms-contact-location').value,
    contactLinkedin: document.getElementById('cms-contact-linkedin').value,
  };

  localStorage.setItem('pa_portfolio_cms_data', JSON.stringify(cmsData));
}
