import React from "react";
import hop from "../../Data/leadership/HOP.json";
import Leader from "./Leader";

function HOP() {
  return (
    <section className="leader-wrapper grid-2">
      {hop.map((head) => {
        const { name, image, title, description, id } = head;
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

export default HOP;
