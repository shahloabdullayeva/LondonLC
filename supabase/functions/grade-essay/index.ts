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

const SYSTEM_PROMPT = `You are an experienced IELTS examiner. Grade the following IELTS Writing Task 2 essay on the four official criteria. Be accurate, fair, and constructive.

Return ONLY valid JSON in this exact format — no markdown, no extra text:
{
  "task_response": <number 0.0-9.0 in 0.5 steps>,
  "coherence_cohesion": <number 0.0-9.0 in 0.5 steps>,
  "lexical_resource": <number 0.0-9.0 in 0.5 steps>,
  "grammar_accuracy": <number 0.0-9.0 in 0.5 steps>,
  "overall_band": <number — average of the four, rounded to nearest 0.5>,
  "feedback": [
    {"criterion": "Task response", "comment": "<2-3 sentences of specific feedback>"},
    {"criterion": "Coherence & cohesion", "comment": "<2-3 sentences>"},
    {"criterion": "Lexical resource", "comment": "<2-3 sentences with specific word suggestions>"},
    {"criterion": "Grammar range & accuracy", "comment": "<2-3 sentences with specific corrections>"}
  ]
}

Score strictly according to the IELTS public band descriptors. A typical 250-word essay from a B2 learner scores around 6.0-6.5. Only give 7+ for genuinely strong work. Be specific in feedback — cite exact phrases from the essay.`;

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
