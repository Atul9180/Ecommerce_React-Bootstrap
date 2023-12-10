import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import CartReducer from "./CartReducer";
import { AuthContextData } from "./Auth/AuthContext";
import {
  addCartToFirestore,
  fetchCartFromFirestore,
  deleteCartItemFromFirestore,
} from "../firebase/firebaseFunctions";

const CartContext = createContext();
const initialState = {
  cart: [],
};

const CartProvider = ({ children }) => {
  const { token } = AuthContextData();
  console.log(token);

  const [state, dispatch] = useReducer(CartReducer, initialState);

  //add to cart:
  const addToCart = async (product) => {
    console.log(product);
    const { id, images, title, price } = product;
    const cartProduct = {
      id,
      image: images[0],
      title,
      price,
      quantity: 1,
    };

    try {
      if (token !== null) {
        const addedCartItems = await addCartToFirestore(token, [cartProduct]);
        console.log(addedCartItems);
        dispatch({ type: "ADD_TO_CART", payload: addedCartItems });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: [] });
      }
    } catch (error) {
      console.error("Error adding cart items: ", error);
    }
  };

  const removeFromCart = (refId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: refId });
    if (token !== null) {
      deleteCartItemFromFirestore(token, refId);
    }
  };

  //fetch from cart:
  const loadCartFromFirestore = useCallback(async () => {
    try {
      if (token !== null) {
        const cartItems = await fetchCartFromFirestore(token);
        dispatch({ type: "SET_CART", payload: cartItems });
      }
    } catch (error) {
      console.error("Error loading cart from Firestore: ", error);
    }
  }, [token]);

  useEffect(() => {
    loadCartFromFirestore();
  }, [token, loadCartFromFirestore]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart, token]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider };
export default useCartContext;
