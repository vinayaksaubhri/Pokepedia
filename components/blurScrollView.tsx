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
    linearGradientBottom: {
      width: width,
      height: verticalScale(blurHeight),
      position: "absolute",
      zIndex: 10,
      bottom: 0,
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
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["rgba(255, 255, 255, 0)", "white"]}
        style={styles.linearGradientBottom}
        pointerEvents="none"
      />
    </>
  );
};
export default BlurScrollView;
