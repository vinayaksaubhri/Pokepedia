import { useEffect } from "react";
import { AppState, AppStateStatus } from "react-native";

export function useAppState(onChange: (status: AppStateStatus) => void) {
  useEffect(() => {
    const appState = AppState.addEventListener("change", onChange);
    return () => {
      appState.remove();
    };
  }, [onChange]);
}
