import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { reducerFn } from "./dataReducer";
import { AuthContextData } from "./Auth/AuthContext";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const { isLoggedIn } = AuthContextData();

  const [state, dispatch] = useReducer(reducerFn, {
    products: [],
    isLoading: true,
    error: null,
    retryIntervalId: null,
  });

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong....Retrying.");
      } else {
        const data = await response?.json();
        dispatch({
          type: "SET_PRODUCTS",
          payload: data?.products,
        });
      }
    } catch (error) {
      console.error("Error fetching Products", error);
      dispatch({ type: "SET_ERROR", payload: error.message });

      // Set a retry interval to fetch data again after 5 seconds
      if (!state.retryIntervalId) {
        const intervalId = setInterval(() => fetchData(), 5000);
        dispatch({ type: "SET_RETRY_INTERVAL", payload: intervalId });
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [state.retryIntervalId, dispatch]);

  const cancelRetry = useCallback(() => {
    clearInterval(state.retryIntervalId);
    dispatch({ type: "SET_ERROR", payload: null });
    dispatch({ type: "SET_RETRY_INTERVAL", payload: null });
  }, [state.retryIntervalId, dispatch]);

  useEffect(() => {
    isLoggedIn && fetchData();
  }, [fetchData, isLoggedIn]);

  const contextValue = useMemo(
    () => ({ state, dispatch, cancelRetry }),
    [state, dispatch, cancelRetry]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataContext;

export const CartState = () => useContext(DataContext);
