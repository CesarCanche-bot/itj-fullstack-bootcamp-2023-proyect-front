import { Box, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ItemCheckoutActions() {
  return (
    <Box>
      <div style={{ padding: '5px' }}>
        <Button variant="outlined" aria-label="reduce">
          <RemoveIcon size="small" />
        </Button>
      </div>
    </Box>
  );
}
