import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import ItemActions from "./ItemActions";

export default function ProjectItem({ item }) {
  return (
    <Card sx={{ maxWith: 300 }}>
      <CardMedia
        component="img"
        heigth="1"
        image="https://i.blogs.es/705187/12/1366_2000.jpg"
        alt="Imagen del menu"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Precio: ${item.price}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Rating: {item.rate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ingredientes: {item.ingredients}
        </Typography>
        <Chip label={` PRECIO CON OFERTA % ${item.discount}`} />
      </CardContent>
      <ItemActions id={item.id} onDeleteCart={() => console.log("delete")} />
    </Card>
  );
}
