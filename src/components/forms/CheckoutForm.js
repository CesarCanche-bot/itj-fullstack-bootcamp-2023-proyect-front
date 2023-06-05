import { yupResolver } from "@hookform/resolvers/yup";
import  Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import  * as yup from "yup";

export default function CheckoutForm({ onSubmit, itemsSelected }) {
  const defaultValues = {
    nameUser: "",
    addressUser: "",
    foods: itemsSelected,
  };

  const checkoutSchema = yup.object().shape({
    nameUser: yup.string().required("Name is required"),
    addressUser: yup.string().required("Address is required"),
  });

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(checkoutSchema),
    mode: "all",
  });
  return (
    <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="nameUser"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          ></Controller>
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="addressUser"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Address"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          ></Controller>
        </Grid>
      </Grid>
    </form>
  );
}
