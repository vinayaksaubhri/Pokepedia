import { Image, StyleSheet, Text } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import { View } from "react-native";
import { COLORS, FONTS } from "../../style/style";
import Button from "../../components/button";
import ROUTES from "../../constant/routes";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";

const Login = ({ navigation }) => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headingText}>PokePedia</Text>
        <Image
          source={require("../../assets/images/loginImage.png")}
          style={styles.imageStyle}
        />
        <Text style={StyleSheet.compose(styles.headingText, styles.marginTop)}>
          Welcome to PokePedia
        </Text>
        <Text style={styles.secondaryText}>Everything about Pokemon</Text>
        <View style={styles.buttonContainer}>
          <Button
            label="Login"
            onPress={() => {
              navigation.navigate(ROUTES.EMAIL_SCREEN);
            }}
            variant={"Primary"}
            width={"100%"}
          />
        </View>
      </View>
    </CustomSafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(36),
    alignItems: "center",
  },
  headingText: {
    fontSize: scaleFont(24),
    fontFamily: FONTS.RC_Bold,
    color: COLORS.primaryBlue,
  },
  imageStyle: {
    height: "50%",
    resizeMode: "contain",
    aspectRatio: 1,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "flex-end",
    flex: 1,
  },
  marginTop: {
    marginTop: verticalScale(60),
  },
  secondaryText: {
    fontSize: scaleFont(14),
    fontFamily: FONTS.RC_Light,
    color: COLORS.primaryBlue,
    marginTop: 5,
  },
});
