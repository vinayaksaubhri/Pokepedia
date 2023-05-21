import { StyleSheet, View } from "react-native";
import SearchBar from "../../components/searchBar";
const Home = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 24,
  },
});
