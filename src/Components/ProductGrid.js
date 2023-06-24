import { useReducer, useState } from "react";
import CartReducer from "@/Cart/CartReducer";

import Card from "./Card";
import CartGrid from "@/Cart/CartGrid";

export default function ProductGrid({ src, cart }) {
  //reducer to manage state in cart
  const [state, dispatch] = useReducer(CartReducer, []);

  //if cart is true show products in cart
  if (cart) {
    return (
      <>
        <div className="mx-4 my-4 px-4 py-4 grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {src.map((el) => {
            return (
              <Card
                src={el.src}
                price={el.price}
                name={el.name}
                key={el.id}
                dispatch={dispatch}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    //to show elements present in cart
    //and delete elements through cart
    return <CartGrid state={state} dispatch={dispatch} />;
  }
}
