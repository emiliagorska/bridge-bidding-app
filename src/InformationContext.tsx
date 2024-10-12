import React, { createContext, useContext, useReducer } from "react";

export const InformationContext = createContext(null);

export const InformationDispatchContext = createContext(null);

function informationReducer(information, action) {
  switch (action.type) {
    case "added": {
      return [
        ...information,
        {
          id: action.id,
          typeOfInformation: action.typeOfInformation,
          details: action.details,
        },
      ];
    }
    case "clearedAll": {
      return [];
    }
    //Possibly not needed?
    // case "changed": {
    //   return information.map((b) => {
    //     if (b.id === action.information.id) {
    //       return action.information;
    //     } else {
    //       return b;
    //     }
    //   });
    // }
    // case "deleted": {
    //   return information.filter((b) => b.id !== action.id);
    // }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const InformationProvider = ({ children }) => {
  const [information, dispatch] = useReducer(informationReducer, "");

  return (
    <InformationContext.Provider value={information}>
      <InformationDispatchContext.Provider value={dispatch}>
        {children}
      </InformationDispatchContext.Provider>
    </InformationContext.Provider>
  );
};

export const useInformation = () => {
  return useContext(InformationContext);
};

export const useInformationDispatch = () => {
  return useContext(InformationDispatchContext);
};

//INFO:
//https://react.dev/learn/scaling-up-with-reducer-and-context
// You can think of TasksProvider as a part of the screen that knows how to deal with tasks, useTasks as a way to read them, and useTasksDispatch as a way to update them from any component below in the tree.
