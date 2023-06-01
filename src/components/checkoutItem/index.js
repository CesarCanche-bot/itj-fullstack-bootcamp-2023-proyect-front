import { Grid, Typography } from "@mui/material";
import ItemCheckoutActions from "./itemActions";

export default function CheckoutItem({ item }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Typography>{item.name}</Typography>
      </Grid>
      <Grid item xs={3}>
        <ItemCheckoutActions />
      </Grid>
      <Grid item xs={2}>
        <Typography>{item.itemNumber}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{item.price}</Typography>
      </Grid>
    </Grid>
  );
}
