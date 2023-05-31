import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import ItemActions from "./ItemActions";

export default function ProjectItem({ item }) {
  return (
    <Card sx={{ maxWith: 300 }}>
      <CardMedia
        component="img"
        heigth="1"
        image={item.imageUrl}
        alt="Imagen del menu"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.primary"
          display="flex"
          style={{ alignItems: "center" }}
        >
          Rating: <Typography color="text.secondary">{item.rate}</Typography>
        </Typography>
        <Chip label={` PRECIO CON OFERTA DE %${item.discount}`} />
        <Typography
          variant="subtitle1"
          color="text.primary"
          display="flex"
          style={{ alignItems: "center" }}
        >
          Precio: <Typography color="text.secondary">${item.price}</Typography>
        </Typography>
        <ItemActions id={item._id}  price={item.price} name={item.name}/>
        <Typography
          variant="body1"
          color="text.secondary"
          display="flex"
          style={{ alignItems: "start" }}
        >
          Ingredientes:{" "}
          {item.ingredients.map((ingredient) => {
            return ` -${ingredient}`;
          })}
        </Typography>
      </CardContent>
    </Card>
  );
}
