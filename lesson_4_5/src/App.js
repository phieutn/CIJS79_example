import "./App.css";
import logo from "./logo.svg";
import NameCard from "./NameCard";

function App() {
  const onClick = () => {
    console.log("Click me");
  };
  return (
    <div>
      <h1>Normal function</h1>
      <button onClick={onClick}>Click me</button>
      <h1>Anonymous function</h1>
      <button onClick={() => { console.log("Hello") }}>Click me</button>
    </div>
  );
}



export default App;
