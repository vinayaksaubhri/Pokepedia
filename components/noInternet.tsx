import LottieView from "lottie-react-native";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import { moderateScale, scaleFont, width } from "../style/metrics";
import { COLORS } from "../style/style";
import Button from "./button";
import CustomSafeAreaView from "./customSafeAreaView";

type NoInternetProps = {
  onPressReload?: (event: GestureResponderEvent) => void;
};
const NoInternet: React.FC<NoInternetProps> = ({ onPressReload }) => {
  return (
    <CustomSafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: moderateScale(40),
          gap: 10,
        }}
      >
        <LottieView
          style={{ width: width * 0.8, aspectRatio: 1 }}
          source={require("../assets/lottie/offline.json")}
          loop
          autoPlay
          resizeMode="cover"
        />

        <Text
          style={{
            color: COLORS.primaryBlue,
            fontSize: scaleFont(32),
            textAlign: "center",
          }}
        >
          Oops! No connection
        </Text>
        <Text
          style={{
            color: COLORS.primaryBlue,
            fontSize: scaleFont(16),
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Please turn on the internet to explore the Pokémon universe.
        </Text>
        <Button variant="Primary" label="Reload" onPress={onPressReload} />
      </View>
    </CustomSafeAreaView>
  );
};
export default NoInternet;
const styles = StyleSheet.create({});
