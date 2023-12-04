const CartReducer = (state, action) => {
  //add item to cart
  if (action.type === "ADD_TO_CART") {
    let p̥roduct = action.payload;

    const cartProduct = {
      id: p̥roduct.id,
      image: p̥roduct.images[0],
      title: p̥roduct.title,
      quantity: 1,
      price: p̥roduct.price,
    };

    const updatedCart = [...state.cart, cartProduct];

    // Update local storage when adding to cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return { ...state, cart: updatedCart };
  }

  //remove item:
  if (action.type === "REMOVE_FROM_CART") {
    let updatedCart = state.cart.filter(
      (currItem) => currItem.id !== action.payload
    );

    //update local Storage:
    localStorage.setItem("cart", [JSON.stringify(updatedCart)]);

    return { ...state, cart: updatedCart };
  }

  return state;
};

export default CartReducer;
