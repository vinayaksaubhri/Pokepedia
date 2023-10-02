import { StyleSheet, View } from "react-native";
import TopAppBar from "../../../components/topAppBar";
import CustomSafeAreaView from "../../../components/customSafeAreaView";
import { moderateScale } from "../../../style/metrics";
const CompareResultScreen = ({ navigation, route }) => {
  const { bottomNavigationSetOptions } = route?.params;
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <TopAppBar
          label={"Comparator"}
          showFavIcon
          navigation={navigation}
          onPressBackButton={() => {
            bottomNavigationSetOptions({ tabBarVisible: true });
            navigation.goBack();
          }}
        />
        <View
          style={{
            flex: 1,
            padding: moderateScale(24),
          }}
        >
          <View>
            <View></View>
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};
export default CompareResultScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
