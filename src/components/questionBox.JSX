import { useContext, useEffect, useState } from "react";
import AnswerItem from "./AnswerItem";
import { playwrightQ } from "../constants/playwright";
import AnswerBox from "./AnswerBox";
import QuizContext from "../context/QuizContext";
import Button from "./button";
import ShowHide from "./showHide";

function QuestionBox() {
  const [counter, setCounter] = useState(0);
  const { correctPercentage, correctAnswers, wrongAnswers } =
    useContext(QuizContext);

  {
    /* Final Results */
  }
  if (counter === 20) {
    return (
      <div className="w-full border px-8 py-6 ">
        <div className="w-full border px-8 py-10 rounded-xl text-red-500 flex flex-col items-center font-semibold">
          <div>Correct Answers: {correctPercentage.toFixed(2)}%</div>
          {/* Additional sentence with a link */}
          <p className="text-black mt-4">
            Check out the detailed explanation on our
            <a
              href="https://www.google.com/"
              className="text-blue-500 underline ml-1"
            >
              results page
            </a>
            .
          </p>
          <p className="text-black mt-4 text-sm">
            Success often comes after many trials 🥺
          </p>
          <p className="text-black mt-4 text-sm">
            Don't give up — try the quiz again and continue honing your skills.
          </p>

          {/* Reload Button */}
          <button
            onClick={() => window.location.reload()}
            className="mt-6 py-2 w-2/4 bg-blue-500 border rounded-md text-white"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full border px-8 py-5 rounded-xl">
      {/* Question Counter */}
      <div className="flex justify-between items-center mb-4">
        <span className=" text-green-600 text-20">
          Correct: {correctAnswers}
        </span>
        <span className="text-red-600 text-20">Incorrect: {wrongAnswers}</span>
        <span className="text-yellow-500 text-20">
          Remaining: {playwrightQ.length - counter}
        </span>
      </div>

      {/* Question Title */}
      <div className="w-full border px-8 py-4 ">
        <div className="flex justify-between items-center mb-6">
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
      </div>
      {/* NEXT Button */}
      <Button
        color="yellow"
        label="Next"
        onClick={() => {
          if (counter < 20) setCounter(counter + 1);
        }}
      />
      {/* Explanation Section */}
      <ShowHide
        counter={counter} 
        description={playwrightQ[counter].description}
      />
    </div>
  );
}

export default QuestionBox;
