import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../constant/routes";
import Compare from "../../screens/compare";
import CompareResultScreen from "../../screens/compare/screen/compareResultScreen";

const Stack = createStackNavigator();

const CompareStack = ({ navigation, route }) => {
  const bottomNavigation = navigation;
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.COMPARE_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ROUTES.COMPARE_SCREEN}
        component={Compare}
        initialParams={{
          bottomNavigationSetOptions: bottomNavigation?.setOptions,
        }}
      />
      <Stack.Screen
        name={ROUTES.COMPARE_RESULT_SCREEN}
        component={CompareResultScreen}
        initialParams={{
          bottomNavigationSetOptions: bottomNavigation?.setOptions,
        }}
      />
    </Stack.Navigator>
  );
};
export default CompareStack;
