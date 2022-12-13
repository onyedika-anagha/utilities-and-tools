import { createContext, useReducer } from "react";
import { createAction } from "../../utils/reducer/reducer.utils";

// as the actual value you want to see
export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export const THEME_ACTION_TYPES = {
  SET_THEME: "SET_THEME",
};

const ThemeReducer = (state, action) => {
  console.log(action);
  const { type, payload } = action;
  console.log("payload: ", payload);
  switch (type) {
    case THEME_ACTION_TYPES.SET_THEME:
      return { ...state, theme: payload };

    default:
      throw new Error(`Unhandled type ${type} in the ThemeReducer`);
  }
};

const INITIAL_STATE = {
  theme: "light",
};

export const ThemeProvider = ({ children }) => {
  const [{ theme }, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);
  const setTheme = (data) => {
    dispatch(createAction(THEME_ACTION_TYPES.SET_THEME, data));
  };
  const value = { theme, setTheme };

  console.log("Theme: ", theme);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
