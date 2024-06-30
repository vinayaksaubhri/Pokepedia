import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/login";

type StackParamsList = {
  Login: undefined;
  SignUp: undefined;
};

const UnAuthorizedStack = createStackNavigator<StackParamsList>();

const UnAuthorizedNavigation = () => {
  const Notifications = () => {
    return (
      <View>
        <Text>Notification UnAuthorizedStack</Text>
      </View>
    );
  };

  return (
    <UnAuthorizedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <UnAuthorizedStack.Screen name="Login" component={Login} />
      <UnAuthorizedStack.Screen name="SignUp" component={Notifications} />
    </UnAuthorizedStack.Navigator>
  );
};
export default UnAuthorizedNavigation;
