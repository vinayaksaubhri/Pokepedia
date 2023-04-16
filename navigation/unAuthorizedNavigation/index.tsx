import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

type StackParamsList = {
  Login: undefined;
  SignUp: undefined;
};

const UnAuthorizedStack = createStackNavigator<StackParamsList>();

const UnAuthorizedNavigation = () => {
  const Home = () => {
    return (
      <View>
        <Text>Home UnAuthorizedStack</Text>
      </View>
    );
  };
  const Notifications = () => {
    return (
      <View>
        <Text>Notification UnAuthorizedStack</Text>
      </View>
    );
  };

  return (
    <UnAuthorizedStack.Navigator>
      <UnAuthorizedStack.Screen name="Login" component={Home} />
      <UnAuthorizedStack.Screen name="SignUp" component={Notifications} />
    </UnAuthorizedStack.Navigator>
  );
};
export default UnAuthorizedNavigation;
