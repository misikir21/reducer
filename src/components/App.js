import "../../src/index.css";
import Header from "./Header";
import Start from "./Start";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import { useEffect, useReducer } from "react";
import Questions from "./Questions";
import NextButton from "./NextButton";
function App() {
	const initalState = {
		questions: [],
		index: 0,
		status: "loading",
		answer: null,
		points: 0,
	};

	function reducer(state, action) {
		switch (action.type) {
			case "datarecived":
				return {
					...state,
					questions: action.payload,
					status: "ready",
				};
			case "datafailed":
				return {
					...state,
					status: "error",
				};

			case "start":
				return { ...state, status: "active" };
			case "newanswer":
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
				return {
					...state,
					index: state.index + 1,
					answer: null,
				};
			default:
				throw new Error("ACTOION UNKOWN");
		}
	}

	const [{ status, questions, index, answer, points, numQuestions }, dispatch] =
		useReducer(reducer, initalState);

	const numqustions = questions.length;
	useEffect(function () {
		fetch("http://localhost:8000/questions")
			.then((res) => res.json())
			.then((data) => dispatch({ type: "datarecived", payload: data }))
			.catch((err) => dispatch({ type: "datafailed" }));
	}, []);
	return (
		<div className="app">
			<Header />
			<Main>
				{status === "loading" && <Loader />}
				{status === "error" && <Error />}
				{status === "ready" && (
					<Start numQuestions={numQuestions} dispatch={dispatch} />
				)}
				{status === "active" && (
					<>
						<progress
							index={index}
							numQuestions={numqustions}
							points={points}
						/>
						<Questions
							question={questions[index]}
							dispatch={dispatch}
							answer={answer}
						/>
						<NextButton dispatch={dispatch} />
					</>
				)}
			</Main>
		</div>
	);
}

export default App;
