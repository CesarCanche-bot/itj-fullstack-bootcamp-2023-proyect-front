import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";
import Tooltip  from "@mui/material/Tooltip";
import { CartContext } from "../Layout/Layout.js";

export default function ItemActions({ id, price, name }) {
  const router = useRouter();
  const {
    cartItemsNumber,
    setCartItemsNumber,
    itemsSelected,
    setItemsSelected,
  } = useContext(CartContext);
 // console.log("items selected cart", itemsSelected);

  const itemOnCart = itemsSelected.find((item) => item._idFood === id);

  const addItemSelected = ({ _id, itemNumber }) => {
    const indexItem = itemsSelected.findIndex((item) => item._idFood === _id);
    indexItem === -1
      ? (() => {
          setItemsSelected([
            ...itemsSelected,
            { _idFood: _id, itemNumber: itemNumber, price: price, name: name },
          ]);
        })()
      : (() => {
          itemNumber === 0
            ? (() => {
                const filtered = itemsSelected.filter(
                  (item) => item._idFood !== _id
                );
                console.log("filtered", filtered);
                setItemsSelected(filtered);
              })()
            : (() => {
                const itemsSelectedNew = itemsSelected.map((item) =>
                  item._idFood === _id
                    ? { ...item, itemNumber: itemNumber }
                    : item
                );
                setItemsSelected(itemsSelectedNew);
              })();
        })();
  };

  const count = itemOnCart ? itemOnCart.itemNumber : 0;

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
              let a = Math.max(cartItemsNumber - 1, 0);
              addItemSelected({ _id: id, itemNumber: x });
              setCartItemsNumber(a);
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              addItemSelected({ _id: id, itemNumber: count + 1 });
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
