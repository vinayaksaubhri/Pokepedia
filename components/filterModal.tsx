import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, FONTS } from "../style/style";
import Chip, { IconTypes } from "./chip";

const FilterModal = () => {
  const GenerationList = [
    "Generation I",
    "Generation II",
    "Generation III",
    "Generation IV",
  ];
  const TypeList: { label: string; iconType: IconTypes }[] = [
    { label: "Bug", iconType: "bug" },
    { label: "Dark", iconType: "dark" },
    { label: "Dragon", iconType: "dragon" },
    { label: "Electric", iconType: "electric" },
    { label: "Fairy", iconType: "fairy" },
    { label: "Fighting", iconType: "fighting" },
    { label: "Fire", iconType: "fire" },
    { label: "Flying", iconType: "flying" },
    { label: "Ghost", iconType: "ghost" },
    { label: "Grass", iconType: "grass" },
    { label: "Ground", iconType: "ground" },
    { label: "Ice", iconType: "ice" },
    { label: "Normal", iconType: "normal" },
    { label: "Poison", iconType: "poison" },
    { label: "Psychic", iconType: "psychic" },
    { label: "Steel", iconType: "steel" },
    { label: "Water", iconType: "water" },
    { label: "Rock", iconType: "rock" },
  ];

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalHeading}>Filters</Text>
      <Text style={styles.modalCategoryHeading}>Generations</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      >
        {GenerationList.map((item, index) => (
          <Chip label={item} key={index} />
        ))}
      </ScrollView>
      <Text style={styles.modalCategoryHeading}>Types</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      >
        {TypeList.map(({ label, iconType }, index) => (
          <Chip
            label={label}
            key={index}
            iconType={iconType}
            showTypeIcon={true}
          />
        ))}
      </ScrollView>
      <Text style={styles.modalCategoryHeading}>Weakness</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      >
        {TypeList.map(({ label, iconType }, index) => (
          <Chip
            label={label}
            key={index}
            iconType={iconType}
            showTypeIcon={true}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default FilterModal;
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.surface,
    // width: width,
    padding: 16,
  },

  modalHeading: {
    fontSize: 22,
    color: COLORS.primaryBlue,
    fontFamily: FONTS.RC_Regular,
  },
  modalCategoryHeading: {
    fontSize: 14,
    color: COLORS.primaryBlue,
    fontFamily: FONTS.RC_Bold,
    marginTop: 24,
    marginBottom: 12,
  },
});
