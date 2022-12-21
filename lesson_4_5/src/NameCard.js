const NameCard = (props) => {

  return (
    <div className="card">
      { props.children }
      <div className="name">Name: {props.name}</div>
      <div className="age">Age: {props.age}</div>
    </div>
  );
};

export default NameCard;