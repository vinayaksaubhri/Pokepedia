import { Pressable, StyleSheet, Text, View } from "react-native";
import BackIcon from "../assets/svg/backIcon";
// import FavIcon from "../assets/svg/favIcon";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import { scaleFont } from "../style/metrics";
import { COLORS, FONTS } from "../style/style";
import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";

const TopAppBar: React.FC<{
  label: string;
  navigation: any;
  onPressBackButton?: () => void;
  showFavIcon?: boolean;
  onPressFavIcon?: () => void;
}> = ({
  label = "Label",
  navigation,
  onPressBackButton = () => {
    navigation.goBack();
  },
  showFavIcon = false,
  onPressFavIcon = () => {},
}) => {
  const lottieRef = useRef<AnimatedLottieView>(null);
  const [showFavIconAnimation, setShowFavIconAnimation] = useState(false);
  const startAnimation = () => {
    setShowFavIconAnimation(true);
    lottieRef.current?.play();
  };
  const resetAnimation = () => {
    lottieRef.current?.reset();
    setShowFavIconAnimation(false);
  };
  const pressFavIcon = () => {
    if (showFavIconAnimation) {
      resetAnimation();
    } else {
      startAnimation();
    }
    onPressFavIcon();
  };

  return (
    <View style={styles.container}>
      <Pressable hitSlop={5} onPress={onPressBackButton}>
        <BackIcon />
      </Pressable>
      <Text style={styles.labelStyle}>{label}</Text>
      <Pressable
        style={[styles.favIconContainer, !showFavIcon && styles.opacityZero]}
        onPress={pressFavIcon}
      >
        {
          <Octicons
            name="heart"
            size={28}
            color={COLORS.primaryBlue}
            style={[showFavIconAnimation && styles.opacityZero]}
          />
        }

        {showFavIconAnimation && (
          <LottieView
            source={require("../assets/lottie/FavIcon.json")}
            autoPlay
            loop={false}
            style={styles.lottieViewStyle}
            ref={lottieRef}
          />
        )}
      </Pressable>
    </View>
  );
};
export default TopAppBar;
const styles = StyleSheet.create({
  lottieViewStyle: {
    position: "absolute",
    width: 56,
    height: 56,
  },
  favIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
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
