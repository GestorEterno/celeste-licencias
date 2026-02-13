document.addEventListener('DOMContentLoaded', function() {
    console.log('Vision Olympus - Experiencia premium cargada');
    
    // Inicializar funcionalidades
    initVisionOlympus();
    setupScrollEffects(); // ← AÑADIDO: Función faltante para el efecto de scroll del header
    createStellarField();
    initElementAnimations();
    initHeroEffects();
    initApproachSection();
    initTableEffects();
    initTestimonialEffects();
    initOrbitalAnimation();
    initJuniorOpportunity(); // ← AÑADIDO: Nueva función para la sección de juniors
});

// Inicializar la página principal
function initVisionOlympus() {
    console.log('Configurando página principal premium...');
    
    // Inicializar barra de progreso
    initProgressBar();
    
    // Inicializar efectos de hover
    initCardEffects();
    
    // Inicializar botón volver al inicio
    initBackToTop();
    
    // Ejecutar animaciones iniciales en el hero
    setTimeout(() => {
        createQuantumFluctuation();
    }, 100);
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
    const cards = document.querySelectorAll('.tech-card-horizontal, .philosophy-card-wide, .benefit-item, .timeline-step, .criterion, .tier, .process-phase, .junior-benefit');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            
            const icon = this.querySelector('.tech-icon, .benefit-icon, .junior-icon');
            if (icon) {
                icon.style.filter = 'drop-shadow(0 0 8px rgba(0, 243, 255, 0.7))';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            
            const icon = this.querySelector('.tech-icon, .benefit-icon, .junior-icon');
            if (icon) {
                icon.style.filter = '';
            }
        });
    });
}

