import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import PhoneBookItem from "./components/PhoneBookItem";

function App() {
  const [phoneBook, setPhoneBook] = useState([
    {
      id: 1,
      name: "Alice",
      phoneNumber: "0987654565",
    },
    {
      id: 2,
      name: "Bob",
      phoneNumber: "0987654565",
    },
    {
      id: 3,
      name: "Anh",
      phoneNumber: "09876312355",
    },
  ]);

  const [name, setName] = useState("Nguyen Van A");
  const [phone, setPhone] = useState("");
  const [searchText, setSearchText] = useState("");

  const addItem = () => {
    setPhoneBook([...phoneBook, { name: name, phoneNumber: phone }]);
    setName("");
    setPhone("");
  };

  const deleteDuplicate = () => {
    const result = phoneBook.reduce((rs, user) => {
      for (let i = 0; i < rs.length; i++) {
        if (rs[i].phoneNumber === user.phoneNumber) {
          return rs;
        }
      }
      rs.push(user);
      return rs;
    }, []);

    setPhoneBook(result);
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            {" "}
            <input
              type="text"
              className="form-control"
              placeholder="Tên"
              value={name}
              onChange={(e) => {
                console.log(e);
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            {" "}
            <input
              value={phone}
              type="text"
              className="form-control"
              placeholder="Điện thoại"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={addItem}>
              Thêm
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-4">
            <input
              type="email"
              className="form-control"
              placeholder="Tìm kiếm"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-primary" onClick={deleteDuplicate}>
              Xoá trùng
            </button>
          </div>
        </div>

        <div className="row mt-4">
          {phoneBook
            .filter((item) => {
              return (
                item.name.includes(searchText) ||
                item.phoneNumber.includes(searchText)
              );
            })
            .map((item) => {
              return <PhoneBookItem item={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
