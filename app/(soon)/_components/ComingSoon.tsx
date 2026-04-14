// Shared "coming soon" panel used by the placeholder sections
// (Writing / Articles / Podcasts / Music).
export default function ComingSoon({
  label, title, description,
}: {
  label: string; title: string; description: string;
}) {
  return (
    <main style={{
      flex: 1, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "80px 32px", textAlign: "center",
    }}>
      <div style={{
        fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
        color: "rgba(255,255,255,0.3)", marginBottom: 24, fontWeight: 600,
      }}>
        {label}
      </div>
      <h1 style={{
        fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 200,
        letterSpacing: "-0.02em", color: "#fff", lineHeight: 1, marginBottom: 28,
      }}>
        {title}
      </h1>
      <p style={{
        fontSize: 15, color: "rgba(255,255,255,0.45)",
        maxWidth: 480, lineHeight: 1.7, marginBottom: 40,
      }}>
        {description}
      </p>
      <div style={{
        fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
        color: "rgba(255,255,255,0.4)", fontWeight: 600,
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 999, padding: "8px 20px",
      }}>
        In development
      </div>
    </main>
  );
}
