import React from "react";
import auryc from "./assets/auryc.png";
import fauna from "./assets/Fauna_Logo.png";
import macrometa from "./assets/macrometa.png";
import yogabyteDB from "./assets/yogabyteDB.png";
const data = [
  {
    id: 1,
    name: "fauna",
    image: fauna,
  },
  {
    id: 2,
    name: "auryc",
    image: auryc,
  },
  {
    id: 3,
    name: "macrometa",
    image: macrometa,
  },
  {
    id: 4,
    name: "yogabyteDB",
    image: yogabyteDB,
  },
];
const Clients = () => {
  return (
    <div style={{ margin: "10px" }}>
      <br />
      <h4
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "19px",
          letterSpacing: "-0.015em",
        }}
      >
        Trusted by:
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {data.map((d) => (
          <div
            key={d.id}
            style={{
              display: "inline-block",
              margin: "10px",
            }}
          >
            <img src={d.image.src} alt={d.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
