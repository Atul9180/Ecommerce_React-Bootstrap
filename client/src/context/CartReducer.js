const CartReducer = (state, action) => {
  //add item to cart
  if (action.type === "ADD_TO_CART") {
    const updatedCart = [...state.cart, ...action.payload];

    // Update local storage when adding to cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return { ...state, cart: updatedCart };
  }

  //remove item:
  if (action.type === "REMOVE_FROM_CART") {
    let updatedCart = state.cart.filter(
      (currItem) => currItem.refId !== action.payload
    );
    //update local Storage:
    localStorage.setItem("cart", [JSON.stringify(updatedCart)]);
    return { ...state, cart: updatedCart };
  }

  // New action type to set cart from Firestore
  if (action.type === "SET_CART") {
    // Payload is an array of cart items with document IDs
    const cartItems = action.payload;
    return { ...state, cart: cartItems };
  }

  return state;
};

export default CartReducer;
