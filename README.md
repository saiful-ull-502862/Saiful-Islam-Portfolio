# Md Saiful Islam - Professional Research Portfolio

A modern, responsive portfolio website showcasing research in finite element analysis, biomechanics, and computational modeling.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic suitable for academic and industrial contexts
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Scroll-based animations and smooth transitions
- **SEO Optimized**: Meta tags and semantic HTML for search engines
- **Accessible**: WCAG 2.1 compliant with keyboard navigation support
- **Fast Loading**: Optimized assets and minimal dependencies
- **Easy to Update**: Well-documented code and simple content management

## 🚀 Live Demo

Visit the live site: [Your GitHub Pages URL will be here after deployment]

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Structure](#structure)
- [Customization Guide](#customization-guide)
- [Adding Content](#adding-content)
- [Deployment](#deployment)
- [Maintenance](#maintenance)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## ⚡ Quick Start

### Prerequisites

- A text editor (VS Code, Sublime Text, etc.)
- Git (for version control and deployment)
- A web browser (Chrome, Firefox, Safari, Edge)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Saiful-Islam-Portfolio.git
   cd Saiful-Islam-Portfolio
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Python 2
     python -m SimpleHTTPServer 8000

     # Using Node.js
     npx serve
     ```
   - Visit `http://localhost:8000` in your browser

3. **Start customizing!**

## 📁 Structure

```
Saiful-Islam-Portfolio/
├── index.html              # Main homepage
├── README.md              # This file
├── Md Saiful Islam Resume 2.pdf  # Your resume
├── css/
│   └── style.css          # All styles (light/dark mode, responsive)
├── js/
│   └── main.js           # Interactive features and animations
├── images/
│   ├── profile.jpg       # Your professional photo (add this)
│   └── projects/         # Project-specific media
├── projects/
│   ├── README.md         # Project documentation guide
│   ├── multiscale-cartilage.html    # Example detailed project page
│   ├── motion-capture.html          # Template (customize)
│   ├── data-driven-modeling.html    # Template (customize)
│   ├── cnn-collagen.html           # Template (customize)
│   ├── bioprinter.html             # Template (customize)
│   ├── concrete-ndt.html           # Template (customize)
│   └── ear-piercing-ai.html        # Template (customize)
└── assets/               # Additional resources (optional)
```

## 🎨 Customization Guide

### 1. Add Your Professional Photo

**Location**: `images/profile.jpg`

1. Choose a high-quality professional headshot (at least 800x800px)
2. Save it as `images/profile.jpg`
3. The website will automatically display it in the hero section

**Tips**:
- Use a plain or professional background
- Ensure good lighting
- Smile naturally
- Dress professionally
- Square aspect ratio works best

### 2. Update Personal Information

**File**: `index.html`

**Contact Information** (lines 60-65):
```html
<a href="mailto:your-email@domain.com">
<a href="tel:+1234567890">
```

**LinkedIn Profile** (search for "linkedin.com"):
```html
<a href="https://www.linkedin.com/in/your-profile/">
```

**GitHub Profile**:
```html
<a href="https://github.com/your-username">
```

### 3. Customize Colors and Branding

**File**: `css/style.css` (lines 10-30)

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #10b981;  /* Accent color */
    --accent-color: #f59e0b;     /* Highlight color */
}
```

**Color Palette Suggestions**:
- **Academic**: Blues and grays (#2563eb, #64748b)
- **Tech**: Purples and cyans (#8b5cf6, #06b6d4)
- **Creative**: Oranges and teals (#f97316, #14b8a6)

### 4. Update Resume

**Steps**:
1. Export your latest resume as PDF
2. Replace `Md Saiful Islam Resume 2.pdf` with your new file
3. Update the filename in `index.html` if different:
   ```html
   <a href="Your-Resume-Name.pdf" download>
   ```

**Auto-update mechanism**:
- Keep the same filename to avoid updating HTML
- Or use a generic name like `resume.pdf`

### 5. Configure Contact Form

The website includes a contact form powered by [Formspree](https://formspree.io) (free tier available).

**Setup**:
1. Visit [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Update `index.html` (line ~920):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree ID

**Alternative services**:
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)

## 📝 Adding Content

### Adding a New Project

1. **Copy the template**:
   ```bash
   cp projects/multiscale-cartilage.html projects/my-new-project.html
   ```

2. **Edit the new file**:
   - Update title, meta description
   - Replace project details (objectives, methodology, findings)
   - Add your own content

3. **Add project media**:
   - Place images in `images/projects/`
   - Update image paths in your HTML:
     ```html
     <img src="../images/projects/my-image.png" alt="Description">
     ```

4. **Link from homepage**:
   In `index.html`, find the Projects section and add/update a project card:
   ```html
   <div class="project-card">
       <div class="project-image">
           <img src="images/projects/my-project-thumbnail.jpg" alt="...">
           <div class="project-overlay">
               <a href="projects/my-new-project.html" class="btn btn-sm">View Details</a>
           </div>
       </div>
       <div class="project-content">
           <h3>Project Title</h3>
           <p class="project-duration">Date Range</p>
           <p class="project-description">Brief description...</p>
           <div class="project-tags">
               <span class="tag">#Tag1</span>
               <span class="tag">#Tag2</span>
           </div>
       </div>
   </div>
   ```

### Adding Publications

**File**: `index.html` (Publications Section)

Add a new publication:
```html
<div class="publication-item">
    <div class="pub-header">
        <span class="pub-status published">Published</span>
        <span class="pub-year">2025</span>
    </div>
    <p class="pub-authors">
        <strong>Your Name</strong>, Co-Author A., Co-Author B.
    </p>
    <p class="pub-title">
        Paper Title Goes Here
    </p>
    <p class="pub-journal">
        <em>Journal Name</em>, Volume(Issue), Pages
    </p>
    <a href="https://doi.org/YOUR-DOI" class="pub-link" target="_blank">
        <i class="fas fa-external-link-alt"></i> View Publication
    </a>
</div>
```

**Publication Status Options**:
- `published` - Green badge
- `under-review` - Orange badge
- `in-preparation` - Gray badge (add custom CSS)

### Adding Conference Presentations

```html
<div class="conference-item">
    <div class="conf-header">
        <span class="conf-type oral">Oral</span>
        <span class="conf-location">City, Country</span>
        <span class="conf-year">2025</span>
    </div>
    <p class="conf-title">
        Presentation Title
    </p>
    <p class="conf-event">
        Conference Name and Details
    </p>
    <p class="conf-authors">
        <strong>Your Name</strong>, Co-Author
    </p>
</div>
```

### Updating Experience

Timeline items follow this structure:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <span class="timeline-date">Month Year - Month Year</span>
        <h3>Position Title</h3>
        <h4>Organization Name</h4>
        <ul class="experience-list">
            <li>Achievement or responsibility 1</li>
            <li>Achievement or responsibility 2</li>
        </ul>
        <div class="tags">
            <span class="tag">Skill</span>
        </div>
    </div>
</div>
```

### Adding Skills

Skills are organized in categories. To add a new skill:

```html
<div class="skill-category">
    <div class="skill-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Category Name</h3>
    <ul class="skill-list">
        <li>Skill 1</li>
        <li>Skill 2</li>
    </ul>
</div>
```

**Finding Icons**: Visit [Font Awesome](https://fontawesome.com/icons) to browse available icons.

## 🚀 Deployment

### GitHub Pages (Recommended - Free)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch
   - Branch: `main` (or your branch name)
   - Folder: `/ (root)`
   - Click Save

3. **Access your site**:
   - URL: `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`
   - Wait 2-3 minutes for initial deployment

4. **Custom Domain (Optional)**:
   - Add a `CNAME` file with your domain
   - Configure DNS settings with your domain provider
   - See [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Alternative Hosting Options

**Netlify**:
1. Connect your GitHub repository
2. Build settings: None needed (static site)
3. Publish directory: `/`
4. Deploy!

**Vercel**:
1. Import GitHub repository
2. Framework Preset: Other
3. Root Directory: `./`
4. Deploy

**Cloudflare Pages**:
1. Connect to Git
2. Build command: Leave empty
3. Build output directory: `/`
4. Deploy

## 🔧 Maintenance

### Regular Updates

**Monthly**:
- [ ] Update resume PDF
- [ ] Add new publications
- [ ] Update project progress

**As Needed**:
- [ ] Add new projects
- [ ] Update professional photo
- [ ] Add conference presentations
- [ ] Update skills and experience

### Content Backup

Regularly commit and push changes:
```bash
git add .
git commit -m "Update: [description of changes]"
git push origin main
```

### Updating Dependencies

The site uses minimal external dependencies:
- Font Awesome (CDN) - For icons
- Formspree (optional) - For contact form

**Updating Font Awesome**:
```html
<!-- In index.html, update version number -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```

## 🐛 Troubleshooting

### Images Not Loading

**Problem**: Profile photo or project images don't appear

**Solutions**:
1. Check file path is correct (case-sensitive)
2. Ensure images are in the correct directory
3. Verify image file extension matches HTML
4. Check file size (keep under 5MB for best performance)

### Contact Form Not Working

**Problem**: Form submissions fail

**Solutions**:
1. Verify Formspree ID is correct
2. Check form action URL: `https://formspree.io/f/YOUR_FORM_ID`
3. Test with a simple submission
4. Check Formspree dashboard for submissions

### Dark Mode Not Saving

**Problem**: Theme preference resets on page reload

**Solutions**:
1. Check browser allows localStorage
2. Disable private/incognito mode
3. Clear browser cache and try again
4. Check JavaScript console for errors

### Mobile Menu Not Opening

**Problem**: Navigation doesn't work on mobile

**Solutions**:
1. Check JavaScript is loading (`js/main.js`)
2. Open browser console for errors
3. Verify nav toggle button is present
4. Test in different mobile browsers

### Slow Loading

**Problem**: Website loads slowly

**Solutions**:
1. Optimize images (use [TinyPNG](https://tinypng.com/))
2. Resize images to appropriate dimensions
3. Use lazy loading for images below fold
4. Minimize custom fonts

## 📊 Analytics (Optional)

### Google Analytics Setup

1. Create a Google Analytics account
2. Get your tracking ID (G-XXXXXXXXXX)
3. Add to `index.html` before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Privacy-Friendly Analytics

Alternatives to Google Analytics:
- [Plausible](https://plausible.io/) - Privacy-focused
- [Fathom](https://usefathom.com/) - GDPR compliant
- [Simple Analytics](https://simpleanalytics.com/)

## 🎨 Advanced Customization

### Adding 3D Visualizations (Three.js)

For FEA model visualization:

1. Include Three.js:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.min.js"></script>
   ```

2. Add a container:
   ```html
   <div id="three-container"></div>
   ```

3. Initialize scene in JavaScript
4. Load your 3D models (.obj, .stl, .gltf)

### Interactive Plots (Plotly.js)

For research data visualization:

```html
<script src="https://cdn.plot.ly/plotly-2.18.0.min.js"></script>
```

### Adding a Blog Section

1. Create `blog/` directory
2. Add individual blog post HTML files
3. Create blog index page
4. Link from main navigation

## 📄 License

This portfolio template is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Found a bug or have a suggestion? Please open an issue or submit a pull request!

## 📞 Support

For questions or help with customization:
- Open an issue on GitHub
- Contact: md-saiful.islam1@louisiana.edu

## 🙏 Acknowledgments

- Font Awesome for icons
- Formspree for contact form functionality
- GitHub Pages for free hosting

---

**Last Updated**: January 2025

**Version**: 1.0.0

Made with ❤️ for academic and professional excellence
