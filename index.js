// ARCHIVO: index.js (COMPLETO - VERSIÓN FINAL)

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vision Olympus - Página de inicio cargada (visión compacta)');
    
    // Inicializar funcionalidades base
    initProgressBar();
    setupScrollEffects();
    createStellarField();
    initElementAnimations();
    initHeroEffects();
    initOrbitalAnimation();
    initBackToTop();
    initCardEffects();
    initLogoGlitch();
    initCtaEffects();
});

// Configurar barra de progreso
function initProgressBar() {
    const progressBar = document.querySelector('.reading-progress');
    function updateProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${progress}%`;
        
        // Cambiar color según progreso
        if (progress > 85) {
            progressBar.style.background = 'linear-gradient(90deg, var(--pulsar-pink), var(--galactic-purple))';
        } else if (progress > 70) {
            progressBar.style.background = 'linear-gradient(90deg, var(--quantum-blue), var(--pulsar-pink))';
        } else if (progress > 50) {
            progressBar.style.background = 'linear-gradient(90deg, var(--nova-green), var(--quantum-blue))';
        } else {
            progressBar.style.background = 'linear-gradient(90deg, var(--quantum-blue), var(--supernova-yellow))';
        }
    }
    window.addEventListener('scroll', updateProgress);
}

// Configurar efectos de scroll en el header
function setupScrollEffects() {
    const header = document.querySelector('.cyber-header');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Crear campo estelar
function createStellarField() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 60; i++) {
        createStar(particlesContainer, i);
    }
}

function createStar(container, index) {
    const star = document.createElement('div');
    star.classList.add('particle');
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 2 + 0.5;
    const duration = Math.random() * 40 + 30;
    const delay = Math.random() * 10;
    
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    
    const starTypes = [
        { color: '#ffffff', glow: '#ffffff' },
        { color: '#00f3ff', glow: '#00f3ff' },
        { color: '#ff00ff', glow: '#ff00ff' }
    ];
    const starType = starTypes[Math.floor(Math.random() * starTypes.length)];
    star.style.backgroundColor = starType.color;
    star.style.boxShadow = `0 0 ${size * 2}px ${starType.glow}`;
    
    container.appendChild(star);
}

// Animaciones de aparición para elementos nuevos
function initElementAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const elementsToAnimate = document.querySelectorAll(
        '.contrast-card, .vision-card, .app-card, .join-item, .final-cta-simplified'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Efectos hover generales para tarjetas
function initCardEffects() {
    const cards = document.querySelectorAll('.contrast-card, .app-card, .join-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            const icon = this.querySelector('.contrast-icon, .app-icon, .join-icon');
            if (icon) {
                icon.style.filter = 'drop-shadow(0 0 8px rgba(0, 243, 255, 0.7))';
            }
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            const icon = this.querySelector('.contrast-icon, .app-icon, .join-icon');
            if (icon) {
                icon.style.filter = '';
            }
        });
    });
}

// Botón volver al inicio
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Efectos especiales del hero (insignia, etc.)
function initHeroEffects() {
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        setInterval(() => {
            heroBadge.style.transform = 'scale(1.05)';
            setTimeout(() => {
                heroBadge.style.transform = 'scale(1)';
            }, 500);
        }, 3000);
    }
}

// Animación orbital
function initOrbitalAnimation() {
    console.log('Inicializando animación orbital...');
    const orbitContainer = document.querySelector('.hero-orbit');
    for (let i = 0; i < 12; i++) {
        createOrbitalParticle(orbitContainer, i);
    }
    const rings = document.querySelectorAll('.orbit-ring');
    rings.forEach((ring, index) => {
        setTimeout(() => {
            ring.style.opacity = '1';
        }, 500 + (index * 300));
    });
}

function createOrbitalParticle(container, index) {
    const particle = document.createElement('div');
    particle.classList.add('orbital-particle');
    
    const angle = (index / 12) * Math.PI * 2;
    const distance = 20 + Math.random() * 20;
    const size = Math.random() * 1.5 + 0.5;
    const duration = 15 + Math.random() * 10;
    const delay = Math.random() * 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = 'var(--quantum-blue)';
    particle.style.boxShadow = `0 0 ${size * 2}px var(--quantum-blue)`;
    particle.style.borderRadius = '50%';
    particle.style.position = 'absolute';
    particle.style.top = '50%';
    particle.style.left = '50%';
    particle.style.opacity = '0';
    
    setTimeout(() => {
        particle.style.opacity = '1';
        particle.style.transition = 'opacity 1s ease';
    }, 1000 + (index * 100));
    
    const keyframes = `
        @keyframes orbital-particle-${index} {
            0% { transform: translate(-50%, -50%) rotate(${angle}rad) translate(${distance}vmin) rotate(-${angle}rad); }
            100% { transform: translate(-50%, -50%) rotate(${angle + Math.PI * 2}rad) translate(${distance}vmin) rotate(-${angle + Math.PI * 2}rad); }
        }
    `;
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    
    particle.style.animation = `orbital-particle-${index} ${duration}s linear infinite`;
    particle.style.animationDelay = `${delay}s`;
    
    container.appendChild(particle);
}

// Efecto en logo
function initLogoGlitch() {
    const logo = document.querySelector('.logo-glitch');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch-anim 0.3s infinite';
        });
        logo.addEventListener('mouseleave', function() {
            this.style.animation = 'glitch-anim 5s infinite linear alternate-reverse';
        });
    }
}

// Efectos en botones CTA
function initCtaEffects() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('primary')) {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            } else {
                this.style.transform = 'translateY(-2px)';
            }
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

console.log('Vision Olympus - Listo para inspirar.');
