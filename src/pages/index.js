import Login from "./login";
import Heading from "../Heading";
import SearchComponent from "@/Components/SearchComponent";
import Profile from "@/Components/Profile";
import ProductAndSearch from "@/Components/ProductAndSearch";

export default function Home() {
  return (
    <>
      <Heading />
      <Profile />
      <Login />
      <ProductAndSearch />
    </>
  );
}
