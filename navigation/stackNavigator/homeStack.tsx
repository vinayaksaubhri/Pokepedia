import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home";
import PokemonDetailScreens from "../../screens/home/screens/pokemonDetailScreens";
import {
  getFocusedRouteNameFromRoute,
  useFocusEffect,
} from "@react-navigation/native";
import ROUTES from "../../constant/routes";

const Stack = createStackNavigator();

const HomeStack = ({ navigation, route }) => {
  const bottomNavigation = navigation;
  const routeName = getFocusedRouteNameFromRoute(route) as ROUTES;
  useFocusEffect(() => {
    if ([ROUTES.POKEMON_DETAIL_SCREEN]?.includes(routeName)) {
      bottomNavigation?.setOptions({ tabBarVisible: false });
    }
  });
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        initialParams={{
          bottomNavigationSetOptions: bottomNavigation?.setOptions,
        }}
      />
      <Stack.Screen
        name={ROUTES.POKEMON_DETAIL_SCREEN}
        component={PokemonDetailScreens}
        initialParams={{
          bottomNavigationSetOptions: bottomNavigation?.setOptions,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
