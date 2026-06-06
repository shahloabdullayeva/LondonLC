export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export function bandScore(raw: number, total: number): number {
  const pct = (raw / total) * 100;
  if (pct >= 97) return 9.0;
  if (pct >= 93) return 8.5;
  if (pct >= 87) return 8.0;
  if (pct >= 80) return 7.5;
  if (pct >= 72) return 7.0;
  if (pct >= 63) return 6.5;
  if (pct >= 54) return 6.0;
  if (pct >= 44) return 5.5;
  if (pct >= 35) return 5.0;
  if (pct >= 27) return 4.5;
  if (pct >= 20) return 4.0;
  return 3.5;
}
