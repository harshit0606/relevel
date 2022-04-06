import React, { useEffect, useState } from "react";
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
          <span>Your</span>
          <br />
          <h3>Results</h3>
          <p>
            {correctAnswers} of {data.length}
          </p>
          <p>
            <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
          </p>
          <button className="custom-btn btn-effect" onClick={onReset}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
