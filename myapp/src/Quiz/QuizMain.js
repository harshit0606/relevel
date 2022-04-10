import React, { useState } from "react";
import "./QuizMain.css";
import Start from "./Start";
import Question from "./Questions";
import End from "./End";
import quizData from "../Data/quiz.json";
import aData from "../Data/ans.json";
import Header from "../components/header/header";
let final = [];
const QuizMain = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [ques, setQues] = useState([]);
  const [correctOutput, setCorrectOutput] = useState(0);


  const quizStartHandler = () => {
    setStep(2);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  };


const ansCheckHandler = (ansOp) => {
  let correct = 0;

  ansOp.forEach((ans) => {
    final.push(ans.a);
  });

  aData.ansData.forEach((doc) => {
    if(doc.choice[0].trim() === final[0].trim() && doc.choice[1].trim() === final[1].trim() && doc.choice[2].trim() === final[2].trim() && doc.choice[3].trim() === final[3].trim() ){
      setCorrectOutput(doc.answer)
      correct = doc.answer
    }
  })
  
}

  return (
    <div className="quiz-god">
      <Header />
      <div className="quiz-main">
        {step === 1 && <Start onQuizStart={quizStartHandler} />}
        {step === 2 && (
          <Question
            data={quizData.data[activeQuestion]}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={quizData.data.length}
            activeQuestion={activeQuestion}
            onSetActiveQuestion={setActiveQuestion}
            onSetStep={setStep}
            answersArr = {answers}
            onFinish = {ansCheckHandler}
          />
        )}
        {step === 3 && (
          <End
            results={answers}
            data={quizData.data}
            answersArr = {answers}
            correctOutput = {correctOutput}
            onReset={resetClickHandler}
          />
        )}
      </div>
    </div>
  );
};

export default QuizMain;
