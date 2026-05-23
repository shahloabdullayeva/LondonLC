import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      students: {
        Row: {
          id: string;
          name: string;
          surname: string;
          group_name: string;
          created_at: string;
        };
        Insert: {
          name: string;
          surname: string;
          group_name: string;
        };
      };
      tests: {
        Row: {
          id: string;
          title: string;
          book_number: number;
          test_number: number;
          type: "reading" | "listening";
          level: "academic" | "general";
          duration_minutes: number;
          transfer_minutes: number;
          created_at: string;
        };
      };
      questions: {
        Row: {
          id: string;
          test_id: string;
          section_number: number;
          passage_title: string | null;
          passage_text: string | null;
          audio_url: string | null;
          questions_data: QuestionData[];
          created_at: string;
        };
      };
      attempts: {
        Row: {
          id: string;
          student_id: string;
          test_id: string;
          answers: Record<string, string>;
          score: number | null;
          max_score: number;
          status: "in_progress" | "completed" | "cancelled";
          started_at: string;
          submitted_at: string | null;
          time_spent_seconds: number | null;
          violation_reason: string | null;
        };
      };
    };
  };
};

export type QuestionData = {
  id: string;
  number: number;
  type:
    | "multiple_choice"
    | "fill_blank"
    | "true_false_ng"
    | "matching"
    | "short_answer"
    | "summary_completion";
  question: string;
  options?: string[];
  correct_answer: string;
  points: number;
};
