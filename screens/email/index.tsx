import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import SearchBar from "../../components/searchBar";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";
import { COLORS, FONTS } from "../../style/style";
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";

const Email = () => {
  const navigation = useNavigation();
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
        <Text style={styles.headingTextStyle}>Email</Text>
        <Text style={styles.subHeadingTextStyle}>Please enter your Email.</Text>
        <SearchBar
          showIcon={false}
          textInputProp={{ autoComplete: "email", placeholder: "Email" }}
        />
        <View style={styles.buttonContainer}>
          <Button
            label="Send Code"
            variant="Primary"
            onPress={() => {
              console.log("Next");
            }}
            width={"100%"}
          />
        </View>
      </View>
    </CustomSafeAreaView>
  );
};
export default Email;
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
    marginBottom: verticalScale(16),
    lineHeight: verticalScale(24),
  },
});
