import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { useCallback, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GenerationList, TypeList } from "../constant/constant";
import { moderateScale, scaleFont, verticalScale } from "../style/metrics";
import { COLORS, FONTS } from "../style/style";
import Chip from "./chip";
import CustomSlider from "./customSlider";

const FilterModal = ({ bottomSheetRef, navigation }) => {
  console.log(
    "🚀 ~ file: filterModal.tsx:17 ~ FilterModal ~ navigation:",
    navigation
  );
  const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

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

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose
      index={-1}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.bottomSheetBackgroundSheet}
      onClose={() => {
        navigation.setOptions({ tabBarVisible: true });
      }}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
    >
      <BottomSheetView onLayout={handleContentLayout}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>Filters</Text>

          <View>
            <Text style={styles.modalCategoryHeading}>Generations</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContentContainerStyle}
            >
              {GenerationList.map((item, index) => (
                <Chip label={item} key={index} />
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
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};
export default FilterModal;
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.surface,
    padding: moderateScale(16),
    gap: verticalScale(24),
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
});
