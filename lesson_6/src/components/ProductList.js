import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { products, handleAddItem } = props;
  return (
    <div>
      <div className="container mt-4">
        <div className="row .row-cols-3">
          {products.map((pItem) => {
            return <ProductItem product={pItem} handleAddItem={handleAddItem} />;
          })}
        </div>
      </div>
      
    </div>
  );
};

export default ProductList;
