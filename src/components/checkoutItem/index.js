import { Grid, Typography } from "@mui/material";

export default function CheckoutItem({ item }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography>{item.name}</Typography>
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
