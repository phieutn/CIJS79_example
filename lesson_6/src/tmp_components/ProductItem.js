const ProductItem = (props) => {
  const { product, handleAddItem } = props;
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.imgUrl} className="card-img-top pt-2" />
        <div className="card-body">
          <h4>{product.name}</h4>
          <div>{product.price}</div>

        </div>
      </div>
    </div>
  );
};

export default ProductItem;
