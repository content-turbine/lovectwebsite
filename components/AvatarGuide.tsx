import React, { useState } from "react";
import { MessageCircle, Sparkles, X } from "react-feather";

const shellStyle: React.CSSProperties = {
  position: "fixed", right: "1.25rem", bottom: "1.25rem", zIndex: 1000,
  fontFamily: "Averta, Arial, sans-serif",
};

const panelStyle: React.CSSProperties = {
  width: "min(348px, calc(100vw - 2.5rem))", marginBottom: "0.9rem", padding: "1.2rem",
  borderRadius: 20, color: "#fff", background: "linear-gradient(145deg, #142326, #1c3c3e)",
  border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 24px 70px rgba(0,0,0,.3)",
};

const actionStyle: React.CSSProperties = {
  width: "100%", padding: ".72rem .8rem", marginTop: ".55rem", textAlign: "left",
  color: "#eafffa", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.13)",
  borderRadius: 10, font: "600 .85rem Averta, Arial, sans-serif", cursor: "pointer",
};

export default function AvatarGuide() {
  const [open, setOpen] = useState(false);
  const goToReport = () => {
    setOpen(false);
    document.getElementById("get-report")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <aside style={shellStyle} aria-label="AI visibility guide prototype">
      {open && (
        <div style={panelStyle}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: ".8rem" }}>
            <div style={{ width: 48, height: 48, display: "grid", placeItems: "center", flex: "0 0 auto", borderRadius: "50%", color: "#102326", background: "#afe5dc" }}><Sparkles size={21} /></div>
            <div>
              <strong style={{ display: "block", marginBottom: ".35rem" }}>Your AI visibility guide</strong>
              <span style={{ color: "rgba(255,255,255,.72)", fontSize: ".88rem", lineHeight: 1.45 }}>I can help you understand how brands earn citations in AI answers.</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close guide" style={{ marginLeft: "auto", padding: ".2rem", color: "#fff", background: "none", border: 0, cursor: "pointer" }}><X size={18} /></button>
          </div>
          <button type="button" onClick={goToReport} style={actionStyle}>How does the free report work?</button>
          <button type="button" onClick={goToReport} style={actionStyle}>Could my brand be missing from AI answers?</button>
          <button type="button" onClick={goToReport} style={actionStyle}>Get my AI visibility report →</button>
        </div>
      )}
      <button type="button" onClick={() => setOpen((value) => !value)} aria-label="Open AI visibility guide" style={{ width: 62, height: 62, marginLeft: "auto", display: "grid", placeItems: "center", color: "#0f2a2a", background: "#95e6d7", border: 0, borderRadius: "50%", boxShadow: "0 14px 35px rgba(0,0,0,.25)", cursor: "pointer" }}>
        {open ? <X size={25} /> : <MessageCircle size={27} />}
      </button>
    </aside>
  );
}
