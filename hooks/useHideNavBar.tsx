import { createContext, useContext, useState } from "react";
const HideNavBar = createContext<{
  isStatusBarHidden: boolean;
  setIsStatusBarHidden: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isStatusBarHidden: false,
  setIsStatusBarHidden: () => {},
});

export const HideNavBarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);
  return (
    <HideNavBar.Provider
      value={{
        isStatusBarHidden,
        setIsStatusBarHidden,
      }}
    >
      {children}
    </HideNavBar.Provider>
  );
};
export default function useHideNavBar() {
  return useContext(HideNavBar);
}
