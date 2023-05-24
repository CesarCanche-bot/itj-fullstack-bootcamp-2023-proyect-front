import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";

function createData(
  name,
  price,
  priceWithDiscount,
  rate,
  imageUrl,
  description,
  ingredients
) {
  return {
    name,
    price,
    priceWithDiscount,
    rate,
    imageUrl,
    description,
    ingredients,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.priceWithDiscount}</TableCell>
        <TableCell align="right">{row.rate}</TableCell>
        <TableCell align="right">
          <Button variant="contained" color="warning" size="medium">
            edit
          </Button>
        </TableCell>
        <TableCell align="right">
          <Button variant="outlined" color="error" size="small">
            delete
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <section>
                <div>{row.imageUrl}</div>
                <div>{row.description}</div>
                <div>{row.ingredients}</div>
              </section>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceWithDiscount: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const rows = [
  createData(
    "Frozen yoghurt",
    159,
    6.0,
    24,
    "url de la imagen",
    "descripcion de eso",
    ["ingredient 1", "ingredient 2"]
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    37,
    "url de la imagen",
    "descripcion de eso",
    ["ingredient 1", "ingredient 2"]
  ),
  createData(
    "Eclair",
    262,
    16.0,
    24,
    "url de la imagen",
    "descripcion de eso",
    ["ingredient 1", "ingredient 2"]
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    67,
    "url de la imagen",
    "descripcion de eso",
    ["ingredient 1", "ingredient 2"]
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    5,
    "url de la imagen",
    "descripcion de eso",
    ["ingredient 1", "ingredient 2"]
  ),
];

export default function TableProducts() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Food name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Price with discount</TableCell>
            <TableCell align="right">Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
