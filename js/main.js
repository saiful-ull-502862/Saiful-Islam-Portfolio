/**
 * Portfolio Website JavaScript
 * Author: Md Saiful Islam
 * Features: Dark mode, smooth scrolling, animations, mobile navigation
 */

// ===========================
// Initialization
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initScrollAnimations();
    initBackToTop();
    initContactForm();
    updateLastModified();
    initBackgroundCustomizer();
    initProfileBlending();
});

// ===========================
// Theme Toggle (Dark/Light Mode)
// ===========================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');

    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===========================
// Navigation
// ===========================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Scroll Animations
// ===========================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(`
        .timeline-item,
        .skill-category,
        .project-card,
        .publication-item,
        .conference-item,
        .award-item,
        .service-item,
        .highlight-item
    `);

    animateElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ===========================
// Back to Top Button
// ===========================
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Contact Form
// ===========================
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', async (e) => {
            // Check if Formspree ID is configured
            const formAction = form.getAttribute('action');

            if (formAction.includes('YOUR_FORM_ID')) {
                e.preventDefault();
                alert('Please configure your Formspree form ID in index.html before submitting the form. See the README for instructions.');
                return;
            }

            // If properly configured, show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;

            // Form will submit normally to Formspree
            // After submission, Formspree will handle the redirect
        });
    }
}

// ===========================
// Update Last Modified Date
// ===========================
function updateLastModified() {
    const lastUpdatedElement = document.getElementById('lastUpdated');

    if (lastUpdatedElement) {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        lastUpdatedElement.textContent = formattedDate;
    }
}

// ===========================
// Typing Effect for Hero Section (Optional)
// ===========================
function initTypingEffect() {
    const tagline = document.querySelector('.hero-tagline');

    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        tagline.style.opacity = '1';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };

        // Start typing after page loads
        setTimeout(typeWriter, 1500);
    }
}

// ===========================
// Project Filter (Optional Enhancement)
// ===========================
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===========================
// Add Loading Animation
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===========================
// Keyboard Navigation
// ===========================
document.addEventListener('keydown', (e) => {
    // Press Escape to close mobile menu
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ===========================
// Performance Optimization
// ===========================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll handler
window.addEventListener('scroll', debounce(() => {
    // Scroll-based operations are already handled in individual functions
}, 15));

// ===========================
// Background Customizer
// ===========================
function initBackgroundCustomizer() {
    const bgToggle = document.getElementById('bgToggle');
    const bgCustomizer = document.getElementById('bgCustomizer');
    const bgClose = document.getElementById('bgClose');
    const bgImageUpload = document.getElementById('bgImageUpload');
    const bgPreview = document.getElementById('bgPreview');
    const bgPreviewSection = document.getElementById('bgPreviewSection');
    const applyBackground = document.getElementById('applyBackground');
    const resetBackground = document.getElementById('resetBackground');

    let uploadedImageData = null;

    // Toggle background customizer panel
    bgToggle.addEventListener('click', () => {
        bgCustomizer.classList.add('active');
    });

    bgClose.addEventListener('click', () => {
        bgCustomizer.classList.remove('active');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!bgCustomizer.contains(e.target) &&
            !bgToggle.contains(e.target) &&
            bgCustomizer.classList.contains('active')) {
            bgCustomizer.classList.remove('active');
        }
    });

    // Handle image upload
    bgImageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                uploadedImageData = event.target.result;
                bgPreview.src = uploadedImageData;
                bgPreviewSection.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    // Apply background
    applyBackground.addEventListener('click', () => {
        if (uploadedImageData) {
            localStorage.setItem('customBackground', uploadedImageData);
            applyCustomBackground(uploadedImageData);
            blendProfileWithBackground(uploadedImageData);
            bgCustomizer.classList.remove('active');
        }
    });

    // Reset background
    resetBackground.addEventListener('click', () => {
        localStorage.removeItem('customBackground');
        resetToDefaultBackground();
        blendProfileWithBackground(null);
        bgPreviewSection.style.display = 'none';
        bgImageUpload.value = '';
        uploadedImageData = null;
    });

    // Load saved background on init
    const savedBackground = localStorage.getItem('customBackground');
    if (savedBackground) {
        applyCustomBackground(savedBackground);
        blendProfileWithBackground(savedBackground);
    }
}

function applyCustomBackground(imageData) {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.backgroundImage = `url(${imageData})`;
        heroBackground.style.backgroundSize = 'cover';
        heroBackground.style.backgroundPosition = 'center';
        heroBackground.style.backgroundRepeat = 'no-repeat';
    }
}

function resetToDefaultBackground() {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.backgroundImage = '';
    }
}

// ===========================
// Profile Image Blending
// ===========================
function initProfileBlending() {
    const canvas = document.getElementById('profileCanvas');
    const profileImg = document.getElementById('profileImage');

    if (!canvas || !profileImg) return;

    // Load saved background and blend
    const savedBackground = localStorage.getItem('customBackground');

    profileImg.onload = () => {
        if (savedBackground) {
            blendProfileWithBackground(savedBackground);
        } else {
            blendProfileWithBackground(null);
        }
    };

    // If image is already loaded
    if (profileImg.complete) {
        if (savedBackground) {
            blendProfileWithBackground(savedBackground);
        } else {
            blendProfileWithBackground(null);
        }
    }
}

function blendProfileWithBackground(backgroundImageData) {
    const canvas = document.getElementById('profileCanvas');
    const profileImg = document.getElementById('profileImage');

    if (!canvas || !profileImg) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    if (backgroundImageData) {
        // Load background image
        const bgImg = new Image();
        bgImg.crossOrigin = 'anonymous';
        bgImg.onload = () => {
            // Draw background image
            ctx.drawImage(bgImg, 0, 0, width, height);

            // Create a subtle gradient overlay to blend better
            const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw profile image with blending
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 1.0;

            // Calculate dimensions to maintain aspect ratio
            const scale = Math.min(width / profileImg.width, height / profileImg.height) * 0.9;
            const x = (width / 2) - (profileImg.width / 2) * scale;
            const y = (height / 2) - (profileImg.height / 2) * scale;

            ctx.drawImage(profileImg, x, y, profileImg.width * scale, profileImg.height * scale);

            // Add a subtle vignette effect
            const vignette = ctx.createRadialGradient(width/2, height/2, width/4, width/2, height/2, width/2);
            vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
            vignette.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, width, height);
        };
        bgImg.src = backgroundImageData;
    } else {
        // Default: Draw profile with gradient background matching the theme
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.08)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.08)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Add pattern overlay
        const pattern = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
        pattern.addColorStop(0, 'rgba(37, 99, 235, 0.15)');
        pattern.addColorStop(0.5, 'rgba(16, 185, 129, 0.08)');
        pattern.addColorStop(1, 'rgba(245, 158, 11, 0.05)');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, width, height);

        // Draw profile image
        const scale = Math.min(width / profileImg.width, height / profileImg.height) * 0.9;
        const x = (width / 2) - (profileImg.width / 2) * scale;
        const y = (height / 2) - (profileImg.height / 2) * scale;

        ctx.drawImage(profileImg, x, y, profileImg.width * scale, profileImg.height * scale);
    }
}

// ===========================
// Console Message (Optional)
// ===========================
console.log('%c👋 Hello!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #4b5563;');
console.log('%cInterested in collaboration? Let\'s connect!', 'font-size: 14px; color: #10b981;');
console.log('%cEmail: md-saiful.islam1@louisiana.edu', 'font-size: 12px; color: #6b7280;');

// ===========================
// Export functions for external use (if needed)
// ===========================
window.portfolioFunctions = {
    initTheme,
    initNavigation,
    initScrollAnimations,
    updateActiveNavLink
};
