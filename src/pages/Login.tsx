import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

function safeNext(raw: string | null) {
  if (!raw) return "/";
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/";
  return raw;
}

export default function LoginPage() {
  const next = safeNext(new URLSearchParams(window.location.search).get("next"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return setError(error.message);
      window.location.href = next;
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}${next}` },
      });
      setBusy(false);
      if (error) return setError(error.message);
      setNotice("Check your email to confirm your account, then sign in.");
    }
  }

  return (
    <main style={{ maxWidth: 420, margin: "0 auto", padding: "120px 24px 80px" }}>
      <h1 style={{ marginBottom: 8 }}>{mode === "signin" ? "Sign in" : "Create an account"}</h1>
      <p style={{ opacity: 0.75, marginBottom: 24 }}>
        Sign in to authorize an AI assistant to connect to Content Turbine.
      </p>
      <form onSubmit={submit} style={{ display: "grid", gap: 12 }}>
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 12, borderRadius: 8, border: "1px solid rgba(128,128,128,0.4)" }}
        />
        <input
          type="password"
          required
          minLength={8}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: 12, borderRadius: 8, border: "1px solid rgba(128,128,128,0.4)" }}
        />
        <button type="submit" disabled={busy} style={{ padding: 12, borderRadius: 8, cursor: "pointer" }}>
          {busy ? "Working…" : mode === "signin" ? "Sign in" : "Sign up"}
        </button>
      </form>
      {error && <p style={{ color: "#e5484d", marginTop: 16 }}>{error}</p>}
      {notice && <p style={{ marginTop: 16 }}>{notice}</p>}
      <button
        type="button"
        onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
        style={{ marginTop: 24, background: "none", border: "none", textDecoration: "underline", cursor: "pointer" }}
      >
        {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
      </button>
    </main>
  );
}