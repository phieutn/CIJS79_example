import "./App.css";
import logo from './logo.svg';
import NameCard from "./NameCard";

function App() {


  return (
    <div>
      <NameCard name="Alice" age="20" />
      <NameCard name="Bob" age="20" />
      <NameCard name="Cris" age="20" />
    </div>
  );
}

export default App;
