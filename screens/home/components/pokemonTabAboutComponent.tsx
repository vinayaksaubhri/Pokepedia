import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../../style/style";
import {
  height,
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../../../style/metrics";
import { ChipIcon } from "../../../components/chip";
const PokemonTabAboutComponent = () => {
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      <View style={styles.container}>
        <Text style={styles.pokemonDescriptionText}>
          Thanks to its powerful wings it can fly up to 1,400 m high. The flames
          it spits can reach extremely high temperatures.
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            gap: verticalScale(16),
          }}
        >
          <View style={styles.pokemonInfoContainer}>
            <View style={styles.pokemonHeightWeightContainer}>
              <Text style={styles.primaryText}>90.5 kg</Text>
              <Text style={styles.secondaryText}>Weight</Text>
            </View>
            <View style={styles.infoDivider} />
            <View style={styles.pokemonHeightWeightContainer}>
              <Text style={styles.primaryText}>1.7 m</Text>
              <Text style={styles.secondaryText}>Height</Text>
            </View>
          </View>
          <View style={styles.pokemonInfoContainer}>
            <View style={styles.pokemonHeightWeightContainer}>
              <View style={{ flexDirection: "row", gap: 8 }}>
                <ChipIcon iconType="fire" size="md" />
                <ChipIcon iconType="flying" size="md" />
              </View>
              <Text style={styles.secondaryText}>Category</Text>
            </View>
            <View style={styles.infoDivider} />
            <View style={styles.pokemonHeightWeightContainer}>
              <Text style={styles.primaryText}>Solar-Power</Text>
              <Text style={styles.secondaryText}>Ability</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default PokemonTabAboutComponent;
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: verticalScale(24),
    backgroundColor: COLORS.surface,
  },
  container: {
    backgroundColor: COLORS.surface,
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(24),
    gap: verticalScale(16),
  },
  pokemonDescriptionText: {
    color: COLORS.grey400,
    fontFamily: FONTS.RC_Regular,
    lineHeight: moderateScale(24),
    fontSize: moderateScale(16),
    letterSpacing: moderateScale(0.5),
  },
  pokemonInfoContainer: {
    backgroundColor: COLORS.grey100,
    width: "100%",
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(16),
    borderRadius: moderateScale(16),
    flexDirection: "row",
    gap: moderateScale(48),
  },
  pokemonHeightWeightContainer: {
    flex: 1,
    alignItems: "center",
    padding: moderateScale(16),
    gap: verticalScale(4),
  },
  primaryText: {
    fontFamily: FONTS.RC_Medium,
    fontSize: scaleFont(16),
    color: COLORS.primaryBlue,
  },
  secondaryText: {
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(10),
    color: COLORS.grey400,
  },
  infoDivider: {
    height: "100%",
    width: 1,
    backgroundColor: COLORS.grey200,
    position: "absolute",
    alignSelf: "center",
    right: "55%",
  },
});
