import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Chip,
} from "@mui/material";
import { Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

export default function ItemForm({ onSubmit, editValues }) {
  const [ingredients, setIngredients] = useState(["masa", "manteca de puerco"]);
  const defaultValues = {
    name: "",
    price: 100,
    discount: 0,
    imageUrl: "",
    description: "",
    ingredients: ingredients,
  };

  const itemFormSchema = yup.object().shape({
    name: yup.string().required("Name is required."),
    price: yup.number().required("Price is required"),
    discount: yup.number(),
    imageUrl: yup.string().required("Image is required"),
    description: yup.string(),
    ingredients: yup.array(),
  });

  const { control, watch, reset, handleSubmit } = useForm({
    defaultValues: editValues || defaultValues,
    resolver: yupResolver(itemFormSchema),
    mode: "all",
  });

  return (
    <form
      id="item-form"
      style={{ padding: "24px" }}
      onReset={() => reset(defaultValues)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Item name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            control={control}
            name="price"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Price"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            control={control}
            name="discount"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Discount %"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="description"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                minRows={2}
                maxRows={2}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="imageUrl"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Image URL"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="item-label">Ingredients</InputLabel>
          <Controller
            control={control}
            name="ingredients"
            render={({ field }) => (
              <Select
                {...field}
                labelId="ingredients-label"
                variant="outlined"
                fullWidth
                multiple
                renderValue={(selected) => (
                  <Box>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {ingredients.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Grid>
      </Grid>
    </form>
  );
}
