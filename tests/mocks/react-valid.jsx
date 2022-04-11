/* eslint-disable import/no-unresolved, node/no-unsupported-features/es-syntax */
import React, { useState } from 'react';

function Example() {
	// Declare a new state variable, which we'll call 'count'
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You clicked {count} times</p>

			<button
				onClick={setCount(count + 1)}
				type="button"
			>
				Click me
			</button>
		</div>
	);
}

Example();
