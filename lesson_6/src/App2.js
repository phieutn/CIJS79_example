import { useState } from "react";
import "./App.css";

const App2 = () => {
  const [user, setUser] = useState({
    name: "",
    address: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    console.log(`key: ${key} value: ${value}`);
    setUser({
      ...user,
      [key]: value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            value={user.name}
            placeholder="Enter name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            className="form-control"
            name="address"
            value={user.address}
            placeholder="Enter address"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Select tag</label>
          <select
            className="form-control"
            name="selectTag"
            onChange={handleInputChange}
            value={user.selectTag}
          >
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            rows={3}
            value={user.description}
            name="description"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App2;
