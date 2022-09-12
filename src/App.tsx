import { useState } from "react";
import { useQuery } from "react-query";
//Components
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
//Styles
import { Wrapper } from "./App.styles";
import { STORE_API_URL } from "./api";

//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

//API functions
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch(STORE_API_URL)).json();

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = () => {

  }

  const handleAddToCart = () => {

  }

  const handleRemoveFromCart = () => {

  }

  if (isLoading) return <LinearProgress/>
  if (error) return <div>Something Went Wrong</div>

  return <div className="App">Hello World</div>;
}

export default App;
