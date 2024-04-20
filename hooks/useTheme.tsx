import { createContext, useContext, useState } from "react";
const ThemeContext = createContext<{
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkModeWithAnimation: (x: number, y: number) => void;
}>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  toggleDarkModeWithAnimation: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkModeWithAnimation = (x: number, y: number) => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        toggleDarkModeWithAnimation,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default function useTheme() {
  return useContext(ThemeContext);
}
