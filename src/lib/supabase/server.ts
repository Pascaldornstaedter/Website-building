import { createClient } from "@supabase/supabase-js";

function getRequiredEnv(name: "NEXT_PUBLIC_SUPABASE_URL") {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getSupabaseKey() {
  const value =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!value) {
    throw new Error(
      "Missing required environment variable: NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }

  return value;
}

export function createSupabaseServerClient() {
  return createClient(getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL"), getSupabaseKey(), {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
