import { createContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const addCorrectAnswer = () => {
    setCorrectAnswers((prev) => prev + 1);
  };

  const addWrongAnswer = () => {
    setWrongAnswers((prev) => prev + 1);
  };

  const totalAnswers = correctAnswers + wrongAnswers;
  const correctPercentage =
    totalAnswers === 0 ? 0 : (correctAnswers / totalAnswers) * 100;

  return (
    <QuizContext.Provider
      value={{
        correctAnswers,
        wrongAnswers,
        addCorrectAnswer,
        addWrongAnswer,
        correctPercentage,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
