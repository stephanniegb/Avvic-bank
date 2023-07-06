import { useState } from "react";

function FqaDropDown({ Data }) {
  const [active, setActive] = useState(null);

  const handleFaqToggle = (id) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <section className="fqa-wrapper">
      <h3>Frequently Asked Questions</h3>
      {Data &&
        Data.map((item, index) => {
          const { id, question, answer } = item;

          return (
            <ul>
              <li key={id}>
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="fqa-btn"
                >
                  <p>{question}</p>
                  <span>
                    <img
                      src={`assets/icons/Vector${
                        active === index ? "" : "(1)"
                      }.svg`}
                      alt={active === index ? "hhhh" : "jjjj"}
                      style={{ transition: "all 0.4s" }}
                    />
                  </span>
                </button>

                <ul className={active === index ? "showAns" : "hideAns"}>
                  <li>
                    <p>{answer}</p>
                  </li>
                </ul>
              </li>
            </ul>
          );
        })}
    </section>
  );
}

export default FqaDropDown;
