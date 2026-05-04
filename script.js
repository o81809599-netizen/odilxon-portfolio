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
});
