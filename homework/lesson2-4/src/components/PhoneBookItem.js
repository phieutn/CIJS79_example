const PhoneBookItem = ({item}) => {
  return <div className="row">
    <div className="col-6">{item.name}</div>
    <div className="col-6">{item.phoneNumber}</div>
  </div>;
};

export default PhoneBookItem;