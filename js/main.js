/**
 * Portfolio Website JavaScript
 * Author: Md Saiful Islam
 * Features: Dark mode, smooth scrolling, animations, mobile navigation
 */

// ===========================
// Initialization
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM Content Loaded - Starting initialization...');

    initTheme();
    initNavigation();
    initScrollAnimations();
    initBackToTop();
    initContactForm();
    initCollapsibleSections();
    initProjectSlider();
    initMenuToggle();
    updateLastModified();

    // Wrap potentially problematic functions in try-catch
    try {
        initBackgroundCustomizer();
    } catch (e) {
        console.warn('initBackgroundCustomizer failed:', e);
    }

    try {
        initProfileBlending();
    } catch (e) {
        console.warn('initProfileBlending failed:', e);
    }

    // This MUST run
    console.log('🎯 About to call initExperienceSlider...');
    initExperienceSlider();
    console.log('✅ initExperienceSlider called');
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
    // Determine current page
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    // Handle Active Link Highlighting
    if (page === 'index.html' || page === '') {
        // On Home Page: Use Scroll Spy
        window.addEventListener('scroll', updateActiveNavLink);
        updateActiveNavLink(); // Initial check

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    } else {
        // On Other Pages: Static Highlight
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Check if link href matches current page
            if (link.getAttribute('href') === page) {
                link.classList.add('active');
            }
        });
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        // Match section ID
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }

        // Special case for Home
        if ((currentSection === 'home' || !currentSection) && href === 'index.html') {
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
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
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

    // Clear canvas to make it transparent
    ctx.clearRect(0, 0, width, height);

    // Draw only the profile image without any background
    // This allows the hero background to show through
    const scale = Math.min(width / profileImg.width, height / profileImg.height) * 0.9;
    const x = (width / 2) - (profileImg.width / 2) * scale;
    const y = (height / 2) - (profileImg.height / 2) * scale;

    ctx.drawImage(profileImg, x, y, profileImg.width * scale, profileImg.height * scale);
}

// ===========================
// Console Message (Optional)
// ===========================
console.log('%c👋 Hello!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #4b5563;');
console.log('%cInterested in collaboration? Let\'s connect!', 'font-size: 14px; color: #10b981;');
console.log('%cEmail: md-saiful.islam1@louisiana.edu', 'font-size: 12px; color: #6b7280;');

// ===========================
// Swipe-Enabled Slider
// ===========================
function initExperienceSlider() {
    console.log('=== Initializing swipe sliders ===');

    // Initialize Education slider
    initSwipeSlider('education-slider');

    // Initialize Experience slider
    initSwipeSlider('experience-slider');
}

function initSwipeSlider(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.log(`Container not found: ${containerId}`);
        return;
    }

    const wrapper = container.querySelector('.slider-wrapper');
    const track = container.querySelector('.slider-track');
    const cards = container.querySelectorAll('.slider-card');
    const details = container.querySelectorAll('.detail-item');
    const leftArrow = container.querySelector('.slider-arrow-left');
    const rightArrow = container.querySelector('.slider-arrow-right');

    if (!track || cards.length === 0) {
        console.log(`Track or cards not found in ${containerId}`);
        return;
    }

    let currentIndex = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    // Create navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-nav-dots';
    cards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    wrapper.appendChild(dotsContainer);

    const dots = dotsContainer.querySelectorAll('.slider-dot');

    // Arrow button click handlers
    if (leftArrow) {
        leftArrow.onclick = (e) => {
            e.preventDefault();
            goToSlide(currentIndex - 1);
        };
    }

    if (rightArrow) {
        rightArrow.onclick = (e) => {
            e.preventDefault();
            goToSlide(currentIndex + 1);
        };
    }

    // Touch/Mouse events for swiping
    track.addEventListener('touchstart', handleStart, { passive: true });
    track.addEventListener('mousedown', handleStart);

    track.addEventListener('touchmove', handleMove, { passive: false });
    track.addEventListener('mousemove', handleMove);

    track.addEventListener('touchend', handleEnd);
    track.addEventListener('mouseup', handleEnd);
    track.addEventListener('mouseleave', handleEnd);

    // Keyboard navigation
    container.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            goToSlide(currentIndex + 1);
        }
    });

    function handleStart(e) {
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        track.style.transition = 'none';
    }

    function handleMove(e) {
        if (!isDragging) return;

        e.preventDefault();
        currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const diff = currentX - startX;
        const cardWidth = cards[0].offsetWidth + 32; // card width + gap
        const currentOffset = -currentIndex * cardWidth;
        track.style.transform = `translateX(${currentOffset + diff}px)`;
    }

    function handleEnd() {
        if (!isDragging) return;
        isDragging = false;

        const diff = currentX - startX;
        const threshold = 50; // minimum swipe distance

        track.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';

        if (diff > threshold && currentIndex > 0) {
            // Swiped right - go to previous
            goToSlide(currentIndex - 1);
        } else if (diff < -threshold && currentIndex < cards.length - 1) {
            // Swiped left - go to next
            goToSlide(currentIndex + 1);
        } else {
            // Snap back to current
            updateSlider(currentIndex);
        }

        startX = 0;
        currentX = 0;
    }

    function goToSlide(index) {
        // Enable infinite looping
        if (index < 0) {
            index = cards.length - 1; // Go to last card
        } else if (index >= cards.length) {
            index = 0; // Go to first card
        }
        currentIndex = index;
        updateSlider(index);
    }

    function updateSlider(index) {
        // Update active card
        cards.forEach(c => c.classList.remove('active'));
        cards[index].classList.add('active');

        // Update active detail
        details.forEach(d => d.classList.remove('active'));
        if (details[index]) {
            details[index].classList.add('active');
        }

        // Update dots
        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');

        // Arrows are always enabled for infinite loop
        if (leftArrow) {
            leftArrow.disabled = false;
        }
        if (rightArrow) {
            rightArrow.disabled = false;
        }

        // Slide to position
        const cardWidth = cards[0].offsetWidth;
        const offset = -index * cardWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    // Initialize
    updateSlider(0);
    console.log(`✓ ${containerId} swipe slider initialized with ${cards.length} cards`);
}

