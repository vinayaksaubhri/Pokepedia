import { LogBox, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LoadAssets } from "./components/loadAssets";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAppState } from "./hooks/useAppState";
import { FONT_OBJECT, onAppStateChange } from "./utils/utils";
import { QueryClient, QueryClientProvider } from "react-query";

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const queryClient = new QueryClient();
export default function App() {
  useAppState(onAppStateChange);
  return (
    <LoadAssets fonts={FONT_OBJECT}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.container}>
          <QueryClientProvider client={queryClient}>
            <Navigation />
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
