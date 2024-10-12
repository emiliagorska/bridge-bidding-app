import React, { createContext, useContext, useReducer } from "react";

export const BiddingContext = createContext(null);

export const BiddingDispatchContext = createContext(null);

function biddingReducer(bidding, action) {
  switch (action.type) {
    case "added": {
      return [
        ...bidding,
        {
          id: action.id,
          bid: action.bid
        },
      ];
    }
    case "clearedAll": {
      return [];
    }
    //Possibly not needed?
    // case "changed": {
    //   return bidding.map((b) => {
    //     if (b.id === action.bidding.id) {
    //       return action.bidding;
    //     } else {
    //       return b;
    //     }
    //   });
    // }
    // case "deleted": {
    //   return bidding.filter((b) => b.id !== action.id);
    // }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const BiddingProvider = ({ children }) => {
  const [bidding, dispatch] = useReducer(biddingReducer, "");

  return (
    <BiddingContext.Provider value={bidding}>
      <BiddingDispatchContext.Provider value={dispatch}>
        {children}
      </BiddingDispatchContext.Provider>
    </BiddingContext.Provider>
  );
};

export const useBidding = () => {
  return useContext(BiddingContext);
};

export const useBiddingDispatch = () => {
  return useContext(BiddingDispatchContext);
};

//INFO:
//https://react.dev/learn/scaling-up-with-reducer-and-context
// You can think of TasksProvider as a part of the screen that knows how to deal with tasks, useTasks as a way to read them, and useTasksDispatch as a way to update them from any component below in the tree.
