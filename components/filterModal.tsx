import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";
import { GenerationList, TypeList } from "../constant/constant";
import { useHaptic } from "../hooks/useHaptic";

import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../style/metrics";
import { COLORS, FONTS } from "../style/style";
import { filterType, pokemonGenerationType } from "../types/pokemonTypes";
import Button from "./button";
import Chip from "./chip";
import CustomSlider from "./customSlider";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type FilterModalProps = {
  bottomSheetRef: React.RefObject<BottomSheetModalMethods>;
  filterDataFromQuery: filterType;
  setFilterDataFromQuery: React.Dispatch<React.SetStateAction<filterType>>;
};
const dropDownItems = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];
const FilterModal: React.FC<FilterModalProps> = ({
  bottomSheetRef,
  filterDataFromQuery,
  setFilterDataFromQuery,
}) => {
  const [open, setOpen] = useState(false);
  const hapticSelection = useHaptic("light");
  const insets = useSafeAreaInsets();
  const [filterData, setFilterData] = useState<filterType>({
    ...filterDataFromQuery,
  });

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );
  const onPressApply = () => {
    setFilterDataFromQuery((prev) => ({
      ...prev,
      generation: filterData.generation,
      type: filterData.type,
      weakness: filterData.weakness,
      height: filterData.height,
      weight: filterData.weight,
      orderByPokemonIndex: filterData.orderByPokemonIndex,
    }));
    bottomSheetRef.current?.close();
  };
  useFocusEffect(
    useCallback(() => {
      setFilterData((prev) => ({
        ...prev,
        ...filterDataFromQuery,
      }));
    }, [filterDataFromQuery])
  );
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.bottomSheetBackgroundSheet}
      enableDynamicSizing={true}
      topInset={insets.top}
    >
      <BottomSheetView>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>Filters</Text>

          <View>
            <Text style={styles.modalCategoryHeading}>Generations</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContentContainerStyle}
            >
              {GenerationList.map(({ value, label }, index) => (
                <Chip
                  label={label}
                  key={index}
                  isSelected={filterData.generation === value}
                  onPress={() =>
                    setFilterData((prev) => ({
                      ...prev,
                      generation: value as pokemonGenerationType,
                    }))
                  }
                />
              ))}
            </ScrollView>
          </View>
          <View>
            <Text style={styles.modalCategoryHeading}>Types</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContentContainerStyle}
            >
              {TypeList.map(({ label, iconType }, index) => (
                <Chip
                  label={label}
                  key={index}
                  iconType={iconType}
                  showTypeIcon={true}
                  isSelected={filterData.type === iconType}
                  onPress={() =>
                    setFilterData((prev) => ({ ...prev, type: iconType }))
                  }
                />
              ))}
            </ScrollView>
          </View>
          <View>
            <Text style={styles.modalCategoryHeading}>Weakness</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContentContainerStyle}
            >
              {TypeList.map(({ label, iconType }, index) => (
                <Chip
                  label={label}
                  key={index}
                  iconType={iconType}
                  showTypeIcon={true}
                  isSelected={filterData.weakness === iconType}
                  onPress={() =>
                    setFilterData((prev) => ({ ...prev, weakness: iconType }))
                  }
                />
              ))}
            </ScrollView>
          </View>
          <View>
            <View style={styles.customSliderHeading}>
              <Text style={styles.modalCategoryHeading}>Weight</Text>
              <Text style={styles.customSliderSubHeading}>
                {filterData.weight} kg
              </Text>
            </View>
            <CustomSlider
              value={filterData.weight ? filterData.weight : 0}
              onValueChange={(value: number) => {
                if (value !== filterData.weight) {
                  hapticSelection();
                  setFilterData((prev) => ({ ...prev, weight: value }));
                }
              }}
            />
          </View>
          <View>
            <View style={styles.customSliderHeading}>
              <Text style={styles.modalCategoryHeading}>Height</Text>
              <Text style={styles.customSliderSubHeading}>
                {filterData.height} m
              </Text>
            </View>
            <CustomSlider
              value={filterData.height ? filterData.height : 0}
              maximumValue={20}
              step={2}
              onValueChange={(value: number) => {
                if (value !== filterData.height) {
                  hapticSelection();
                  setFilterData((prev) => ({ ...prev, height: value }));
                }
              }}
            />
          </View>
          <View>
            <Text style={styles.modalCategoryHeading}>Order</Text>
            <DropDownPicker
              open={open}
              value={filterData?.orderByPokemonIndex}
              items={dropDownItems}
              setOpen={setOpen}
              onSelectItem={({ value }) => {
                setFilterData((prev) => ({
                  ...prev,
                  orderByPokemonIndex: value as "asc" | "desc" | null,
                }));
              }}
              placeholder="Order By"
              showTickIcon={false}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              style={styles.dropDownScale}
              placeholderStyle={styles.placeholderStyle}
              listItemLabelStyle={styles.listItemLabelStyle}
              multiple={false}
            />
          </View>
          <Button
            variant="Primary"
            width={"100%"}
            label="Apply"
            onPress={onPressApply}
          />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};
export default FilterModal;
const styles = StyleSheet.create({
  buttonLabelStyle: {
    fontSize: scaleFont(16),
    color: COLORS.primaryBlue,
    fontFamily: FONTS.RC_Bold,
  },
  buttonStyle: {
    height: verticalScale(40),
    width: horizontalScale(300),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLORS.primaryYellow,
    borderRadius: moderateScale(16),
  },
  dropDownScale: {
    borderColor: COLORS.grey200,
    borderRadius: moderateScale(16),
  },
  dropDownContainerStyle: {
    backgroundColor: COLORS.surface,
    borderColor: COLORS.grey200,
  },
  placeholderStyle: {
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(16),
    color: COLORS.primaryBlue,
  },
  listItemLabelStyle: {
    color: COLORS.primaryBlue,
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(16),
  },
  modalContainer: {
    backgroundColor: COLORS.surface,
    padding: moderateScale(16),
    gap: verticalScale(24),
    paddingBottom: verticalScale(28),
  },

  modalHeading: {
    fontSize: scaleFont(22),
    color: COLORS.primaryBlue,
    fontFamily: FONTS.RC_Regular,
  },
  modalCategoryHeading: {
    fontSize: scaleFont(14),
    color: COLORS.primaryBlue,
    fontFamily: FONTS.RC_Bold,
    marginBottom: verticalScale(12),
  },
  bottomSheetBackgroundSheet: {
    borderTopLeftRadius: moderateScale(28),
    borderTopRightRadius: moderateScale(28),
  },
  scrollViewContentContainerStyle: {
    gap: moderateScale(12),
  },
  customSliderHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customSliderSubHeading: {
    fontSize: scaleFont(14),
    color: COLORS.primaryBlue,
    fontFamily: FONTS.RC_Regular,
    marginBottom: verticalScale(12),
  },
});
