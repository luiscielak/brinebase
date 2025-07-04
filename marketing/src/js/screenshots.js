// Function to create placeholder screenshots
const createPlaceholderImage = (width, height, type) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#FAF9F6';
    ctx.fillRect(0, 0, width, height);

    // Header bar
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, 60);
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;

    // Brand color accent
    ctx.fillStyle = '#4C9F70';
    ctx.shadowColor = 'transparent';
    ctx.fillRect(0, 0, width, 4);

    // Content based on type
    switch(type) {
        case 'dashboard':
            createDashboardContent(ctx, width, height);
            break;
        case 'recipe':
            createRecipeContent(ctx, width, height);
            break;
        case 'tracking':
            createTrackingContent(ctx, width, height);
            break;
        case 'analytics':
            createAnalyticsContent(ctx, width, height);
            break;
    }

    return canvas.toDataURL('image/png');
};

const createDashboardContent = (ctx, width, height) => {
    // Grid of cards
    const cardWidth = width / 3 - 20;
    const cardHeight = 150;
    const startY = 80;

    for (let i = 0; i < 6; i++) {
        const x = 20 + (i % 3) * (cardWidth + 10);
        const y = startY + Math.floor(i / 3) * (cardHeight + 20);

        // Card background
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = 2;
        ctx.fillRect(x, y, cardWidth, cardHeight);
        ctx.shadowColor = 'transparent';

        // Card content
        ctx.fillStyle = '#4C9F70';
        ctx.fillRect(x + 10, y + 10, 40, 40);
    }
};

const createRecipeContent = (ctx, width, height) => {
    // Recipe card layout
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 2;
    ctx.fillRect(20, 80, width - 40, height - 100);
    ctx.shadowColor = 'transparent';

    // Recipe details
    for (let i = 0; i < 5; i++) {
        ctx.fillStyle = '#E5E7EB';
        ctx.fillRect(40, 120 + i * 40, width - 80, 2);
    }
};

const createTrackingContent = (ctx, width, height) => {
    // Graph area
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 2;
    ctx.fillRect(20, 80, width - 40, height - 100);
    ctx.shadowColor = 'transparent';

    // Graph lines
    ctx.strokeStyle = '#4C9F70';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, height - 60);
    
    // Create random graph points
    for (let i = 0; i < 10; i++) {
        ctx.lineTo(40 + i * ((width - 80) / 9), 
                  100 + Math.random() * (height - 160));
    }
    ctx.stroke();
};

const createAnalyticsContent = (ctx, width, height) => {
    // Bar chart
    const barWidth = (width - 80) / 12;
    const maxBarHeight = height - 160;

    for (let i = 0; i < 12; i++) {
        const barHeight = 50 + Math.random() * maxBarHeight;
        ctx.fillStyle = '#4C9F70';
        ctx.fillRect(40 + i * barWidth, 
                    height - 60 - barHeight, 
                    barWidth - 10, 
                    barHeight);
    }
};

// Generate and save the images
const screenshots = [
    { name: 'dashboard', width: 800, height: 600 },
    { name: 'recipe-view', width: 800, height: 600 },
    { name: 'tracking', width: 800, height: 600 },
    { name: 'analytics', width: 800, height: 600 }
];

screenshots.forEach(screenshot => {
    const img = createPlaceholderImage(
        screenshot.width, 
        screenshot.height, 
        screenshot.name.split('-')[0]
    );
    
    // Create an image element and set its source
    const imgElement = document.createElement('img');
    imgElement.src = img;
    
    // Find and replace the placeholder image
    const targetImg = document.querySelector(`img[src="./images/${screenshot.name}.png"]`);
    if (targetImg) {
        targetImg.src = img;
    }
}); 