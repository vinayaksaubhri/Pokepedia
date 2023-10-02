import { StyleSheet, View } from "react-native";
import TopAppBar from "../../../components/topAppBar";
import CustomSafeAreaView from "../../../components/customSafeAreaView";
const CompareResultScreen = ({ navigation, route }) => {
  const { bottomNavigationSetOptions } = route?.params;
  return (
    <CustomSafeAreaView>
      <View style={{ flex: 1 }}>
        <TopAppBar
          label={"Comparator"}
          navigation={navigation}
          onPressBackButton={() => {
            bottomNavigationSetOptions({ tabBarVisible: true });
            navigation.goBack();
          }}
        />
      </View>
    </CustomSafeAreaView>
  );
};
export default CompareResultScreen;
const styles = StyleSheet.create({});
