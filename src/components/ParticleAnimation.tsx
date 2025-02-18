"use client";

import React, { useEffect, useRef } from "react";

const ParticleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✅ Prevent null errors

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 700;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();

    // Mouse tracking
    const mouse = {
      x: 0,
      y: 0,
      rx: 0,
      ry: 0,
      speed: 45,
      delta: 0,
    };

    let then = Date.now();

    class Particle {
      x: number;
      y: number;
      direction: { x: number; y: number };
      radius: number;
      scale: number;
      rotation: number;
      vx: number;
      vy: number;
      valpha: number;
      color: string;
      shadowcolor: string;
      grad: CanvasGradient | null;

      constructor() {
        const h = 45;
        const s = 40 * Math.random() + 30;
        const l = 40 * Math.random() + 30;
        const a = 0.5 * Math.random();

        this.color = `hsla(${h},${s}%,${l}%,${a})`;
        this.shadowcolor = `hsla(${h},${s}%,${l}%,${a - 0.55})`;

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.direction = {
          x: -1 + Math.random() * 2,
          y: -1 + Math.random() * 2,
        };

        this.radius = this.randomNorm(0, 4);
        this.scale = 0.8 * Math.random() + 0.5;
        this.rotation = (Math.PI / 4) * Math.random();

        this.grad = ctx
          ? ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, 0)
          : null;
        if (this.grad) {
          this.grad.addColorStop(0, this.color);
          this.grad.addColorStop(1, this.shadowcolor);
        }

        this.vx = (2 * Math.random() + 4) * 0.01 * this.radius;
        this.vy = (2 * Math.random() + 4) * 0.01 * this.radius;

        this.valpha = 0.01 * Math.random() - 0.02;
      }

      randomNorm(mean: number, stdev: number) {
        return (
          Math.abs(
            Math.round(
              (Math.random() * 2 - 1) +
                (Math.random() * 2 - 1) +
                (Math.random() * 2 - 1)
            ) * stdev
          ) + mean
        );
      }

      move() {
        this.x += this.vx * this.direction.x;
        this.y += this.vy * this.direction.y;
        this.rotation += this.valpha;
      }

      changeDirection(axis: "x" | "y") {
        this.direction[axis] *= -1;
        this.valpha *= -1;
      }

      draw() {
        if (!ctx || !this.grad) return; // ✅ Prevent null errors

        ctx.save();
        ctx.translate(
          this.x + (mouse.rx / -20) * this.radius,
          this.y + (mouse.ry / -20) * this.radius
        );
        ctx.rotate(this.rotation);
        ctx.scale(1, this.scale);

        ctx.beginPath();
        ctx.fillStyle = this.grad;
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
      }

      boundaryCheck() {
        if (this.x >= canvas.width * 1.2) {
          this.x = canvas.width * 1.2;
          this.changeDirection("x");
        } else if (this.x <= -canvas.width * 0.2) {
          this.x = -canvas.width * 0.2;
          this.changeDirection("x");
        }
        if (this.y >= canvas.height * 1.2) {
          this.y = canvas.height * 1.2;
          this.changeDirection("y");
        } else if (this.y <= -canvas.height * 0.2) {
          this.y = -canvas.height * 0.2;
          this.changeDirection("y");
        }
      }
    }

    const init = () => {
      particles = Array.from({ length: particleCount }, () => new Particle());
      if (ctx) ctx.globalCompositeOperation = "lighter";
    };

    const animate = () => {
      if (!ctx) return; // ✅ Prevent null errors
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      mouse.delta = (now - then) / 1000;
      then = now;

      if (!isNaN(mouse.delta) && mouse.delta > 0) {
        const distX = mouse.x - mouse.rx;
        const distY = mouse.y - mouse.ry;

        if (distX !== 0 && distY !== 0) {
          mouse.rx -= (mouse.rx - mouse.x) / mouse.speed;
          mouse.ry -= (mouse.ry - mouse.y) / mouse.speed;
        }
      }

      particles.forEach((particle) => {
        particle.move();
        particle.boundaryCheck();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX || e.pageX;
      mouse.y = e.clientY || e.pageY;
      mouse.x -= canvas.width / 2;
      mouse.y -= canvas.height / 2;
    };

    window.addEventListener("resize", updateSize);
    document.addEventListener("mousemove", handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleAnimation;
