import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, Text } from "react-native";
import BottomTabUI from "../../components/bottomTabUI";
const Home = () => {
  return (
    <SafeAreaView>
      <Text>Vinayak</Text>
    </SafeAreaView>
  );
};
const Setting = () => {
  return (
    <SafeAreaView>
      <Text>Setting</Text>
    </SafeAreaView>
  );
};
const AuthorizedNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <BottomTabUI {...props} />}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Compare" component={Home} />
        <Tab.Screen name="Quiz" component={Home} />
        <Tab.Screen name="Favorites" component={Home} />
      </Tab.Navigator>
    </>
  );
};
export default AuthorizedNavigation;
