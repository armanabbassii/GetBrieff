import { useContext, useEffect, useState } from "react";
import AnswerItem from "./AnswerItem";
import QuizContext from "../context/QuizContext";

function AnswerBox(props) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { addCorrectAnswer, addWrongAnswer } = useContext(QuizContext);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    if (index === props.trueAnswerIndex) {
      addCorrectAnswer();
    } else {
      addWrongAnswer();
    }
  };

  const showCorrect = selectedAnswer !== null;

  useEffect(() => {
    setSelectedAnswer(null);
  }, [props.answers]);

  return (
    <div>
      {props.answers.map((item, index) => {
        const isAnswer = props.trueAnswerIndex === index;
        const isSelected = selectedAnswer === index;

        const isWrong =
          selectedAnswer !== props.trueAnswerIndex && selectedAnswer === index;

        return (
          <AnswerItem
            key={index}
            onClick={() => selectedAnswer === null && handleAnswerClick(index)}
            text={item}
            isAnswer={isAnswer}
            isSelected={isSelected}
            isWrong={isWrong}
            showCorrect={showCorrect}
          />
        );
      })}
    </div>
  );
}

export default AnswerBox;
