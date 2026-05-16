// Initialize AOS Animation
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) menuToggle.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        });
    });

    // ==========================================
    //  Dark & Light Mode Code
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');

        // 1. الفحص عند تحميل الصفحة: هل فيه ثيم متسجل في المتصفح؟
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            // لو الثيم لايت، نغير الأيقونة لشمس
            if (currentTheme === 'light' && themeIcon) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        }

        // 2. حدث الضغط على الزرار للتبديل
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            
            if (theme === 'light') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        });
    }


    // ==========================================
    // Navbar Scroll Effect (تعديل آمن 100% بدون ألوان ثابتة)
    // ==========================================
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'var(--dark-lighter)'; // بيتحول تلقائي حسب الثيم
            nav.style.boxShadow = 'var(--shadow)';
            nav.style.padding = '15px 8%'; // تصغير ناعم للهيدر أثناء النزول
        } else {
            nav.style.background = 'var(--card-bg)'; // بيرجع للخلفية الشفافة الأصلية المتوافقة مع الثيمين
            nav.style.boxShadow = 'none';
            nav.style.padding = '20px 8%';
        }
    });

    // Smooth scroll for Safari/older browsers (optional backup)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
