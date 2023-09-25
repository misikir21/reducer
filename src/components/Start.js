import React from "react";

export default function className({ numqustions, dispatch }) {
	return (
		<div className="start">
			<h2>welome to the react quiz</h2>
			<h3>{numqustions} questions to test your react mastery</h3>
			<button onClick={() => dispatch({ type: "start" })}>
				let's get started{" "}
			</button>
		</div>
	);
}
