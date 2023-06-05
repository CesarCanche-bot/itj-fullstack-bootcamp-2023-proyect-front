import React from "react";
import { createContext, useState } from "react";
import  Container from "@mui/material/Container";
import Header from "../Header/Header";

export const CartContext = createContext();

export default function Layout({ children }) {
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [itemsSelected, setItemsSelected] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartItemsNumber,
        setCartItemsNumber,
        itemsSelected,
        setItemsSelected,
      }}
    >
      <Header />
      <Container fixed>
        <main>{children}</main>
      </Container>
    </CartContext.Provider>
  );
}
