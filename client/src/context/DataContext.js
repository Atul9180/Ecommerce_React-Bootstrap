import { createContext, useReducer, useMemo } from "react";
import cartReducer from "./cartReducer";
import { getProductCartQuantity } from "./utils";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });
  const cartItems = cartState.cartItems;

  const totalCartQuantity = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity);
  }, [cartItems]);

  const totalCartPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        dispatch,
        totalCartPrice,
        totalCartQuantity,
        getProductCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
