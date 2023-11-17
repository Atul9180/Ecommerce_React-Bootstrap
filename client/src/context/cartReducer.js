import { addToCart } from "./utils";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action);
    default:
      return state;
  }
};

export default cartReducer;
