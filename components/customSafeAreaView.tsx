import { ReactNode } from "react";
import {
  Platform,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../style/style";

type Props = {
  children?: ReactNode | null;
};

const CustomSafeAreaView: React.FC<Props> = ({ children }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.surface,
    },
  });
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <SafeAreaView edges={["right", "left", "top"]} style={styles.container}>
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default CustomSafeAreaView;
