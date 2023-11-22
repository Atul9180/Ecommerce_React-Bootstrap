import { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer } from "./Reducers";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    isLoading: true,
    cart: [],
  });

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: "SET_PRODUCTS",
          payload: data.products,
        });
      } else {
        throw new Error("Failed to fetch");
      }
    } catch (error) {
      console.error("Error fetching Products", error);
      dispatch({ type: "SET_PRODUCTS", payload: [] });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

export const CartState = () => useContext(DataContext);

//USE THIS CONTEXT WHEN NOT USING API FOR DATA:
// import React, { createContext, useReducer, useContext } from "react";
// import { faker } from "@faker-js/faker";
// import { cartReducer } from "./Reducers";

// const DataContext = createContext();

// export const DataContextProvider = ({ children }) => {
//   //generate 25 data(diff. fields) faker first seed it i.e make data fixed
//   faker.seed(99);
//   const products = [...Array(25)].map(() => ({
//     id: faker.string.uuid(),
//     title: faker.commerce.productName(),
//     price: faker.commerce.price(),
//     imageUrl: faker.image.url(),
//     inStock: faker.number.int({ min: 0, max: 50 }),
//     fastDelivery: faker.datatype.boolean(),
//     ratings: faker.number.int({ min: 1, max: 5 }),
//   }));

//   const [state, dispatch] = useReducer(cartReducer, {
//     products: products,
//     cart: [],
//   });

//   return (
//     <DataContext.Provider value={{ state, dispatch }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default DataContext;

// //Exporting our Context......
// export const CartState = () => {
//   return useContext(DataContext);
// };
