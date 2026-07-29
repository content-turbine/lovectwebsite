import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type OAuthNamespace = {
  getAuthorizationDetails: (id: string) => Promise<{ data: any; error: any }>;
  approveAuthorization: (id: string) => Promise<{ data: any; error: any }>;
  denyAuthorization: (id: string) => Promise<{ data: any; error: any }>;
};

const oauth = (supabase.auth as unknown as { oauth: OAuthNamespace }).oauth;

export default function OAuthConsentPage() {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) return setError("Missing authorization_id");
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/login?next=" + encodeURIComponent(next);
        return;
      }
      const { data, error } = await oauth.getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) return setError(error.message);
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    const { data, error } = approve
      ? await oauth.approveAuthorization(authorizationId)
      : await oauth.denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      return setError(error.message);
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      return setError("No redirect returned by the authorization server.");
    }
    window.location.href = target;
  }

  const wrap = { maxWidth: 520, margin: "0 auto", padding: "120px 24px 80px" } as const;

  if (error) return <main style={wrap}>Could not load this authorization request: {error}</main>;
  if (!details) return <main style={wrap}>Loading…</main>;

  return (
    <main style={wrap}>
      <h1>Connect {details.client?.name ?? "an app"} to your account</h1>
      <p style={{ opacity: 0.8 }}>
        This lets {details.client?.name ?? "the client"} use the Content Turbine tools as you.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <button disabled={busy} onClick={() => decide(true)} style={{ padding: "12px 20px", borderRadius: 8, cursor: "pointer" }}>
          Approve
        </button>
        <button disabled={busy} onClick={() => decide(false)} style={{ padding: "12px 20px", borderRadius: 8, cursor: "pointer" }}>
          Deny
        </button>
      </div>
    </main>
  );
}