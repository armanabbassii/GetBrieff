import { useContext, useState } from "react";
import AnswerItem from "./AnswerItem";
import { playwrightQ } from "../constants/playwright";
import AnswerBox from "./AnswerBox";
import QuizContext from "../context/QuizContext";

function QuestionBox() {
  const [counter, setCounter] = useState(0);
  const { correctPercentage, correctAnswers, wrongAnswers } =
    useContext(QuizContext);

  if (counter === 20) {
    return (
      <div className="w-full border px-6 py-6 h-screen rounded-xl ">
        Finishedss
        <div>Correct Answers: {correctPercentage.toFixed(2)}%</div>
      </div>
    );
  }
  return (
    <div className="w-full border px-8 py-6 rounded-xl">
      {/* Question Counter */}
      <div className="flex justify-between items-center mb-4">
        <span className=" text-green-500 font-semibold">
          Correct: {correctAnswers}
        </span>
        <span className="text-red-500 font-semibold">
          Incorrect: {wrongAnswers}
        </span>
        <span className="text-yellow-400 font-semibold">
          Remaining: {playwrightQ.length - counter}
        </span>
      </div>

      {/* Question Title */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl">
            {playwrightQ[counter].title}
          </h1>
        </div>
      </div>
      {/* Answer Options */}
      <AnswerBox
        answers={playwrightQ[counter].possibleAnswers}
        trueAnswerIndex={playwrightQ[counter].trueAnswerIndex}
      />
      {/* NEXT Button */}
      <div className="flex justify-center mt-4">
        <button
          className="border border-black w-full py-2 rounded-md bg-yellow-200 text-black"
          onClick={() => {
            if (counter < 20) setCounter((counter) => counter + 1);
          }}
        >
          Next
        </button>
      </div>
      {/* Explain Button */}
      <div className="flex justify-center mt-4">
        <button className="border border-black w-full py-2 rounded-md bg-blue-200 text-black">
          Explain
        </button>
      </div>
    </div>
  );
}

export default QuestionBox;
