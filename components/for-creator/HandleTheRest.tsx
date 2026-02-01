import React from "react";
import img from "./assets/31259891.png";
const HandleTheRest = () => {
  return (
    <div className="HandleTheRest">
      <h1 className="gilroy rem-3 blueColor weight-500">
        You create. We will handle the rest
      </h1>
      <div className="handle-reset-section">
        <div className="handle-the-reset-img">
          <img src={img} alt="" />
        </div>
        <div className="handle-the-reset-text">
          <p className="averta gray rem-1 line-height">
            {" "}
            <span className="weight-700 blueColor">
              No more gig hunting, just create
            </span>{" "}
            <br />
            <br />
            <span className="line-height">
              We partner with top-tier clients looking for high-quality content
              and curate the best technical writing gigs across a range of
              technical topics. Say goodbye to the wasted gig-hunting days,
              while you watch your dashboard fill up with new and exciting work.
            </span>
            <br />
            <br />
            <span className="weight-700 blueColor">
              Familiar writing tools, without distractions
            </span>{" "}
            <br />
            <br />
            <span className="line-height">
              Our dashboard allows you to organize all your writing gigs in one
              place, integrating seamlessly with Google Docs. It greatly
              simplifies the writing process, allowing you to comment, add
              elements, format, and work in a distraction-free, full-screen
              mode.
            </span>
          </p>
        </div>
      </div>

      <h4 className="rem-2 gilroy gray bold">
        get matched to the best suited content projects and manage work,
        payments and feedback at <span className="redColor">One place.</span>
      </h4>
    </div>
  );
};

export default HandleTheRest;
