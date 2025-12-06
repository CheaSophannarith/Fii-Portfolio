<template>
    <canvas ref="canvasRef"
        class="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500"
        :class="{ 'opacity-0': !isAtTop }"
        @mouseenter="pauseAnimation"
        @mouseleave="resumeAnimation"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let animationId: number | null = null;
let isPaused = ref(false);
let isAtTop = ref(true);

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
}

const particles: Particle[] = [];

const colors = ['rgb(147, 197, 253)', 'rgb(96, 165, 250)']; // primary-300 and primary-400

const createParticles = (width: number, height: number) => {
    particles.length = 0;
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
};

const drawParticles = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
    });

    ctx.globalAlpha = 1;
};

const updateParticles = (width: number, height: number) => {
    if (isPaused.value) return;

    particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
    });
};

const animate = () => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    updateParticles(width, height);
    drawParticles(ctx, width, height);

    animationId = requestAnimationFrame(animate);
};

const pauseAnimation = () => {
    isPaused.value = true;
};

const resumeAnimation = () => {
    isPaused.value = false;
};

const handleScroll = () => {
    // Only animate when at the top of the page (within 100px)
    isAtTop.value = window.scrollY < 100;
};

const resizeCanvas = () => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    createParticles(canvas.width, canvas.height);
};

onMounted(() => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    window.removeEventListener('resize', resizeCanvas);
    window.removeEventListener('scroll', handleScroll);
});
</script>
