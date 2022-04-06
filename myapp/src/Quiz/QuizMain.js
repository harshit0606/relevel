import React, { useState } from "react";
import "./QuizMain.css";
import Start from "./Start";
import Question from "./Questions";
import End from "./End";
import quizData from "../Data/quiz.json";
import Header from "../components/header/header";

const QuizMain = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const quizStartHandler = () => {
    setStep(2);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  };

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
          />
        )}
        {step === 3 && (
          <End
            results={answers}
            data={quizData.data}
            onReset={resetClickHandler}
          />
        )}
      </div>
    </div>
  );
};

export default QuizMain;
