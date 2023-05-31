const SERVER_URL = "http://localhost:3002";

export const getFoods = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/foods`);
    const responseJson = await response.json();
    return responseJson.foods;
  } catch (err) {
    console.log("error", err);
    return [];
  }
};

export const createFood = async (food) => {
  try {
    const response = await fetch(`${SERVER_URL}/foods`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(food),
    });
    const foodJson = await response.json()
    console.log('food created', foodJson);
    return foodJson.foodSaved;
  } catch (err) {
    console.log(err);
    return {};
  }
};
