import React, { useState, useEffect, useRef } from "react";
import "./Questions.css";
const ansOp = [];
const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
  answersArr,
  onFinish,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select at least one option!");
    }
    console.log(selected);
    ansOp.push({ q: data.question, a: selected })
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);

    setSelected("");

    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onFinish(ansOp);
      onSetStep(3);
    }
  };

  return (
    <div className="questions-godd">
      <div className="questions-card">
        <div className="questions-card-content">
          <div className="questions-content">
            <div className="ques-ques-divv">
              {/* <span className="question-number">Question #{data.qno}</span> */}
              <h2 className="ques-ques">{data.question}</h2>
            </div>

            <div className="ques-control" ref={radiosWrapper}>
              {data.choices.map((choice, i) => (
                <label className="ques-radio rad-label" key={i}>
                  <input
                    className="ques-input rad-input"
                    type="radio"
                    name="answer"
                    value={choice}
                    onChange={changeHandler}
                  />
                  <div class="rad-design"></div>
                  <div class="rad-text">&nbsp;&nbsp;{choice}</div>
                </label>
              ))}
            </div>
            {error && <div className="ques-error-text">{error}</div>}
            <div className="info-tech">
              <span>
                Experimental studies and clinical case reports in growing
                patients have shown that implants act in a similar manner as
                ankylosed teeth by retarding the growth of the alveolar process
                in their immediate vicinity.
              </span>
            </div>

            <div className="ques-btn-div">
              <button
                className="custom-btn btn-effect"
                onClick={nextClickHandler}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ques-ques-div">
        {answersArr.map((choice, i) => (
          <div className="side-ress">
            <h2 className="ques-quess">- {choice.q}</h2>
            <span className="ques-anss">| {choice.a}</span>
          </div>
        ))}
        {/* <h2 className="ques-quess">- {data.question}</h2> */}
        {/* <span className="ques-quess">{answersArr[activeQuestion  - 1]}</span> */}
      </div>
    </div>
  );
};

export default Question;
