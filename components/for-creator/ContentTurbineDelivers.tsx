import React from "react";
import iconTwo from "./assets/Happy2.png";
import victory from "./assets/victoryIMG.png";
import earning from "./assets/earning.png";

import checklist from "./assets/checklist1.png";
const ContentTurbineDelivers = () => {
  return (
    <div className="ContentTurbineDelivers">
      <h1 className="rem-3 gilroy blueColor">
        What you get with Content Turbine?
      </h1>
      <div className="ContentTurbine-container">
        <div className="card-container">
          <div className="card ">
            <div className="card-logo">
              <img src={iconTwo} alt="" />
              <h2 className="rem-2 gilroy">
                Unlimited Earning Opportunities, Anywhere
              </h2>
              <p className="averta">
                We believe that you should be paid what you&apos;re worth,
                wherever you are. That&apos;s why we offer a remote-first
                environment with flexible payment models, so you choose the
                payment model that suits you best. Build content worry-free, and
                let us help you attain financial freedom.
              </p>
            </div>
          </div>
          <div className="border-one"></div>
          <div className="border-two"></div>
        </div>
        <div className="earning-card-img">
          <img src={earning} alt="" />
        </div>
        <div className="card-img extra__customize display-none">
          <img src={victory} alt="" />
        </div>
        <div className="card-container content__branch display-none">
          <div className="card blueSky__color">
            <div className="card-logo">
              <img src={iconTwo} alt="" />
              <h2 className="gilroy rem-2">
                Ghostwrite or Stand Out, It’s Your Choice
              </h2>
              <p className="averta">
                We give you the flexibility to ghostwrite or stand out from the
                pack - it’s your choice. Build an online portfolio that
                showcases your best work, and become a preferred writer for our
                clients.
              </p>
            </div>
          </div>
          <div className="color-one"></div>
          <div className="color-two"></div>
        </div>

        <div className="card-container content__branch responsive-display">
          <div className="card blueSky__color">
            <div className="card-logo">
              <img src={iconTwo} alt="" />
              <h2 className="gilroy rem-2">
                Ghostwrite or Stand Out, It’s Your Choice
              </h2>
              <p className="averta">
                We give you the flexibility to ghostwrite or stand out from the
                pack - it’s your choice. Build an online portfolio that
                showcases your best work, and become a preferred writer for our
                clients.
              </p>
            </div>
          </div>
          <div className="color-one"></div>
          <div className="color-two"></div>
        </div>
        <div className="card-img extra__customize left-50 responsive-display">
          <img src={victory} alt="" />
        </div>

        <div className="card-container content__branch-third">
          <div className="card blueSky__color third__section__bg">
            <div className="card-logo">
              <img src={iconTwo} alt="" />
              <h2 className="gilroy rem-2">Quality Work, Always</h2>
              <p className="averta">
                Thanks to our skills matching engine, new gigs matching your
                skill level and specific client preferences will land in your
                dashboard. Pick one or more gigs based on your flexibility -
                leaving you with more time to deliver quality work and meet
                deadlines.
              </p>
            </div>
          </div>
          <div className="color-one"></div>
          <div className="color-two"></div>
        </div>
        <div className="quality_work_image">
          <img src={checklist} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContentTurbineDelivers;
