// RESPON AI

export default function AIOutput({ response }) {
  return (
    <div
      style={{
        backgroundColor: "#f8f4ff",
        color: "#111",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #d1c4e9",
        marginTop: "20px",
        whiteSpace: "pre-line",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: "1",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/logo.png"
          alt="AI Logo"
          width={80}
          style={{ borderRadius: "60%" }}
        />
        <h3 style={{ marginBottom: "10px", color: "#5e35b1" }}>AI Response:</h3>
      </div>
      <p>{response}</p>
    </div>
  );
}
