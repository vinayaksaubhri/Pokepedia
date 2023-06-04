import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home";
import PokemonDetailScreens from "../../screens/home/screens/pokemonDetailScreens";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="PokemonDetailScreen"
        component={PokemonDetailScreens}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
