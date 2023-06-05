import AddNewItemModal from "@/components/modals/AddNewItemModal";
import TableProducts from "@/components/tableProducts/TableProducts";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { getFoods, createFood, updateFood, deleteFood } from "@/api/foods";
import EditItemModal from "@/components/modals/EditItemModal";

export default function AdminPage() {
  const [isNewItemModalVisible, setIsNewItemModalVisible] = useState(false);
  const [foods, setFoods] = useState([]);
  const [editFood, setEditFood] = useState();

  const handleOnSubmit = async (values) => {
    const tempFoods = Array.from(foods);
    if (!!values._id) {
      const updatedFood = await updateFood(values);
      const foodIndex = tempFoods.findIndex((p) => p._id === updatedFood._id);
      tempFoods[foodIndex] = updatedFood;
    } else {
      const newFood = await createFood(values);
      tempFoods.push(newFood);
    }
    setFoods(tempFoods);
  };

  const handleDelete = async (id) => {
    const isDeleted = await deleteFood(id);
    if (isDeleted) setFoods((prev) => prev.filter((p) => p._id !== id));
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const foods = await getFoods();
      setFoods(foods);
    } catch (err) {
      console.log("error getting foods info");
    }
  };

  return (
    <section>
      <div style={{ margin: "15px" }}>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={() => setIsNewItemModalVisible(true)}
        >
          Add new item
        </Button>
      </div>
      <TableProducts
        foods={foods}
        handleEdit={setEditFood}
        handleDelete={handleDelete}
      />
      <AddNewItemModal
        open={isNewItemModalVisible}
        onClose={() => setIsNewItemModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
      <EditItemModal
        open={!!editFood}
        onClose={() => setEditFood()}
        onSubmit={handleOnSubmit}
        food={editFood}
      />
    </section>
  );
}
