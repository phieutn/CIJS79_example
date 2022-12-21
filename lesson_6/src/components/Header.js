const Header = (props) => {

  // console.log("props: ",props);
  const {cartItems} = props;
  console.log("After update:", cartItems)

  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://mindx.vn/images/logo.png"
            alt="Bootstrap"
            width={55}
          />
        </a>
        <button type="button" className="btn btn-success">
          Cart <span className="badge text-bg-secondary">{cartItems.length}</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
