import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import {
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import FilterModal from "../../components/filterModal";
import LoadingIndicator from "../../components/loadingIndicator";
import PokemonCard from "../../components/pokemonCard";
import SearchBar from "../../components/searchBar";
import SelectedFilter from "../../components/selectedFilter";
import ROUTES from "../../constant/routes";
import { useGetAllPokemon } from "../../graphql/useGetAllPokemon";
import { useRefreshByUser } from "../../hooks/useRefreshByUser";
import { useRefreshOnFocus } from "../../hooks/useRefreshOnFoucs";
import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../../style/metrics";
import { COLORS, FONTS, DARK_COLORS } from "../../style/style";
import { filterType } from "../../types/pokemonTypes";
import { getPokeNumberFromPokemonIndex } from "../../utils/utils";
import ListEmptyComponent from "./components/listEmptyComponent";
import useTheme from "../../hooks/useTheme";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation, route }) => {
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
  const { isDarkMode, setIsDarkMode } = useTheme();

  useRefreshOnFocus(pokemonDetailsRefetch);

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  let showSelectedFilter =
    filterData.type !== "" ||
    filterData.generation !== "" ||
    filterData.height ||
    filterData.weight ||
    filterData.orderByPokemonIndex !== null ||
    filterData.weakness !== "";
  const onPressCard = (pokemonIndex: number) => {
    navigation.navigate(ROUTES.POKEMON_DETAIL_SCREEN, {
      pokemonIndex,
    });
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(24),
      paddingBottom: 0,
      backgroundColor: isDarkMode ? DARK_COLORS.surface : COLORS.surface,
    },
    headingTextStyle: {
      alignSelf: "flex-start",
      fontSize: scaleFont(36),
      color: isDarkMode ? DARK_COLORS.textWhite : COLORS.primaryBlue,
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
    darkModeButtonContainer: {
      borderRadius: 8,
      borderWidth: 1,
      width: horizontalScale(30),
      height: verticalScale(30),
      justifyContent: "center",
      alignItems: "center",
      borderColor: COLORS.grey300,
    },
    headingTextAndDarkModeButtonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

  return (
    <CustomSafeAreaView
      backgroundColor={isDarkMode ? DARK_COLORS.surface : COLORS.surface}
    >
      <View style={styles.container}>
        <View style={styles.headingTextAndDarkModeButtonContainer}>
          <Text style={styles.headingTextStyle}>Pokédex</Text>
          <Pressable
            onPress={() => setIsDarkMode(!isDarkMode)}
            style={styles.darkModeButtonContainer}
          >
            {isDarkMode ? (
              <Feather name="sun" size={18} color={DARK_COLORS.white} />
            ) : (
              <Feather name="moon" size={18} color={COLORS.primaryBlue} />
            )}
          </Pressable>
        </View>
        <Text style={styles.subHeadingTextStyle}>
          Use the advanced search to find Pokémon by type, weakness, ability and
          more!
        </Text>
        <SearchBar
          setFilterData={setFilterData}
          filterData={filterData}
          showFilter
          onPressFilter={() => {
            // setIsStatusBarHidden(true);
            console.log("on Press Filter");
            bottomSheetRef.current?.present();
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
            ListEmptyComponent={<ListEmptyComponent />}
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
        setFilterDataFromQuery={setFilterData}
        filterDataFromQuery={filterData}
      />
    </CustomSafeAreaView>
  );
};
export default Home;
