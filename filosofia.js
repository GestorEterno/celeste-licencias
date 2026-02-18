// filosofia.js - Versión Mejorada (sin cambios estructurales, solo adaptado para nuevos elementos)

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vision Olympus - Filosofía cargada');
    
    // Inicializar funcionalidades
    initPhilosophyPage();
    setupScrollEffects();
    createStellarField();
    initJourneyAnimations();
    initButtonEffects();
    initOrbitalAnimation();
    initCommitmentSection(); // Nueva función para la sección de compromiso
});

// Inicializar la página de filosofía
function initPhilosophyPage() {
    console.log('Configurando página de filosofía mejorada...');
    
    // Inicializar barra de progreso
    initProgressBar();
    
    // Inicializar efectos de navegación
    initNavigation();
}

// Configurar barra de progreso
function initProgressBar() {
    const progressBar = document.querySelector('.reading-progress');
    
    function updateProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = `${progress}%`;
        
        // Cambiar color según el progreso
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

// Configurar efectos de scroll
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
    
    // Crear estrellas principales
    for (let i = 0; i < 60; i++) {
        createStar(particlesContainer, i);
    }
}

function createStar(container, index) {
    const star = document.createElement('div');
    star.classList.add('particle');
    
    // Posición aleatoria
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Tamaño aleatorio
    const size = Math.random() * 2 + 0.5;
    
    // Duración de animación aleatoria
    const duration = Math.random() * 40 + 30;
    
    // Retraso aleatorio
    const delay = Math.random() * 10;
    
    // Aplicar estilos
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    
    // Color basado en el tipo de estrella
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

// Inicializar animaciones del viaje
function initJourneyAnimations() {
    const journeySections = document.querySelectorAll('.journey-section');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animar textos con retraso escalonado
                const texts = entry.target.querySelectorAll('.journey-text');
                texts.forEach((text, index) => {
                    setTimeout(() => {
                        text.style.opacity = '1';
                        text.style.transform = 'translateY(0)';
                    }, 300 + (index * 200)); // Retraso mayor para mejor efecto
                });
                
                // Animar el título y marcador
                const header = entry.target.querySelector('.section-header');
                if (header) {
                    setTimeout(() => {
                        header.style.opacity = '1';
                        header.style.transform = 'translateY(0)';
                    }, 100);
                }
            }
        });
    }, observerOptions);
    
    journeySections.forEach(section => {
        // Configurar estado inicial para todos los elementos
        const texts = section.querySelectorAll('.journey-text');
        const header = section.querySelector('.section-header');
        
        texts.forEach(text => {
            text.style.opacity = '0';
            text.style.transform = 'translateY(20px)';
            text.style.transition = 'all 0.8s ease';
        });
        
        if (header) {
            header.style.opacity = '0';
            header.style.transform = 'translateY(20px)';
            header.style.transition = 'all 0.8s ease';
        }
        
        observer.observe(section);
    });
}

// Inicializar efectos en botones
function initButtonEffects() {
    const buttons = document.querySelectorAll('.portal-button, .cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('primary')) {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            } else {
                this.style.transform = 'translateY(-3px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Inicializar navegación
function initNavigation() {
    // Efecto en el logo
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

// Inicializar animación orbital MEJORADA
function initOrbitalAnimation() {
    console.log('Inicializando animación orbital mejorada...');
    
    // Crear partículas orbitales adicionales
    const orbitContainer = document.querySelector('.hero-orbit');
    
    for (let i = 0; i < 12; i++) {
        createOrbitalParticle(orbitContainer, i);
    }
    
    // Animar los anillos con retraso escalonado
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
    
    // Animación de aparición
    setTimeout(() => {
        particle.style.opacity = '1';
        particle.style.transition = 'opacity 1s ease';
    }, 1000 + (index * 100));
    
    // Animación orbital
    const keyframes = `
        @keyframes orbital-particle-${index} {
            0% {
                transform: translate(-50%, -50%) rotate(${angle}rad) translate(${distance}vmin) rotate(-${angle}rad);
            }
            100% {
                transform: translate(-50%, -50%) rotate(${angle + Math.PI * 2}rad) translate(${distance}vmin) rotate(-${angle + Math.PI * 2}rad);
            }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    
    particle.style.animation = `orbital-particle-${index} ${duration}s linear infinite`;
    particle.style.animationDelay = `${delay}s`;
    
    container.appendChild( particle);
}

// Nueva función para animar la sección de compromiso
function initCommitmentSection() {
    const commitmentSection = document.querySelector('.commitment-section');
    if (!commitmentSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    commitmentSection.style.opacity = '0';
    commitmentSection.style.transform = 'translateY(30px)';
    commitmentSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(commitmentSection);
}

console.log('Filosofía - Vision Olympus lista');
