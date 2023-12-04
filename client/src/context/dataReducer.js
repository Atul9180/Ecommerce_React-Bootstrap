export const reducerFn = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "SET_RETRY_INTERVAL":
      return { ...state, retryIntervalId: action.payload };

    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

//action has: type and payload(data to manipulate that we sent on clicking btn)
//eg: along with old state value in cart, {...action.payload, qty:1} expand all payload and 1 qty
//state here has: products, cart[], here require cart only so extract it
