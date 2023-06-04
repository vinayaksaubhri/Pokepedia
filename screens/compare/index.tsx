import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../style/style";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";
import { FONTS } from "../../style/style";
import PokemonSelectCard from "../../components/pokemonSelectCard";
import Button from "../../components/button";
import DiceButton from "../../components/DiceButton";

const Compare = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.headingTextStyle}>Comparator</Text>
          <Text style={styles.subHeadingTextStyle}>
            Select two Pokémon and compare them to see who is the strongest!
          </Text>
        </View>
        <View
          style={{
            marginTop: verticalScale(24),
            flex: 1,
            gap: 24,
          }}
        >
          <PokemonSelectCard />
          <PokemonSelectCard />
          <DiceButton />
          <Button variant="Primary" width={"100%"} label="COMPARE!" />
        </View>
      </View>
    </CustomSafeAreaView>
  );
};
export default Compare;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(24),
    paddingBottom: verticalScale(84 + 24),
    // backgroundColor: "red",
  },
  headingTextStyle: {
    fontSize: scaleFont(36),
    fontFamily: FONTS.RC_Regular,
    marginBottom: moderateScale(4),
    color: COLORS.primaryBlue,
  },
  subHeadingTextStyle: {
    fontSize: scaleFont(16),
    fontFamily: FONTS.RC_Regular,
    color: COLORS.primaryBlue,
    lineHeight: verticalScale(24),
  },
});
