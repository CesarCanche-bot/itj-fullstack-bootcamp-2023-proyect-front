import React, { createContext, useState } from "react";
import { Container } from "@mui/material";
import Header from "./header/Header";

export const CartContext = createContext();

export default function Layout({ children }) {
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  let itemsSelected = [{ _id: "64705b5af197e80282fce310", itemNumber: 3 }];

  const addItemSelected = ({ _id, itemNumber }) => {
    console.log("id que llega", _id);
    console.log("hay que poner", itemNumber);
    const indexItem = itemsSelected.findIndex((item) => item._id === _id);
    indexItem === -1
      ? itemsSelected.push({ _id: _id, itemNumber: itemNumber })
      : (itemsSelected = itemsSelected.map((item) =>
          item._id === _id ? { ...item, itemNumber: itemNumber } : item
        ));
    console.log("items selected", itemsSelected);
  };

  return (
    <CartContext.Provider
      value={{
        cartItemsNumber,
        setCartItemsNumber,
        itemsSelected,
        addItemSelected,
      }}
    >
      <Header></Header>
      <Container fixed>
        <main>{children}</main>
      </Container>
    </CartContext.Provider>
  );
}
