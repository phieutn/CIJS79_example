import { useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import CartList from "../components/CartList";
import products from "./../data/products";

const Homepage = () => {
  // Header
  // ProductList
  // Cart

  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (p) => {
    setCartItems( (prev) => {
      console.log("old value: cartItems ", cartItems);
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
      <Header cartItems={cartItems} time={1}/>
      <ProductList products={products} handleAddItem={handleAddItem}/>
      <CartList />
    </>
  );

  // const [cartItems, setCartItems] = useState([]);

  // const handleAddItem = (p) => {

  //   setCartItems((prev) => {

  //     let exist = prev.find((item) => item.id === p.id);

  //     if (exist) {
  //       return prev.map((item) =>
  //         item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
  //       );
  //     }
  //     return [...prev, { ...p, quantity: 1 }];
  //   });
  // };
  // return (
  //   <>

  //     <Header cartItems={cartItems} />
  //     <ProductList products={products} handleAddItem={handleAddItem} />
  //     <CartList cartItems={cartItems} />
  //   </>
  // );
};

export default Homepage;