// ========== FUNCIÓN AÑADIDA: Configurar efectos de scroll ==========
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
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll(
        '.tech-card-horizontal, .philosophy-card-wide, .benefit-item, .timeline-step, .criterion, .tier, .process-phase, .roles-table, .junior-opportunity, .junior-benefit'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar botón volver al inicio
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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== EFECTOS ESPECIALES HERO - MEJORADOS ==========

// Fluctuación cuántica mejorada
function createQuantumFluctuation() {
    console.log('Activando Quantum Fluctuation en hero');
    const fluctuation = document.createElement('div');
    fluctuation.style.position = 'fixed';
    fluctuation.style.top = '0';
    fluctuation.style.left = '0';
    fluctuation.style.width = '100%';
    fluctuation.style.height = '100%';
    fluctuation.style.background = 'radial-gradient(circle at center, rgba(0, 243, 255, 0.05) 0%, transparent 70%)';
    fluctuation.style.pointerEvents = 'none';
    fluctuation.style.zIndex = '991';
    fluctuation.style.opacity = '0';
    fluctuation.style.transition = 'opacity 2s';
    
    document.body.appendChild(fluctuation);
    
    // Animación mejorada
    fluctuation.style.opacity = '0.2';
    setTimeout(() => {
        fluctuation.style.opacity = '0';
        setTimeout(() => {
            if (fluctuation.parentNode) {
                document.body.removeChild(fluctuation);
            }
        }, 2000);
    }, 1500);
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
    
    container.appendChild(particle);
}

// Efectos específicos para el hero
function initHeroEffects() {
    const heroBadge = document.querySelector('.hero-badge');
    
    // Efecto de pulso para la insignia
    if (heroBadge) {
        setInterval(() => {
            heroBadge.style.transform = 'scale(1.05)';
            setTimeout(() => {
                heroBadge.style.transform = 'scale(1)';
            }, 500);
        }, 3000);
    }
}

// ========== NUEVA SECCIÓN: ENFOQUE TECNOLÓGICO Y FILOSÓFICO ==========

function initApproachSection() {
    // Efectos para las tarjetas de tecnología
    const techCards = document.querySelectorAll('.tech-card-horizontal');
    
    techCards.forEach((card, index) => {
        // Retraso escalonado para animación
        card.style.transitionDelay = `${index * 0.1}s`;
        
        // Efecto de brillo al pasar el mouse
        card.addEventListener('mouseenter', function() {
            const title = this.querySelector('h3');
            if (title) {
                title.style.textShadow = '0 0 10px rgba(0, 243, 255, 0.7)';
            }
            
            const icon = this.querySelector('.tech-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const title = this.querySelector('h3');
            if (title) {
                title.style.textShadow = 'none';
            }
            
            const icon = this.querySelector('.tech-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Efectos para la tarjeta de filosofía
    const philosophyCard = document.querySelector('.philosophy-card-wide');
    if (philosophyCard) {
        philosophyCard.addEventListener('mouseenter', function() {
            const title = this.querySelector('h3');
            if (title) {
                title.style.textShadow = '0 0 15px rgba(0, 243, 255, 0.8)';
            }
        });
        
        philosophyCard.addEventListener('mouseleave', function() {
            const title = this.querySelector('h3');
            if (title) {
                title.style.textShadow = 'none';
            }
        });
    }
}

// ========== NUEVA SECCIÓN: OPORTUNIDAD PARA JUNIORS ==========

function initJuniorOpportunity() {
    console.log('Inicializando efectos para la sección de juniors...');
    
    const juniorBenefits = document.querySelectorAll('.junior-benefit');
    
    juniorBenefits.forEach((benefit, index) => {
        // Retraso escalonado para animación
        benefit.style.transitionDelay = `${index * 0.1}s`;
        
        // Efectos especiales al pasar el mouse
        benefit.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.junior-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.7)';
            }
            
            const title = this.querySelector('h4');
            if (title) {
                title.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.7)';
                title.style.color = 'var(--nova-green)';
            }
        });
        
        benefit.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.junior-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.boxShadow = '';
            }
            
            const title = this.querySelector('h4');
            if (title) {
                title.style.textShadow = 'none';
                title.style.color = 'var(--stellar-white)';
            }
        });
    });
    
    // Efecto especial para el botón CTA de juniors
    const juniorCta = document.querySelector('.junior-cta .cta-button');
    if (juniorCta) {
        juniorCta.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, var(--nova-green), var(--quantum-blue))';
            this.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.5)';
        });
        
        juniorCta.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, var(--quantum-blue), var(--pulsar-pink))';
            this.style.boxShadow = '';
        });
    }
}

// ========== EFECTOS TABLA DE ROLES ==========

function initTableEffects() {
    const tableRows = document.querySelectorAll('.roles-table tbody tr');
    
    tableRows.forEach((row, index) => {
        // Retraso escalonado para animación
        row.style.transitionDelay = `${index * 0.05}s`;
        
        // Efecto de resaltado al pasar el mouse
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(0, 243, 255, 0.1)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
}

function animateTableRows() {
    const tableRows = document.querySelectorAll('.roles-table tbody tr');
    
    tableRows.forEach((row, index) => {
        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// ========== EFECTOS TESTIMONIO ==========

function initTestimonialEffects() {
    // El testimonio ya está estático, no necesita animación de escritura
    console.log('Testimonio estático configurado');
}

// Efectos en botones CTA - MEJORADOS CON ANIMACIONES COMO TECNOLOGÍA
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
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
});

// Efecto en el logo
document.addEventListener('DOMContentLoaded', function() {
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

// Efectos para elementos de ingresos
function initIncomeEffects() {
    const projectionItems = document.querySelectorAll('.projection-item');
    
    projectionItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            const income = this.querySelector('.projection-income');
            if (income) {
                income.style.transform = 'scale(1.1)';
                income.style.color = 'var(--supernova-yellow)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const income = this.querySelector('.projection-income');
            if (income) {
                income.style.transform = 'scale(1)';
                income.style.color = 'var(--nova-green)';
            }
        });
    });
}

// Inicializar efectos de ingresos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initIncomeEffects);

console.log('Vision Olympus - Página principal premium lista');
