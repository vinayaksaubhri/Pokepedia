import { Pressable, StyleSheet, Text, View } from "react-native";
import BackIcon from "../assets/svg/backIcon";
import FavIcon from "../assets/svg/favIcon";
import { scaleFont } from "../style/metrics";
import { COLORS, FONTS } from "../style/style";
const TopAppBar: React.FC<{
  label: string;
  navigation: any;
  onPressBackButton?: () => void;
  showFavIcon?: boolean;
}> = ({
  label = "Label",
  navigation,
  onPressBackButton = () => {
    navigation.goBack();
  },
  showFavIcon = false,
}) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={5} onPress={onPressBackButton}>
        <BackIcon />
      </Pressable>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={!showFavIcon && styles.opacityZero}>{<FavIcon />}</View>
    </View>
  );
};
export default TopAppBar;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  labelStyle: {
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(22),
    color: COLORS.primaryBlue,
  },
  opacityZero: {
    opacity: 0,
  },
});
