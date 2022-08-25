import axios from "axios";
import { useEffect, useReducer } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { cartReducer } from "./reducers/cartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  const fetchProducts = async () => {
    // const { data } = await axios("https://dummyjson.com/products");
    const { data } = await axios("https://fakestoreapi.com/products");
    /* const { data } = await axios("'https://fakestoreapi.com/products/category/jewelery"); */
 
    dispatch({
      type: "ADD_PRODUCT",
      payload: data,
    });
    console.log(data)
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ display: "flex" }}>
        <Products state={state} dispatch={dispatch}></Products>
        <Cart state={state} dispatch={dispatch}></Cart>
      </div>
    </div>
  );
}

export default App;
