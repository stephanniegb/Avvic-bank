import React, { useState } from "react";

function CareerModal({ toggleModal, department, role }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [file, setFile] = useState(null);

  const handleFullname = (event) => {
    setFullname(event.target.value);
  }; // controlle dform!!!!!!
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNum = (event) => {
    setPhoneNum(event.target.value);
  };
  const handleFile = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

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
        <h3 className="career-heading">Kindly fill the form below</h3>
        <form action="" className="job-form">
          <label htmlFor="Fullname">
            Fullname: <span>*</span> <br />
            <input
              type="text"
              placeholder="Fullname"
              name="fullname"
              value={fullname}
              onChange={handleFullname}
              required
            />
          </label>
          <label htmlFor="Email address">
            Email Address: <span>*</span> <br />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
              value={email}
              onChange={handleEmail}
              required
            />
          </label>
          <label htmlFor="phone number">
            Phone number: <span>*</span> <br />
            <input
              type="tel"
              name="phone number"
              id=""
              placeholder="Phone number"
              value={phoneNum}
              onChange={handlePhoneNum}
              required
            />
          </label>
          <label htmlFor="Department">
            Department: <span>*</span>
            <div className="custom-select">
              <select name="Department" id="Department">
                <option defaultValue={department} value={department}>
                  {department}
                </option>
              </select>
            </div>
          </label>
          <label htmlFor="Role">
            Select Role: <span>*</span>
            <div className="custom-select">
              <select name="Role" id="Role">
                <option defaultValue={role} value={role}>
                  {role}
                </option>
              </select>
            </div>
          </label>
          <label htmlFor="">
            Upload Your CV (Maximum size is 1 mb): <span>*</span> <br />
            <input
              type="file"
              name=""
              id=""
              accept="application/pdf"
              onChange={handleFile}
              required
            />
          </label>
          <button type="submit" className="modal-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CareerModal;
