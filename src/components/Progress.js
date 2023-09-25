import React from "react";

export default function Progress({ index, numQuestions, points }) {
	return (
		<header className="progress">
			<p>
				Questions <strong>{index + 1}</strong>
				{numQuestions}
			</p>
			<p>
				<strong>{points} / x</strong>
			</p>
		</header>
	);
}
