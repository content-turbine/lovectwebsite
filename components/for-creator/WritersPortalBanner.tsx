import React from "react";
import icon from "./assets/Rectangle6.png";
import vectorImg from "./assets/mainIMG.png";
import { Button } from "../styled";

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
        <Button href="https://form.waitlistpanda.com/go/pSgfeRmyXXzc3bBl5TH7" data-waitlist-id="pSgfeRmyXXzc3bBl5TH7" style={{backgroundColor: '#2CCED2'}}>Add me to waitlist!</Button>
      </div>
      <div className="banner-box-image">
        <img src={vectorImg.src} alt="" />
      </div>
    </div>
  );
};

export default WritersPortalBanner;
