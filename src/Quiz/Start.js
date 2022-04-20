import React from "react";
import "../Quiz/Start.css";

const Start = ({ onQuizStart }) => {
  return (
    <div className="start-card">
      <div className="start-card-content">
        <div className="start-card-contentt">
          <span className="start-card-subheading">Welcome to the</span>
          <br />
          <h1 className="start-card-heading">Prosthesis selection tool</h1>
          <p className="start-card-text">
            The tool makes use of the ITI’s highly regarded classification
            system referred to as SAC: Straightforward, Advanced, Complex. It is
            based on the book entitled "The SAC Classification in Implant
            Dentistry", published by the ITI in cooperation with Quintessence
            Publishing Group. The tool distills the content of the book in an
            easy-to-use process that takes you through each step necessary to
            identify the degree of complexity and potential risk involved in
            individual cases.
          </p>
        </div>
        <button className="start-btn effect" onClick={onQuizStart}>
          Start Assesment
        </button>
      </div>
    </div>
  );
};

export default Start;
