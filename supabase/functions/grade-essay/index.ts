// Supabase Edge Function: grade an IELTS Writing Task 2 essay using Claude.
// Deploy:  supabase functions deploy grade-essay
// Secret:  supabase secrets set ANTHROPIC_API_KEY=sk-ant-api03-...
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `You are an experienced, certified IELTS examiner. Grade the following IELTS Writing Task 2 response against the official IELTS public band descriptors and the four criteria below. Each criterion is weighted equally (25%). The minimum length is 250 words — responses under that should be penalised in Task Response.

Assess each criterion as follows:

1. TASK RESPONSE (TR)
   - How fully the candidate responds to the task.
   - How adequately main ideas are extended and supported with reasons/examples.
   - How relevant the ideas are.
   - How clearly the writer opens the discourse, establishes a position, and formulates conclusions.
   - Whether the format is appropriate to the task.

2. COHERENCE AND COHESION (CC)
   - Logical organisation and logical progression of the argument.
   - Appropriate paragraphing for topic organisation.
   - Logical sequencing within and across paragraphs.
   - Flexible use of reference and substitution (articles, pronouns).
   - Appropriate use of discourse markers (e.g. "first of all", "as a result", "in conclusion").

3. LEXICAL RESOURCE (LR)
   - Range of general vocabulary, including synonyms to avoid repetition.
   - Adequacy and appropriacy of word choice (topic-specific vocabulary, attitude markers).
   - Precision of word choice and expression.
   - Control of collocations, idiomatic expressions, sophisticated phrasing.
   - Density and communicative effect of spelling and word-formation errors.

4. GRAMMATICAL RANGE AND ACCURACY (GRA)
   - Range and appropriacy of structures (simple, compound, complex).
   - Accuracy of those structures.
   - Density and communicative effect of grammatical errors.
   - Accurate and appropriate punctuation.

Band scoring rules:
- Use 0.5 steps on a 0.0–9.0 scale.
- Overall band = mean of the four criterion scores, rounded to the nearest 0.5.
- A typical B2 learner's 250-word essay scores 6.0–6.5. Only award 7.0+ for genuinely strong work with few errors and sophisticated control. Award 5.0 or below when meaning is frequently obscured.
- Penalise plagiarism, bullet points, or note-form responses.

Return ONLY valid JSON in this exact format — no markdown, no prose wrapper:
{
  "task_response": <number>,
  "coherence_cohesion": <number>,
  "lexical_resource": <number>,
  "grammar_accuracy": <number>,
  "overall_band": <number>,
  "feedback": [
    {"criterion": "Task response", "comment": "<2-3 sentences. Cite exact phrases from the essay.>"},
    {"criterion": "Coherence & cohesion", "comment": "<2-3 sentences. Comment on paragraphing and linkers.>"},
    {"criterion": "Lexical resource", "comment": "<2-3 sentences. Suggest specific upgrades to word choice.>"},
    {"criterion": "Grammar range & accuracy", "comment": "<2-3 sentences. Quote 1-2 errors and correct them.>"}
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
    const { prompt, essay } = await req.json();

    if (!essay || typeof essay !== "string" || essay.trim().length < 50) {
      return new Response(
        JSON.stringify({ error: "Essay too short" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const userMessage = `IELTS Writing Task 2 Prompt:\n${prompt}\n\nStudent's Essay:\n${essay}`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-opus-4-6",
        max_tokens: 1500,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(
        JSON.stringify({ error: `Anthropic API error: ${response.status}`, detail: err }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || "";

    // Extract JSON from the response (handle possible markdown wrapping)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return new Response(
        JSON.stringify({ error: "Could not parse grading response", raw: text }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const grading = JSON.parse(jsonMatch[0]);

    return new Response(
      JSON.stringify(grading),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
