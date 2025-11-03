import { useEffect, useRef } from "react";

/**
 * 鼠标点击爱心事件
 * @returns 
 */
const ClickHearts = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        const MIN_COUNT = 4, MAX_COUNT = 7;
        const MIN_START_R = 20, MAX_START_R = 60;
        const MIN_SIZE = 18, MAX_SIZE = 36;
        const FLOAT_MIN = 80, FLOAT_MAX = 150;
        const MAX_LIFE = 260;

        function resize() {
            const dpr = Math.max(window.devicePixelRatio || 1, 1);
            canvas.style.width = window.innerWidth + "px";
            canvas.style.height = window.innerHeight + "px";
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();
        window.addEventListener("resize", resize);

        function drawHeart(
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            size: number,
            alpha: number,
            rotation: number,
            color = "#ff4d6d"
        ) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
            ctx.fillStyle = color;
            const s = size;
            ctx.beginPath();
            ctx.moveTo(0, -s * 0.35);
            ctx.bezierCurveTo(s * 0.45, -s * 1.0, s * 1.1, -s * 0.15, 0, s * 0.8);
            ctx.bezierCurveTo(-s * 1.1, -s * 0.15, -s * 0.45, -s * 1.0, 0, -s * 0.35);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        const hearts: any[] = [];
        const rand = (a: number, b: number) => a + Math.random() * (b - a);
        const randInt = (a: number, b: number) =>
            Math.floor(rand(a, b + 1));

        function spawnHearts(clickX: number, clickY: number) {
            const count = randInt(MIN_COUNT, MAX_COUNT);
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = rand(MIN_START_R, MAX_START_R);
                const startX = clickX + Math.cos(angle) * r;
                const startY = clickY + Math.sin(angle) * r;

                const size = rand(MIN_SIZE, MAX_SIZE);
                const floatLife = Math.floor(rand(FLOAT_MIN, FLOAT_MAX));
                const maxLife = Math.floor(rand(MAX_LIFE * 0.7, MAX_LIFE));

                const vx = (Math.random() - 0.5) * 1.5;
                const vy = (Math.random() - 0.5) * 1.5;
                const rotationSpeed = (Math.random() - 0.5) * 0.1;

                hearts.push({
                    x: startX,
                    y: startY,
                    vx,
                    vy,
                    size,
                    alpha: 1,
                    rotation: Math.random() * Math.PI * 2,
                    floatLife,
                    life: maxLife,
                    maxLife,
                    rotationSpeed,
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = hearts.length - 1; i >= 0; i--) {
                const h = hearts[i];

                h.vx += (Math.random() - 0.5) * 0.2;
                h.vy += (Math.random() - 0.5) * 0.2;
                h.x += h.vx;
                h.y += h.vy;

                h.rotation += h.rotationSpeed;

                h.size *= 0.995;
                h.alpha *= 0.97;
                h.life--;

                drawHeart(ctx, h.x, h.y, h.size, h.alpha, h.rotation);

                if (h.alpha < 0.03 || h.size < 2 || h.life <= 0) {
                    hearts.splice(i, 1);
                }
            }

            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);

        function handleClick(ev: MouseEvent) {
            spawnHearts(ev.clientX, ev.clientY);
        }
        function handleTouch(ev: TouchEvent) {
            if (!ev.touches || ev.touches.length === 0) return;
            const t = ev.touches[0];
            spawnHearts(t.clientX, t.clientY);
        }

        window.addEventListener("click", handleClick);
        window.addEventListener("touchstart", handleTouch, { passive: true });

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("touchstart", handleTouch);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none", // 保证点击事件穿透
                zIndex: 9999,
            }}
        />
    );
};

export default ClickHearts;
