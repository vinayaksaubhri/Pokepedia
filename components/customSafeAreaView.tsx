import { ReactNode } from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
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
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
export default CustomSafeAreaView;
