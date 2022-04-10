import React, { useEffect, useState } from "react";
import Mandible from "../Assets/mandible.jpg";
import "./End.css";
import "./Questions.css";

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);

  return (
    <div className="end-card">
      <div className="end-card-content">
        <div className="end-content">
          <span></span>
            <h3>Your Appliance</h3>
          <div className="result">
          <img className="result_img" src={Mandible}/>
          <div>
          <h4>Mandible Guide Flange</h4>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
           dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
          </div>
          </div>
          <button className="custom-btn btn-effect" onClick={onReset}>
            Test Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
