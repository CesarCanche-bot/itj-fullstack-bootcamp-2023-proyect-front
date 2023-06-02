import PageDescription from "@/components/PageDescription";
import { useContext, useState } from "react";
import { CartContext } from "@/components/Layout";
import CheckoutItem from "@/components/checkoutItem";
import { Button, Grid, Typography } from "@mui/material";
import CheckoutAddressModal from "@/components/modals/CheckoutAddressModal";
import { createOrder } from "@/api/foods";
import { useRouter } from "next/router";

export default function CheckoutPage() {
  const router = useRouter();
  const { itemsSelected, setCartItemsNumber, setItemsSelected } =
    useContext(CartContext);
  const [
    isOpenCheckoutShippingAddressModal,
    setIsOpenCheckoutShippingAddressModal,
  ] = useState(false);

  const calculateTotalPrice = () => {
    let total = 0;
    itemsSelected.map((item) => (total = total + item.itemNumber * item.price));
    return total;
  };

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice);

  const handleOnSubmit = async (values) => {
    const newOrder = await createOrder(values);
    console.log("order placed", newOrder);
    !!newOrder.message
      ? (() => {
          setCartItemsNumber(0);
          setItemsSelected([]);
          router.back();
        })()
      : console.log("error saving order");
  };

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
            onClick={() => setIsOpenCheckoutShippingAddressModal(true)}
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
      <CheckoutAddressModal
        open={isOpenCheckoutShippingAddressModal}
        onClose={() => setIsOpenCheckoutShippingAddressModal(false)}
        onSubmit={handleOnSubmit}
        itemsSelected={itemsSelected}
      />
    </section>
  );
}
