import React, { useRef, useState } from "react";
import useToggleModal from "../../../hooks/useToggleModal";
import LeaderModal from "./LeaderModal";

function Leader({ name, title, image, id, description }) {
  const [activeModal, setActiveModal] = useState(null);
  const profileRef = useRef();
  const [toggleModal] = useToggleModal(profileRef, activeModal, setActiveModal);
  return (
    <>
      <div
        className="profile"
        ref={profileRef}
        onClick={() => {
          toggleModal(id);
        }}
      >
        <div className="fig-img-wrapper">
          <img src={image} alt={name} />
        </div>
        <figcaption>
          <h4>{name}</h4>
          <p>{title}​</p>
        </figcaption>
      </div>
      {activeModal === id && (
        <LeaderModal
          toggleModal={toggleModal}
          description={description}
          image={image}
          name={name}
          title={title}
        />
      )}
    </>
  );
}

export default Leader;
