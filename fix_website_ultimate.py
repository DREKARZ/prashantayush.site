import os, re

mktg_path  = r'C:\Users\impra\prashantayush.online\marketing-agency.html'
index_path = r'C:\Users\impra\prashantayush.online\index.html'
css_path   = r'C:\Users\impra\prashantayush.online\css\style.css'
js_path    = r'C:\Users\impra\prashantayush.online\js\script.js'

print("--- UPDATING MARKETING-AGENCY.HTML FOR MAXIMUM CONTRAST & VISIBILITY ---")

with open(mktg_path, 'r', encoding='utf-8') as f:
    mktg_html = f.read()

# Make hero title & subtitle high contrast
hero_content_v4 = '''<div class="hero-content">
          <div class="hero-tagline-pill" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(245, 158, 11, 0.15); border: 1.5px solid #F59E0B; padding: 0.4rem 1rem; border-radius: 9999px; margin-bottom: 1.25rem;">
            <span class="pulse-dot" style="width: 8px; height: 8px; background: #F59E0B; border-radius: 50%;"></span>
            <span style="font-size: 0.88rem; font-weight: 800; color: #F59E0B; letter-spacing: 0.5px;">Idea to Impact • Local Business Ka Digital Partner</span>
          </div>

          <h1 class="hero-title" style="font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 900; line-height: 1.1; color: #FFFFFF; margin-bottom: 0.85rem;">
            PRASHANT <span style="background: linear-gradient(135deg, #FF9900 0%, #FFB834 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">MARKETING AGENCY</span>
          </h1>

          <h2 class="hero-subtitle" style="font-size: clamp(1.2rem, 2.5vw, 1.65rem); font-weight: 800; color: #38BDF8; margin-bottom: 1.25rem;">
            "Your One-Stop Solution for Digital, Printing &amp; Marketing Needs"
          </h2>

          <p class="hero-description" style="font-size: 1.05rem; color: #E2E8F0; line-height: 1.65; max-width: 680px; margin-bottom: 1.75rem;">
            We build custom high-performing websites, business apps, targeted marketing campaigns, and premium print branding for local shops, clinics, restaurants, schools, contractors, and growing startups.
          </p>

          <div class="hero-badges-grid" style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <div class="badge-item" style="background: rgba(245, 158, 11, 0.12); border: 1px solid #F59E0B; color: #FFC107; font-weight: 800; padding: 0.4rem 0.85rem; border-radius: 9999px; font-size: 0.85rem;"><i data-lucide="zap"></i> 12 Service Verticals</div>
            <div class="badge-item" style="background: rgba(6, 182, 212, 0.12); border: 1px solid #06B6D4; color: #38BDF8; font-weight: 800; padding: 0.4rem 0.85rem; border-radius: 9999px; font-size: 0.85rem;"><i data-lucide="code"></i> Custom Digital Code</div>
            <div class="badge-item" style="background: rgba(16, 185, 129, 0.12); border: 1px solid #10B981; color: #34D399; font-weight: 800; padding: 0.4rem 0.85rem; border-radius: 9999px; font-size: 0.85rem;"><i data-lucide="printer"></i> High Quality Print</div>
            <div class="badge-item" style="background: rgba(37, 211, 102, 0.12); border: 1px solid #25D366; color: #25D366; font-weight: 800; padding: 0.4rem 0.85rem; border-radius: 9999px; font-size: 0.85rem;"><i data-lucide="message-square"></i> WhatsApp Support</div>
          </div>

          <div class="hero-cta-group" style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
            <button class="btn btn-primary open-quote-modal-btn" data-service="General Enquiry" style="background: linear-gradient(135deg, #FF9900 0%, #FFB834 100%); color: #111; font-weight: 900; border: none; padding: 0.85rem 1.6rem; font-size: 1rem; border-radius: 9999px; box-shadow: 0 8px 25px rgba(255, 153, 0, 0.4);">
              <i data-lucide="calculator"></i> Get a Free Quote
            </button>

            <a href="https://wa.me/917903388456?text=Hi%20Prashant%20Marketing%20Agency,%20I%20would%20like%20to%20inquire%20about%20your%20services!" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: #25D366; color: #fff; font-weight: 900; border: none; padding: 0.85rem 1.6rem; font-size: 1rem; border-radius: 9999px; box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);">
              <img src="assets/icons/whatsapp_icon.jpg?v=12.0" alt="WhatsApp" class="btn-icon-img" style="width: 20px; height: 20px; border-radius: 50%;">
              <span>Chat on WhatsApp</span>
            </a>

            <a href="#services" class="btn btn-secondary" style="background: rgba(255,255,255,0.08); border: 1px solid var(--card-border); color: #FFF; font-weight: 800; padding: 0.85rem 1.5rem; font-size: 1rem; border-radius: 9999px;">
              <i data-lucide="grid"></i> Explore Services
            </a>
          </div>
        </div>'''

mktg_html = re.sub(r'<div class="hero-content">.*?<\/div>\s*<!-- Quick Agency Info Bar -->', hero_content_v4 + '\n\n          <!-- Quick Agency Info Bar -->', mktg_html, flags=re.DOTALL)

with open(mktg_path, 'w', encoding='utf-8') as f:
    f.write(mktg_html)

print("MARKETING-AGENCY.HTML HERO SECTION UPDATED FOR HIGH CONTRAST")
