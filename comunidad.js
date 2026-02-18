// comunidad.js - Versión Mejorada con header/footer idénticos a filosofia.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vision Olympus - Comunidad cargada');
    
    // Inicializar funcionalidades
    initCommunityPage();
    setupScrollEffects();
    createStellarField();
    initElementAnimations();
    initOrbitalAnimation();
});

// Inicializar la página de comunidad
function initCommunityPage() {
    console.log('Configurando página de comunidad mejorada...');
    
    // Inicializar barra de progreso
    initProgressBar();
    
    // Inicializar efectos de hover
    initCardEffects();
    initRoleEffects();
    initTestimonialEffects();
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
    const cards = document.querySelectorAll('.mission-item, .role-card, .testimonial-card, .workflow-step');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            
            const icon = this.querySelector('.mission-icon, .role-icon');
            if (icon) {
                icon.style.filter = 'drop-shadow(0 0 8px rgba(0, 243, 255, 0.7))';
                icon.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            
            const icon = this.querySelector('.mission-icon, .role-icon');
            if (icon) {
                icon.style.filter = '';
                icon.style.transform = '';
            }
        });
    });
}

// Efectos especiales para roles
function initRoleEffects() {
    const roleCards = document.querySelectorAll('.role-card');
    
    roleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const skills = this.querySelectorAll('.skill-tag');
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.transform = 'translateY(-2px)';
                    skill.style.boxShadow = '0 3px 8px rgba(0, 243, 255, 0.3)';
                }, index * 100);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const skills = this.querySelectorAll('.skill-tag');
            skills.forEach(skill => {
                skill.style.transform = '';
                skill.style.boxShadow = '';
            });
        });
    });
}

// Efectos especiales para testimonios
function initTestimonialEffects() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', function() {
            const avatar = this.querySelector('.author-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1.1)';
                avatar.style.boxShadow = '0 0 15px rgba(0, 243, 255, 0.5)';
            }
        });
        
        testimonial.addEventListener('mouseleave', function() {
            const avatar = this.querySelector('.author-avatar');
            if (avatar) {
                avatar.style.transform = '';
                avatar.style.boxShadow = '';
            }
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

// Crear campo estelar mejorado
function createStellarField() {
    const particlesContainer = document.querySelector('.particles');
    
    // Crear más estrellas para mayor inmersión
    for (let i = 0; i < 120; i++) {
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
    const size = Math.random() * 3 + 0.5;
    
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
        { color: '#ff00ff', glow: '#ff00ff' },
        { color: '#ffff00', glow: '#ffff00' },
        { color: '#00ff00', glow: '#00ff00' }
    ];
    
    const starType = starTypes[Math.floor(Math.random() * starTypes.length)];
    star.style.backgroundColor = starType.color;
    star.style.boxShadow = `0 0 ${size * 2}px ${starType.glow}`;
    
    // Añadir efecto de centelleo aleatorio
    if (Math.random() > 0.6) {
        star.style.animation = `cosmic-float ${duration}s linear infinite, star-twinkle ${Math.random() * 3 + 2}s infinite alternate`;
    }
    
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
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll(
        '.mission-item, .role-card, .testimonial-card, .workflow-step, .stat'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar animación orbital
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
    
    container.appendChild(particle);
}

// Efectos especiales en botones CTA
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('primary')) {
                this.style.transform = 'translateY(-3px) scale(1.05)';
                this.style.boxShadow = '0 8px 20px rgba(0, 243, 255, 0.4)';
                
                // Efecto de pulso adicional
                this.style.animation = 'pulse-glow 0.6s ease-in-out';
            } else {
                this.style.transform = 'translateY(-3px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.animation = '';
        });
    });
    
    // Efecto especial en el logo
    const logo = document.querySelector('.logo-glitch');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch-anim 0.3s infinite';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.animation = 'glitch-anim 5s infinite linear alternate-reverse';
        });
    }
});

// Añadir animación de pulso para el botón
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse-glow {
        0% {
            box-shadow: 0 0 5px rgba(0, 243, 255, 0.4);
        }
        50% {
            box-shadow: 0 0 20px rgba(0, 243, 255, 0.8), 0 0 30px rgba(255, 0, 255, 0.6);
        }
        100% {
            box-shadow: 0 0 5px rgba(0, 243, 255, 0.4);
        }
    }
    
    @keyframes star-twinkle {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

console.log('Comunidad - Vision Olympus mejorada cargada correctamente');
