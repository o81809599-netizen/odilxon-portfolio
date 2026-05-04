const translations = {
    uz: {
        tagline: "Kreativ tadqiqotchi va texnologiya ishqibozi",
        about_me: "Men haqimda",
        phone: "Telefon:",
        address: "Manzil:",
        auto_maktab: "Auto Maktab Test",
        qr_code: "Mening QR Kodim",
        share_text: "Odilxon (Odilbek) profilini ulashish",
        qr_title: "Ulashish uchun QR Kod"
    },
    ru: {
        tagline: "Креативный исследователь и энтузиаст технологий",
        about_me: "Обо мне",
        phone: "Телефон:",
        address: "Адрес:",
        auto_maktab: "Авто Школа Тест",
        qr_code: "Мой QR Код",
        share_text: "Поделиться профилем Одилхона",
        qr_title: "QR Код для шеринга"
    },
    en: {
        tagline: "Creative Explorer & Tech Enthusiast",
        about_me: "About Me",
        phone: "Phone:",
        address: "Address:",
        auto_maktab: "Auto School Test",
        qr_code: "My QR Code",
        share_text: "Share Odilxon's profile",
        qr_title: "QR Code for sharing"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    // About Me Toggle
    const aboutBtn = document.getElementById('aboutBtn');
    const aboutContent = document.getElementById('aboutContent');

    aboutBtn.addEventListener('click', () => {
        const isVisible = aboutContent.style.display === 'flex';
        aboutContent.style.display = isVisible ? 'none' : 'flex';
        aboutBtn.classList.toggle('active');
    });

    // QR Modal Logic
    const qrBtn = document.getElementById('qrBtn');
    const qrModal = document.getElementById('qrModal');
    const closeModal = document.getElementById('closeModal');
    const qrcodeContainer = document.getElementById("qrcode");

    new QRCode(qrcodeContainer, {
        text: window.location.href,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    qrBtn.addEventListener('click', () => qrModal.classList.add('active'));
    closeModal.addEventListener('click', () => qrModal.classList.remove('active'));
    window.addEventListener('click', (e) => {
        if (e.target === qrModal) qrModal.classList.remove('active');
    });

    // Particle Generation
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 2 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = Math.random() * 10 + 10 + 's';
        particlesContainer.appendChild(particle);
    }
});
