import React from "react";
import bannerImage from "./assets/b-2.svg";
const BannerSection = () => {
  return (
    <div className="ai-banner">
      <div>
        <h6
          className="gilroy"
          style={{
            color: "#26474E",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: "40px",
            lineHeight: "143.69%",
            textAlign: "center",
            letterSpacing: "0.005em",
          }}
        >
          Write technical blogs <br /> like never before! <br /> Fast.
          Efficient. Super Easy
        </h6>
        <p
          className="averta"
          style={{
            color: "#26474E",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "center",
            letterSpacing: "0.005em",
          }}
        >
          Write blogs superfast with the <br /> help of artificial intelligence
        </p>
        <div className="ml-embedded" data-form="qDgCPM"></div>
      </div>
      <div
        className="ai-banner-image-div"
        style={{
          height: "677px",
          width: "957px",
        }}
      >
        <img
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "inherit",
            width: "inherit",
          }}
          src={bannerImage}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default BannerSection;
