import { ReactNode } from "react";
import { KeyboardAvoidingView, StatusBarStyle, StyleSheet } from "react-native";
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";
import CustomStatusBar from "./customStatusBar";

type Props = {
  children?: ReactNode | null;
  edges?: NativeSafeAreaViewProps["edges"];
  backgroundColor?: string;
  barStyle?: StatusBarStyle | null | undefined;
};

const CustomSafeAreaView: React.FC<Props> = ({
  children,
  edges = ["right", "left"],
  backgroundColor = "#fff",
  barStyle,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <CustomStatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
      <SafeAreaView edges={edges} style={styles.container}>
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default CustomSafeAreaView;
