import { Image, StyleSheet, View } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import { moderateScale } from "../../style/metrics";
import Button from "../../components/button";
const whoThatPokemon = require("../../assets/images/WhoThatPokemon.png");
const Quiz = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Image
          source={whoThatPokemon}
          style={{ width: "100%", height: "40%" }}
          resizeMode="contain"
        />
        <Button variant="Primary" label="START" width={"90%"} />
      </View>
    </CustomSafeAreaView>
  );
};
export default Quiz;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(24),
    gap: moderateScale(32),
  },
});
