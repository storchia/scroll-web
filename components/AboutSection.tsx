"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        background: "#e4f3d6",
        padding: isMobile ? "72px 0" : "120px 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: isMobile ? "80px" : "120px",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(228,243,214,1))",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "0 24px" : "0 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "32px" : "60px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
                color: "#6b7c5a",
              }}
            >
              Qué es
            </p>

            <h2
              style={{
                fontSize: isMobile ? "56px" : "42px",
                lineHeight: isMobile ? "0.95" : "1.1",
                marginBottom: isMobile ? "0" : "24px",
                color: "#1f2a1a",
                maxWidth: isMobile ? "320px" : "none",
              }}
            >
              Una experiencia de cuidado pensada para vos
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: isMobile ? "22px" : "18px",
                lineHeight: isMobile ? "1.45" : "1.7",
                color: "#3d4a35",
                margin: 0,
                maxWidth: isMobile ? "320px" : "none",
              }}
            >
              Más que un producto, es una forma de cuidado creada para acompañar
              tu cuerpo, tu piel y tu rutina con una experiencia más cómoda,
              suave y personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
