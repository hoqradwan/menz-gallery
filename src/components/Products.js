import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;


  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid gray",
            width: "30%",
            marginTop: 10,
            gap: 10,
          }}
        >
          <img
            src={prod.image}
            alt={prod.title}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{prod.title}</span>
            <b>$ {prod.price}</b>
          </div>

          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{padding:5,border:0,borderRadius:5,backgroundColor:'#D9534F',color:'white'}}
              onClick={() => dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
             style={{padding:5,border:0,borderRadius:5,backgroundColor:'#5CB85C',color:'white'}}
             onClick={() => dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    image: prod.image,
                    qty: prod.qty,
                    price: prod.price,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}{" "}
    </div>
  );
};

export default Products;
