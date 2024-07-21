import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/login";
import Email from "../../screens/email";
import ROUTES from "../../constant/routes";
import OTP from "../../screens/otp";
import OnBoarding from "../../screens/onBoarding";

type StackParamsList = {
  EmailScreen: undefined;
  LoginScreen: undefined;
  OTPScreen: undefined;
  OnboardingScreen: undefined;
};

const UnAuthorizedStack = createStackNavigator<StackParamsList>();

const UnAuthorizedNavigation = () => {
  return (
    <UnAuthorizedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.ONBOARDING_SCREEN}
    >
      <UnAuthorizedStack.Screen
        name={ROUTES.ONBOARDING_SCREEN}
        component={OnBoarding}
      />
      <UnAuthorizedStack.Screen name={ROUTES.LOGIN_SCREEN} component={Login} />
      <UnAuthorizedStack.Screen name={ROUTES.EMAIL_SCREEN} component={Email} />
      <UnAuthorizedStack.Screen name={ROUTES.OTP_SCREEN} component={OTP} />
    </UnAuthorizedStack.Navigator>
  );
};
export default UnAuthorizedNavigation;
