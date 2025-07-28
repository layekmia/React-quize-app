import { useEffect } from "react"
import { useQuizes } from "../context/QuizeContext";
export default function Timer() {
const {dispatch, secondsRemaning} = useQuizes();

    const minute = Math.floor(secondsRemaning / 60);
    const seconds = secondsRemaning % 60;
    useEffect(function(){
       const timer =  setInterval(()=> {
            dispatch({type: 'tick'})
        }, 1000)

        return () => clearInterval(timer);

    }, [dispatch])
  return (
    <div className="timer">
        {minute < 10 && '0'}
        {minute}:
        {seconds < 10 && 0}
        {seconds}
    </div>
  )
}
