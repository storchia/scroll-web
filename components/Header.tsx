"use client";

export default function Header() {
  return (
    <header
      style={{
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        pointerEvents: "none",
        background: "#fff",
      }}
    >
      {/* Logo */}
      <div style={{ pointerEvents: "auto" }}>
        <img src="/logo.svg" alt="Logo" style={{ height: "40px" }} />
      </div>

      {/* CTA */}
      <div style={{ pointerEvents: "auto" }}>
        <button
          style={{
            padding: "10px 20px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Probar Ahora
        </button>
      </div>
    </header>
  );
}
