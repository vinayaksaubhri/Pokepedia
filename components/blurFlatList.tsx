import { FlatList, FlatListProps, StyleSheet, View } from "react-native";
import { verticalScale, width } from "../style/metrics";
import { LinearGradient } from "expo-linear-gradient";

type BlurFlatListProps = FlatListProps<any> & {
  blurHeightTop: number;
  blurHeightBottom: number;
};
const BlurFlatList: React.FC<BlurFlatListProps> = ({
  blurHeightTop = 0,
  blurHeightBottom = 0,
  ...rest
}) => {
  const styles = StyleSheet.create({
    linearGradient: {
      width: width,
      height: verticalScale(blurHeightTop),
      position: "absolute",
      zIndex: 10,
    },
    linearGradientBottom: {
      width: width,
      height: verticalScale(blurHeightBottom),
      position: "absolute",
      zIndex: 10,
      bottom: 0,
    },
  });
  return (
    <View style={{ width: "100%", flex: 1 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["white", "rgba(255, 255, 255, 0)"]}
        style={styles.linearGradient}
        pointerEvents="none"
      />
      <FlatList {...rest} />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["rgba(255, 255, 255, 0)", "white"]}
        style={styles.linearGradientBottom}
        pointerEvents="none"
      />
    </View>
  );
};
export default BlurFlatList;
