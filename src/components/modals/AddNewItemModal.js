import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ItemForm from "../forms/ItemForm";

export default function AddNewItemModal({ open, onClose, onSubmit }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Adding a new food/dessert</DialogTitle>
      <DialogContent>
        <ItemForm onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" type="reset" form="item-form">
          Clear form
        </Button>
        <Button
          variant="contained"
          type="submit"
          form="item-form"
          onClick={onClose}
        >
          Add item
        </Button>
      </DialogActions>
    </Dialog>
  );
}
