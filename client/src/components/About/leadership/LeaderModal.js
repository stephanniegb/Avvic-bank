import React from "react";

import "animate.css";
function LeaderModal({ image, name, title, toggleModal, description }) {
  return (
    <div className="overlay">
      <div className="modal-wrapper">
        <div className="close-btn-wrapper">
          <button onClick={toggleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 384 512"
              fill="#0d9999"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>
        <main>
          <div className=" fig-img-wrapper">
            <img src={image} alt={name} />
          </div>
          <aside>
            <h3>{name}</h3>
            <h4>{title}</h4>
            <p>{description}</p>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default LeaderModal;
