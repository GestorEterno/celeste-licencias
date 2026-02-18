// tecnologia.js - Versión Corregida (solo modales para Fase 1)

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vision Olympus - Tecnología cargada');
    
    // Inicializar funcionalidades
    initTechnologyPage();
    setupScrollEffects();
    createStellarField();
    initElementAnimations();
    initAppModals(); // Solo para las 4 apps de Fase 1
    initOrbitalAnimation();
});

// Inicializar la página de tecnología
function initTechnologyPage() {
    console.log('Configurando página de tecnología mejorada...');
    
    // Inicializar barra de progreso
    initProgressBar();
    
    // Inicializar efectos de hover
    initCardEffects();
    initRoadmapEffects();
    initTeamEffects();
    initInnovationEffects();
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

// Inicializar animaciones de elementos
function initElementAnimations() {
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
    
    const elementsToAnimate = document.querySelectorAll(
        '.application-card, .innovation-card, .team-member, .roadmap-phase, .concept-section'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Configurar efectos de hover en tarjetas
function initCardEffects() {
    const cards = document.querySelectorAll('.application-card, .team-member');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            
            const icon = this.querySelector('.app-icon');
            if (icon) {
                icon.style.filter = 'drop-shadow(0 0 8px rgba(0, 243, 255, 0.7))';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            
            const icon = this.querySelector('.app-icon');
            if (icon) {
                icon.style.filter = '';
            }
        });
    });
}

// Efectos para la sección de innovación
function initInnovationEffects() {
    const innovationCards = document.querySelectorAll('.innovation-card');
    
    innovationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.innovation-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.boxShadow = '0 0 25px rgba(0, 243, 255, 0.4)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.innovation-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.boxShadow = '';
            }
        });
    });
}

// Efectos para la sección de roadmap
function initRoadmapEffects() {
    const roadmapPhases = document.querySelectorAll('.roadmap-phase');
    
    roadmapPhases.forEach(phase => {
        phase.addEventListener('mouseenter', function() {
            const number = this.querySelector('.phase-number');
            if (number) {
                number.style.color = 'rgba(0, 243, 255, 0.4)';
            }
        });
        
        phase.addEventListener('mouseleave', function() {
            const number = this.querySelector('.phase-number');
            if (number) {
                number.style.color = 'rgba(0, 243, 255, 0.2)';
            }
        });
    });
}

// Efectos para la sección de equipo
function initTeamEffects() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            const avatar = this.querySelector('.avatar-glow');
            if (avatar) {
                avatar.style.animation = 'avatar-glow 1s infinite alternate';
            }
        });
        
        member.addEventListener('mouseleave', function() {
            const avatar = this.querySelector('.avatar-glow');
            if (avatar) {
                avatar.style.animation = 'avatar-glow 4s infinite alternate';
            }
        });
    });
}

