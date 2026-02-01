import React from "react";
import vectorImg from "./assets/mainIMG.png";
import styled from "styled-components";

const WritersPortalBanner = () => {
  return (
    <div className="main-container banner-bg">
      <div className="banner-box-text">
        <h1 className="gilroy rem-35 weight-400">
          <span className="blueColor">Turbocharge</span> your freelance writing dream{" "}
        </h1>
        <p className="gray averta line-height rem-1">
          We&apos;re the platform for launching your dream technical writing
          job. Skip gig hunting and start building content for our top-tier
          clients
        </p>
        <WaitlistButton 
          href="https://form.waitlistpanda.com/go/pSgfeRmyXXzc3bBl5TH7"
          data-waitlist-id="pSgfeRmyXXzc3bBl5TH7"
        >
          Add me to waitlist!
        </WaitlistButton>
      </div>
      <div className="banner-box-image">
        <img src={vectorImg.src} alt="Writers Portal" />
      </div>
    </div>
  );
};

export default WritersPortalBanner;

const WaitlistButton = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.light};
  font-family: "Averta";
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.teal};
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: fit-content;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.light};
  }
  &:active {
    transform: scale(1);
  }
`;
