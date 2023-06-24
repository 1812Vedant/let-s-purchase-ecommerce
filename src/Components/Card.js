import { useContext, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import CartReducer from "@/Cart/CartReducer";

export default function Card({ src, name, price, dispatch }) {
  const products = useContext(ProductContext);

  // const [state, dispatch] = useReducer(CartReducer, []);

  const handleClick = (e) => {
    console.log(e.target.name);
    //adding only elements in the cart that is going to click
    const [product] = products.filter(
      (product) => product.name == e.target.name
    );
    //dispatching action object to cartReducer
    dispatch({ type: "add", product: product });
  };

  return (
    <div className="flex flex-col items-center px-4 py-4 bg-blue-100 rounded-md hover:px-2 hover:py-2 transition-all">
      <div className="img-section flex ">
        <img src={src} alt="Products"></img>
      </div>
      <div className="price-cart flex   my-2">
        <div className="name-price px-2">
          <p>{name}</p>
          <span>Price:</span>
          <span>{price}</span>
        </div>
        <button
          className="bg-blue-700 px-2 rounded-md hover:bg-blue-600 transition-all "
          name={name}
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
