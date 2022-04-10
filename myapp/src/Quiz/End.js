import React, { useEffect, useState } from "react";
import Mandible from "../Assets/mandible.jpg";
import "./End.css";
import "./Questions.css";
import aData from "../Data/ans.json";

const End = ({ results, data, onReset, answerArr, correctOutput }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  // const [correctOutput, setCorrectOutput] = useState(0);

  useEffect(() => {
    let correct = 0;
    // results.forEach((result, index) => {
    //   if (result.a === data[index].answer) {
    //     correct++;
    //   }
    // });
    // setCorrectAnswers(correct);
    // if (answerArr == aData.ansData[0].choice) {
    //   correct = aData.ansData[0].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[1].choice) {
    //   correct = aData.ansData[1].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[2].choice) {
    //   correct = aData.ansData[2].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[3].choice) {
    //   correct = aData.ansData[3].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[4].choice) {
    //   correct = aData.ansData[4].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[5].choice) {
    //   correct = aData.ansData[5].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[6].choice) {
    //   correct = aData.ansData[6].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[7].choice) {
    //   correct = aData.ansData[7].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[8].choice) {
    //   correct = aData.ansData[8].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[9].choice) {
    //   correct = aData.ansData[9].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[10].choice) {
    //   correct = aData.ansData[10].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[11].choice) {
    //   correct = aData.ansData[11].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[12].choice) {
    //   correct = aData.ansData[12].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[13].choice) {
    //   correct = aData.ansData[13].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[14].choice) {
    //   correct = aData.ansData[14].answer;
    //   setCorrectOutput(correct);
    // } else if (answerArr == aData.ansData[15].choice) {
    //   correct = aData.ansData[15].answer;
    //   setCorrectOutput(correct);

      
    // }

    // console.log(correctOutput);
  }, []);

  return (
    <div className="end-card">
      <div className="end-card-content">
        <div className="end-content">
          {correctOutput && correctOutput === 13 && (
            <div>
              <h3>Your Appliance</h3>
              <div className="result">
                <img className="result_img" src={Mandible} />
                <div>
                  <h4>Mandible Guide Flange</h4>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages
                  </p>
                </div>
              </div>
            </div>
          )}
          {correctOutput&& correctOutput === 12 && (
            <div>
              <h3>Your Appliance</h3>
              <div className="result">
                <img className="result_img" src={Mandible} />
                <div>
                  <h4>Palatal Ramp Prosthesis</h4>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages
                  </p>
                </div>
              </div>
            </div>
          )}

          <button className="custom-btn btn-effect" onClick={onReset}>
            Test Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
