import React from "react";

const Header = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="https://mindx.vn/images/logo.png" height={45} />
        </a>
        <div className="text-end">
          <button type="button" className="btn btn-success">
            Cart{" "}
            <span className="badge text-bg-danger">{cartItems.length}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
