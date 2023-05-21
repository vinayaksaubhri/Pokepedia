import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import SearchIcon from "../assets/svg/search_Icon";
import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../style/metrics";
import { COLORS, FONTS } from "../style/style";
import FilterIcon from "../assets/svg/filter_icon";
const SearchBar = ({
  showFilter = true,
  onPressFilter = () => {
    console.log("filter press");
  },
}) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchIcon />
        <TextInput
          placeholder="Search a pokémon"
          style={styles.searchBarStyle}
          placeholderTextColor={COLORS.grey200}
          value={value}
          onChangeText={setValue}
          autoCorrect={false}
        />
      </View>
      {showFilter && (
        <Pressable
          onPress={onPressFilter}
          style={({ pressed }) => [
            styles.filterButtonContainer,
            pressed ? styles.pressFeedback : {},
          ]}
        >
          <FilterIcon />
        </Pressable>
      )}
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  searchBarContainer: {
    flex: 1,
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: COLORS.grey200,
    justifyContent: "center",
    backgroundColor: COLORS.surface,
    height: horizontalScale(50),
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(12),
    marginRight: 8,
  },
  searchBarStyle: {
    flex: 1,
    borderRadius: moderateScale(16),
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(16),
    marginLeft: verticalScale(8),
    color: COLORS.primaryBlue,
  },
  filterButtonContainer: {
    height: horizontalScale(50),
    width: verticalScale(50),
    backgroundColor: COLORS.grey200,
    borderRadius: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
  },
  pressFeedback: {
    backgroundColor: "#c9cdd5",
  },
});
