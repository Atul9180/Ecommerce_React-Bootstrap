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
  const { cart } = state;
  const isProductExistsInCart = cart.findIndex(
    (item) => item.id === action.payload.product.id
  );
  const updatedCartItems =
    isProductExistsInCart > -1
      ? cart.map((itm) =>
          itm.id === action.payload.product.id
            ? { ...itm, quantity: itm.quantity + action.payload.quantity }
            : itm
        )
      : [...cart, action.payload];

  // const updatedTotalCartQuantity =
  //   state.totalCartQuantity + action.payload.quantity;
  const updatedTotalPrice =
    state.totalCartPrice +
    action.payload.product.price * action.payload.quantity;

  return {
    ...state,
    cart: updatedCartItems,
    totalCartPrice: updatedTotalPrice,
    // totalCartQuantity: updatedTotalCartQuantity,
  };
};

export const getProductCartQuantity = (cart, id) => {
  const item = cart.find((item) => item.id === id);
  return item ? item.quantity : 0;
};
