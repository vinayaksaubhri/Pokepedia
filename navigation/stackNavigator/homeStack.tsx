import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../constant/routes";
import useHideNavBar from "../../hooks/useHideNavBar";
import Home from "../../screens/home";
import PokemonDetailScreens from "../../screens/home/screens/pokemonDetailScreens";

const Stack = createStackNavigator();

const HomeStack = () => {
  const { setIsStatusBarHidden } = useHideNavBar();
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
      screenListeners={{
        state: (e) => {
          const activeRoute = e.data.state.routes[e.data.state.index]
            ?.name as ROUTES;
          setIsStatusBarHidden(activeRoute === ROUTES.POKEMON_DETAIL_SCREEN);
        },
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
