import { StyleSheet, Text, View } from "react-native";
const Quiz = () => {
  return (
    <View style={styles.container}>
      <Text>Quiz</Text>
    </View>
  );
};
export default Quiz;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FC6C6D",
  },
});
