import { createContext, useContext, useReducer, useEffect } from "react";
import { initState, reducer } from "./Reducer";

const quizeContext = createContext();

function QuizeProviders({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaning },
    dispatch,
  ] = useReducer(reducer, initState);

  const numOfQuestions = questions.length;
  const totalPoint = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(function () {
    async function getQuizeData() {
      try {
        const res = await fetch(
          `https://raw.githubusercontent.com/raselmia63/random-apis/refs/heads/main/questions.json`
        );
        if (!res.ok) throw new Error("Error");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data.questions });
      } catch (err) {
        dispatch({ type: "dataFailed" });
        console.error(err.message);
      }
    }

    getQuizeData();
  }, []);

  return (
    <quizeContext.Provider
      value={{
        question: questions[index],
        status,
        index,
        answer,
        points,
        highscore,
        numOfQuestions,
        secondsRemaning,
        totalPoint,
        dispatch,
      }}
    >
      {children}
    </quizeContext.Provider>
  );
}

function useQuizes() {
  const context = useContext(quizeContext);
  if (context === undefined)
    throw new Error("quzeContext use from outside of Quizeprovider");
  return context;
}

export { QuizeProviders, useQuizes };
