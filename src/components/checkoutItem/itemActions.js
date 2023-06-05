import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartContext } from "../Layout";
import { useContext } from "react";

export default function ItemCheckoutActions({ count, id }) {
  const {
    cartItemsNumber,
    setCartItemsNumber,
    itemsSelected,
    setItemsSelected,
  } = useContext(CartContext);

  const addItemSelected = ({ _id, itemNumber }) => {
    console.log("ss", _id)
    const indexItem = itemsSelected.findIndex((item) => item._idFood === _id);
    indexItem === -1
      ? (() => {
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

  return (
    <Box>
      <div style={{ padding: "5px" }}>
        <Button
          variant="outlined"
          aria-label="reduce"
          onClick={() => {
            let x = Math.max(count - 1, 0);
            let a = Math.max(cartItemsNumber - 1, 0);
            setCartItemsNumber(a);
            addItemSelected({ _id: id, itemNumber: x });
          }}
        >
          <RemoveIcon size="small" />
        </Button>
      </div>
    </Box>
  );
}
