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

    console.log("[init] section:", section);
    console.log("[init] canvas:", canvas);

    if (!section || !canvas) {
      console.error("[error] Missing section or canvas");
      return;
    }

    const context = canvas.getContext("2d");
    console.log("[init] context:", context);

    if (!context) {
      console.error("[error] No 2D context");
      return;
    }

    const isMobile = window.innerWidth < 768;
    const frameCount = isMobile ? 253 : 253;

    const framesFolder = isMobile ? "frames-mobile" : "frames-desktop";
    const frameExtension = isMobile ? "jpg" : "jpg";

    console.log("[config]", { isMobile, frameCount, framesFolder });

    const currentFrame = (index: number) => {
      const path = `/${framesFolder}/GV-Aloe-Toma1-V001_${String(index).padStart(5, "0")}.${frameExtension}`;
      return path;
    };

    console.log("[test] first frame:", currentFrame(0));
    console.log("[test] last frame:", currentFrame(frameCount - 1));

    const images: HTMLImageElement[] = [];
    const imageSeq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const src = currentFrame(i);

      img.onload = () => {
        if (i === 0 || i === frameCount - 1 || i % 50 === 0) {
          console.log("[load]", i, src, img.naturalWidth, img.naturalHeight);
        }
      };

      img.onerror = () => {
        console.error("[error] failed to load", i, src);
      };

      img.src = src;
      images.push(img);
    }

    const drawCoverImage = (img: HTMLImageElement) => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const imageWidth = img.naturalWidth;
      const imageHeight = img.naturalHeight;

      if (!imageWidth || !imageHeight) {
        console.warn("[draw skipped] invalid image size", {
          src: img.src,
          imageWidth,
          imageHeight,
        });
        return;
      }

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
      const frameIndex = Math.floor(imageSeq.frame);
      const img = images[frameIndex];

      if (!img) {
        console.warn("[render skipped] no image", frameIndex);
        return;
      }

      if (!img.complete) {
        console.warn("[render skipped] not complete", frameIndex, img.src);
        return;
      }

      if (img.naturalWidth === 0) {
        console.warn("[render skipped] naturalWidth 0", frameIndex, img.src);
        return;
      }

      drawCoverImage(img);
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      console.log("[canvas resize]", {
        width: canvas.width,
        height: canvas.height,
      });

      render();
    };

    images[0].onload = () => {
      console.log("[first frame loaded]", images[0].src);
      setCanvasSize();
    };

    images[0].onerror = () => {
      console.error("[first frame failed]", images[0].src);
    };

    window.addEventListener("resize", setCanvasSize);

    const tween = gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        const frameIndex = Math.floor(imageSeq.frame);
        if (frameIndex % 50 === 0) {
          console.log("[scroll frame]", frameIndex);
        }
        render();
      },
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: isMobile ? "+=2200" : "+=3000",
        scrub: true,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          console.log("[scroll progress]", self.progress.toFixed(3));
        },
      },
    });

    return () => {
      console.log("[cleanup]");
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
