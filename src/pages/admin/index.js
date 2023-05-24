import TableProducts from "@/components/tableProducts/TableProducts";
import { Button } from "@mui/material";

export default function AdminPage() {
  return (
    <section>
      <div style={{margin: '15px'}}>
        <Button variant="contained" size="large" color="success">
          Add new item
        </Button>
      </div>
      <TableProducts/>
    </section>
  );
}
