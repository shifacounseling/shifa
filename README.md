# Shifa Counseling 🌿

The official website for **Shifa Counseling** ([shifacounseling.com](https://shifacounseling.com/)), a compassionate, multicultural, and evidence-based mental health practice located in San Marcos, California.

The word *"Shifa"* means *healing* in Arabic, reflecting the practice's mission to guide individuals, couples, and families through life's challenges toward lasting growth, peace, and emotional wellness.

---

## ✨ Features

- **Culturally Sensitive & Evidence-Based Design**: Clean, welcoming aesthetics featuring subtle, responsive Islamic geometric art patterns (*8-fold Girih / Khatam star motif*) with warm golden hues.
- **Interactive Appointment Booking**: Embedded **Calendly** scheduling widget for booking 30-minute consultations and therapy sessions directly online.
- **Location & Mapping**: Interactive Google Maps embed displaying the San Marcos, CA physical practice address.
- **Crisis & Safety Support**: Dedicated 24/7 crisis banner linking directly to the **988 Suicide & Crisis Lifeline** and emergency care.
- **Accessible & Responsive Navigation**:
  - Full mobile responsiveness across desktop, tablet, and mobile breakpoints (992px, 768px, 480px).
  - ARIA-compliant mobile hamburger drawer with keyboard accessibility.
  - Active navigation **Scrollspy** driven by `IntersectionObserver`.
- **Search Engine Optimization (SEO)**:
  - Schema.org `MedicalBusiness` JSON-LD structured data for rich Google search cards and local pack ranking.
  - Comprehensive Open Graph and Twitter Card social sharing meta tags.
  - Performance optimizations including Google Fonts preconnect resource hints.

---

## 📁 Project Structure

```text
Shifa/
├── .gitignore         # Ignores editor configuration files (.vscode/)
├── CNAME              # Custom domain configuration (shifacounseling.com)
├── index.html         # Main single-page landing site
├── README.md          # Project documentation
├── script.js          # Navigation drawer, scrollspy, and smooth scroll behaviors
└── style.css          # Design system, CSS custom properties, and Islamic geometric patterns
```

---

## 🚀 Local Development

No package managers or build tools are required. The site is built with vanilla HTML5, CSS3, and JavaScript.

### Option 1: Python Local Server (Recommended)

1. Open your terminal in the project directory:
   ```bash
   cd c:/Users/shiya/practice/Shifa
   ```
2. Start the local server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and visit:
   ```text
   http://localhost:8000
   ```

### Option 2: Open Directly

You can open `index.html` directly in any modern browser:
- On Windows (PowerShell):
  ```powershell
  Start-Process "index.html"
  ```
- Or double-click `index.html` in File Explorer.

---

## 🌐 Deployment

This site is deployed via **GitHub Pages**:

1. Pushing to the default branch (`main`) triggers automated deployment on GitHub Pages.
2. The `CNAME` file automatically binds the repository to the custom domain:
   ```text
   shifacounseling.com
   ```
3. Custom DNS records (A and CNAME) route traffic from `shifacounseling.com` to GitHub Pages servers with automatic SSL/HTTPS certificate provisioning.

---

## 🛠️ Built With

- **HTML5 & CSS3** (Flexbox, CSS Grid, Custom Properties, Keyframe Animations)
- **JavaScript** (ES6+, DOM APIs, IntersectionObserver)
- **Google Fonts** ([Inter](https://fonts.google.com/specimen/Inter))
- **Third-Party Integrations**:
  - [Calendly Widget](https://calendly.com/)
  - [Google Maps Embed](https://maps.google.com/)

---

## 📞 Contact

**Shifa Counseling**
- 📍 **Address**: 310 S. Twin Oaks Valley Rd, Suite 107-222, San Marcos, CA 92078-4303
- 📞 **Phone**: [1-760-481-4819](tel:17604814819)
- ✉️ **Email**: [clinicalpsy@proton.me](mailto:clinicalpsy@proton.me)
- 🌐 **Website**: [shifacounseling.com](https://shifacounseling.com)

