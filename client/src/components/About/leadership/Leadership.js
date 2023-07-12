import React, { useState } from "react";
import BOD from "./BOD";
import MT from "./MT";
import HOP from "./HOP";
function Leadership() {
  const [isActive, setActive] = useState("BOD");
  const [activeHeading, setActiveHeading] = useState(" BOARD OF DIRECTORS");
  const handleSwitch = (id) => {
    setActive(id);
    switch (id) {
      case "BOD":
        setActiveHeading(" BOARD OF DIRECTORS");
        break;
      // case "HOP":
      //   setActiveHeading(" HEADS OF PORTFOLIOS");
      //   break;
      case "MT":
        setActiveHeading(" MANAGEMENT TEAM");
        break;
      default:
        setActiveHeading(" BOARD OF DIRECTORS");
    }
  };
  return (
    <>
      <h2>Our Leadership</h2>
      <div id="btns-wrapper">
        <button
          className="lead-category-btn"
          onClick={() => {
            handleSwitch("BOD");
          }}
        >
          BOARD OF DIRECTORS
        </button>
        {/* <button
          className="lead-category-btn"
          onClick={() => {
            handleSwitch("HOP");
          }}
        >
          HEADS OF PORTFOLIOS
        </button> */}
        <button
          className="lead-category-btn"
          onClick={() => {
            handleSwitch("MT");
          }}
        >
          MANAGEMENT TEAM
        </button>
      </div>
      <h4 id="heading-display">— {activeHeading} — </h4>
      <>
        {isActive === "BOD" && <BOD />}
        {/* {isActive === "HOP" && <HOP />} */}
        {isActive === "MT" && <MT />}
      </>
    </>
  );
}

export default Leadership;
