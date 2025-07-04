import './screenshots.js';

// Data visualization for hero section
const createHeroViz = () => {
    const heroImage = document.querySelector('.hero-image');
    if (!heroImage) return;

    // Simulated fermentation data
    const data = {
        days: Array.from({length: 14}, (_, i) => i + 1),
        ph: [6.2, 5.8, 5.3, 4.9, 4.5, 4.2, 4.0, 3.8, 3.7, 3.6, 3.5, 3.4, 3.4, 3.3],
        temp: [22, 22, 21.8, 21.9, 22.1, 22, 21.9, 22, 22.1, 22, 21.8, 21.9, 22, 22]
    };

    // Create canvas for visualization
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    heroImage.appendChild(canvas);

    // Animation logic will go here
    // We'll add chart.js or d3.js integration later
};

// Interactive data cards
const createDataCards = () => {
    const dataGrid = document.querySelector('.data-grid');
    if (!dataGrid) return;

    const recipes = [
        {
            name: 'Classic Sauerkraut',
            ph: 4.2,
            temp: 22,
            day: '5/14'
        },
        {
            name: 'Spicy Kimchi',
            ph: 3.8,
            temp: 23,
            day: '8/14'
        },
        {
            name: 'Kombucha Brew',
            ph: 3.2,
            temp: 24,
            day: '12/14'
        }
    ];

    // Clear placeholder
    dataGrid.innerHTML = '';

    // Create cards
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'data-card';
        card.innerHTML = `
            <h4 style="margin-bottom: 1rem; font-family: 'Space Grotesk'">${recipe.name}</h4>
            <div class="measurement">
                <span class="measurement-label">pH</span>
                <span class="measurement-value">${recipe.ph}</span>
            </div>
            <div class="measurement">
                <span class="measurement-label">Temp</span>
                <span class="measurement-value">${recipe.temp}°C</span>
            </div>
            <div class="measurement">
                <span class="measurement-label">Day</span>
                <span class="measurement-value">${recipe.day}</span>
            </div>
        `;
        dataGrid.appendChild(card);
    });
};

// Smooth scroll for navigation
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Intersection Observer for fade-in animations
const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.feature-card, .data-card, .section-header').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createHeroViz();
    createDataCards();
    initSmoothScroll();
    initScrollAnimations();
});

// Add CSS class for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style); 