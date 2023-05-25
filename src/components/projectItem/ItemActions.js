import { IconButton } from "@mui/material";

export default function ItemActions({ id, onAddCart, onDeleteCart }) {
  
    return (
    <>
      {!!onDeleteCart ? (
        <>
          <IconButton size="large" color="error">delete</IconButton>
          <IconButton size="large" color="info">Add</IconButton>
        </>
      ) : (
        <IconButton>Add</IconButton>
      )}
    </>
  );
}
