import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./NextButton";
import Progress from "./components/Progress";
import FinshScreen from "./FinshScreen";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
const SECOUNDS_PER_QUESTION = 30;

function App() {
  const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secoundsRemaining: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
      case "dataFailed":
        return { ...state, status: "error" };

      case "start":
        return {
          ...state,
          status: "active",
          secoundsRemaining: state.questions.length * SECOUNDS_PER_QUESTION,
        };

      case "newAnswer":
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };

      case "nextQuestion":
        return { ...state, index: state.index + 1, answer: null };

      case "finish":
        return {
          ...state,
          status: "finished",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
      case "restart":
        return { ...initialState, questions: state.questions, status: "ready" };

      case "tick":
        return {
          ...state,
          secoundsRemaining: state.secoundsRemaining - 1,
          status: state.secoundsRemaining === 0 ? "finished" : state.status,
        };

      default:
        throw new Error("unknown request");
    }
  }

  const [
    { questions, status, index, answer, points, highscore, secoundsRemaining },
    dispatch,
    i,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "finished" && (
          <FinshScreen
            maxPossiblePoints={maxPossiblePoints}
            points={points}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}

        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <Timer
                dispatch={dispatch}
                secoundsRemaining={secoundsRemaining}
              />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
