import { ScrollView, StyleSheet, Text, View } from "react-native";
import { width } from "../style/metrics";
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
    { label: "Fairy", iconType: "" },
    { label: "Fighting", iconType: "" },
    { label: "Fire", iconType: "" },
    { label: "Flying", iconType: "" },
    { label: "Ghost", iconType: "" },
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
    </View>
  );
};
export default FilterModal;
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.surface,
    width: width,
    padding: 16,
    justifyContent: "center",
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
