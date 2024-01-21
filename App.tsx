import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { LogBox, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoadAssets } from "./components/loadAssets";
import { useAppState } from "./hooks/useAppState";
import { HideNavBarProvider } from "./hooks/useHideNavBar";
import Navigation from "./navigation";
import { FONT_OBJECT, onAppStateChange } from "./utils/utils";
import { ThemeProvider } from "./hooks/useTheme";

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});
export default function App() {
  useAppState(onAppStateChange);
  return (
    <LoadAssets fonts={FONT_OBJECT}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.container}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <BottomSheetModalProvider>
                <HideNavBarProvider>
                  <Navigation />
                </HideNavBarProvider>
              </BottomSheetModalProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </LoadAssets>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
