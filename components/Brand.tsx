import Link from "next/link";

type BrandProps = {
  size?: number;
  href?: string;
  suffix?: string;
};

export default function Brand({ size = 20, href, suffix }: BrandProps) {
  const content = (
    <span style={{
      fontFamily: `-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica, Arial, sans-serif`,
      fontWeight: 500, letterSpacing: "-0.01em",
      fontSize: size, lineHeight: 1,
      display: "inline-flex", alignItems: "baseline", gap: size * 0.22,
    }}>
      <span>
        <span style={{ color: "var(--site-text)" }}>London</span>
        <span style={{ color: "var(--site-text-sub)", fontSize: size * 0.85, margin: `0 ${size * 0.18}px` }}>·</span>
        <span style={{ color: "#7c3aed" }}>LC</span>
      </span>
      {suffix && (
        <span style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica, Arial, sans-serif",
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
