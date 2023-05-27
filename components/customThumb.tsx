import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../style/style";
const thumbWidth = 20;
const CustomThumb = ({ value = 0, thumbVisible = true }) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      overflow: "visible",
      top: thumbVisible ? -thumbWidth / 2 : 0,
      height: 80,
    },
    thumbDropView: {
      alignItems: "center",
      justifyContent: "center",
      width: thumbWidth,
      height: thumbWidth,
      borderTopLeftRadius: thumbWidth / 2,
      borderTopRightRadius: thumbWidth / 2,
      borderBottomLeftRadius: thumbWidth / 2,
      backgroundColor: COLORS.primaryYellow,
      transform: [{ rotateZ: "45deg" }],
      overflow: "visible",
      top: -6,
    },
    thumbDropText: {
      transform: [{ rotateZ: "-45deg" }],
      fontFamily: FONTS.RC_Regular,
      fontSize: 10,
      color: COLORS.primaryBlue,
    },
    thumbStyle: {
      width: thumbWidth,
      height: thumbWidth,
      borderRadius: thumbWidth / 2,
      backgroundColor: COLORS.primaryYellow,
    },
  });
  return (
    <View style={styles.container}>
      {thumbVisible && (
        <View style={styles.thumbDropView}>
          <Text style={styles.thumbDropText}>{value}</Text>
        </View>
      )}
      <View style={styles.thumbStyle} />
    </View>
  );
};
export default CustomThumb;
