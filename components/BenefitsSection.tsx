"use client";

import { useEffect, useState } from "react";

export default function BenefitsSection() {
  const [isMobile, setIsMobile] = useState(false);

  const benefits = [
    "Más comodidad en cada uso",
    "Suavidad pensada para tu piel",
    "Diseño creado para el cuerpo femenino",
    "Una rutina más simple y agradable",
    "Más confianza para sentirte bien en tu propia piel",
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      style={{
        background: "#15bed3",
        padding: isMobile ? "72px 0" : "120px 0",
      }}
    >
      <div
        style={{
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
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
                color: "#fff",
              }}
            >
              Beneficios
            </p>

            <h2
              style={{
                fontSize: isMobile ? "48px" : "42px",
                lineHeight: isMobile ? "0.98" : "1.1",
                marginBottom: "24px",
                color: "#fff",
                maxWidth: isMobile ? "320px" : "none",
              }}
            >
              Diseñado para sentirse mejor
            </h2>

            <p
              style={{
                fontSize: isMobile ? "20px" : "18px",
                lineHeight: isMobile ? "1.45" : "1.7",
                color: "#eaf9fc",
                margin: 0,
                maxWidth: isMobile ? "320px" : "none",
              }}
            >
              Una propuesta pensada para hacer de la rutina diaria un momento
              más simple, cómodo y personal.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "14px" : "18px",
            }}
          >
            {benefits.map((item) => (
              <div
                key={item}
                style={{
                  padding: isMobile ? "18px 20px" : "20px 24px",
                  borderRadius: isMobile ? "16px" : "18px",
                  background: "#ffffff",
                  fontSize: isMobile ? "16px" : "17px",
                  lineHeight: isMobile ? "1.45" : "1.5",
                  color: "#222",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
