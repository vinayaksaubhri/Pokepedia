import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { useCallback, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
import SearchBar from "../../../components/searchBar";
import { PokemonTypes, filterType } from "../../../types/pokemonTypes";
import { useGetAllPokemon } from "../../../graphql/useGetAllPokemon";
import LoadingIndicator from "../../../components/loadingIndicator";
import { useRefreshByUser } from "../../../hooks/useRefreshByUser";
import { useRefreshOnFocus } from "../../../hooks/useRefreshOnFoucs";
import ListEmptyComponent from "../../home/components/listEmptyComponent";
import PokemonCard from "../../../components/pokemonCard";
import { getPokeNumberFromPokemonIndex } from "../../../utils/utils";
import { selectedPokemonType } from "..";
type PokemonSelectModalProps = BottomSheetModalProps & {
  bottomSheetRef: React.Ref<BottomSheetModal>;
  setPokemon: React.Dispatch<React.SetStateAction<selectedPokemonType>>;
};

const PokemonSelectModal: React.FC<PokemonSelectModalProps> = ({
  bottomSheetRef,
  setPokemon,
  ...rest
}) => {
  const [filterData, setFilterData] = useState<filterType>({
    generation: "",
    type: "",
    weakness: "",
    height: null,
    weight: null,
    orderByPokemonIndex: null,
    name: "",
  });
  const insets = useSafeAreaInsets();
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

  const onPressCard = (
    id: string,
    name: string,
    type: PokemonTypes,
    pokemonIndex: number
  ) => {
    setPokemon({
      id,
      pokemonIndex,
      name,
      type,
    });
    // bottomSheetRef?.current?.dismiss();
  };

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
    <BottomSheetModal
      ref={bottomSheetRef}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      topInset={insets.top ? insets.top : 16}
      onDismiss={() => {}}
      {...rest}
    >
      <BottomSheetView style={styles.container}>
        <Text style={styles.headingTextStyle}>Choose a Pokémon</Text>
        <SearchBar
          showFilter={false}
          setFilterData={setFilterData}
          filterData={filterData}
        />
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
                  onPress={() =>
                    onPressCard(
                      item?.id,
                      pokemonLabel,
                      pokemonCategory[0]?.badgeType,
                      pokemonIndex
                    )
                  }
                  key={item?.id}
                  pokemonImageIndex={pokemonIndex}
                />
              );
            }}
          />
        )}
      </BottomSheetView>
    </BottomSheetModal>
  );
};
export default PokemonSelectModal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(16),
  },
  headingTextStyle: {
    fontFamily: FONTS.RC_Regular,
    color: COLORS.primaryBlue,
    fontSize: scaleFont(22),
    marginBottom: verticalScale(24),
  },
  contentContainerStyle: {
    gap: verticalScale(16),
    paddingTop: verticalScale(20),
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
