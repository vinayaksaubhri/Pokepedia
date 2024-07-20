import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/login";
import Email from "../../screens/email";
import ROUTES from "../../constant/routes";

type StackParamsList = {
  EmailScreen: undefined;
  LoginScreen: undefined;
};

const UnAuthorizedStack = createStackNavigator<StackParamsList>();

const UnAuthorizedNavigation = () => {
  return (
    <UnAuthorizedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN_SCREEN}
    >
      <UnAuthorizedStack.Screen name={ROUTES.LOGIN_SCREEN} component={Login} />
      <UnAuthorizedStack.Screen name={ROUTES.EMAIL_SCREEN} component={Email} />
    </UnAuthorizedStack.Navigator>
  );
};
export default UnAuthorizedNavigation;
