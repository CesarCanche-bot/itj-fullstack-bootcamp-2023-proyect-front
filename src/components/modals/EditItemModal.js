
import ItemForm from "../forms/ItemForm";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

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
