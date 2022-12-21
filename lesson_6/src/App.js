import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          Name:
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              value={input}
              onChange={handleInputChange}
            />
            Address:
            <input
              className="form-control"
              type="text"
              value={address}
              onChange={handleAddressChange}
            />
            <button className="btn btn-primary mt-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
