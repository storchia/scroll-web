export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px",
        borderTop: "1px solid #eaeaea",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ color: "#666", fontSize: "14px" }}>
          © 2026 Venus. Todos los derechos reservados.
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#"
            style={{
              color: "#111",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Contacto
          </a>

          <a
            href="#"
            style={{
              color: "#111",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
