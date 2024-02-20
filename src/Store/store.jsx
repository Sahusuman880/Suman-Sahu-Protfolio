import { createContext } from "react";

export const ItemContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});
