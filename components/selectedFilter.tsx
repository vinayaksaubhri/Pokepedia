import { ScrollViewProps, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  capitalizeFirstLetter,
  getGenerationFromGenerationName,
} from "../utils/utils";
import Chip from "./chip";
import { horizontalScale } from "../style/metrics";
import { filterType } from "../types/pokemonTypes";

type SelectedFilterProps = ScrollViewProps & {
  filterData: filterType;
  setFilterData: React.Dispatch<React.SetStateAction<filterType>>;
};
const SelectedFilter: React.FC<SelectedFilterProps> = ({
  filterData,
  setFilterData,
}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.selectedFilterContainer}
      contentContainerStyle={styles.selectedFilterContentContainerStyle}
    >
      {filterData.generation !== "" && (
        <Chip
          label={getGenerationFromGenerationName(filterData.generation)}
          showCrossIcon
          onPress={() => {
            setFilterData((prev) => ({ ...prev, generation: "" }));
          }}
        />
      )}
      {filterData.type !== "" && (
        <Chip
          label={capitalizeFirstLetter(filterData.type) + "-T"}
          showCrossIcon
          onPress={() => {
            setFilterData((prev) => ({ ...prev, type: "" }));
          }}
          iconType={filterData.type}
          showTypeIcon
        />
      )}
      {filterData.weakness !== "" && (
        <Chip
          label={capitalizeFirstLetter(filterData.weakness) + "-W"}
          showCrossIcon
          onPress={() => {
            setFilterData((prev) => ({ ...prev, weakness: "" }));
          }}
          iconType={filterData.weakness}
          showTypeIcon
        />
      )}
      {filterData.height && (
        <Chip
          label={filterData.height + " m"}
          showCrossIcon
          onPress={() => {
            setFilterData((prev) => ({ ...prev, height: null }));
          }}
        />
      )}
      {filterData.weight && (
        <Chip
          label={filterData.weight + " kg"}
          showCrossIcon
          onPress={() => {
            setFilterData((prev) => ({ ...prev, weight: null }));
          }}
        />
      )}
    </ScrollView>
  );
};
export default SelectedFilter;
const styles = StyleSheet.create({
  selectedFilterContainer: {
    marginTop: 8,
    flexGrow: 0,
    width: "100%",
  },
  selectedFilterContentContainerStyle: {
    gap: horizontalScale(12),
  },
});
