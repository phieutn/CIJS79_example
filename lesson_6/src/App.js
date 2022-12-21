import { useState } from "react";
import "./App.css";

const App = () => {

  const [input, setInput] = useState("")
  const handleSubmit = (event) => {
		event.preventDefault()
	}

  const handleInputChange = (event) => {
		setInput(event.target.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={input} onChange={handleInputChange}/>
			<button type="submit">Submit</button>
		</form>
	)
};

export default App;
