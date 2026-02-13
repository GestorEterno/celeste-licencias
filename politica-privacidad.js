// politica-privacidad.js - Versión Mejorada

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vision Olympus - Política de Privacidad cargada');
    
    // Inicializar funcionalidades
    initPrivacyPage();
    setupScrollEffects();
    createStellarField();
    initElementAnimations();
});

// Inicializar la página de privacidad
function initPrivacyPage() {
    console.log('Configurando página de política de privacidad...');
    
    // Inicializar barra de progreso
    initProgressBar();
    
    // Inicializar efectos de hover
    initCardEffects();
    initBackToTop();
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

// Configurar efectos de hover en tarjetas
function initCardEffects() {
    const cards = document.querySelectorAll('.app-info-item, .right-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
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

// Inicializar animaciones de elementos
function initElementAnimations() {
    // Animación para elementos con efecto de aparición
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll(
        '.privacy-section, .app-info-item, .right-item'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Inicializar botón "Volver al inicio"
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Efectos de hover en enlaces
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.privacy-section a');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = 'var(--pulsar-pink)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = 'var(--quantum-blue)';
        });
    });
});

console.log('Política de Privacidad - Vision Olympus lista');
