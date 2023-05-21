import { StyleSheet, View } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import SearchBar from "../../components/searchBar";

const Home = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <SearchBar />
      </View>
    </CustomSafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 24,
  },
});
