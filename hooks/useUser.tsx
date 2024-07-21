import { createContext, useContext, useState } from "react";
const UserContext = createContext<{
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userDetails: object;
  setUserDetails: React.Dispatch<React.SetStateAction<object>>;
}>({
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {},
  userDetails: {},
  setUserDetails: () => {},
});

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  return (
    <UserContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default function useUser() {
  return useContext(UserContext);
}
