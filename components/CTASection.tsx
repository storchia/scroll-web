export default function CTASection() {
  return (
    <section
      style={{
        padding: "120px 40px",
        textAlign: "center",
        background: "#111",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "40px",
            lineHeight: "1.2",
            marginBottom: "20px",
          }}
        >
          Empezá a sentir la diferencia
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#ccc",
            marginBottom: "40px",
          }}
        >
          Una experiencia más cómoda, simple y pensada para vos.
        </p>

        <button
          style={{
            padding: "16px 32px",
            fontSize: "16px",
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "999px",
            cursor: "pointer",
          }}
        >
          Probar ahora
        </button>
      </div>
    </section>
  );
}
