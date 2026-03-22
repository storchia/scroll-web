export default function AboutSection() {
  return (
    <section
      style={{
        background: "#e4f3d6",
        padding: "120px 0", // 👈 full width background
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px", // 👈 spacing moved here
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
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
                color: "#6b7c5a", // 👈 slightly better contrast
              }}
            >
              Qué es
            </p>

            <h2
              style={{
                fontSize: "42px",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: "#1f2a1a",
              }}
            >
              Una experiencia de cuidado pensada para vos
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#3d4a35",
                margin: 0,
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
