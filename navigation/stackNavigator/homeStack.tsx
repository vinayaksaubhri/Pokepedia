import { createStackNavigator } from "@react-navigation/stack";
import {
  getFocusedRouteNameFromRoute,
  useFocusEffect,
} from "@react-navigation/native";
import ROUTES from "../../constant/routes";
import useHideNavBar from "../../hooks/useHideNavBar";
import Home from "../../screens/home";
import PokemonDetailScreens from "../../screens/home/screens/pokemonDetailScreens";

const Stack = createStackNavigator();

const HomeStack = ({ navigation, route }) => {
  const { setIsStatusBarHidden } = useHideNavBar();
  const routeName = getFocusedRouteNameFromRoute(route) as ROUTES;
  useFocusEffect(() => {
    if ([ROUTES.POKEMON_DETAIL_SCREEN]?.includes(routeName)) {
      setIsStatusBarHidden(true);
    } else {
      setIsStatusBarHidden(false);
    }
  });
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.HOME_SCREEN} component={Home} />
      <Stack.Screen
        name={ROUTES.POKEMON_DETAIL_SCREEN}
        component={PokemonDetailScreens}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
