import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../constant/routes";
import Compare from "../../screens/compare";
import CompareResultScreen from "../../screens/compare/screen/compareResultScreen";
import useHideNavBar from "../../hooks/useHideNavBar";
import {
  getFocusedRouteNameFromRoute,
  useFocusEffect,
} from "@react-navigation/native";

const Stack = createStackNavigator();

const CompareStack = ({ navigation, route }) => {
  const { setIsStatusBarHidden } = useHideNavBar();
  const routeName = getFocusedRouteNameFromRoute(route) as ROUTES;
  useFocusEffect(() => {
    if ([ROUTES.COMPARE_RESULT_SCREEN]?.includes(routeName)) {
      setIsStatusBarHidden(true);
    } else {
      setIsStatusBarHidden(false);
    }
  });

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.COMPARE_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.COMPARE_SCREEN} component={Compare} />
      <Stack.Screen
        name={ROUTES.COMPARE_RESULT_SCREEN}
        component={CompareResultScreen}
      />
    </Stack.Navigator>
  );
};
export default CompareStack;
