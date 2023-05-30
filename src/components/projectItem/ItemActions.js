import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { ShoppingCart } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Tooltip } from "@mui/material";
import { CartContext } from "../Layout";

export default function ItemActions({ id, onAddCart, onDeleteCart }) {
  const router = useRouter();
  const {
    cartItemsNumber,
    setCartItemsNumber,
    itemsSelected,
    addItemSelected,
  } = useContext(CartContext);
  console.log(cartItemsNumber);

  const itemOnCart = itemsSelected.find((item) => item._id === id);

  const [count, setCount] = React.useState(
    itemOnCart ? itemOnCart.itemNumber : 0
  );
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count}>
          <ShoppingCart />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              let x = Math.max(count - 1, 0);
              let a = Math.max(cartItemsNumber - 1, 0)
              setCount(x);
              addItemSelected({_id:id, itemNumber: x})
              setCartItemsNumber(a);
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              let x = count + 1
              setCount(x);
              addItemSelected({_id:id, itemNumber: x})
              setCartItemsNumber(cartItemsNumber + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
        <Tooltip title="Details">
          <Button onClick={() => router.push(`/${id}`)}>
            <ReadMoreIcon fontSize="large" color="primary" />
          </Button>
        </Tooltip>
      </div>
    </Box>
  );
}
