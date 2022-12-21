import { useState } from "react";

const App2 = () => {
	return (
		<div>
            <div>
            ============Counter 1====================
            </div>
			<Counter />
            {/* <div>
            ============Counter 2====================
            </div>
			<Counter />
            <div>
            ============Counter 3====================
            </div>
			<Counter /> */}
		</div>
	)
}
// 1
// const increaseAge = () => {
// 	setPerson((prev) => {
// 		return {
// 			...prev,
// 			age: prev.age + 1
// 		}
// 	})
// }

// 2
// const increaseAge = () => {

// 	setPerson(() => {
// 		return {
// 			...person,
// 			age: person.age + 1
// 		}
// 	})
// }

const Counter = () => {
    // let count = 0;
	const [count, setCount] = useState(0)

	const onIncrease = () => {
        // count = count + 1;
		setCount(count + 1)		
	}

	return (
		<div>
			<div>{count}</div>
			<button onClick={onIncrease}>Increase</button>
		</div>
	)
}

export default App2;
