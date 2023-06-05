//const SERVER_URL = process.env.SERVER_URL;
const SERVER_URL = "http://localhost:3002";

export const getFoods = async () => {
  console.log('sss2', SERVER_URL);
  try {
    const response = await fetch(`${SERVER_URL}/foods`);
    const responseJson = await response.json();
    return responseJson.foods;
  } catch (err) {
    console.log("error", err);
    return [];
  }
};

export const getFood = async (id) => {
  try {
    const response = await fetch(`${SERVER_URL}/foods/${id}`);
    const foodJson = await response.json();
    return foodJson.food;
  } catch (err) {
    console.log(err);
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
    const foodJson = await response.json();
    console.log("food created", foodJson);
    return foodJson.foodSaved;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const updateFood = async (food) => {
  try {
    const response = await fetch(`${SERVER_URL}/foods/${food._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(food),
    });
    const foodJson = await response.json();
    return foodJson;
  } catch (err) {
    console.log("error updating", err);
    return {};
  }
};

export const deleteFood = async (id) => {
  try {
    const response = await fetch(`${SERVER_URL}/foods/${id}`, {
      method: "DELETE",
    });
    return response.status === 204;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const createOrder = async (order) => {
  try {
    const response = await fetch(`${SERVER_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    const orderJson = await response.json();
    return orderJson;
  } catch (err) {
    console.log(err);
    return {};
  }
};
