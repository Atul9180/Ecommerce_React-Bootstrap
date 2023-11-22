export const fetchDataFromAPI = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Re-throw the error to handle it in the context provider
  }
};

export const addToCart = (state, action) => {
  const isProductExistsInCart = state.cartItems.findIndex(
    (item) => item.id === action.payload.id
  );
  const updatedCartItems =
    isProductExistsInCart > -1
      ? state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      : [...state.cartItems, action.payload];

  const updatedTotalCartQuantity =
    state.totalCartQuantity + action.payload.quantity;
  const updatedTotalPrice =
    state.totalCartPrice + action.payload.price * action.payload.quantity;

  return {
    ...state,
    cartItems: updatedCartItems,
    totalCartPrice: updatedTotalPrice,
    totalCartQuantity: updatedTotalCartQuantity,
  };
};

export const getProductCartQuantity = (cartItems, id) => {
  const item = cartItems.find((item) => item.id === id);
  return item ? item.quantity : 0;
};
