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

    // Add hover sound effect (optional/visual)
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.borderColor = 'var(--accent-primary)';
        });
        btn.addEventListener('mouseleave', () => {
            const type = btn.classList[1];
            // Reset borders based on type if needed, or keep it subtle
        });
    });

    // Simple reveal animation for info items
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        item.style.transition = `all 0.5s ease-out ${0.3 + (index * 0.1)}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });

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
