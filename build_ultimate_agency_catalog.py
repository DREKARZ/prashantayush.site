import os, re

mktg_path  = r'C:\Users\impra\prashantayush.online\marketing-agency.html'
index_path = r'C:\Users\impra\prashantayush.online\index.html'
css_path   = r'C:\Users\impra\prashantayush.online\css\style.css'
js_path    = r'C:\Users\impra\prashantayush.online\js\script.js'

# --- 1. UPDATE CSS FOR INTERACTIVE SUB-SERVICE BUTTON PILLS ---
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

sub_svc_css = '''
/* Interactive Sub-Service Button Pills System */
.sub-svc-buttons-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.sub-svc-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--card-border);
  color: var(--text-primary);
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.4rem 0.85rem;
  border-radius: 9999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.sub-svc-btn:hover {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(234, 179, 8, 0.35));
  border-color: #FFB834;
  color: #FFB834;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.sub-svc-btn i {
  color: var(--accent-secondary);
  font-size: 0.85rem;
}

body.agency-page-body[data-agency-theme="light"] .sub-svc-btn {
  background: #F1F5F9 !important;
  border: 1px solid #CBD5E1 !important;
  color: #0F172A !important;
}

body.agency-page-body[data-agency-theme="light"] .sub-svc-btn:hover {
  background: rgba(245, 158, 11, 0.15) !important;
  border-color: #D97706 !important;
  color: #B45309 !important;
}
'''

if 'Interactive Sub-Service Button Pills System' not in css_content:
    css_content += sub_svc_css

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)

print('UPDATED STYLE.CSS WITH SUB-SERVICE BUTTON PILLS STYLES')

