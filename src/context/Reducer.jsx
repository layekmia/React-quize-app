

const initState = {
    questions: [],
  
    // 'Leading', 'error, 'ready', 'active', 'finished'
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaning: null,
  };
  
  const SECS_PER_QUESTIONS = 30;
  
  function reducer(state, action) {
  
    switch (action.type) {
      case "dataReceived":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
  
      case "dataFailed":
        return {
          ...state,
          status: "error",
        };
      case "startQuize":
        return {
          ...state,
          status: "active",
          secondsRemaning: state.questions.length * SECS_PER_QUESTIONS,
        };
  
      case "newAnswer": {
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
      }
  
      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          answer: null,
        };
      case "finish":
        return {
          ...state,
          status: "finished",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
      case "reset":
        return {
          ...initState,
          questions: state.questions,
          status: "ready",
        };
      case 'tick':
        return{
          ...state,
          secondsRemaning: state.secondsRemaning - 1,
          status: state.secondsRemaning === 0 ? 'finished': state.status,
        }
      default:
        throw new Error("Action unkwon");
    }
  }

export {initState, reducer}