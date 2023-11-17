const addToCart = (state, action) => {
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

const getProductCartQuantity = (cartItems, id) => {
  const item = cartItems.find((item) => item.id === id);
  return item ? item.quantity : 0;
};

export { addToCart, getProductCartQuantity };
