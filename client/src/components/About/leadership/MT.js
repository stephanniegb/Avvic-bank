import React from "react";
import mt from "../../../Data/leadership/MT.json";
import Leader from "./Leader";

function MT() {
  return (
    <section className="leader-wrapper grid-2">
      {mt.map((manager) => {
        const { name, image, title, description, id } = manager;
        return (
          <Leader
            name={name}
            image={image}
            title={title}
            description={description}
            id={id}
          />
        );
      })}
    </section>
  );
}

export default MT;
