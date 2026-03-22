export default function BenefitsSection() {
  const benefits = [
    "Más comodidad en cada uso",
    "Suavidad pensada para tu piel",
    "Diseño creado para el cuerpo femenino",
    "Una rutina más simple y agradable",
    "Más confianza para sentirte bien en tu propia piel",
  ];

  return (
    <section
      style={{
        background: "#15bed3",
        padding: "120px 0", // 👈 full width background
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px", // 👈 keep spacing here
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
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
                color: "#fff", // 👈 important for contrast
              }}
            >
              Beneficios
            </p>

            <h2
              style={{
                fontSize: "42px",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: "#fff",
              }}
            >
              Diseñado para sentirse mejor
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#eaf9fc",
                margin: 0,
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
              gap: "18px",
            }}
          >
            {benefits.map((item) => (
              <div
                key={item}
                style={{
                  padding: "20px 24px",
                  borderRadius: "18px",
                  background: "#ffffff",
                  fontSize: "17px",
                  lineHeight: "1.5",
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
