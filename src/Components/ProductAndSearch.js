import { useContext } from "react";

import SearchComponent from "./SearchComponent";
import { ProductContext } from "./ProductContext";
import { CartContext } from "@/Cart/CartContext";

export default function ProductAndSearch() {
  const srcArr = [
    {
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ16L39vBJNvNMWTDbkshkccdap8uoCHqqx0fnuLpgo-VHYtt-LIxz6UMkwX6U5Lxrglj7iPJKWdwkc0_T2YmgWLNf03YYlBXYPa0m3zeEMjpTsEMiSHSy_sZkzRMYhkmcMzc8&usqp=CAc",
      name: "Redmi 12 Pro 5",
      price: 20000,
      id: 1,
    },
    {
      src: "https://m.media-amazon.com/images/I/71tK0xvSWEL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Samsung Washing Machine",
      price: 20000,
      id: 2,
    },
    {
      src: "https://m.media-amazon.com/images/I/51YoxGAgWoL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Haier Refrigerator",
      price: 20000,
      id: 3,
    },
    {
      src: "https://m.media-amazon.com/images/I/51xzmzjFS7L._AC_UY327_FMwebp_QL65_.jpg",
      name: "Whirpool Air Conditioner",
      price: 20000,
      id: 4,
    },
    {
      src: "https://m.media-amazon.com/images/I/91TiJ9J3f+L._AC_UY327_FMwebp_QL65_.jpg",
      name: "LG Android TV",
      price: 20000,
      id: 5,
    },
    {
      src: "https://m.media-amazon.com/images/I/71iTRaVQJiL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Samsung Air Conditioner",
      price: 20000,
      id: 6,
    },
    {
      src: "https://m.media-amazon.com/images/I/41TuyxwZ9mL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Voltas Air Conditioner",
      price: 20000,
      id: 7,
    },
    {
      src: "https://m.media-amazon.com/images/I/61nF5ekaaPL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Blue Star Air Conditioner",
      price: 20000,
      id: 8,
    },
  ];

  return (
    <>
      <ProductContext.Provider value={srcArr}>
        <SearchComponent />
      </ProductContext.Provider>
    </>
  );
}
