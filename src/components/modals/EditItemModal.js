import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import ItemForm from "../forms/ItemForm";

export default function EditItemModal({ open, onClose, onSubmit, food }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editing food</DialogTitle>
      <DialogContent>
        <ItemForm editValues={food} onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          form="item-form"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          form="item-form"
          onClick={onClose}
        >
          Update food
        </Button>
      </DialogActions>
    </Dialog>
  );
}
