// preguntas-frecuentes.js - Funcionalidades para FAQ

document.addEventListener('DOMContentLoaded', function() {
    console.log('Vision Olympus - FAQ cargada');
    
    // Inicializar funcionalidades
    initFAQPage();
    setupScrollEffects();
    createStellarField();
    initFAQAccordion();
    initSearchFunctionality();
    initCategoryNavigation();
    initContactForm();
    initContactSupportButton();
});

// Inicializar la página de FAQ
function initFAQPage() {
    console.log('Configurando página de preguntas frecuentes...');
    
    // Inicializar barra de progreso
    initProgressBar();
    
    // Inicializar efectos de hover
    initCardEffects();
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
    const cards = document.querySelectorAll('.category-card, .stat-card, .contact-method');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.category-icon, .stat-icon, i');
            if (icon) {
                if (icon.classList.contains('category-icon')) {
                    icon.style.transform = 'scale(1.1)';
                    icon.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.4)';
                } else {
                    icon.style.filter = 'drop-shadow(0 0 8px rgba(0, 243, 255, 0.7))';
                }
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.category-icon, .stat-icon, i');
            if (icon) {
                if (icon.classList.contains('category-icon')) {
                    icon.style.transform = 'scale(1)';
                    icon.style.boxShadow = '';
                } else {
                    icon.style.filter = '';
                }
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

// Inicializar acordeón de FAQ
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Cerrar todos los demás items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar el item actual
            item.classList.toggle('active');
        });
    });
}

// Funcionalidad de búsqueda
function initSearchFunctionality() {
    const searchInput = document.getElementById('faq-search');
    const searchResults = document.querySelector('.search-results');
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (!searchInput) return;
    
    // Datos de búsqueda
    const searchData = [];
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question span').textContent;
        const answer = item.querySelector('.faq-answer p').textContent;
        const category = item.closest('.faq-category').getAttribute('data-category');
        
        searchData.push({
            question,
            answer: answer.substring(0, 150) + '...', // Preview corto
            element: item,
            category
        });
    });
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = searchData.filter(item => 
            item.question.toLowerCase().includes(query) || 
            item.answer.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <strong>${result.question}</strong>
                    <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 5px;">${result.answer}</div>
                `;
                
                resultItem.addEventListener('click', function() {
                    // Cerrar todos los acordeones
                    faqItems.forEach(item => item.classList.remove('active'));
                    
                    // Abrir el resultado encontrado
                    result.element.classList.add('active');
                    
                    // Scroll a la pregunta
                    result.element.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                    
                    // Resaltar la pregunta
                    result.element.style.animation = 'highlight 2s ease';
                    setTimeout(() => {
                        result.element.style.animation = '';
                    }, 2000);
                    
                    // Limpiar búsqueda
                    searchInput.value = '';
                    searchResults.style.display = 'none';
                });
                
                searchResults.appendChild(resultItem);
            });
            
            searchResults.style.display = 'block';
        } else {
            const noResults = document.createElement('div');
            noResults.className = 'search-result-item';
            noResults.textContent = 'No se encontraron resultados';
            searchResults.appendChild(noResults);
            searchResults.style.display = 'block';
        }
    });
    
    // Cerrar resultados al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

// Navegación por categorías
function initCategoryNavigation() {
    const categoryCards = document.querySelectorAll('.category-card');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Encontrar la categoría correspondiente
            const targetCategory = Array.from(faqCategories).find(
                cat => cat.getAttribute('data-category') === category
            );
            
            if (targetCategory) {
                // Scroll a la categoría
                targetCategory.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                
                // Resaltar la categoría
                targetCategory.style.animation = 'highlight 2s ease';
                setTimeout(() => {
                    targetCategory.style.animation = '';
                }, 2000);
            }
        });
    });
}

// Inicializar formulario de contacto
function initContactForm() {
    const contactForm = document.getElementById('question-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            category: document.getElementById('category').value,
            question: document.getElementById('question').value
        };
        
        // Validación básica
        if (!formData.name || !formData.email || !formData.category || !formData.question) {
            showNotification('Por favor, completa todos los campos', 'error');
            return;
        }
        
        // Simular envío (en un caso real, aquí iría una petición AJAX)
        console.log('Formulario enviado:', formData);
        
        // Mostrar confirmación
        showNotification('Tu pregunta ha sido enviada. Te responderemos en menos de 24 horas.', 'success');
        
        // Resetear formulario
        contactForm.reset();
    });
}

// Inicializar botón de contacto de soporte
function initContactSupportButton() {
    const contactSupportBtn = document.getElementById('contact-support-btn');
    
    if (!contactSupportBtn) return;
    
    contactSupportBtn.addEventListener('click', function() {
        // Desplazar suavemente a la sección de contacto
        const contactSection = document.getElementById('contact-form-section');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            // Resaltar la sección de contacto
            contactSection.style.animation = 'highlight 2s ease';
            setTimeout(() => {
                contactSection.style.animation = '';
            }, 2000);
        }
    });
}

// Mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
        border: 1px solid ${type === 'success' ? 'var(--nova-green)' : 'var(--pulsar-pink)'};
        color: var(--stellar-white);
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 10000;
        backdrop-filter: blur(10px);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-eliminar después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Animación de resaltado
const style = document.createElement('style');
style.textContent = `
    @keyframes highlight {
        0% { background-color: transparent; }
        50% { background-color: rgba(0, 243, 255, 0.2); }
        100% { background-color: transparent; }
    }
`;
document.head.appendChild(style);

console.log('FAQ - Vision Olympus lista');