// ===========================
// Export functions for external use (if needed)
// ===========================
window.portfolioFunctions = {
    initTheme,
    initNavigation,
    initScrollAnimations,
    updateActiveNavLink,
    initExperienceSlider,
    initCollapsibleSections,
    initProjectSlider
};

// ===========================
// Project Slider (Highlights)
// ===========================
function initProjectSlider() {
    // Find all project slider containers
    const sliderContainers = document.querySelectorAll('.project-slider-container');

    if (sliderContainers.length === 0) return;

    // Initialize each slider independently
    sliderContainers.forEach(container => {
        const slides = container.querySelectorAll('.project-slide');
        const indicators = container.querySelectorAll('.indicator');

        if (slides.length === 0) return;

        let currentSlide = 0;
        const slideInterval = 5000; // 5 seconds

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(ind => ind.classList.remove('active'));

            slides[index].classList.add('active');
            if (indicators[index]) indicators[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        // Auto play
        let slideTimer = setInterval(nextSlide, slideInterval);

        // Manual controls (indicators)
        indicators.forEach((ind, index) => {
            ind.addEventListener('click', () => {
                clearInterval(slideTimer);
                showSlide(index);
                slideTimer = setInterval(nextSlide, slideInterval);
            });
        });
    });
}

// ===========================
// Collapsible Sections (Accordion)
// ===========================
function initCollapsibleSections() {
    const collapsibles = document.querySelectorAll('.section-collapsible');

    collapsibles.forEach(section => {
        // Find the toggle element (either .section-title or .slider-main-title)
        const toggle = section.querySelector('.section-title, .slider-main-title');

        if (toggle) {
            toggle.addEventListener('click', () => {
                // Toggle active class
                section.classList.toggle('active');

                // Optional: Scroll into view if opening
                if (section.classList.contains('active')) {
                    setTimeout(() => {
                        const headerOffset = 100; // Adjust for fixed header
                        const elementPosition = section.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }, 300);
                }
            });
        }
    });
}

// ===========================
// Menu Toggle (Hamburger Menu)
// ===========================
function initMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    if (!menuToggle || !sidebar) return;

    // Toggle menu on button click
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('collapsed');
        if (sidebarOverlay) {
            sidebarOverlay.classList.toggle('active');
        }
    });

    // Close menu when clicking overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('collapsed');
            sidebarOverlay.classList.remove('active');
        });
    }

    // Close menu when clicking a nav link
    const navLinks = sidebar.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('collapsed');
            if (sidebarOverlay) {
                sidebarOverlay.classList.remove('active');
            }
        });
    });

    // Start with sidebar collapsed
    sidebar.classList.add('collapsed');
}
