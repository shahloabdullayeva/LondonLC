import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `You are an experienced IELTS Speaking examiner. You will be given a transcript of a student's IELTS Speaking test (Parts 1, 2, and 3). Grade the student on the four official IELTS Speaking criteria using 0.5 steps on a 0.0–9.0 scale.

The four criteria:
1. Fluency and Coherence — ability to speak at length without noticeable effort, logical sequencing, use of discourse markers, absence of long pauses or self-correction
2. Lexical Resource — range of vocabulary, precision of word choice, use of idiomatic language, ability to paraphrase
3. Grammatical Range and Accuracy — variety of sentence structures, accuracy of grammar, appropriate use of tenses
4. Pronunciation — clarity, stress, intonation, individual sounds (note: you are assessing from a transcript so comment on what you can infer from word choice and phrasing patterns)

Overall band = arithmetic mean of the four scores, rounded to nearest 0.5.

Be specific in feedback. Quote exact phrases from the transcript. Note both strengths and areas for improvement.

Return ONLY valid JSON:
{
  "fluency": <0.0-9.0>,
  "lexical": <0.0-9.0>,
  "grammar": <0.0-9.0>,
  "pronunciation": <0.0-9.0>,
  "overall": <0.0-9.0>,
  "feedback": [
    {"criterion": "Fluency & coherence", "comment": "..."},
    {"criterion": "Lexical resource", "comment": "..."},
    {"criterion": "Grammatical range & accuracy", "comment": "..."},
    {"criterion": "Pronunciation", "comment": "..."}
  ]
}`;

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (!ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({ error: "ANTHROPIC_API_KEY not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const { transcript } = await req.json();

    if (!transcript || typeof transcript !== "string" || transcript.trim().length < 20) {
      return new Response(
        JSON.stringify({ error: "Transcript too short" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 2000,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: `IELTS Speaking Test Transcript:\n\n${transcript}` }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(
        JSON.stringify({ error: `API error: ${response.status}`, detail: err }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return new Response(
        JSON.stringify({ error: "Could not parse response", raw: text }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(jsonMatch[0], {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
