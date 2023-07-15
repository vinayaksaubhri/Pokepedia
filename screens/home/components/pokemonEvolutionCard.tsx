import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
import Chip, { chipPropsType } from "../../../components/chip";

const PokemonEvolutionCard: React.FC<{
  imageSource: ImageSourcePropType;
  label: string;
  pokemonName: string;
  pokemonTypes: chipPropsType[];
  pokemonLevel?: string | undefined;
}> = ({
  imageSource,
  label = "",
  pokemonName = "",
  pokemonTypes = [],
  pokemonLevel = undefined,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.imageStyle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.pokemonNumberTextStyle}>{label}</Text>
          <Text style={styles.pokemonNameTextStyle}>{pokemonName}</Text>
          <View style={styles.pokemonChipContainer}>
            {pokemonTypes.map((item) => (
              <Chip {...item} />
            ))}
          </View>
        </View>
      </View>
      {pokemonLevel && (
        <View style={styles.pokemonLevelContainer}>
          <Text style={styles.pokemonLevelTextStyle}>{pokemonLevel}</Text>
        </View>
      )}
    </View>
  );
};
export default PokemonEvolutionCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: horizontalScale(24),
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: moderateScale(16),
    paddingVertical: verticalScale(8),
    backgroundColor: COLORS.grey100,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: verticalScale(110),
    height: "100%",
    width: "45%",
  },
  imageStyle: {
    aspectRatio: 1,
    flex: 1,
  },
  textContainer: {
    gap: horizontalScale(8),
  },
  pokemonNumberTextStyle: {
    fontSize: scaleFont(16),
    fontFamily: FONTS.RC_Regular,
    color: COLORS.grey300,
  },
  pokemonNameTextStyle: {
    fontSize: scaleFont(22),
    fontFamily: FONTS.RC_Regular,
    color: COLORS.primaryBlue,
  },
  pokemonLevelTextStyle: {
    color: COLORS.grey300,
    fontSize: scaleFont(12),
    fontFamily: FONTS.RC_Regular,
  },
  pokemonLevelContainer: {
    borderLeftWidth: 1,
    height: verticalScale(48),
    marginVertical: verticalScale(16),
    left: "60%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.grey200,
    paddingLeft: horizontalScale(16),
  },
  pokemonChipContainer: {
    gap: verticalScale(8),
  },
});
