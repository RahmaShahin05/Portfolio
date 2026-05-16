// ===============================
// AOS Animation
// ===============================

document.addEventListener('DOMContentLoaded', () => {

```
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===============================
// ELEMENTS
// ===============================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');
const nav = document.querySelector('nav');

// ===============================
// MOBILE MENU
// ===============================

if (menuToggle) {

    menuToggle.addEventListener('click', () => {

        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking links

links.forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close menu when clicking outside

document.addEventListener('click', (e) => {

    const isInside =
        navLinks.contains(e.target) ||
        menuToggle.contains(e.target);

    if (!isInside) {

        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ===============================
// DARK & LIGHT MODE
// ===============================

const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {

    const themeIcon = themeToggleBtn.querySelector('i');

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {

        document.documentElement.setAttribute(
            'data-theme',
            'light'
        );

        themeIcon.classList.replace(
            'fa-moon',
            'fa-sun'
        );
    }

    themeToggleBtn.addEventListener('click', () => {

        const isLight =
            document.documentElement.getAttribute('data-theme')
            === 'light';

        if (isLight) {

            document.documentElement.removeAttribute('data-theme');

            localStorage.removeItem('theme');

            themeIcon.classList.replace(
                'fa-sun',
                'fa-moon'
            );

        } else {

            document.documentElement.setAttribute(
                'data-theme',
                'light'
            );

            localStorage.setItem(
                'theme',
                'light'
            );

            themeIcon.classList.replace(
                'fa-moon',
                'fa-sun'
            );
        }
    });
}

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

let ticking = false;

window.addEventListener('scroll', () => {

    if (!ticking) {

        window.requestAnimationFrame(() => {

            nav.classList.toggle(
                'scrolled',
                window.scrollY > 50
            );

            ticking = false;
        });

        ticking = true;
    }
});
```

});
