import { useContext, useState } from "react";
import AnswerItem from "./AnswerItem";
import { playwrightQ } from "../constants/playwright";
import AnswerBox from "./AnswerBox";
import QuizContext from "../context/QuizContext";

function QuestionBox() {
  const [counter, setCounter] = useState(0);
  const { correctPercentage, correctAnswers, wrongAnswers } =
    useContext(QuizContext);

  if (counter === 19) {
    return (
      <div className="w-full border px-8 py-6 h-screen rounded-xl ">
        finished
        <div>Correct Answers: {correctPercentage.toFixed(2)}%</div>
      </div>
    );
  }
  return (
    <div className="w-full border px-8 py-6 rounded-xl">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-4xl">{playwrightQ[counter].title}</h1>
          <span className="bg-gray-100 px-3 py-2.5 rounded-md font-semibold text-xs flex items-center space-x-2">
            <span>remaining:</span>
            <span>{playwrightQ.length - counter}</span>
          </span>
        </div>
        <div className="space-x-3 flex my-4 justify-end">
          <div className="bg-green-200 rounded-md px-2 text-sm py-1">
            correct:
            {correctAnswers}
          </div>
          <div className="bg-red-200 rounded-md px-2 text-sm py-1">
            wrong:
            {wrongAnswers}
          </div>
        </div>
      </div>
      <AnswerBox
        answers={playwrightQ[counter].possibleAnswers}
        trueAnswerIndex={playwrightQ[counter].trueAnswerIndex}
      />
      <div className="flex justify-center mt-4"> 

      <button
        className="border border-black w-full py-2 rounded-md bg-gray-300 text-black"
        onClick={() => {
          if (counter < 19) setCounter((counter) => counter + 1);
        }}
      >
        NEXT
      </button>
      </div>
    </div>
  );
}

export default QuestionBox;
