"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const isMobile = window.innerWidth < 768;
    const frameCount = isMobile ? 253 : 253;

    const framesFolder = isMobile ? "frames-mobile" : "frames-desktop";
    const frameExtension = isMobile ? "webp" : "jpg";

    const currentFrame = (index: number) =>
      `/${framesFolder}/GV-Aloe-Toma1-V001_${String(index).padStart(5, "0")}.${frameExtension}`;

    const images: HTMLImageElement[] = [];
    const imageSeq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const drawCoverImage = (img: HTMLImageElement) => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const imageWidth = img.naturalWidth;
      const imageHeight = img.naturalHeight;

      if (!imageWidth || !imageHeight) return;

      const scale = Math.max(
        canvasWidth / imageWidth,
        canvasHeight / imageHeight,
      );

      const drawWidth = imageWidth * scale;
      const drawHeight = imageHeight * scale;

      const x = (canvasWidth - drawWidth) / 2;
      const y = (canvasHeight - drawHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, x, y, drawWidth, drawHeight);
    };

    const render = () => {
      const img = images[Math.floor(imageSeq.frame)];
      if (!img || !img.complete) return;
      drawCoverImage(img);
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    images[0].onload = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", setCanvasSize);

    const tween = gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: isMobile ? "+=2200" : "+=3000",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </section>
  );
}
