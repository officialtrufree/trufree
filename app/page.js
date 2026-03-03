"use client";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin
      }
    });
  };

  return (
    <main style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Know What’s Actually Free.</h1>

      <button
        onClick={signInWithGoogle}
        style={{
          marginTop: "30px",
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Sign in with Google
      </button>
    </main>
  );
}
