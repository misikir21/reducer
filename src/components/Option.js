import React from "react";

export default function Option({ question, dispatch, answer }) {
	const hasanswered = answer !== null;
	return (
		<div className="option">
			{question.options.map((option, index) => (
				<button
					className={`btn btn-option ${index === answer ? "answer" : ""} ${
						hasanswered
							? index === question.correctOption
								? "correct"
								: "wrong"
							: ""
					}`}
					key={option}
					onClick={() => dispatch({ type: "newanswer", payload: index })}
					disabled={hasanswered}
				>
					{option}
				</button>
			))}{" "}
		</div>
	);
}
