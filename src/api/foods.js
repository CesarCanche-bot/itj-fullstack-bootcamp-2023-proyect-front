const SERVER_URL = "http://localhost:3002";

export const getFoods = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/foods`);
    const responseJson = await response.json();
    return responseJson.foods;
  } catch (err) {
    console.log("error", err);
    return []
  }
};
