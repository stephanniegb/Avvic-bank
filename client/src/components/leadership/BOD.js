import React from "react";
import Leader from "./Leader";
import bod from "../../Data/leadership/BOD.json";
function BOD() {
  return (
    <section className="leader-wrapper grid-3">
      {bod.map((director) => {
        const { name, image, title, description, id } = director;
        return (
          <Leader
            key={id}
            name={name}
            image={image}
            title={title}
            id={id}
            description={description}
          />
        );
      })}
    </section>
  );
}

export default BOD;
