import { useState } from "react";
import Header from "../components/Headers";
import ProductList from "../components/ProductList";
import products from "../data/products";
import CartList from "../components/CartList";
const Homepage = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (p) => {
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
    <>
      <Header cartItems={cartItems} />
      <ProductList products={products} handleAddItem={handleAddItem} />
      <CartList cartItems={cartItems} />
    </>
  );
};

export default Homepage;
