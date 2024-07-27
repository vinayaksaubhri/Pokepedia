import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import OtpInput from "./components/optInput";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";
import { COLORS, FONTS } from "../../style/style";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../../components/button";
import useUser from "../../hooks/useUser";
const OTP = () => {
  const navigation = useNavigation();
  const { setIsUserLoggedIn } = useUser();

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Pressable
          style={styles.backButtonContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome
            name="angle-left"
            size={moderateScale(24)}
            color="black"
          />
        </Pressable>
        <Text style={styles.headingTextStyle}>Verification</Text>
        <Text style={styles.subHeadingTextStyle}>
          Please type the verification code sent to vinayaksaubhri@gmail.com
        </Text>
        <View style={{ marginVertical: verticalScale(60) }}>
          <OtpInput
            onOtpSubmit={(otp) => {
              setIsUserLoggedIn(true);
            }}
          />
        </View>
        <Text style={styles.resendTextStyle}>
          Resend code in
          <Text style={styles.timerStyle}> 00:30</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            label="Verify Email"
            variant="Primary"
            onPress={() => {
              //   navigation.navigate(ROUTES.OTP_SCREEN);
            }}
            width={"100%"}
          />
        </View>
      </View>
    </CustomSafeAreaView>
  );
};
export default OTP;
const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    justifyContent: "flex-end",
    flex: 1,
  },
  backButtonContainer: {
    width: moderateScale(40),
    height: moderateScale(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.grey200,
  },
  container: {
    padding: moderateScale(24),
    paddingBottom: verticalScale(36),
    flex: 1,
    flexDirection: "column",
  },
  headingTextStyle: {
    alignSelf: "flex-start",
    fontSize: scaleFont(34),
    color: COLORS.primaryBlue,
    fontFamily: FONTS.RC_Bold,
    marginBottom: verticalScale(16),
    marginTop: verticalScale(30),
  },

  subHeadingTextStyle: {
    alignSelf: "flex-start",
    fontSize: scaleFont(18),
    color: COLORS.grey400,
    fontFamily: FONTS.RC_Regular,
    lineHeight: verticalScale(24),
  },
  resendTextStyle: {
    alignSelf: "center",
    fontSize: scaleFont(13),
    color: COLORS.primaryBlue,
    fontFamily: FONTS.RC_Regular,
    marginBottom: verticalScale(16),
    lineHeight: verticalScale(24),
  },
  timerStyle: {
    color: COLORS.primaryYellow,
  },
});
