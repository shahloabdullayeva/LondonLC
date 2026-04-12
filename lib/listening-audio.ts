// Returns the public Supabase Storage URL for a listening section's audio file.
// Convention: files live in the `audio` bucket, named `cam{BOOK}-listening-t{TEST}-s{SECTION}.mp3`.
// Pass the section ID as defined in the test data (e.g. "cam20-l-t1-s1") and it is
// mapped to the canonical audio filename.
export function getListeningAudioUrl(sectionId: string): string {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) {
    console.warn("NEXT_PUBLIC_SUPABASE_URL is not set — audio will not load");
    return "";
  }
  // Map section id convention (e.g. "cam20-l-t1-s1") to file name (e.g. "cam20-listening-t1-s1.mp3").
  // We accept ids of form "cam{N}-l-t{N}-s{N}" or "cam{N}-listening-t{N}-s{N}" for flexibility.
  const normalised = sectionId.replace("-l-", "-listening-");
  return `${base}/storage/v1/object/public/audio/${normalised}.mp3`;
}
