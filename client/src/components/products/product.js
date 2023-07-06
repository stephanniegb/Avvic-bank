import React from "react";
import { Link } from "react-router-dom";
function product({ Image, Name, introDescription }) {
  const path = Name.toLowerCase().replace(/[\s,]+/g, "");
  return (
    <>
      <div className="product">
        <img src={Image} alt="" />
        <h3>{Name}</h3>
        <p>{introDescription}</p>
        <Link to={path}>
          <button>learn more</button>
        </Link>
      </div>
    </>
  );
}

export default product;
