import Image from "next/image";
import { useContext, useReducer, useState } from "react";
import ProductGrid from "./ProductGrid";
import { ProductContext } from "./ProductContext";
import ProductReducer from "./ProductReducer";

export default function SearchComponent() {
  const srcArr = useContext(ProductContext);

  const [src, dispatch] = useReducer(ProductReducer, srcArr);

  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  // const [src, setsrc] = useState(srcArr);

  //Show only contents that is on search bar
  const handleClick = function () {
    const filteredSrc = src.filter((el) => el.name.includes(text));
    //passing action object in dispatch
    dispatch({ type: "search", products: filteredSrc });

    // setsrc(src.filter((el) => el.name.includes(text)));
  };

  //state to open cart section
  const [cart, setCart] = useState(true);
  //if cart is true then make false o/w make true
  const handleCart = () => setCart(!cart);

  return (
    <>
      <div className="flex px-10 py-10 bg-blue-100 justify-center flex-row">
        <input
          type="text"
          className="w-2/5 h-10 rounded-md outline-blue-700 mr-2 "
          onChange={handleText}
        />
        <button
          className="rounded-md bg-blue-700 hover:bg-blue-500 hover:transition-all px-4 py-2"
          onClick={handleClick}
        >
          Search
        </button>

        <Image
          src="https://img.uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-icon.svg"
          width={500}
          height={500}
          className="bg-blue-700 rounded-full w-10 px-2 mx-2 hover:cursor-pointer "
          onClick={handleCart}
        />
      </div>

      <ProductGrid src={src} cart={cart} />
    </>
  );
}
