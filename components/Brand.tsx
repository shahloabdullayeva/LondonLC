// Shared "London · LC" brand mark used in every page's header. Kept in a
// single component so the wordmark (font, weights, spacing, colours)
// stays identical everywhere. Pass `size` for the font size in px.
// If `href` is provided the mark renders as a Link; otherwise as a span
// (useful for oversized centred hero usage).
import Link from "next/link";

type BrandProps = {
  /** Font size in px. Default 20 (nav scale). Use 48+ for hero. */
  size?: number;
  /** Make the mark a link to `href`. Omit for plain text. */
  href?: string;
  /** Optional suffix rendered after " LC ", e.g. "Admin". */
  suffix?: string;
};

export default function Brand({ size = 20, href, suffix }: BrandProps) {
  const content = (
    <span style={{
      fontFamily: `"Fraunces", "Iowan Old Style", Georgia, serif`,
      fontWeight: 500, letterSpacing: "-0.01em",
      fontSize: size, lineHeight: 1,
      display: "inline-flex", alignItems: "baseline", gap: size * 0.22,
    }}>
      <span>
        <span style={{ color: "#fff" }}>London</span>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: size * 0.85, margin: `0 ${size * 0.18}px` }}>·</span>
        <span style={{ color: "#c4b5fd" }}>LC</span>
      </span>
      {suffix && (
        <span style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: Math.max(10, size * 0.55),
          fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#7c3aed",
          marginLeft: size * 0.2,
          alignSelf: "center",
        }}>{suffix}</span>
      )}
    </span>
  );
  if (href) {
    return <Link href={href} style={{ textDecoration: "none" }}>{content}</Link>;
  }
  return content;
}
