import BottomSheet from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { RefreshControl, StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Chip from "../../components/chip";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import FilterModal from "../../components/filterModal";
import PokemonCard from "../../components/pokemonCard";
import SearchBar from "../../components/searchBar";
import ROUTES from "../../constant/routes";
import { useGetAllPokemon } from "../../graphql/useGetAllPokemon";
import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../../style/metrics";
import { COLORS, FONTS } from "../../style/style";
import {
  capitalizeFirstLetter,
  getPokeNumberFromPokemonIndex,
} from "../../utils/utils";
import LoadingIndicator from "../../components/loadingIndicator";
import { useRefreshByUser } from "../../hooks/useRefreshByUser";
import { useRefreshOnFocus } from "../../hooks/useRefreshOnFoucs";
import { filterType } from "../../types/pokemonTypes";
import SelectedFilter from "../../components/selectedFilter";

const Home = ({ navigation, route }) => {
  const { bottomNavigationSetOptions } = route?.params;

  const [filterData, setFilterData] = useState<filterType>({
    generation: "",
    type: "",
    weakness: "",
    height: null,
    weight: null,
    orderByPokemonIndex: null,
    name: "",
  });
  const {
    data: pokemonDetails,
    error,
    isLoading: isPokemonDetailsLoading,
    refetch: pokemonDetailsRefetch,
    fetchNextPage,
    isFetching,
  } = useGetAllPokemon(filterData);

  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(
    pokemonDetailsRefetch
  );

  useRefreshOnFocus(pokemonDetailsRefetch);

  const bottomSheetRef = useRef<BottomSheet>(null);
  let showSelectedFilter =
    filterData.type !== "" ||
    filterData.generation !== "" ||
    filterData.height ||
    filterData.weight ||
    filterData.orderByPokemonIndex !== null ||
    filterData.weakness !== "";
  const onPressCard = (pokemonIndex: number) => {
    bottomNavigationSetOptions({ tabBarVisible: false });
    navigation.navigate(ROUTES.POKEMON_DETAIL_SCREEN, {
      bottomNavigationSetOptions,
      pokemonIndex,
    });
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: moderateScale(24),
      paddingBottom: 0,
    },
    headingTextStyle: {
      alignSelf: "flex-start",
      fontSize: scaleFont(36),
      color: COLORS.primaryBlue,
      fontFamily: FONTS.RC_Regular,
      marginBottom: verticalScale(4),
    },
    subHeadingTextStyle: {
      alignSelf: "flex-start",
      fontSize: scaleFont(16),
      color: COLORS.primaryBlue,
      fontFamily: FONTS.RC_Regular,
      marginBottom: verticalScale(16),
      lineHeight: verticalScale(24),
    },
    contentContainerStyle: {
      gap: verticalScale(16),
      paddingTop: showSelectedFilter ? verticalScale(4) : verticalScale(20),
      paddingBottom: verticalScale(90),
    },
    flatListStyle: {
      flex: 1,
      marginTop: 4,
      width: "100%",
      borderRadius: moderateScale(16),
    },
    columnWrapperStyle: {
      justifyContent: "space-between",
    },
  });

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headingTextStyle}>Pokédex</Text>
        <Text style={styles.subHeadingTextStyle}>
          Use the advanced search to find Pokémon by type, weakness, ability and
          more!
        </Text>
        <SearchBar
          setFilterData={setFilterData}
          filterData={filterData}
          showFilter
          onPressFilter={() => {
            bottomNavigationSetOptions({ tabBarVisible: false });
            bottomSheetRef.current?.expand();
          }}
        />
        {showSelectedFilter && (
          <SelectedFilter
            filterData={filterData}
            setFilterData={setFilterData}
          />
        )}
        {isPokemonDetailsLoading ? (
          <LoadingIndicator />
        ) : (
          <FlatList
            data={pokemonDetails!.pages.flat()}
            refreshControl={
              <RefreshControl
                onRefresh={refetchByUser}
                refreshing={isRefetchingByUser}
              />
            }
            onEndReachedThreshold={0.1}
            onEndReached={() => fetchNextPage()}
            showsVerticalScrollIndicator={false}
            style={styles.flatListStyle}
            contentContainerStyle={styles.contentContainerStyle}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapperStyle}
            ListFooterComponent={() => {
              return (
                isFetching && (
                  <View>
                    <LoadingIndicator />
                  </View>
                )
              );
            }}
            renderItem={({ item }) => {
              const pokemonLabel = item?.name;
              const pokemonCategory =
                item?.pokemonDetails_pokemonCategories?.map(
                  ({ pokemonCategory }) => ({
                    badgeType: pokemonCategory?.badgeType,
                    name: pokemonCategory?.name,
                  })
                );
              const pokemonIndex = item?.pokemonIndex;
              return (
                <PokemonCard
                  pokeLabel={pokemonLabel}
                  pokeNumber={getPokeNumberFromPokemonIndex(pokemonIndex)}
                  badgeArray={pokemonCategory}
                  pokeCardType={pokemonCategory[0]?.badgeType}
                  onPress={() => onPressCard(pokemonIndex)}
                  key={item?.id}
                  pokemonImageIndex={pokemonIndex}
                />
              );
            }}
          />
        )}
      </View>
      <FilterModal
        bottomSheetRef={bottomSheetRef}
        bottomNavigationSetOptions={bottomNavigationSetOptions}
        setFilterDataFromQuery={setFilterData}
        filterDataFromQuery={filterData}
      />
    </CustomSafeAreaView>
  );
};
export default Home;
