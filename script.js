// Navigation - Fixed version
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Add active class to the corresponding nav button
    const targetBtn = document.querySelector(`[data-page="${pageId}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
}

// Hearts animation - reduce frequency on mobile for better performance
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    document.getElementById('heartsContainer').appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentElement) {
            heart.remove();
        }
    }, 6000);
}

// Sparkles animation - reduce on mobile for better performance
function createSparkle(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 3 + 's';
    
    container.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentElement) {
            sparkle.remove();
        }
    }, 3000);
}

// Random love messages
function showRandomMessage() {
    const messages = [
        "Kamu adalah alasan aku tersenyum setiap hari! 😊",
        "Tidak ada yang lebih indah dari senyummu! ✨",
        "Bersamamu, setiap hari adalah petualangan baru! 🌈",
        "Kamu membuat dunia ini jadi tempat yang lebih baik! 🌟",
        "I love you more than words can say! 💖",
        "Cintaku padamu tak terbatas seperti langit! 🌙",
        "Kamu adalah rumah bagiku! 🏠",
        "Dengan kamu, semuanya terasa sempurna! 💫"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showAlert(randomMessage);
}

function showAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff6b9d, #c44569);
        color: white;
        padding: 25px;
        border-radius: 20px;
        text-align: center;
        font-size: 1.1rem;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 2000;
        animation: fadeInScale 0.5s ease-out;
        max-width: 90%;
        width: 100%;
        max-width: min(400px, 90vw);
        box-sizing: border-box;
    `;
    alertDiv.innerHTML = `
        <p style="margin-bottom: 20px; line-height: 1.5; word-wrap: break-word;">${message}</p>
        <button onclick="this.parentElement.remove()" 
                style="padding: 12px 24px; border: none; 
                       background: rgba(255,255,255,0.2); color: white; 
                       border-radius: 10px; cursor: pointer; font-size: 1rem;
                       min-height: 44px; min-width: 100px;">
            Tutup ❤️
        </button>
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.remove();
        }
    }, 5000);
}

// Memory details
function showMemoryDetail(memoryId) {
    const memories = {
        'first-date': 'Masih ingat betapa gugupnya aku saat kencan pertama? Tapi senyummu membuat semuanya terasa nyaman dan indah. Saat itu aku sudah tahu, kamu adalah orang yang istimewa.',
        'anniversary': 'Setiap anniversary adalah celebration of our love. Melihat bagaimana cinta kita tumbuh dan dewasa dari waktu ke waktu adalah keajaiban yang indah.',
        'adventure': 'Berpetualang bersamamu adalah hal yang paling menyenangkan. Entah itu ke tempat baru atau sekedar jalan-jalan di sekitar rumah, yang penting kita bersama.',
        'simple-moments': 'Momen-momen sederhana bersamamu adalah yang paling berharga. Ngobrol sambil minum kopi, nonton film bersama, atau sekedar diam dalam pelukan.',
        'future': 'Masa depan kita penuh dengan rencana indah. Aku tidak sabar untuk menjalani setiap hari bersamamu dan mewujudkan semua mimpi kita.'
    };
    
    showAlert(memories[memoryId]);
}

// Event listeners and initialization
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Adjust heart and sparkle creation frequency based on screen size
    const isMobile = window.innerWidth <= 768;
    const heartInterval = isMobile ? 1200 : 800; // Less frequent on mobile
    const sparkleInterval = isMobile ? 800 : 500;

    // Start animations
    setInterval(createHeart, heartInterval);
    setInterval(() => createSparkle('sparkles-home'), sparkleInterval);
    
    // Add some initial sparkles
    setTimeout(() => createSparkle('sparkles-home'), 500);
    
    // Create initial hearts
    setTimeout(createHeart, 1000);
});