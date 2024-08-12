import { useContext, useState } from "react";
import { playwrightQ } from "../assets/constants/playwrightQ&A.js";


function questionBox() {
    const [counter , setCounter] = useState(0)


  return (
    <div className="w-full border px-7 py-6 rounded-xl">
      <div className="flex flex-col">
        <div className="flex justify-betweeen item-center">
          <h1 className="font-semibold text-2xl">
            {playwrightQ[counter].title}
          </h1>
        </div>
      </div>

      <AnswerBox
        asnwer={playwrightQ[counter].PossibleAnswers}
        trueAnswerIndex={playwrightQ[counter].TrueAnswerIndex}
      />
      <button
        onClick={() => {
          if (counter < 19) setCounter((counter) => counter + 1);
        }}
      ></button>
    </div>
  );
}

export default questionBox;
