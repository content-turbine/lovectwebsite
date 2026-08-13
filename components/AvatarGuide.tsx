import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { MessageCircle, Sparkles, X } from "react-feather";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
`;

const Shell = styled.aside`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 1000;
  font-family: "Averta", sans-serif;
`;

const Panel = styled.div`
  width: min(348px, calc(100vw - 2.5rem));
  margin-bottom: 0.9rem;
  padding: 1.2rem;
  border-radius: 20px;
  color: #fff;
  background: linear-gradient(145deg, #142326 0%, #1c3c3e 100%);
  border: 1px solid rgba(255,255,255,.14);
  box-shadow: 0 24px 70px rgba(0,0,0,.3);
`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  gap: .8rem;
`;

const Face = styled.div`
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #102326;
  background: radial-gradient(circle at 35% 30%, #fff 0 8%, #afe5dc 9% 45%, #65c7b6 46% 100%);
  box-shadow: 0 0 0 4px rgba(152,230,215,.12);
  animation: ${float} 3.5s ease-in-out infinite;
`;

const Close = styled.button`
  margin-left: auto;
  padding: .2rem;
  color: rgba(255,255,255,.7);
  background: none;
  border: 0;
  cursor: pointer;
`;

const Heading = styled.h2`
  margin: .1rem 0 .35rem;
  font: 700 1rem/1.3 "Gilroy", sans-serif;
`;

const Copy = styled.p`
  margin: 0;
  color: rgba(255,255,255,.72);
  font-size: .88rem;
  line-height: 1.45;
`;

const Actions = styled.div`
  display: grid;
  gap: .55rem;
  margin-top: 1rem;
`;

const Action = styled.button`
  width: 100%;
  padding: .72rem .8rem;
  text-align: left;
  color: #eafffa;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 10px;
  font: 600 .85rem "Averta", sans-serif;
  cursor: pointer;
  transition: background .2s ease, transform .2s ease;
  &:hover { background: rgba(120,225,207,.18); transform: translateX(2px); }
`;

const Bubble = styled.button`
  width: 62px;
  height: 62px;
  margin-left: auto;
  display: grid;
  place-items: center;
  color: #0f2a2a;
  background: linear-gradient(145deg, #b1f1e5, #65c7b6);
  border: 0;
  border-radius: 50%;
  box-shadow: 0 14px 35px rgba(0,0,0,.25);
  cursor: pointer;
  animation: ${float} 3.5s ease-in-out infinite;
`;

export default function AvatarGuide() {
  const [open, setOpen] = useState(false);
  const goToReport = () => {
    setOpen(false);
    document.getElementById("get-report")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Shell aria-label="AI visibility guide prototype">
      {open && (
        <Panel>
          <Top>
            <Face><Sparkles size={21} /></Face>
            <div>
              <Heading>Your AI visibility guide</Heading>
              <Copy>I can help you understand how brands earn citations in AI answers.</Copy>
            </div>
            <Close type="button" onClick={() => setOpen(false)} aria-label="Close guide"><X size={18} /></Close>
          </Top>
          <Actions>
            <Action type="button" onClick={goToReport}>How does the free report work?</Action>
            <Action type="button" onClick={goToReport}>Could my brand be missing from AI answers?</Action>
            <Action type="button" onClick={goToReport}>Get my AI visibility report →</Action>
          </Actions>
        </Panel>
      )}
      <Bubble type="button" onClick={() => setOpen((value) => !value)} aria-label="Open AI visibility guide">
        {open ? <X size={25} /> : <MessageCircle size={27} />}
      </Bubble>
    </Shell>
  );
}
