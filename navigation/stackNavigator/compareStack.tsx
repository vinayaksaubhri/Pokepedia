import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../constant/routes";
import Compare from "../../screens/compare";
import CompareResultScreen from "../../screens/compare/screen/compareResultScreen";
import useHideNavBar from "../../hooks/useHideNavBar";

const Stack = createStackNavigator();

const CompareStack = () => {
  const { setIsStatusBarHidden } = useHideNavBar();

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.COMPARE_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
      screenListeners={{
        state: (e) => {
          const activeRoute = e.data.state.routes[e.data.state.index]
            ?.name as ROUTES;
          setIsStatusBarHidden(activeRoute === ROUTES.COMPARE_RESULT_SCREEN);
        },
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
