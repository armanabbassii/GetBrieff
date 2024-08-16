function AnswerItem(props) {
    console.log("answer:", props.isSelected);
  
    return (
      <div className="my-3" onClick={props.onClick}>
        <button
          className={`border w-full rounded-md py-2
          ${props.isSelected && props.isAnswer ? "bg-green-400" : ""}
          ${props.isSelected && props.isWrong ? "bg-red-500" : ""}
          ${
            !props.isSelected && props.showCorrect && props.isAnswer
              ? "bg-green-400"
              : ""
          }
          ${
            !props.isSelected && props.showCorrect && !props.isAnswer
              ? "bg-gray-200"
              : ""
          }
          `}
        >
          {props.text}
        </button>
      </div>
    );
  }
  
  export default AnswerItem;
  