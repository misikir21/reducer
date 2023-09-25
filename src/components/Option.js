import React from "react";

export default function Option({ question, dispatch, answer }) {
	return (
		<div className="option">
			{question.options.map((option, index) => (
				<button
					className={`btn btn-option ${index === answer ? "answer" : ""} ${
						index.correctOption ? "correct" : "wrong"
					}`}
					key={option}
					onClick={() => dispatch({ type: "newanswer", payload: index })}
				>
					{option}
				</button>
			))}{" "}
		</div>
	);
}
