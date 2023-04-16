import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Setting} />
      <Tab.Screen name="Settings1" component={Setting} />
      <Tab.Screen name="Settings2" component={Setting} />
    </Tab.Navigator>
  );
};
export default AuthorizedNavigation;
