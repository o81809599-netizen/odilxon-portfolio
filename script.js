document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Generate QR Code
    const qrcodeContainer = document.getElementById("qrcode");
    const currentUrl = window.location.href;
    
    // Create QR code
    new QRCode(qrcodeContainer, {
        text: currentUrl,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Modal Logic
    const qrBtn = document.getElementById('qrBtn');
    const qrModal = document.getElementById('qrModal');
    const closeModal = document.getElementById('closeModal');

    qrBtn.addEventListener('click', () => {
        qrModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        qrModal.classList.remove('active');
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === qrModal) {
            qrModal.classList.remove('active');
        }
    });

    // Simple reveal animation
    const profileCard = document.querySelector('.profile-card');
    profileCard.style.opacity = '0';
    profileCard.style.transform = 'translateY(20px)';
    setTimeout(() => {
        profileCard.style.transition = 'all 0.8s ease-out';
        profileCard.style.opacity = '1';
        profileCard.style.transform = 'translateY(0)';
    }, 100);


    // Generate random particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2 + 'px';
        const left = Math.random() * 100 + '%';
        const delay = Math.random() * 10 + 's';
        const duration = Math.random() * 10 + 10 + 's';
        
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = left;
        particle.style.animationDelay = delay;
        particle.style.animationDuration = duration;
        
        particlesContainer.appendChild(particle);
    }
});
