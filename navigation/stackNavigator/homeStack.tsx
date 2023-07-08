import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home";
import PokemonDetailScreens from "../../screens/home/screens/pokemonDetailScreens";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  const bottomNavigation = navigation;
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        initialParams={{
          bottomNavigationSetOptions: bottomNavigation?.setOptions,
        }}
      />
      <Stack.Screen
        name="PokemonDetailScreen"
        component={PokemonDetailScreens}
        initialParams={{
          bottomNavigationSetOptions: bottomNavigation?.setOptions,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
