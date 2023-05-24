import TableProducts from "@/components/tableProducts/TableProducts";
import { Button } from "@mui/material";

export default function AdminPage() {
  return (
    <section>
      <div>
        <Button variant="contained" size="large">
          Add new item
        </Button>
      </div>
      <TableProducts/>
    </section>
  );
}
