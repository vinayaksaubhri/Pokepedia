import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS } from "../../../style/style";
import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../../../style/metrics";
import {
  capitalizeFirstLetter,
  getPokemonEvolutionItemSource,
  removeHyphen,
} from "../../../utils/utils";
type EvolutionTriggerProps = {
  pokemonLevel: number | null;
  trigger: string;
  triggerItem: string;
};

const EvolutionTrigger: React.FC<EvolutionTriggerProps> = ({
  pokemonLevel,
  trigger,
  triggerItem,
}) => {
  switch (trigger) {
    case "level-up":
      return (
        <View style={styles.pokemonLevelContainer}>
          <Text style={styles.pokemonLevelTextStyle}>
            {pokemonLevel === null ? "Level Unknown" : "Level " + pokemonLevel}
          </Text>
        </View>
      );
    case "use-item":
      return (
        <View style={styles.pokemonLevelContainer}>
          <Image
            style={styles.pokemonItemImageStyle}
            source={
              getPokemonEvolutionItemSource(triggerItem) as ImageSourcePropType
            }
          />
          <Text style={styles.pokemonLevelTextStyle}>
            {capitalizeFirstLetter(removeHyphen(triggerItem))}
          </Text>
        </View>
      );
    default:
      return (
        <View style={styles.pokemonLevelContainer}>
          <Text style={styles.pokemonLevelTextStyle}>
            {capitalizeFirstLetter(removeHyphen(trigger))}
          </Text>
        </View>
      );
  }
};
export default EvolutionTrigger;
const styles = StyleSheet.create({
  pokemonItemImageStyle: {
    width: moderateScale(20),
    aspectRatio: 1,
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
    gap: horizontalScale(8),
  },
});
