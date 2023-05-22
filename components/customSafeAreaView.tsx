import { ReactNode } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { COLORS } from "../style/style";

const STATUSBAR_HEIGHT =
  Platform.OS === "android" ? StatusBar.currentHeight : 0;

type Props = {
  children?: ReactNode | null;
};

const CustomSafeAreaView: React.FC<Props> = ({ children }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.surface,
      paddingTop: STATUSBAR_HEIGHT,
    },
  });
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default CustomSafeAreaView;
