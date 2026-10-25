// ==========================================
// Language Toggle Functionality (EN / KH)
// ==========================================
function toggleLanguage() {
    const langBtn = document.getElementById('lang-btn');
    const enElements = document.querySelectorAll('.en-text');
    const khElements = document.querySelectorAll('.kh-text');

    // Check current state based on the button text or a data attribute
    const isKhmer = langBtn.getAttribute('data-lang') === 'kh';

    if (!isKhmer) {
        // Switch to Khmer
        enElements.forEach(el => el.style.display = 'none');
        khElements.forEach(el => el.style.display = 'block');
        langBtn.innerHTML = '🇬🇧 English';
        langBtn.setAttribute('data-lang', 'kh');
    } else {
        // Switch to English
        khElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
        langBtn.innerHTML = '🇰🇭 ខ្មែរ';
        langBtn.setAttribute('data-lang', 'en');
    }
}

// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
