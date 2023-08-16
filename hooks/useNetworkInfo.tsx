import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

const useNetworkInfo = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const online = state.isConnected && state.isInternetReachable;
      setIsOnline(online === null ? false : online);
    });

    return () => {
      unsubscribe();
      setIsOnline(false);
    };
  }, []);
  const onPressReload = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected && state.isInternetReachable) {
        setIsOnline(state.isConnected && state.isInternetReachable);
      }
    });
  };
  return [isOnline, onPressReload];
};
export default useNetworkInfo;
