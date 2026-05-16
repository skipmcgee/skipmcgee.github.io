// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '◉';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '○';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) themeToggle.textContent = '○';
    }
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to interactive elements
document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = '#00d4ff';
    });
    
    card.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = '#00ff88';
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const isLight = document.body.getAttribute('data-theme') === 'light';
    
    if (window.scrollY > 100) {
        nav.style.background = isLight 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(10, 10, 15, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = isLight 
            ? 'rgba(255, 255, 255, 0.9)' 
            : 'rgba(10, 10, 15, 0.9)';
        nav.style.backdropFilter = 'blur(20px)';
    }
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
    });
});

// Matrix rain effect (simplified)
function createMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.05;
    `;
    
    for (let i = 0; i < 15; i++) {
        const drop = document.createElement('div');
        drop.textContent = Math.random() < 0.5 ? '1' : '0';
        drop.style.cssText = `
            position: absolute;
            color: var(--primary-cyber);
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            animation: matrixFall ${4 + Math.random() * 6}s linear infinite;
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        matrixContainer.appendChild(drop);
    }
    
    document.body.appendChild(matrixContainer);
}

// Add matrix rain keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes matrixFall {
        0% { top: -20px; opacity: 0; }
        10% { opacity: 0.8; }
        90% { opacity: 0.8; }
        100% { top: 100vh; opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize matrix rain
createMatrixRain();

// Glitch effect for title
function glitchEffect() {
    const title = document.querySelector('.hero-title');
    if (title && Math.random() < 0.3) {
        const originalFilter = title.style.filter;
        title.style.filter = 'hue-rotate(180deg) saturate(2)';
        setTimeout(() => {
            title.style.filter = originalFilter || 'none';
        }, 150);
    }
}

// Random glitch effect
setInterval(glitchEffect, 2000 + Math.random() * 4000);

// Terminal typing effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Initialize typing effect for subtitle
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            const originalText = subtitle.textContent;
            typeWriter(subtitle, originalText, 80);
        }
    }, 1000);
});