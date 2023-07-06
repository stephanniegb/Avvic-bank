import React from "react";

function NoPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          color: "#020b32",
        }}
      >
        404{" "}
        <span
          style={{
            borderRight: "1px solid #020b32",
            margin: "0 10px",
          }}
        ></span>{" "}
        Page not found
      </h2>
    </div>
  );
}

export default NoPage;
