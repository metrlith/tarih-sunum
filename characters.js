// Character image filenames (ensure these match your actual files)
const characterImages = [
    'images/characters/1.png',
    'images/characters/2.png',
    'images/characters/3.png',
    'images/characters/4.png',
    'images/characters/5.png',
    'images/characters/6.png'
];

const canvas = document.getElementById('character-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const CHAR_WIDTH = 64;
const CHAR_HEIGHT = 64;
const SPEED = 2.2;

function randomBetween(a, b) {
    return Math.random() * (b - a) + a;
}

class Character {
    constructor(img, x, y, vx, vy) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.width = CHAR_WIDTH;
        this.height = CHAR_HEIGHT;
    }

    move(canvasWidth, canvasHeight) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off left/right
        if (this.x < 0) {
            this.x = 0;
            this.vx *= -1;
        } else if (this.x + this.width > canvasWidth) {
            this.x = canvasWidth - this.width;
            this.vx *= -1;
        }

        // Bounce off top/bottom
        if (this.y < 0) {
            this.y = 0;
            this.vy *= -1;
        } else if (this.y + this.height > canvasHeight) {
            this.y = canvasHeight - this.height;
            this.vy *= -1;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

const loadedImages = [];
let characters = [];

function startAnimation() {
    // Random initial positions and velocities
    characters = loadedImages.map(img => {
        const x = randomBetween(0, canvas.width - CHAR_WIDTH);
        const y = randomBetween(0, canvas.height - CHAR_HEIGHT);
        // Random direction
        const angle = randomBetween(0, 2 * Math.PI);
        const vx = Math.cos(angle) * SPEED;
        const vy = Math.sin(angle) * SPEED;
        return new Character(img, x, y, vx, vy);
    });

    requestAnimationFrame(animate);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const char of characters) {
        char.move(canvas.width, canvas.height);
        char.draw(ctx);
    }
    requestAnimationFrame(animate);
}

// Load all images, then start animation
let loadedCount = 0;
for (const src of characterImages) {
    const img = new globalThis.Image();
    img.src = src;
    img.onload = () => {
        loadedImages.push(img);
        loadedCount++;
        if (loadedCount === characterImages.length) {
            startAnimation();
        }
    };
    img.onerror = () => {
        loadedCount++;
        if (loadedCount === characterImages.length) {
            startAnimation();
        }
    };
}