import { ReactNode } from "react";
import { KeyboardAvoidingView, StatusBar, StyleSheet } from "react-native";
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";
import { COLORS, POKEMON_COLOR } from "../style/style";
import CustomStatusBar from "./customStatusBar";

type Props = {
  children?: ReactNode | null;
  edges?: NativeSafeAreaViewProps["edges"];
  backgroundColor?: string;
};

const CustomSafeAreaView: React.FC<Props> = ({
  children,
  edges = ["right", "left"],
  backgroundColor = "#fff",
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.surface,
    },
  });
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <CustomStatusBar backgroundColor={backgroundColor} />
      <SafeAreaView edges={edges} style={styles.container}>
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default CustomSafeAreaView;
