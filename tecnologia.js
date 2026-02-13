// tecnologia.js - Versión Mejorada

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vision Olympus - Tecnología cargada');
    
    // Inicializar funcionalidades
    initTechnologyPage();
    setupScrollEffects();
    createStellarField();
    initElementAnimations();
    initAppModals();
    initOrbitalAnimation(); // NUEVO: Inicializar animación orbital
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
    initInnovationEffects(); // NUEVO: Efectos para tarjetas de innovación
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

// Efectos para la sección de innovación - NUEVO
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
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
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

// Inicializar animación orbital MEJORADA - NUEVO: IGUAL AL DE FILOSOFÍA
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

// Inicializar modales de aplicaciones
function initAppModals() {
    const appCards = document.querySelectorAll('.application-card');
    const modal = document.querySelector('.app-modal');
    const modalClose = document.querySelector('.modal-close');
    
    // Datos de aplicaciones para los modales
    const appData = {
        tempo: {
            title: 'TEMPO',
            tagline: 'Sistema Operativo de Tu Tiempo',
            badge: 'Fase 1',
            icon: 'fas fa-clock',
            description: 'Control total de tu tiempo con notas, tracker de hábitos, calendario y gráficos de progreso para rutina diaria y uso profesional.',
            features: ['Gestión de Tiempo', 'Tracker de Hábitos', 'Calendario Inteligente', 'Gráficos de Progreso'],
            technical: 'Tempo es una aplicación integral para la gestión del tiempo que evolucionará desde un tracker de rutinas básico hasta un sistema completo de gestión del tiempo profesional. En sus primeras versiones incluirá funciones para hacer notas, seguimiento de hábitos, anotaciones en calendario y gráficos de progreso. Totalmente personalizable para adaptarse a las necesidades específicas de cada usuario, tanto para uso personal como profesional. La aplicación escalará progresivamente hasta convertirse en una herramienta completa de gestión del tiempo que incluye planificación de proyectos, seguimiento de objetivos y análisis de productividad avanzado.'
        },
        noema: {
            title: 'NOEMA',
            tagline: 'Santuario Digital Mental',
            badge: 'Fase 1',
            icon: 'fas fa-brain',
            description: 'Journaling avanzado y entrenamiento cerebral profesional que se adapta a tu progreso y gestiona tu estado de ánimo.',
            features: ['Journaling Avanzado', 'Entrenamiento Cerebral', 'Gestión de Estado de Ánimo', 'Adaptación al Progreso'],
            technical: 'Noema es una plataforma completa para la gestión seria de la mente que combina journaling avanzado con entrenamiento cerebral profesional. La aplicación incluye herramientas para gestionar el estado de ánimo, ejercicios cognitivos personalizados y seguimiento del progreso mental. Se adapta dinámicamente a la evolución del usuario, ofreciendo ejercicios y técnicas cada vez más avanzadas. Incluye análisis de patrones mentales, recomendaciones personalizadas y un sistema de alertas para identificar tendencias negativas. Diseñada para uso tanto personal como profesional, con enfoque en el desarrollo cognitivo a largo plazo.'
        },
        ecomyse: {
            title: 'ECOMYSE',
            tagline: 'Revolución Microeconómica',
            badge: 'Fase 1',
            icon: 'fas fa-coins',
            description: 'Gestión sencilla de finanzas personales: anota ganancias y gastos, planifica ahorros y recibe recomendaciones financieras.',
            features: ['Finanzas Personales', 'Planificación de Ahorros', 'Seguimiento de Gastos', 'Recomendaciones Financieras'],
            technical: 'Ecomyse revoluciona la gestión financiera personal con una interfaz intuitiva que permite registrar cada ganancia y gasto de forma sencilla. La aplicación incluye herramientas para planificar ahorros específicos, establecer metas financieras y recibir recomendaciones personalizadas para mejorar la salud económica. Ofrece análisis detallados de patrones de gasto, alertas inteligentes y pronósticos financieros. Perfecta para usuarios que buscan tener mayor control sobre sus finanzas sin complicaciones técnicas. La plataforma evolucionará para incluir inversiones básicas y herramientas de planificación fiscal.'
        },
        vitalion: {
            title: 'VITALION',
            tagline: 'Arquitectura de Salud Integral',
            badge: 'Fase 1',
            icon: 'fas fa-heartbeat',
            description: 'El templo de tu cuerpo: entrenamiento y alimentación personalizados con seguimiento completo para tu progreso físico.',
            features: ['Entrenamiento Personalizado', 'Alimentación Adaptativa', 'Seguimiento Completo', 'Análisis de Progreso'],
            technical: 'Vitalion es el centro de control definitivo para la salud física, funcionando como un templo digital para el cuerpo. Ofrece entrenamientos completamente personalizados basados en objetivos, condición física y disponibilidad. El sistema de alimentación se adapta a preferencias, restricciones y metas específicas. Incluye seguimiento detallado de métricas corporales, progreso de entrenamiento y adherencia nutricional. La aplicación utiliza algoritmos avanzados para ajustar automáticamente los planes según el progreso y feedback del usuario. Ideal tanto para principiantes como atletas avanzados que buscan optimizar su rendimiento físico.'
        },
        halo: {
            title: 'HALO',
            tagline: 'Comunicación Segura Unificada',
            badge: 'Fase 2',
            icon: 'fas fa-comments',
            description: 'Comunicación segura y personalizable con perfiles personal y profesional, interfaz sencilla y funciones todo-en-uno.',
            features: ['Comunicación Segura', 'Perfiles Múltiples', 'Interfaz Personalizable', 'Funciones Todo-en-Uno'],
            technical: 'Halo redefine la comunicación digital con un enfoque en la seguridad, privacidad y personalización. La aplicación permite crear perfiles separados para uso personal y profesional, con la capacidad de cambiar entre ellos fácilmente. Ofrece mensajería encriptada, videollamadas de alta calidad, compartimiento seguro de archivos y herramientas de colaboración. La interfaz es altamente personalizable, permitiendo a los usuarios adaptar la experiencia a sus preferencias. A diferencia de otras plataformas, Halo prioriza la privacidad del usuario sin comprometer la funcionalidad, eliminando algoritmos de recolección de datos y publicidad invasiva.'
        },
        academy: {
            title: 'OLYMPUS ACADEMY',
            tagline: 'Educación de Élite Accesible',
            badge: 'Fase 2',
            icon: 'fas fa-graduation-cap',
            description: 'La universidad del futuro: carreras prestigiosas con titulaciones de élite, educación online y salida laboral en Olympus.',
            features: ['Carreras Prestigiosas', 'Educación Online', 'Titulaciones de Élite', 'Salida Laboral Garantizada'],
            technical: 'Olympus Academy representa la evolución de la educación superior, ofreciendo carreras universitarias completas con titulaciones que tendrán mayor prestigio que cualquier universidad tradicional. La plataforma utiliza sistemas avanzados de verificación que hacen imposible las trampas, garantizando la integridad académica. Los programas están diseñados por expertos líderes en sus campos y combinan teoría con aplicación práctica intensiva. Los graduados tienen salida laboral directa en empresas del ecosistema Olympus, respaldados por la reputación de excelencia de la institución. La educación es completamente online pero mantiene estándares de calidad superiores a la educación presencial tradicional.'
        },
        astra: {
            title: 'ASTRA',
            tagline: 'Entretenimiento Democrático',
            badge: 'Fase 2',
            icon: 'fas fa-film',
            description: 'Plataforma de streaming con series, películas y documentales a $1 mensual, con oportunidades para pequeños productores.',
            features: ['Streaming Accesible', 'Apoyo a Productores', 'Contenido Diverso', 'Precio Democrático'],
            technical: 'Astra revoluciona la industria del entretenimiento con un modelo de negocio único: solo $1 mensual por acceso completo a todo el catálogo. La plataforma no solo ofrece series, películas y documentales, sino que también democratiza la producción de contenido. Cualquier persona con una cámara y una idea puede presentar su proyecto para financiación y distribución. Un equipo especializado evalúa las propuestas basándose en su calidad y potencial, no en conexiones o presupuesto. Los proyectos aprobados reciben financiación completa y los productores mantienen derechos significativos sobre su trabajo, pudiendo ganar miles de dólares por producciones exitosas. Astra elimina las barreras de entrada tradicionales de la industria.'
        },
        olympus: {
            title: 'OLYMPUS',
            tagline: 'Centro de Control Unificado',
            badge: 'Fase 2',
            icon: 'fas fa-tachometer-alt',
            description: 'Vista y acceso a todas las apps desde tu PC, centro de control avanzado conectado a tus apps móviles para gestión total.',
            features: ['Control Centralizado', 'Integración Total', 'Dashboard Personalizable', 'Sincronización en Tiempo Real'],
            technical: 'Olympus es el centro de control maestro del ecosistema Vision Olympus, diseñado específicamente para uso en computadoras de escritorio. La aplicación proporciona una vista unificada de todas las apps del ecosistema, permitiendo gestionar cada aspecto de tu vida personal y profesional desde un solo lugar. Se sincroniza perfectamente con las versiones móviles de las aplicaciones, ofreciendo una experiencia continua entre dispositivos. El dashboard es completamente personalizable, permitiendo a los usuarios organizar la información según sus prioridades. Incluye herramientas avanzadas de análisis, automatización de tareas y gestión de flujos de trabajo entre diferentes aplicaciones del ecosistema.'
        },
        atlas: {
            title: 'ATLAS AI',
            tagline: 'Asistente Inteligente Sin Límites',
            badge: 'Fase 3',
            icon: 'fas fa-robot',
            description: 'IA avanzada incluida sin coste en apps Olympus, asistente sin límites para tareas laborales y personales, en constante evolución.',
            features: ['IA Avanzada', 'Sin Límites de Uso', 'Integración Total', 'Evolución Continua'],
            technical: 'Atlas AI es el asistente de inteligencia artificial más avanzado del ecosistema Olympus, disponible sin costo adicional en todas las aplicaciones. A diferencia de otros asistentes IA que tienen límites de uso o planes de pago escalonados, Atlas ofrece capacidades ilimitadas para todos los usuarios. Puede ayudar con tareas que van desde redacción de informes profesionales hasta planificación personal, aprendizaje y resolución de problemas complejos. La IA evoluciona constantemente, aprendiendo de las interacciones con todos los usuarios para mejorar sus capacidades. El desarrollo de Atlas también impulsa avances en robótica y otras tecnologías del ecosistema Olympus, creando un ciclo virtuoso de innovación.'
        },
        aura: {
            title: 'AURA',
            tagline: 'Plataforma de Video Consciente',
            badge: 'Fase 3',
            icon: 'fas fa-play-circle',
            description: 'YouTube sin videos con IA, streaming, interfaz personalizable y controles de tiempo para evitar consumo excesivo de contenido.',
            features: ['Contenido Auténtico', 'Control de Tiempo', 'Interfaz Personalizable', 'Streaming de Calidad'],
            technical: 'Aura es la respuesta al "internet muerto" generado por contenido de IA, ofreciendo una plataforma de video donde solo se permite contenido creado por humanos. La aplicación incluye herramientas avanzadas de control de tiempo que permiten a los usuarios establecer límites diarios de consumo y recibir alertas cuando se acercan a ellos. La interfaz es altamente personalizable, adaptándose a las preferencias de visualización de cada usuario. Aura también ofrece funcionalidades de streaming en vivo y una comunidad enfocada en contenido de calidad y significado. La plataforma prioriza la experiencia del usuario sobre el engagement máximo, promoviendo un consumo consciente y saludable de contenido digital.'
        },
        robotika: {
            title: 'SOLARIS',
            tagline: 'Control Total de Robots y Hogar',
            badge: 'Fase 3',
            icon: 'fas fa-robot',
            description: 'Gestiona todos los robots y tecnología del hogar desde una sola app. Controla automatización, robots asistentes y sistemas inteligentes.',
            features: ['Control de Robots', 'Automatización Hogar', 'Sistemas Inteligentes', 'Gestión Centralizada'],
            technical: 'Solaris es la aplicación definitiva para el control y gestión de todos los dispositivos robóticos y sistemas de automatización del hogar equipados con tecnología Vision Olympus. Permite controlar desde robots asistentes domésticos hasta sistemas de seguridad automatizados, climatización inteligente y electrodomésticos conectados. La aplicación ofrece programación de rutinas personalizadas, monitorización en tiempo real de todos los dispositivos y alertas inteligentes. Robotika aprende de tus patrones de uso para optimizar automáticamente el funcionamiento de todos los sistemas, creando un entorno doméstico perfectamente adaptado a tus necesidades. Compatible con todos los productos de robótica y automatización desarrollados por Vision Olympus.'
        },
        terra: {
            title: 'TERRA',
            tagline: 'Plataforma de Viajes Inteligentes',
            badge: 'Fase 3',
            icon: 'fas fa-map-marked-alt',
            description: 'Planificación de viajes con recomendaciones personalizadas, reservas integradas y comunidad de viajeros con reviews auténticos.',
            features: ['Planificación Viajes', 'Recomendaciones Personalizadas', 'Reservas Integradas', 'Comunidad Viajera'],
            technical: 'Terra reinventa la experiencia de viajar combinando planificación inteligente con una comunidad auténtica de viajeros. La plataforma utiliza IA para crear itinerarios personalizados basados en intereses, presupuesto y estilo de viaje específicos de cada usuario. Integra reservas de vuelos, alojamiento, transporte y actividades en una experiencia sin fricciones. La comunidad de Terra se basa en reviews verificados y contenido genuino, eliminando recomendaciones pagadas o falsas. Incluye herramientas para viajeros frecuentes, nómadas digitales y aventureros ocasionales, con funcionalidades como presupuesto en tiempo real, traducción instantánea y asistencia 24/7.'
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
    
    // Función para abrir modal
    function openModal(appId) {
        const app = appData[appId];
        if (!app) return;
        
        // Llenar modal con datos
        document.querySelector('.modal-icon').innerHTML = `<i class="${app.icon}"></i>`;
        document.querySelector('.modal-title').textContent = app.title;
        document.querySelector('.modal-tagline').textContent = app.tagline;
        document.querySelector('.modal-badge').textContent = app.badge;
        document.querySelector('.modal-description').textContent = app.description;
        document.querySelector('.modal-technical').textContent = app.technical;
        
        // Limpiar y llenar características
        const featuresContainer = document.querySelector('.modal-features');
        featuresContainer.innerHTML = '';
        app.features.forEach(feature => {
            const featureTag = document.createElement('span');
            featureTag.className = 'modal-feature-tag';
            featureTag.textContent = feature;
            featuresContainer.appendChild(featureTag);
        });
        
        // Mostrar modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
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
    
    // Cerrar modal con tecla Escape
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

console.log('Tecnología - Vision Olympus lista');
