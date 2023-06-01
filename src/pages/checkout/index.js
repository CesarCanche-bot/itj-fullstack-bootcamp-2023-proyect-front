import PageDescription from "@/components/PageDescription";
import { useContext, useState } from "react";
import { CartContext } from "@/components/Layout";
import CheckoutItem from "@/components/checkoutItem";
import { Button, Grid, Typography } from "@mui/material";

export default function CheckoutPage() {
  const { itemsSelected } = useContext(CartContext);
  console.log("checkout", itemsSelected);

  const calculateTotalPrice = () => {
    let total = 0;
    itemsSelected.map((item) => (total = total + item.itemNumber * item.price));
    return total;
  };

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice);

  return (
    <section>
      <PageDescription
        title="Checkout"
        description="Review your items and place your order"
      />
      {itemsSelected.length === 0 ? (
        <></>
      ) : (
        <section style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Button
            variant="contained"
            color="warning"
            size="large"
          >{`Checkout: $${totalPrice}`}</Button>
        </section>
      )}

      <Grid container style={{ width: "50vw" }}>
        <Grid item xs={5}>
          <strong>Food</strong>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={2}>
          <strong>Cant</strong>
        </Grid>
        <Grid item xs={2}>
          <strong>price</strong>
        </Grid>
        {itemsSelected.map((item) => (
          <CheckoutItem key={item._idFood} item={item} />
        ))}
      </Grid>
    </section>
  );
}
