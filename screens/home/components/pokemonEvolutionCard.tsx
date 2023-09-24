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
import EvolutionTrigger from "./EvolutionTrigger";

const PokemonEvolutionCard: React.FC<{
  imageSource: ImageSourcePropType;
  label: string;
  pokemonName: string;
  pokemonTypes: chipPropsType[];
  evolvesFrom: boolean;
  trigger: string;
  triggerItem: string;
  pokemonLevel: number | null;
}> = ({
  imageSource,
  label = "",
  pokemonName = "",
  pokemonTypes = [],
  pokemonLevel,
  evolvesFrom,
  trigger,
  triggerItem,
}) => {
  return (
    <View style={styles.pokemonEvolutionContainer}>
      {evolvesFrom && (
        <EvolutionTrigger
          pokemonLevel={pokemonLevel}
          trigger={trigger}
          triggerItem={triggerItem}
        />
      )}
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.imageStyle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.pokemonNumberTextStyle}>{label}</Text>
          <Text style={styles.pokemonNameTextStyle}>{pokemonName}</Text>
          <View style={styles.pokemonChipContainer}>
            {pokemonTypes.map((item, index) => (
              <Chip {...item} key={index} />
            ))}
          </View>
        </View>
      </View>
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
    flex: 2,
  },
  imageStyle: {},
  textContainer: {
    gap: horizontalScale(8),
    flex: 1,
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
    flexDirection: "row",
  },
  pokemonEvolutionContainer: {
    width: "100%",
  },
});
