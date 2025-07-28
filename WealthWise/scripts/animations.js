// Generate geometric grid with dots
function createGrid() {
    const grid = document.getElementById('grid');
    if (!grid) return; // Safety check
    
    // Clear existing dots
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    
    // Create 100 random dots
    for (let i = 0; i < 100; i++) {
        const dot = document.createElement('div');
        dot.classList.add('grid-dot');
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        grid.appendChild(dot);
    }
}

// Initialize floating shapes with more noticeable animation
function initFloatingShapes() {
    const motionPath = document.querySelector('.motion-path');
    if (!motionPath) return; // Safety check
    
    // Clear existing shapes
    while (motionPath.firstChild) {
        motionPath.removeChild(motionPath.firstChild);
    }
    
    // Create floating shapes with different colors, sizes, and delays
    for (let i = 0; i < 5; i++) { // Increased to 5 shapes
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        
        // Random size between 60px and 120px
        const size = 60 + Math.random() * 60;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        
        // Random colors
        const colors = ['#0029a8', '#cc0ce7', '#30cec4', '#ddcb6e', '#e97055'];
        shape.style.backgroundColor = colors[i % colors.length];
        
        // Different animation delays
        shape.style.animationDelay = `${-i * 3}s`;
        
        // Increased opacity for visibility
        shape.style.opacity = '0.7';
        
        motionPath.appendChild(shape);
    }
}

// Add pulse animation to grid dots for more visible effect
function enhanceGridDots() {
    const dots = document.querySelectorAll('.grid-dot');
    dots.forEach((dot, index) => {
        // Add pulsing effect to some dots
        if (index % 3 === 0) {
            dot.style.animation = 'pulse 3s infinite';
            dot.style.animationDelay = `${Math.random() * 2}s`;
        }
    });
    
    // Add pulse animation if it doesn't exist
    if (!document.getElementById('pulse-animation')) {
        const style = document.createElement('style');
        style.id = 'pulse-animation';
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.1; }
                50% { transform: scale(2); opacity: 0.5; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Setup motion toggle with improved functionality
function setupMotionToggle() {
    const motionToggle = document.getElementById('motionToggle');
    if (!motionToggle) return; // Safety check
    
    const motionElements = document.querySelectorAll('.floating-shape');
    let isPlaying = true;
    
    // Make toggle button more visible
    motionToggle.style.backgroundColor = '#fd79a8';
    motionToggle.style.width = '60px';
    motionToggle.style.height = '60px';
    motionToggle.style.fontSize = '1.5rem';
    
    motionToggle.addEventListener('click', function() {
        isPlaying = !isPlaying;
        
        motionElements.forEach(el => {
            el.style.animationPlayState = isPlaying ? 'running' : 'paused';
        });
        
        // Update icon
        motionToggle.innerHTML = isPlaying ? 
            '<i class="bi bi-pause"></i>' : 
            '<i class="bi bi-play"></i>';
    });
}

// Initialize all animations with a verification message
function initAnimations() {
    console.log("Animations initializing...");
    
    createGrid();
    initFloatingShapes();
    enhanceGridDots();
    setupMotionToggle();
    
    console.log("Animations should now be visible!");
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, starting animations");
    initAnimations();
});

// Add a verification function to check after 2 seconds
setTimeout(function() {
    const shapes = document.querySelectorAll('.floating-shape');
    console.log(`Found ${shapes.length} floating shapes on the page`);
    
    if (shapes.length === 0) {
        console.error("No floating shapes found! Check if animations.js is properly linked.");
    }
}, 2000);