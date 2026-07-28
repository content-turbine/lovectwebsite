import React, { useEffect } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { CFade } from "../Fade";
import { Title } from "../styled";
import { sizeAndDown } from "../../styles/responsive";
import { PRODUCT_NAME, LAUNCHLIST_FORM_KEY } from "./config";

const LAUNCHLIST_SCRIPT_SRC = "https://getlaunchlist.com/js/widget.js";

/**
 * LaunchList waitlist embed (free tier, referral tracking built in) --
 * https://getlaunchlist.com. The real embed is just a script tag plus a
 * div with a data-key-id -- LaunchList's script scans the DOM for that
 * div and renders the actual form into it. See WAITLIST_SETUP.md for
 * account setup -- this only renders correctly once
 * LAUNCHLIST_FORM_KEY in ./config.ts is replaced with a real form key.
 *
 * Note: LaunchList's widget script initialises on script load. On a
 * hard page load (or the first time a visitor lands on /citable) this
 * just works. If you later add client-side navigation *away* and *back*
 * to this route without a full reload, the widget may not re-render --
 * worth a manual check once a real form key is in and this ships.
 */
export default function Waitlist() {
  useEffect(() => {
    if (document.querySelector(`script[src="${LAUNCHLIST_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = LAUNCHLIST_SCRIPT_SRC;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  const notConfigured = LAUNCHLIST_FORM_KEY === "YOUR_LAUNCHLIST_FORM_KEY";

  return (
    <Container id="waitlist">
      <CFade>
        <Title>Be first to try {PRODUCT_NAME}</Title>
        <Sub>
          We're building this in the open. Join the waitlist for early access -- refer friends to
          move up the list.
        </Sub>
        {notConfigured ? (
          <Placeholder>
            Waitlist form not configured yet -- set <code>LAUNCHLIST_FORM_KEY</code> in{" "}
            <code>components/citable/config.ts</code> (see WAITLIST_SETUP.md).
          </Placeholder>
        ) : (
          <div className="launchlist-widget" data-key-id={LAUNCHLIST_FORM_KEY} data-height="180px" />
        )}
      </CFade>
    </Container>
  );
}

const Container = styled.div`
  max-width: 700px;
  margin: 5rem auto;
  padding: 0 1.5rem;
  text-align: center;

  ${sizeAndDown("md")} {
    margin: 3rem auto;
  }
`;

const Sub = styled.p`
  font-family: "Averta";
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const Placeholder = styled.p`
  font-family: "Averta";
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => rgba(theme.colors.peach, 0.15)};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 1.5rem;
  display: inline-block;

  code {
    background: rgba(0, 0, 0, 0.08);
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
  }
`;
