import { useState } from "react";
const App3 = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Áo polo",
      price: 1000,
    },
    {
      id: 2,
      name: "Quần short",
      price: 2000,
    },
    {
      id: 3,
      name: "Giày Nike",
      price: 3000,
    },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (p) => {
    setCartItems((prev) => {
      let exist = prev.find((item) => item.id === p.id);
      if (exist) {
        return prev.map((item) =>
          item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...p, quantity: 1 }];
    });
  };

  return (
    <div className="container">
      <h1>PRODUCT LIST</h1>
      <ProductList products={products} onAddToCart={addToCart} />
      <br />
      <h1>CART</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
};

const ProductList = (props) => {
  return (
    <>
      {props.products.map((item) => {
        return (
          <div key={item.id} className="mt-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                props.onAddToCart(item);
              }}
            >
              Add
            </button>{" "}
            <b>Name</b> {item.name} <b>Price</b> {item.price}
          </div>
        );
      })}
    </>
  );
};

const Cart = (props) => {
  let total = 0;
  props.cartItems.forEach( item => total+=item.price*item.quantity)
  
  return (
    <>
      {props.cartItems.map((item) => {
        return (
          <div key={item.id}>
            <b>Name</b> {item.name} <b>Quantity</b> {item.quantity}
          </div>
        );
      })}

      <b>Total price: </b> {total} 
    </>
  );
};

export default App3;
