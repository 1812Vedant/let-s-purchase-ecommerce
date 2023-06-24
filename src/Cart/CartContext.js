import { createContext } from "react";

const cartArray = [{ name: "redmi note 8", price: 8000, src: "xyx" }];

export const CartContext = createContext(cartArray);
