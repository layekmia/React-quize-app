import { useQuizes } from "../context/QuizeContext";

export default function NextButton() {
  const {dispatch, answer, index, numOfQuestions} = useQuizes()
  if (answer === null) return null;

  if(index < numOfQuestions - 1){
    return (
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="btn btn-ui"
        >
          Next
        </button>
      );
  }

  if(index === numOfQuestions - 1){
    return (
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="btn btn-ui"
        >
          Finish
        </button>
      );
  }
}
