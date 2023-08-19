import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { GestureResponderEvent } from "react-native";

const useNetworkInfo = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const online = state.isConnected && state.isInternetReachable;
      if (online === null) return;
      setIsOnline(online);
    });

    return () => {
      unsubscribe();
      setIsOnline(false);
    };
  }, []);
  const onPressReload: (event: GestureResponderEvent) => void = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected && state.isInternetReachable) {
        setIsOnline(state.isConnected && state.isInternetReachable);
      }
    });
    return;
  };
  return [isOnline, onPressReload] as const;
};
export default useNetworkInfo;
