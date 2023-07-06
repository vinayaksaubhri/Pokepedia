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
          hello: "hello",
        }}
      />
      <Stack.Screen
        name="PokemonDetailScreen"
        component={PokemonDetailScreens}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
