import AddNewItemModal from "@/components/modals/AddNewItemModal";
import TableProducts from "@/components/tableProducts/TableProducts";
import { Button } from "@mui/material";
import { useState } from "react";
import { getFoods } from "@/api/foods";

export default function AdminPage({foods}) {
  const [isNewItemModalVisible, setIsNewItemModalVisible] = useState(false);
  
  const handleOnSubmit = values =>{
    console.log('submit pressed')
  }

  return (
    <section>
      <div style={{ margin: "15px" }}>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={()=>setIsNewItemModalVisible(true)}
        >
          Add new item
        </Button>
      </div>
      <TableProducts />
      <AddNewItemModal
        open={isNewItemModalVisible}
        onClose={() => setIsNewItemModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </section>
  );
}

export async function getServerSideProps() {
  const foods = await getFoods();
  return {
    props: {
      foods,
    },
  };
}