// Inicializar animación orbital
function initOrbitalAnimation() {
    console.log('Inicializando animación orbital mejorada...');
    
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

// Inicializar modales de aplicaciones (solo Fase 1)
function initAppModals() {
    const appCards = document.querySelectorAll('.application-card');
    const modal = document.querySelector('.app-modal');
    const modalClose = document.querySelector('.modal-close');
    
    // Datos de aplicaciones de Fase 1 (descripciones ampliadas)
    const appData = {
        tempo: {
            title: 'TEMPO',
            tagline: 'Sistema Operativo de Tu Tiempo',
            badge: 'Fase 1',
            icon: 'fas fa-clock',
            description: 'Gestión consciente del tiempo personal, en equipo y empresas. Crea listas de objetivos grupales, haz seguimiento de hábitos, organiza tu día y el de tu equipo. Todo en una interfaz intuitiva que prioriza tu bienestar sobre la productividad vacía.',
            features: ['Gestión de Tiempo', 'Objetivos en Grupo', 'Tracker de Hábitos', 'Calendario Compartido'],
            technical: 'Tempo es una aplicación integral para la gestión del tiempo que permite sincronizar tareas personales y profesionales. Incluye calendario inteligente, seguimiento de hábitos, y herramientas de colaboración para equipos. Los datos se almacenan localmente con opción de sincronización cifrada entre dispositivos.'
        },
        noema: {
            title: 'NOEMA',
            tagline: 'Santuario Digital Mental',
            badge: 'Fase 1',
            icon: 'fas fa-brain',
            description: 'Entrena tu mente con ejercicios cognitivos, meditación guiada y un diario personal. Fortalece capacidades como memoria, atención y creatividad. Conócete a ti mismo a través de tests de inteligencia y seguimiento de tu evolución mental.',
            features: ['Entrenamiento Cognitivo', 'Diario Personal', 'Meditación', 'Tests de IQ'],
            technical: 'Noema combina neurociencia y bienestar. Ofrece ejercicios personalizados para mejorar habilidades cognitivas, un diario con análisis de patrones emocionales y meditaciones guiadas. Todos los datos permanecen en tu dispositivo.'
        },
        vitalion: {
            title: 'VITALION',
            tagline: 'Arquitectura de Salud Integral',
            badge: 'Fase 1',
            icon: 'fas fa-heartbeat',
            description: 'Salud integral: entrenamiento personalizado y planes de alimentación adaptados a tus objetivos. Tu cuerpo como templo, no como métrica. Sigue tu progreso con IA local que ajusta rutinas según tu evolución.',
            features: ['Entrenamiento Personalizado', 'Nutrición Adaptativa', 'Seguimiento de Salud', 'Planes de Ejercicio'],
            technical: 'Vitalion utiliza IA local para crear rutinas de entrenamiento y nutrición que se adaptan a tu condición física y metas. No comparte datos con terceros. Integración opcional con wearables bajo tu control.'
        },
        olympus_social: {
            title: 'OLYMPUS',
            tagline: 'La Red Social que Mereces',
            badge: 'Fase 1',
            icon: 'fas fa-globe',
            description: 'Red social sana sin algoritmos adictivos. Prohibido el contenido generado por IA. Explora publicaciones tipo Reddit/Twitter, artículos científicos, cuentos, libros y reflexiones creados por usuarios. Los creadores ganan según interacciones. Personaliza la estética con temas de ilustradores y animadores profesionales. Sin Reels, sin manipulación, eres libre de indagar y leer.',
            features: ['Sin IA', 'Arte Visual', 'Artículos Científicos', 'Recompensas a Creadores'],
            technical: 'Olympus es una red social donde el contenido se muestra cronológicamente. Los usuarios pueden publicar textos, imágenes y artículos. Los temas visuales son creados por artistas y se pueden adquirir. No hay seguimiento ni venta de datos. Mensajería encriptada.'
        }
    };
    
    // Abrir modal al hacer clic en tarjeta o botón de expandir
    appCards.forEach(card => {
        const appId = card.getAttribute('data-app');
        const expandBtn = card.querySelector('.app-expand-btn');
        
        card.addEventListener('click', function(e) {
            if (e.target !== expandBtn && !expandBtn.contains(e.target)) {
                openModal(appId);
            }
        });
        
        expandBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openModal(appId);
        });
    });
    
    function openModal(appId) {
        const app = appData[appId];
        if (!app) return;
        
        document.querySelector('.modal-icon').innerHTML = `<i class="${app.icon}"></i>`;
        document.querySelector('.modal-title').textContent = app.title;
        document.querySelector('.modal-tagline').textContent = app.tagline;
        document.querySelector('.modal-badge').textContent = app.badge;
        document.querySelector('.modal-description').textContent = app.description;
        document.querySelector('.modal-technical').textContent = app.technical;
        
        const featuresContainer = document.querySelector('.modal-features');
        featuresContainer.innerHTML = '';
        app.features.forEach(feature => {
            const featureTag = document.createElement('span');
            featureTag.className = 'modal-feature-tag';
            featureTag.textContent = feature;
            featuresContainer.appendChild(featureTag);
        });
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Efectos en botones CTA
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('primary')) {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            } else {
                this.style.transform = 'translateY(-3px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

console.log('Tecnología - Vision Olympus lista');
