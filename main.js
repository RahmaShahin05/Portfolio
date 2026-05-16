/* ================= main.js ================= */

// 1. تعريف العناصر (Selectors)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

// 2. وظيفة تبديل الوضع (Dark/Light Mode)
themeToggle.addEventListener('click', () => {
    // التحقق مما إذا كان الوضع الحالي هو الـ Light
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        // اختياري: حفظ الإعداد في المتصفح
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// 3. وظيفة القائمة للموبايل (Mobile Menu Toggle)
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('is-active'); // لإضافة تأثير حركة للزر (الشرطات الثلاث)
});

// 4. غلق القائمة تلقائياً عند الضغط على أي رابط (للموبايل)
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('is-active');
    });
});

// 5. تفعيل إعدادات المستخدم المحفوظة عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
