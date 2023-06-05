import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";

import CheckoutForm from "../forms/CheckoutForm";

export default function CheckoutAddressModal({ open, onClose, onSubmit, itemsSelected }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Shipping Address</DialogTitle>
      <DialogContent>
        <CheckoutForm onSubmit={onSubmit} itemsSelected={itemsSelected}/>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          form="checkout-form"
          onClick={onClose}
        >
          Review items
        </Button>
        <Button
          variant="contained"
          type="submit"
          form="checkout-form"
          onClick={onClose}
        >
          Place order and pay
        </Button>
      </DialogActions>
    </Dialog>
  );
}
