// unete.js - Versión Mejorada (sin portafolio, hero de filosofía) con toast para redes

document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciando sección Únete mejorada...');
    
    initJoinPage();
    setupScrollEffects();
    setupFormInteractions();
    createStellarField();
    initElementAnimations();
    initOrbitalAnimation();
    
    // Inicializar el toast para redes sociales
    initSocialToast();
});

function initJoinPage() {
    console.log('Configurando página Únete mejorada...');
    initProgressBar();
    initHoverEffects();
}

function initProgressBar() {
    const progressBar = document.querySelector('.reading-progress');
    
    function updateProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = `${progress}%`;
        
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

function initHoverEffects() {
    const cards = document.querySelectorAll('.process-step');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            const icon = this.querySelector('.step-icon');
            if (icon) icon.style.filter = 'drop-shadow(0 0 8px rgba(0, 243, 255, 0.7))';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            const icon = this.querySelector('.step-icon');
            if (icon) icon.style.filter = '';
        });
    });
}

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

function setupFormInteractions() {
    const form = document.getElementById('cyber-form');
    const submitBtn = form.querySelector('.submit-button');
    
    const inputs = document.querySelectorAll('.cyber-input, .cyber-select, .cyber-textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
        
        input.addEventListener('input', function() {
            validateField(this);
        });
    });
    
    submitBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
        this.style.boxShadow = '0 8px 25px rgba(0, 243, 255, 0.4)';
    });
    
    submitBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            showFormMessage('Por favor, completa todos los campos requeridos correctamente.', 'error');
            return;
        }
        
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ENVIANDO...';
        submitBtn.disabled = true;
        
        const fechaField = document.createElement('input');
        fechaField.type = 'hidden';
        fechaField.name = 'fecha';
        fechaField.value = new Date().toLocaleString('es-ES');
        form.appendChild(fechaField);
        
        emailjs.sendForm(
            'service_visionolympus',
            'template_e88152r',
            form
        )
        .then(function(response) {
            console.log('✅ Email enviado:', response);
            form.style.display = 'none';
            const successMessage = document.getElementById('success-message');
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.opacity = '1';
                successMessage.style.transform = 'translateY(0)';
            }, 10);
        }, function(error) {
            console.error('❌ Error enviando email:', error);
            showFormMessage('Error al enviar la solicitud. Por favor, intenta nuevamente.', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
}

function validateField(field) {
    const parent = field.parentElement;
    if (field.checkValidity()) {
        parent.classList.remove('invalid');
        parent.classList.add('valid');
    } else {
        parent.classList.remove('valid');
        parent.classList.add('invalid');
    }
}

function validateForm() {
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.checkValidity()) {
            isValid = false;
            field.parentElement.classList.add('invalid');
        }
    });
    
    const termsCheckbox = document.querySelector('#terminos');
    if (!termsCheckbox.checked) {
        isValid = false;
        termsCheckbox.parentElement.classList.add('invalid');
    }
    
    return isValid;
}

function showFormMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();
    
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-family: 'Exo 2', sans-serif;
        font-size: 0.9rem;
        z-index: 1000;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        ${type === 'error' ? 
            'background: linear-gradient(135deg, rgba(255, 107, 107, 0.9), rgba(238, 90, 82, 0.9));' : 
            'background: linear-gradient(135deg, rgba(0, 243, 255, 0.9), rgba(255, 0, 255, 0.9));'
        }
    `;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
        messageEl.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => messageEl.remove(), 300);
    }, 5000);
}

// Resetear formulario después de éxito
window.resetForm = function() {
    const form = document.getElementById('cyber-form');
    const successMessage = document.getElementById('success-message');
    
    form.reset();
    form.style.display = 'block';
    successMessage.style.display = 'none';
    
    const submitBtn = form.querySelector('.submit-button');
    submitBtn.innerHTML = 'ENVIAR SOLICITUD';
    submitBtn.disabled = false;
    
    const formFields = form.querySelectorAll('.form-field');
    formFields.forEach(field => {
        field.classList.remove('valid', 'invalid');
    });
};

function createStellarField() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 100; i++) {
        createStar(particlesContainer, i);
    }
}

function createStar(container, index) {
    const star = document.createElement('div');
    star.classList.add('particle');
    
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 3 + 0.5;
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
        '.process-step, .cyber-form, .hero-text'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(20px)';
        successMessage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
}

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

// Función para el toast de redes sociales
function initSocialToast() {
    const socialLinks = document.querySelectorAll('.social-link');
    const toast = document.getElementById('social-toast');
    
    if (!toast) return;
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el comportamiento por defecto (scroll hacia arriba)
            
            // Mostrar el toast
            toast.classList.add('show');
            
            // Ocultar después de 3 segundos
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    });
}

// Estilos adicionales inyectados (para validación, etc.)
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .form-field.valid .cyber-input,
    .form-field.valid .cyber-select,
    .form-field.valid .cyber-textarea {
        border-color: var(--nova-green);
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
    }
    .form-field.invalid .cyber-input,
    .form-field.invalid .cyber-select,
    .form-field.invalid .cyber-textarea {
        border-color: #ff6b6b;
        box-shadow: 0 0 10px rgba(255, 107, 107, 0.2);
    }
    .terms-agreement.invalid .terms-label {
        color: #ff6b6b;
    }
    .submit-button:focus {
        animation: pulse-glow 1.5s infinite;
    }
    @keyframes pulse-glow {
        0% { box-shadow: 0 0 5px rgba(0, 243, 255, 0.5); }
        50% { box-shadow: 0 0 20px rgba(0, 243, 255, 0.8); }
        100% { box-shadow: 0 0 5px rgba(0, 243, 255, 0.5); }
    }
`;
document.head.appendChild(style);

console.log('Únete - Vision Olympus mejorada cargada correctamente');