# --- 2. GENERATE COMPLETE 12 MASTER CATEGORIES HTML FOR MARKETING-AGENCY.HTML ---
master_services_html = '''
    <!-- PHASE 5 — COMPLETE 12 MASTER SERVICE CATEGORIES (WITH INDIVIDUAL INTERACTIVE BUTTONS) -->
    <section id="services" class="section-padding">
      <div class="container">
        <div class="section-header center">
          <span class="section-tag">COMPREHENSIVE AGENCY CATALOGUE</span>
          <h2 class="section-title">Explore All Offered Services &amp; Digital Solutions</h2>
          <div class="section-divider"></div>
          <p style="max-width: 720px; margin: 0.85rem auto 0; color: var(--text-secondary); font-size: 0.98rem;">
            Click any service button below to get an instant quotation, order print work, or add directly to your customer bill.
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
          <div class="service-card-pro" data-category="print">
            <div>
              <span class="svc-badge-top tag-gold">PRINTING &amp; DOCUMENT SERVICES</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Printing &amp; Document Finishing</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Fast print, perfect results. High-grade B/W, color, PDF, document scanning, photo printing, and book binding.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Black &amp; White Print"><i data-lucide="printer"></i> B/W Print (₹2/pg)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Color Print"><i data-lucide="image"></i> Color Print (₹10/pg)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="PDF &amp; Document Print"><i data-lucide="file-text"></i> PDF &amp; Doc Print</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Document Scan &amp; Photocopy"><i data-lucide="scan"></i> Document Scan &amp; Copy</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Studio Photo Print"><i data-lucide="camera"></i> Studio Photo Print</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="A4/A3 Lamination"><i data-lucide="layers"></i> A4 / A3 Lamination</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Spiral Book Binding"><i data-lucide="book-open"></i> Spiral Ring Binding</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Hardcover Book Binding"><i data-lucide="book"></i> Hardcover Book Binding</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Project &amp; Assignment Report"><i data-lucide="award"></i> Project &amp; Assignment Printing</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Form &amp; Dastavej Printing"><i data-lucide="file-check"></i> Form / Dastavej Printing</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">B/W ₹2/pg • Color ₹10/pg • Binding ₹30+</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Printing &amp; Document Services" style="flex:1;">Get Print Quote</button>
              </div>
            </div>
          </div>

          <!-- 2. Design & Printing Services -->
          <div class="service-card-pro" data-category="design">
            <div>
              <span class="svc-badge-top tag-cyan">DESIGN &amp; PRINTING SERVICES</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Design, Flex, Banners &amp; Cards</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Creative designs, strong impressions. Banners, hoardings, visiting cards, pamphlets, and shop signboards.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Flex &amp; Banner Printing"><i data-lucide="flag"></i> Flex Banner (₹30/sq.ft)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Poster Printing"><i data-lucide="image"></i> Poster Printing (₹99+)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Promotional Standee &amp; Hoarding"><i data-lucide="maximize-2"></i> Standee &amp; Hoardings</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Vinyl Printing &amp; Shop Board"><i data-lucide="layout"></i> Vinyl Print &amp; Shop Board</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Visiting Cards Printing"><i data-lucide="credit-card"></i> Visiting Cards (₹199/100)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Pamphlets &amp; Flyers Printing"><i data-lucide="file-text"></i> Pamphlets (₹499/100)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Brochure &amp; Catalogue Printing"><i data-lucide="book-open"></i> Brochure &amp; Catalogues</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Invitation &amp; Wedding Cards"><i data-lucide="mail"></i> Invitation &amp; Wedding Cards</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Custom Bill Books &amp; Receipts"><i data-lucide="receipt"></i> Bill Books &amp; Receipts</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Restaurant Menu Cards"><i data-lucide="utensils"></i> Restaurant Menu Cards</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Event Promotion Material"><i data-lucide="sparkles"></i> Event Promotion Materials</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Visiting Card ₹199 • Flex ₹30/sq.ft</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Design &amp; Flex Printing" style="flex:1;">Order Banner / Card Design</button>
              </div>
            </div>
          </div>

          <!-- 3. T-Shirt Printing & Custom Gifts -->
          <div class="service-card-pro" data-category="tshirt">
            <div>
              <span class="svc-badge-top tag-red">T-SHIRTS &amp; GIFTS</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Custom T-Shirts &amp; Corporate Gifts</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Wear your ideas. Custom printed T-shirts for staff, college groups, sports teams, custom mugs, and corporate gifts.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Custom T-Shirt Printing"><i data-lucide="shirt"></i> Custom T-Shirts (₹299/pc)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Logo T-Shirt &amp; Staff Uniform"><i data-lucide="briefcase"></i> Staff Logo Uniforms</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="College &amp; Group T-Shirts"><i data-lucide="users"></i> College &amp; Group T-Shirts</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Sports &amp; Jersey Printing"><i data-lucide="trophy"></i> Sports &amp; Jersey Printing</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Custom Printed Photo Mugs"><i data-lucide="coffee"></i> Custom Photo Mugs</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Custom Printed Cushions"><i data-lucide="heart"></i> Printed Cushions &amp; Pillows</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Personalized Caps &amp; Bags"><i data-lucide="shopping-bag"></i> Customized Caps &amp; Bags</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Corporate &amp; Event Giveaways"><i data-lucide="gift"></i> Corporate &amp; Event Gifts</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">T-Shirt ₹299/pc • Bulk Discounts Available</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Custom T-Shirt Printing &amp; Gifts" style="flex:1;">Order T-Shirts &amp; Gifts</button>
              </div>
            </div>
          </div>

          <!-- 4. Ghostwriting & Content Creation -->
          <div class="service-card-pro" data-category="writing">
            <div>
              <span class="svc-badge-top tag-blue">CONTENT &amp; GHOSTWRITING</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Ghostwriting &amp; Content Creation</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Words that work. Professional book ghostwriting, articles, website copywriting, scripts, speeches, and branding content.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Book &amp; eBook Ghostwriting"><i data-lucide="book-open"></i> Book &amp; eBook Ghostwriting</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Blog &amp; Article Writing"><i data-lucide="edit-3"></i> Blog &amp; Article Writing</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Website Copywriting"><i data-lucide="globe"></i> Website Copywriting</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Social Media Captions &amp; Content"><i data-lucide="share-2"></i> Social Media Content</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="LinkedIn Personal Branding Content"><i data-lucide="linkedin"></i> LinkedIn Personal Branding</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="YouTube Video Scriptwriting"><i data-lucide="video"></i> YouTube Scriptwriting</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Reels &amp; Shorts Scriptwriting"><i data-lucide="smartphone"></i> Reels / Shorts Scripts</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Speech &amp; Presentation Writing"><i data-lucide="mic"></i> Speech &amp; Presentation Writing</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Biography &amp; Autobiography Writing"><i data-lucide="user-check"></i> Biography Writing</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Email &amp; Newsletter Writing"><i data-lucide="mail"></i> Email &amp; Newsletters</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Hindi &amp; English Editing &amp; Proofreading"><i data-lucide="check-square"></i> Proofreading (Hindi/English)</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Articles ₹199+ • Ghostwriting Custom Quote</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Ghostwriting &amp; Content Creation" style="flex:1;">Hire Content Writer</button>
              </div>
            </div>
          </div>

          <!-- 5. Web & Business Apps -->
          <div class="service-card-pro" data-category="web">
            <div>
              <span class="svc-badge-top tag-cyan">WEB &amp; APPS</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Website Development &amp; Business Apps</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                High-converting custom websites and business Android apps for shops, clinics, schools, coaching, contractors &amp; restaurants.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="One Page &amp; Portfolio Site"><i data-lucide="globe"></i> One Page Website (₹4,999)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Business Website Development"><i data-lucide="layout"></i> Business Website (₹8,999)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="E-Commerce &amp; Online Store"><i data-lucide="shopping-cart"></i> E-Commerce Store (₹14,999)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="School &amp; Coaching Website"><i data-lucide="graduation-cap"></i> School &amp; Coaching Website</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Clinic &amp; Hospital Website"><i data-lucide="activity"></i> Clinic &amp; Hospital Website</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Restaurant QR &amp; Menu Site"><i data-lucide="utensils"></i> Restaurant QR &amp; Menu Site</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Real Estate &amp; Construction Site"><i data-lucide="home"></i> Real Estate Website</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Simple Business Android App"><i data-lucide="smartphone"></i> Business Android App (₹9,999)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Catalogue &amp; Booking App"><i data-lucide="list"></i> Catalogue &amp; Booking App</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">One-Page ₹4,999 • Business ₹8,999 • App ₹9,999</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Website Development &amp; Business Apps" style="flex:1;">Build My Website / App</button>
              </div>
            </div>
          </div>

          <!-- 6. Online & Offline Marketing Services -->
          <div class="service-card-pro" data-category="marketing">
            <div>
              <span class="svc-badge-top tag-gold">MARKETING &amp; ADS</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Online &amp; Offline Business Marketing</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Local business promotion, social media ads, Google Ads, local area pamphlet campaigns, and shop front branding.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Social Media Marketing (IG/FB)"><i data-lucide="share-2"></i> Social Media Marketing (₹1,999/mo)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Meta &amp; Instagram Ads"><i data-lucide="target"></i> Meta &amp; Instagram Ads</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Google Ads &amp; Search Campaign"><i data-lucide="search"></i> Google Ads Setup</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Google Business Profile &amp; Maps SEO"><i data-lucide="map-pin"></i> Google Maps &amp; Local SEO</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Local Area Pamphlet Distribution"><i data-lucide="file-text"></i> Pamphlet Area Distribution</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Flyer &amp; Poster Campaign"><i data-lucide="image"></i> Flyer &amp; Poster Campaign</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Shop Front Branding &amp; Banners"><i data-lucide="store"></i> Shop Front Branding</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="WhatsApp Business Setup &amp; Catalogue"><i data-lucide="message-square"></i> WhatsApp Business Setup</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">SMM ₹1,999/mo • Local Campaign ₹999+</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Online &amp; Offline Marketing" style="flex:1;">Grow My Business</button>
              </div>
            </div>
          </div>

          <!-- 7. Government Documents & Online Services -->
          <div class="service-card-pro" data-category="govt">
            <div>
              <span class="svc-badge-top tag-cyan">GOVT &amp; ONLINE DOCS</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Government Documents &amp; Certificate Support</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Easy process, hassle-free support. Online application assistance for Aadhaar, PAN, Voter, Certificates &amp; Govt schemes.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Aadhaar Card Print &amp; Update"><i data-lucide="credit-card"></i> Aadhaar Card Print / Update</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="New PAN Card &amp; Correction"><i data-lucide="file-text"></i> New PAN / Correction</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Voter ID Card Apply &amp; Correction"><i data-lucide="user-check"></i> Voter ID Card Support</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Ayushman Card Application"><i data-lucide="activity"></i> Ayushman Bharat Card</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="E-Shram &amp; Labour Card"><i data-lucide="briefcase"></i> E-Shram &amp; Labour Card</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Ration Card Online Support"><i data-lucide="home"></i> Ration Card Services</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Passport Service Application"><i data-lucide="globe"></i> Passport Application Support</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Driving License Application Support"><i data-lucide="truck"></i> Driving License Support</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Birth &amp; Death Certificates"><i data-lucide="file"></i> Birth / Death Certificate</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Income, Residence &amp; Caste Certificates"><i data-lucide="award"></i> Income, Residence &amp; Caste</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Domicile, OBC, EWS &amp; NCL Certificates"><i data-lucide="check-circle"></i> Domicile, OBC, EWS &amp; NCL</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Government Scheme Applications"><i data-lucide="landmark"></i> Govt Scheme Applications</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Nominal Technical Filing Charge</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Government Documents &amp; Online Services" style="flex:1;">Get Application Assistance</button>
              </div>
            </div>
          </div>

          <!-- 8. Land & Farmer Services (जमीन एवं किसान सेवाएं) -->
          <div class="service-card-pro" data-category="land">
            <div>
              <span class="svc-badge-top tag-gold">LAND &amp; FARMER SERVICES</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">जमीन एवं किसान ऑनलाइन सेवाएं</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Land record Dakhil-Kharij, Lagaan receipt, PM Kisan, Fasal Bima, and farmer registration portal support.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Land Record Dakhil-Kharij (दाखिल-खारिज)"><i data-lucide="file-text"></i> दाखिल-खारिज (Dakhil Kharij)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Land Receipt (ऑनलाइन लगान रसीद)"><i data-lucide="receipt"></i> ऑनलाइन लगान रसीद (Land Receipt)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Land Mutation Portal Work"><i data-lucide="map"></i> Land Mutation Online</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Fasal Bima (फ़सल बीमा)"><i data-lucide="shield"></i> फ़सल बीमा (Crop Insurance)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Kisan Panjikaran (किसान पंजीकरण)"><i data-lucide="user"></i> किसान पंजीकरण (Kisan Reg.)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="PM Kisan Panjikaran Support"><i data-lucide="landmark"></i> PM Kisan Panjikaran</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Agriculture Online Applications"><i data-lucide="wheat"></i> Krishi / Agriculture Work</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Fast Online Portal Assistance</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Land &amp; Farmer Services" style="flex:1;">Apply for Kisan / Land Work</button>
              </div>
            </div>
          </div>

          <!-- 9. Realty, Insurance & Utility Services -->
          <div class="service-card-pro" data-category="realty">
            <div>
              <span class="svc-badge-top tag-red">REALTY &amp; UTILITIES</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Realty, Insurance &amp; Utility Bill Services</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Property marketing, lead generation, vehicle/health insurance, electricity bill payments &amp; pollution certificates.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Property Website &amp; Ads"><i data-lucide="home"></i> Property Website &amp; Ads</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Real Estate Lead Generation"><i data-lucide="target"></i> Real Estate Lead Generation</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Vehicle Insurance (Bike/Car)"><i data-lucide="shield-check"></i> Vehicle Insurance Support</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Health &amp; Life Insurance"><i data-lucide="activity"></i> Health &amp; General Insurance</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="New Electricity Connection Support"><i data-lucide="zap"></i> New Electricity Connection</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Electricity Bill Payment"><i data-lucide="receipt"></i> Electricity Bill Payment</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Mobile &amp; DTH Recharge"><i data-lucide="smartphone"></i> Mobile &amp; DTH Recharge</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Pollution Certificate Support"><i data-lucide="file-check"></i> Pollution Certificate Online</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Vahan Related Online Work"><i data-lucide="truck"></i> Vahan Portal Services</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Instant Online Bill &amp; Policy Assistance</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Realty, Insurance &amp; Utilities" style="flex:1;">Inquire Service</button>
              </div>
            </div>
          </div>

          <!-- 10. Travel & Ticket Booking -->
          <div class="service-card-pro" data-category="travel">
            <div>
              <span class="svc-badge-top tag-cyan">TRAVEL &amp; TICKETS</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Train, Flight &amp; Bus Ticket Booking</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Travel made easy. Instant IRCTC train ticket reservation, flight booking, bus tickets, hotel stays &amp; holiday packages.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="IRCTC Train Ticket Booking"><i data-lucide="train"></i> IRCTC Train Ticket Booking</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Flight Ticket Booking"><i data-lucide="plane"></i> Flight Ticket Booking</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Bus Ticket Booking"><i data-lucide="bus"></i> Bus Ticket Booking</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Hotel &amp; Stay Booking"><i data-lucide="bed"></i> Hotel &amp; Stay Booking</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Tour &amp; Travel Holiday Packages"><i data-lucide="map-pin"></i> Tour &amp; Holiday Packages</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Instant Confirmation &amp; Ticket Support</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Travel &amp; Ticket Booking" style="flex:1;">Book Tickets Now</button>
              </div>
            </div>
          </div>

          <!-- 11. Education & Student Support -->
          <div class="service-card-pro" data-category="student">
            <div>
              <span class="svc-badge-top tag-gold">EDUCATION &amp; STUDENT SUPPORT</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Academic Counseling &amp; Student Services</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                College counseling, admission support, syllabus &amp; notes print, exam forms &amp; student ID card printing.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="College Counseling &amp; Guidance"><i data-lucide="compass"></i> College Counseling</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="College Admission Support"><i data-lucide="graduation-cap"></i> Admission Support</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Scholarship Online Application"><i data-lucide="award"></i> Scholarship Applications</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Syllabus &amp; Study Notes Printing"><i data-lucide="book-open"></i> Syllabus &amp; Notes Print</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Assignment &amp; Project Report Print"><i data-lucide="file-text"></i> Assignment &amp; Project Print</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Exam Form &amp; Student Registration"><i data-lucide="edit"></i> Exam Form Filling</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="School &amp; College Student ID Cards"><i data-lucide="credit-card"></i> Student ID Card Printing</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Student Friendly Pricing</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Education &amp; Student Support" style="flex:1;">Get Student Assistance</button>
              </div>
            </div>
          </div>

          <!-- 12. Digital, Electronics & Office Services -->
          <div class="service-card-pro" data-category="office">
            <div>
              <span class="svc-badge-top tag-blue">DIGITAL, ELECTRONICS &amp; OFFICE</span>
              <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">Digital Work, Accessories &amp; Office Support</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                Hindi/English data entry typing, document editing, AEPS banking cash withdrawal, chargers, pen drives &amp; computer accessories.
              </p>

              <div class="sub-svc-buttons-grid">
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Hindi &amp; English Data Entry Typing"><i data-lucide="keyboard"></i> Data Entry (Hindi/English)</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Document Editing &amp; Formatting"><i data-lucide="edit-2"></i> Document Editing</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Biodata &amp; Resume Making"><i data-lucide="file-person"></i> Biodata / Resume Creation</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Earphones &amp; Headphones"><i data-lucide="headphones"></i> Headphones &amp; Earphones</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Mobile Chargers &amp; Cables"><i data-lucide="battery-charging"></i> Chargers &amp; Cables</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Pen Drives &amp; Memory Cards"><i data-lucide="hard-drive"></i> Pen Drives &amp; Memory Cards</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="Computer Accessories &amp; Mouse"><i data-lucide="monitor"></i> Computer Accessories</button>
                <button type="button" class="sub-svc-btn open-quote-modal-btn" data-service="AEPS Banking Cash Withdrawal &amp; Balance"><i data-lucide="dollar-sign"></i> Banking AEPS Cash Assistance</button>
              </div>
            </div>

            <div>
              <div class="svc-price-pill">Office &amp; Digital Solutions</div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm open-quote-modal-btn" data-service="Digital, Electronics &amp; Office Services" style="flex:1;">Order Accessories / Data Work</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>'''

