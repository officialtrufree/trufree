export default function Home() {
  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Know What’s Actually Free.
      </h1>

      <p style={{ fontSize: "20px", color: "#555", marginBottom: "40px" }}>
        Enter any app or website to see how free it truly is.
      </p>

      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input
          type="text"
          placeholder="Search an app or website..."
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginTop: "60px" }}>
        <p style={{ color: "#888" }}>
          One payment. Lifetime access. No subscriptions.
        </p>
      </div>
    </main>
  );
}
