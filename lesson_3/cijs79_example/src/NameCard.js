const NameCard = (props) => {
  return (
    <div className="card">
      <div className="name">Name: {props.name}</div>
      <div className="age">Age: {props.age}</div>
    </div>
  );
};

export const DEFAULT_NAME = "UNKNOWN"
export const DEFAULT_AGE = 20


export default NameCard;