// tecnologia.js - Versión Corregida con nuevos datos de apps

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vision Olympus - Tecnología cargada');
    
    // Inicializar funcionalidades
    initTechnologyPage();
    setupScrollEffects();
    createStellarField();
    initElementAnimations();
    initAppModals();
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
        '.application-card, .innovation-card, .team-member, .roadmap-phase'
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

// Inicializar modales de aplicaciones
function initAppModals() {
    const appCards = document.querySelectorAll('.application-card');
    const modal = document.querySelector('.app-modal');
    const modalClose = document.querySelector('.modal-close');
    
    // Datos de aplicaciones actualizados
    const appData = {
        tempo: {
            title: 'TEMPO',
            tagline: 'Sistema Operativo de Tu Tiempo',
            badge: 'Fase 1',
            icon: 'fas fa-clock',
            description: 'Gestión consciente del tiempo. Productividad con sentido, no vacía. Para personas, equipos y empresas.',
            features: ['Gestión de Tiempo', 'Productividad Consciente', 'Calendario', 'Gráficos de Progreso'],
            technical: 'Tempo es una aplicación integral para la gestión del tiempo que prioriza el bienestar sobre la productividad vacía. Incluye calendario inteligente, seguimiento de hábitos y análisis de cómo inviertes tu tiempo. Diseñada para ayudarte a enfocarte en lo que realmente importa, sin caer en la trampa de la productividad tóxica. Los datos se almacenan localmente con opción de sincronización cifrada entre dispositivos.'
        },
        noema: {
            title: 'NOEMA',
            tagline: 'Santuario Digital Mental',
            badge: 'Fase 1',
            icon: 'fas fa-brain',
            description: 'Entrena tu mente: meditación, diario, test de IQ y capacidades cognitivas. Conócete a ti mismo.',
            features: ['Entrenamiento Mental', 'Diario Personal', 'Test Cognitivos', 'Meditación Guiada'],
            technical: 'Noema combina journaling avanzado con ejercicios de neuroplasticidad. La app aprende de tus patrones emocionales y cognitivos para ofrecerte ejercicios personalizados. Todos los datos permanecen en tu dispositivo, garantizando privacidad total. Incluye recordatorios conscientes y análisis de progreso a largo plazo.'
        },
        vitalion: {
            title: 'VITALION',
            tagline: 'Arquitectura de Salud Integral',
            badge: 'Fase 1',
            icon: 'fas fa-heartbeat',
            description: 'Salud integral: entrenamiento, nutrición, seguimiento. Tu cuerpo como templo, no como métrica.',
            features: ['Entrenamiento Personalizado', 'Nutrición Adaptativa', 'Seguimiento de Salud', 'Análisis de Progreso'],
            technical: 'Vitalion ofrece planes de entrenamiento y nutrición que se adaptan a tus objetivos y condición física. Utiliza IA local para ajustar las rutinas según tu evolución. No comparte datos con terceros. Integración opcional con wearables (datos siempre bajo tu control).'
        },
        olympus_social: {
            title: 'OLYMPUS (Red Social)',
            tagline: 'La Red Social que Mereces',
            badge: 'Fase 1',
            icon: 'fas fa-globe',
            description: 'Estética cuidada, fondos de artistas, sin algoritmos adictivos. Conecta de verdad, sin ser el producto.',
            features: ['Sin Algoritmos', 'Comunidad Real', 'Arte en Fondos', 'Privacidad Total'],
            technical: 'Olympus es una red social donde el contenido se muestra cronológicamente, sin manipulaciones. Los artistas pueden vender sus fondos directamente. No hay seguimiento de usuarios ni venta de datos. Mensajería encriptada y perfiles personalizables. Pensada para fomentar conexiones auténticas.'
        },
        // Fase 2: Olympus Academy (cuatro variantes)
        academy_carreras: {
            title: 'OLYMPUS ACADEMY',
            tagline: 'Carreras de Prestigio Global',
            badge: 'Fase 2',
            icon: 'fas fa-graduation-cap',
            description: 'Carreras universitarias con títulos validados por tu país y reconocimiento internacional. Las más prestigiosas del mundo.',
            features: ['Títulos Oficiales', 'Prestigio Global', 'Reconocimiento Internacional', 'Acreditación Estatal'],
            technical: 'Olympus Academy ofrece programas de grado y posgrado diseñados en colaboración con las mejores universidades del mundo. Los títulos son validados por los ministerios de educación de cada país, garantizando su validez oficial. El plan de estudios es riguroso y actualizado constantemente por expertos de cada disciplina.'
        },
        academy_cert: {
            title: 'OLYMPUS ACADEMY',
            tagline: 'Certificaciones de Élite',
            badge: 'Fase 2',
            icon: 'fas fa-certificate',
            description: 'Certificaciones profesionales con validez en cualquier país. Avaladas por las mejores instituciones.',
            features: ['Certificaciones', 'Reconocimiento Mundial', 'Aval Internacional', 'Especializaciones'],
            technical: 'Las certificaciones de Olympus Academy son reconocidas por empresas y gobiernos de todo el mundo. Cada certificación implica exámenes supervisados y proyectos prácticos que demuestran la competencia del alumno. Son ideales para profesionales que buscan destacar en su campo.'
        },
        academy_examenes: {
            title: 'OLYMPUS ACADEMY',
            tagline: 'Exámenes de Élite',
            badge: 'Fase 2',
            icon: 'fas fa-pencil-alt',
            description: 'Sistema de evaluación riguroso que garantiza la excelencia. Imposible de fraudes, con supervisión avanzada.',
            features: ['Exámenes Seguros', 'Supervisión IA', 'Anti-fraude', 'Evaluación Continua'],
            technical: 'El sistema de exámenes utiliza inteligencia artificial y supervisión remota para garantizar la integridad académica. Las pruebas son adaptativas y se realizan en entornos controlados. Los resultados son inmediatos y se emiten certificados digitales con firma electrónica verificable.'
        },
        academy_empleo: {
            title: 'OLYMPUS ACADEMY',
            tagline: 'Empleo Prioritario',
            badge: 'Fase 2',
            icon: 'fas fa-briefcase',
            description: 'Los graduados tienen prioridad para ser empleados en todas las empresas del ecosistema Olympus. Tu futuro asegurado.',
            features: ['Bolsa de Trabajo', 'Prioridad Olympus', 'Networking Exclusivo', 'Orientación Laboral'],
            technical: 'Los graduados de Olympus Academy pasan a formar parte de una bolsa de trabajo exclusiva. Las empresas del ecosistema Olympus (y colaboradoras) tienen acceso prioritario a estos perfiles. Además, se ofrecen servicios de orientación profesional y preparación de entrevistas.'
        },
        // Fase 3: Robótica y tecnología futurista
        atlas: {
            title: 'ATLAS AI',
            tagline: 'IA Local y Privada',
            badge: 'Fase 3',
            icon: 'fas fa-robot',
            description: 'Asistente de inteligencia artificial que funciona sin conexión a servidores. Tus datos nunca salen de tu dispositivo.',
            features: ['IA Local', 'Privacidad Total', 'Sin Conexión', 'Personalizable'],
            technical: 'Atlas es un asistente de IA que se ejecuta completamente en tu dispositivo. No requiere conexión a internet para funcionar, garantizando que tus conversaciones y datos nunca sean compartidos. Puede ayudarte con tareas, recordatorios, generación de contenido y más. Aprende de tus patrones de uso de forma privada.'
        },
        solaris: {
            title: 'SOLARIS',
            tagline: 'Control de Robots y Hogar',
            badge: 'Fase 3',
            icon: 'fas fa-microchip',
            description: 'Gestiona robots y dispositivos del hogar sin conexión a la nube. Todo queda en tu red local. Tuyo de verdad.',
            features: ['Control Local', 'Sin Telemetría', 'Automatización', 'Privacidad'],
            technical: 'Solaris te permite controlar todos tus dispositivos inteligentes (robots, luces, termostatos) sin pasar por servidores externos. La comunicación es local y encriptada. Puedes crear automatizaciones complejas que se ejecuten sin depender de internet. Compatible con estándares abiertos.'
        },
        aura: {
            title: 'AURA',
            tagline: 'Video Consciente y Privado',
            badge: 'Fase 3',
            icon: 'fas fa-play-circle',
            description: 'Plataforma de video sin recomendaciones adictivas, sin seguimiento. Contenido que suma, no que engancha.',
            features: ['Sin Adicción', 'Privacidad', 'Contenido Auténtico', 'Control de Tiempo'],
            technical: 'Aura es una plataforma de video donde el contenido es creado exclusivamente por humanos. No hay recomendaciones automáticas; tú eliges lo que ver. Incluye límites de tiempo configurables y estadísticas de consumo. Los creadores reciben una compensación justa basada en visualizaciones reales.'
        },
        terra: {
            title: 'TERRA',
            tagline: 'Viajes Inteligentes y Privados',
            badge: 'Fase 3',
            icon: 'fas fa-map-marked-alt',
            description: 'Planificación de viajes con IA local, recomendaciones sin rastreo. Comunidad de viajeros auténticos.',
            features: ['Sin Rastreo', 'Recomendaciones Locales', 'Comunidad', 'Privacidad'],
            technical: 'Terra te ayuda a planificar viajes utilizando datos descargados y procesados localmente. No rastrea tu ubicación ni compra datos con terceros. Las recomendaciones provienen de una comunidad de viajeros verificados. Puedes sincronizar tus planes entre dispositivos de forma cifrada.'
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
