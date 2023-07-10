import { useState, useRef } from "react";
import listofJobs from "../../Data/Jobs/jobList.json";
import CareerModal from "./CareerModal";
import useToggleModal from "../../hooks/useToggleModal";

function DropDown() {
  const [active, setActive] = useState(null);
  const [activeModal, setActiveModal] = useState(1);
  const jobCategoryRef = useRef(null);
  const careerModalRef = useRef();

  const [toggleModal] = useToggleModal(
    careerModalRef,
    activeModal,
    setActiveModal
  );
  const handleClick = (id) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };
  return (
    <div id="dropDown">
      <div>
        <ul>
          {listofJobs.length > 0 &&
            listofJobs.map((jobs, index) => (
              <li
                className={active === index ? "showDropDown" : "hideDropDown"}
                key={index}
                ref={jobCategoryRef}
              >
                <button
                  className="jobCategory-btn"
                  onClick={() => handleClick(index)}
                >
                  <h4>{jobs.Department} </h4>
                  <span>
                    {active === index ? (
                      <img
                        src="/assets/icons/Vector.svg"
                        alt=""
                        style={{ transition: "all 0.4s" }}
                      />
                    ) : (
                      <img
                        src="/assets/icons/Vector(1).svg"
                        alt=""
                        style={{ transition: "all 0.4s" }}
                      />
                    )}
                  </span>
                </button>

                <ul
                  className={
                    jobs["Available Jobs"].length > 0 ? "jobs-dropD" : ""
                  }
                >
                  {jobs["Available Jobs"].map((job, jobIndex) => (
                    <li key={job.id} className="job">
                      <div className="dropD-text">
                        <div>
                          <h4>{job.Role}</h4>
                          <h5>{job.Location}</h5>
                        </div>
                        <div>
                          <button
                            className="apply-btn"
                            onClick={() => {
                              toggleModal(job.id);
                            }}
                            ref={careerModalRef}
                          >
                            Apply now
                          </button>
                        </div>
                        {activeModal === job.id && (
                          <CareerModal
                            toggleModal={toggleModal}
                            department={jobs.Department}
                            role={job.Role}
                          />
                        )}
                      </div>
                      <p>{job["Job Description"]}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
