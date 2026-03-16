"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;

    const frameCount = 253;

    const currentFrame = (index: number) =>
      `/frames/GV-Aloe-Toma1-V001_${String(index).padStart(5, "0")}.jpg`;

    const images: HTMLImageElement[] = [];
    const imageSeq = { frame: 0 };

    // preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // set canvas size (IMPORTANT: match your image ratio)
    canvas.width = 1920;
    canvas.height = 1080;

    images[0].onload = () => {
      context.drawImage(images[0], 0, 0);
    };

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
      },
      onUpdate: render,
    });

    function render() {
      const img = images[Math.floor(imageSeq.frame)];
      if (!img) return;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0);
    }
  }, []);

  return (
    <main>
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Scroll down</h1>
      </section>

      <section>
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "contain",
          }}
        />
      </section>

      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>End section</h2>
      </section>
    </main>
  );
}
