document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();

    // Setup motion toggle
    let motionEnabled = true;
    const toggleButton = document.getElementById('motionToggle');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            motionEnabled = !motionEnabled;
            const state = motionEnabled ? 'running' : 'paused';
            
            document.querySelectorAll('.floating-shape').forEach(el => {
                el.style.animationPlayState = state;
            });
            
            toggleButton.innerHTML = motionEnabled ? 
                '<i class="bi bi-pause"></i>' : 
                '<i class="bi bi-play"></i>';
        });
    }
});

// Create grid
function initAnimations() {
    createGrid();
}

function createGrid() {
    const grid = document.getElementById('grid');
    if (grid) {
        for (let i = 0; i < 100; i++) {
            const dot = document.createElement('div');
            dot.classList.add('grid-dot');
            dot.style.left = Math.random() * 100 + '%';
            dot.style.top = Math.random() * 100 + '%';
            grid.appendChild(dot);
        }
    }
}