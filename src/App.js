import React from "react";

function Food({ lunch, dinner }) {
	return (
		<h1>
			I eat {lunch} and {dinner}
		</h1>
	);
}

function App() {
	return (
		<div>
			<h1>Hello</h1>
			{[
				<Food lunch="ramen" dinner="samgyubsal" />,
				<Food lunch="haksik" dinner="buldak" />,
			]}
		</div>
	);
}

export default App;
