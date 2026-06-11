/* ============================================
   ORANTE CALC - MAIN JAVASCRIPT FILE
   ============================================ */

// ===== DOM ELEMENTS =====
const body = document.body;
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('#theme-icon');
const themeText = document.querySelector('#theme-text');

// ===== MOBILE MENU TOGGLE =====
function toggleMobileMenu() {
    if (navLinks) {
        navLinks.classList.toggle('active');

        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

// Add event listener if button exists
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// ===== THEME TOGGLE (Dark/Light Mode) =====
function toggleTheme() {
    body.classList.toggle('light-mode');

    // Save preference to localStorage
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    // Update icon and text
    if (themeIcon) {
        if (isLight) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            if (themeText) themeText.textContent = 'Light';
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            if (themeText) themeText.textContent = 'Dark';
        }
    }
}

// ===== LOAD SAVED THEME ON PAGE LOAD =====
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            if (themeText) themeText.textContent = 'Light';
        }
    }
}

// Initialize theme
loadTheme();

// Add click event if toggle exists
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// ===== DROPDOWN HOVER EFFECT (Desktop) =====
function initDropdowns() {
    // Only enable hover dropdowns on desktop (width > 1024px)
    if (window.innerWidth > 1024) {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            // Mouse Enter
            dropdown.addEventListener('mouseenter', () => {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.style.opacity = '1';
                    menu.style.visibility = 'visible';
                    menu.style.transform = 'translateY(0)';
                }
            });

            // Mouse Leave
            dropdown.addEventListener('mouseleave', () => {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.transform = 'translateY(10px)';
                }
            });
        });
    }
}

// Initialize dropdowns
initDropdowns();

// Re-init dropdowns on window resize
window.addEventListener('resize', initDropdowns);

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== NUMBER ANIMATION FOR STATS =====
function animateNumbers() {
    const counters = document.querySelectorAll('.stat-number[data-target]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        // Start animation
        updateCounter();
    });
}

// Run on page load
animateNumbers();

// ===== SET ACTIVE NAV LINK =====
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

// ===== CLOSE MOBILE MENU ON CLICK OUTSIDE =====
document.addEventListener('click', function (e) {
    if (navLinks && navLinks.classList.contains('active')) {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
});

// ===== UTILITY: FORMAT NUMBERS =====
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ===== UTILITY: FORMAT CURRENCY =====
function formatCurrency(amount, currency = '$') {
    return currency + formatNumber(amount.toFixed(2));
}

// ===== UTILITY: SHOW/HIDE ELEMENTS =====
function showElement(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.style.display = 'block';
}

function hideElement(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.style.display = 'none';
}

function toggleElement(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        if (el.style.display === 'none') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }
}

// ===== EXPORT: MAKE FILES AVAILABLE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleMobileMenu,
        toggleTheme,
        loadTheme,
        initDropdowns,
        animateNumbers,
        setActiveNavLink,
        formatNumber,
        formatCurrency,
        showElement,
        hideElement,
        toggleElement
    };
}