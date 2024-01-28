import { Pressable, StyleSheet, Text, View } from "react-native";
import BackIcon from "../assets/svg/backIcon";
import { Octicons } from "@expo/vector-icons";
import {
  default as AnimatedLottieView,
  default as LottieView,
} from "lottie-react-native";
import { useEffect, useRef, useState } from "react";
import { scaleFont } from "../style/metrics";
import { COLORS, DARK_COLORS, FONTS } from "../style/style";
import useTheme from "../hooks/useTheme";

const TopAppBar: React.FC<{
  label: string;
  navigation: any;
  onPressBackButton?: () => void;
  showFavIcon?: boolean;
  onPressFavIcon?: () => void;
  isSelected?: boolean;
  disableDarkMode?: boolean;
}> = ({
  label = "Label",
  navigation,
  onPressBackButton = () => {
    navigation.goBack();
  },
  showFavIcon = false,
  onPressFavIcon = () => {},
  isSelected = false,
  disableDarkMode = false,
}) => {
  const { isDarkMode } = useTheme();
  const showDarkMode = !disableDarkMode && isDarkMode;
  const lottieRef = useRef<AnimatedLottieView>(null);
  const [showFavIconAnimation, setShowFavIconAnimation] = useState(isSelected);

  useEffect(() => {
    if (isSelected) {
      lottieRef.current?.play(50, 51);
    } else {
      lottieRef.current?.reset();
    }
  }, [isSelected]);
  const startAnimation = () => {
    setShowFavIconAnimation(true);
    lottieRef.current?.play(25, 51);
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
  const styles = StyleSheet.create({
    lottieViewStyle: {
      position: "absolute",
      width: 50,
      height: 50,
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
      color: showDarkMode ? DARK_COLORS.white : COLORS.primaryBlue,
    },
    opacityZero: {
      opacity: 0,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable hitSlop={5} onPress={onPressBackButton}>
        <BackIcon color={showDarkMode ? DARK_COLORS.white : undefined} />
      </Pressable>
      <Text style={styles.labelStyle}>{label}</Text>
      <Pressable
        style={[styles.favIconContainer, !showFavIcon && styles.opacityZero]}
        onPress={pressFavIcon}
      >
        <LottieView
          source={require("../assets/lottie/FavIcon.json")}
          loop={false}
          style={styles.lottieViewStyle}
          ref={lottieRef}
        />
        <Octicons
          name="heart"
          size={28}
          color={COLORS.primaryBlue}
          style={[styles.opacityZero]}
        />
      </Pressable>
    </View>
  );
};
export default TopAppBar;
