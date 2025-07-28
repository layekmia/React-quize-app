import { useQuizes } from "../context/QuizeContext"


export default function StartScreen() {
  const {numOfQuestions, dispatch} = useQuizes();
  return (
    <div className="start">
       <h2>Welcome to The React mastery</h2>
       <h3>{numOfQuestions} questions to test your React mastery</h3>
       <button className="btn" onClick={()=> dispatch({type: 'startQuize'})}>Let's start</button>
    </div>
  )
}
