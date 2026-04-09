export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 20px 80px",
        color: "#fff",

        // 👇 background image
        backgroundImage: "url('/frames-desktop/GV-Aloe-Toma1-V001_00000.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* optional dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            lineHeight: "1.1",
            marginBottom: "20px",
          }}
        >
          Una experiencia pensada para tu piel
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "30px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            color: "#ddd",
          }}
        >
          Más cómoda, más suave, más personal.
        </p>

        <button
          style={{
            padding: "14px 28px",
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