# Replace Services Grid in marketing-agency.html with Master 12 Categories HTML
with open(mktg_path, 'r', encoding='utf-8') as f:
    mktg_html = f.read()

mktg_html = re.sub(r'<!-- PHASE 5 — SERVICES GRID.*?<\/section>', master_services_html, mktg_html, flags=re.DOTALL)

with open(mktg_path, 'w', encoding='utf-8') as f:
    f.write(mktg_html)

print('UPDATED MARKETING-AGENCY.HTML WITH ALL 12 MASTER CATEGORIES & SUB-SERVICE BUTTONS')

# --- 3. UPDATE QUICK CHIPS IN INVOICE GENERATOR TO COVER ALL SUB-SERVICES ---
with open(mktg_path, 'r', encoding='utf-8') as f:
    mktg_html = f.read()

quick_chips_new = '''<div style="display: flex; gap: 0.45rem; flex-wrap: wrap;" id="quickChipsContainer">
                <button type="button" class="quick-chip-btn" data-svc="Business Website Development" data-rate="8999" data-qty="1" data-sac="998314">🌐 Website (₹8,999)</button>
                <button type="button" class="quick-chip-btn" data-svc="Simple Business App" data-rate="9999" data-qty="1" data-sac="998314">📱 App (₹9,999)</button>
                <button type="button" class="quick-chip-btn" data-svc="B/W Document Printing" data-rate="2" data-qty="100" data-sac="998912">🖨️ B/W Print (₹2/pg)</button>
                <button type="button" class="quick-chip-btn" data-svc="Color Document Printing" data-rate="10" data-qty="50" data-sac="998912">🎨 Color Print (₹10/pg)</button>
                <button type="button" class="quick-chip-btn" data-svc="Spiral Book Binding" data-rate="30" data-qty="5" data-sac="998912">📑 Spiral Binding (₹30/pc)</button>
                <button type="button" class="quick-chip-btn" data-svc="PVC ID Card Printing" data-rate="50" data-qty="50" data-sac="998912">💳 PVC ID Card (₹50/pc)</button>
                <button type="button" class="quick-chip-btn" data-svc="Visiting Cards (Matt/Gloss)" data-rate="2" data-qty="100" data-sac="998912">🎴 Visiting Card (₹199/100)</button>
                <button type="button" class="quick-chip-btn" data-svc="Promotional Pamphlets" data-rate="1" data-qty="500" data-sac="998912">📜 Pamphlet (₹499/100)</button>
                <button type="button" class="quick-chip-btn" data-svc="Poster / Flex Banner" data-rate="30" data-qty="100" data-sac="998912">🚩 Flex Banner (₹30/sq.ft)</button>
                <button type="button" class="quick-chip-btn" data-svc="Custom Logo T-Shirts" data-rate="299" data-qty="10" data-sac="998912">👕 Custom T-Shirt (₹299)</button>
                <button type="button" class="quick-chip-btn" data-svc="Ghostwriting &amp; Article Writing" data-rate="499" data-qty="1" data-sac="998314">✍️ Article Writing (₹499)</button>
                <button type="button" class="quick-chip-btn" data-svc="Logo &amp; Brand Design" data-rate="499" data-qty="1" data-sac="998314">🎨 Logo Design (₹499)</button>
                <button type="button" class="quick-chip-btn" data-svc="Social Media Marketing" data-rate="1999" data-qty="1" data-sac="998314">📢 Digital Marketing (₹1,999)</button>
                <button type="button" class="quick-chip-btn" data-svc="Land Record (Dakhil Kharij)" data-rate="300" data-qty="1" data-sac="998314">🌾 Dakhil Kharij (₹300)</button>
                <button type="button" class="quick-chip-btn" data-svc="Govt Card / Scheme Application" data-rate="150" data-qty="1" data-sac="998314">📜 Govt Form (₹150)</button>
                <button type="button" class="quick-chip-btn" data-svc="Train / Flight Ticket Booking" data-rate="100" data-qty="1" data-sac="998314">✈️ Ticket Booking (₹100)</button>
              </div>'''

mktg_html = re.sub(r'<div style="display: flex; gap: 0.45rem; flex-wrap: wrap;" id="quickChipsContainer">.*?<\/div>', quick_chips_new, mktg_html, flags=re.DOTALL)

with open(mktg_path, 'w', encoding='utf-8') as f:
    f.write(mktg_html)

print('UPDATED INVOICE GENERATOR CHIPS IN MARKETING-AGENCY.HTML')
