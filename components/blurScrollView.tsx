import { StyleSheet, ScrollViewProps } from "react-native";
import { verticalScale, width } from "../style/metrics";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

type BlurScrollViewProps = ScrollViewProps & { blurHeight: number };

const BlurScrollView: React.FC<BlurScrollViewProps> = ({
  children,
  blurHeight = 0,
  ...rest
}) => {
  const styles = StyleSheet.create({
    linearGradient: {
      width: width,
      height: verticalScale(blurHeight),
      position: "absolute",
      zIndex: 10,
    },
  });
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["white", "rgba(255, 255, 255, 0)"]}
        style={styles.linearGradient}
        pointerEvents="none"
      />
      <ScrollView {...rest}>{children}</ScrollView>
    </>
  );
};
export default BlurScrollView;
