// Enhanced JavaScript for Reet Poetry Website with Elemental Interactions
document.addEventListener('DOMContentLoaded', function() {
    const toggleOverlay = document.getElementById('toggleOverlay');
    const bookOpening = document.getElementById('bookOpening');
    const mainContent = document.getElementById('mainContent');
    
    // Elemental slideshow sequence (2s transitions)
    setTimeout(() => {
        // Hide toggle overlay with fade out
        if (toggleOverlay) {
            toggleOverlay.style.animation = 'toggleOut 2s ease-in-out forwards';
            setTimeout(() => {
                toggleOverlay.style.display = 'none';
            }, 2000);
        }
        
        // Show book opening animation
        if (bookOpening) {
            bookOpening.style.display = 'flex';
        }
        
        // Remove book opening animation after it completes (2s)
        setTimeout(() => {
            if (bookOpening) {
                bookOpening.style.display = 'none';
            }
            
            // Show main content with fade in
            if (mainContent) {
                mainContent.style.opacity = '0';
                mainContent.style.display = 'block';
                setTimeout(() => {
                    mainContent.style.animation = 'fadeIn 2s ease-in-out forwards';
                }, 200);
            }
        }, 2000); // 2s
        
    }, 2000); // 2s
    
    // Wind effect on click
    document.addEventListener('click', function(e) {
        createWindEffect(e.clientX, e.clientY);
    });
    
    // Elemental interactions
    setupElementalInteractions();
    
    // Initialize geometrical pen and tears rain
    initGeometricalPen();
    initTearsRain();
});

// Create wind particles
function createWindEffect(x, y) {
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'wind-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDelay = (i * 0.1) + 's';
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 3000);
    }
}

// Setup elemental interactions
function setupElementalInteractions() {
    // Add elemental classes to different sections
    const sections = document.querySelectorAll('section');
    const elements = ['element-earth', 'element-water', 'element-fire', 'element-air', 'element-ether'];
    
    sections.forEach((section, index) => {
        section.classList.add(elements[index % elements.length]);
    });
    
    // Add hover effects for poem cards
    const poemCards = document.querySelectorAll('.poem-card');
    poemCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const theme = this.getAttribute('data-theme');
            addElementalEffect(this, theme);
        });
        
        card.addEventListener('mouseleave', function() {
            removeElementalEffect(this);
        });
    });
    
    // Add click effects for navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            createWindEffect(e.clientX, e.clientY);
            addElementalTransition(this);
        });
    });
}

// Add elemental effect to elements
function addElementalEffect(element, theme) {
    const effects = {
        'love': 'fire',
        'grief': 'water',
        'hope': 'air',
        'nature': 'earth',
        'spiritual': 'ether'
    };
    
    const elementType = effects[theme] || 'air';
    element.style.transform = 'scale(1.02)';
    element.style.boxShadow = `0 10px 30px rgba(0,0,0,0.2), 0 0 20px ${getElementalColor(elementType)}`;
}

// Remove elemental effect
function removeElementalEffect(element) {
    element.style.transform = '';
    element.style.boxShadow = '';
}

// Add elemental transition
function addElementalTransition(element) {
    element.style.transition = 'all 0.3s ease';
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        element.style.transform = '';
    }, 150);
}

// Get elemental colors
function getElementalColor(element) {
    const colors = {
        'earth': 'rgba(139, 69, 19, 0.3)',
        'water': 'rgba(70, 130, 180, 0.3)',
        'fire': 'rgba(255, 69, 0, 0.3)',
        'air': 'rgba(135, 206, 235, 0.3)',
        'ether': 'rgba(147, 112, 219, 0.3)'
    };
    return colors[element] || 'rgba(135, 206, 235, 0.3)';
}

// Initialize geometrical pen
function initGeometricalPen() {
    const pen = document.querySelector('.geometrical-pen');
    if (!pen) return;
    
    // Add pen writing effect on click
    document.addEventListener('click', function(e) {
        createPenTrail(e.clientX, e.clientY);
    });
    
    // Add pen glow effect on hover
    pen.addEventListener('mouseenter', function() {
        this.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
    });
    
    pen.addEventListener('mouseleave', function() {
        this.style.filter = 'none';
    });
}

// Create pen trail effect
function createPenTrail(x, y) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.width = '2px';
    trail.style.height = '20px';
    trail.style.background = 'rgba(44, 62, 80, 0.8)';
    trail.style.borderRadius = '1px';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9997';
    trail.style.transform = 'rotate(' + (Math.random() * 30 - 15) + 'deg)';
    trail.style.animation = 'penTrail 2s ease-out forwards';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
        }
    }, 2000);
}

// Initialize tears rain (startup only)
function initTearsRain() {
    const tearsRain = document.getElementById('tearsRain');
    if (!tearsRain) return;
    
    // Show tears rain during startup
    tearsRain.style.display = 'block';
    
    // Create tears for 3 seconds
    const tearInterval = setInterval(() => {
        createTearDrop(tearsRain);
    }, 100);
    
    // Stop tears after 3 seconds
    setTimeout(() => {
        clearInterval(tearInterval);
        tearsRain.style.display = 'none';
    }, 3000);
}

// Create tear drop
function createTearDrop(container) {
    const tear = document.createElement('div');
    tear.className = 'tear-drop';
    tear.style.left = Math.random() * 100 + '%';
    tear.style.animationDelay = Math.random() * 2 + 's';
    tear.style.animationDuration = (2 + Math.random() * 2) + 's';
    container.appendChild(tear);
    
    // Remove tear after animation
    setTimeout(() => {
        if (tear.parentNode) {
            tear.parentNode.removeChild(tear);
        }
    }, 5000);
}

// Add toggle out animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes toggleOut {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.5;
            transform: scale(1.1);
        }
        100% {
            opacity: 0;
            transform: scale(0.8);
        }
    }
    
    /* Enhanced elemental animations */
    .element-earth:hover {
        background: linear-gradient(135deg, rgba(139, 69, 19, 0.2) 0%, rgba(160, 82, 45, 0.2) 50%, rgba(205, 133, 63, 0.2) 100%);
    }
    
    .element-water:hover {
        background: linear-gradient(135deg, rgba(70, 130, 180, 0.2) 0%, rgba(135, 206, 235, 0.2) 50%, rgba(224, 246, 255, 0.2) 100%);
    }
    
    .element-fire:hover {
        background: linear-gradient(135deg, rgba(255, 69, 0, 0.2) 0%, rgba(255, 99, 71, 0.2) 50%, rgba(255, 215, 0, 0.2) 100%);
    }
    
    .element-air:hover {
        background: linear-gradient(135deg, rgba(135, 206, 235, 0.2) 0%, rgba(240, 248, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 100%);
    }
    
    .element-ether:hover {
        background: linear-gradient(135deg, rgba(147, 112, 219, 0.2) 0%, rgba(221, 160, 221, 0.2) 50%, rgba(240, 230, 255, 0.2) 100%);
    }
`;
document.head.appendChild(style); 