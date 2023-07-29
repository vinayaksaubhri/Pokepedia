import { createStackNavigator } from "@react-navigation/stack";
import {
  getFocusedRouteNameFromRoute,
  useFocusEffect,
} from "@react-navigation/native";
import ROUTES from "../../constant/routes";
import Quiz from "../../screens/quiz";
import QuizGameScreen from "../../screens/quiz/screen/quizGameScreen";

const Stack = createStackNavigator();

const QuizStack = ({ navigation, route }) => {
  const bottomNavigation = navigation;
  const routeName = getFocusedRouteNameFromRoute(route) as ROUTES;
  console.log(
    "🚀 ~ file: quizStack.tsx:15 ~ QuizStack ~ routeName:",
    routeName
  );
  useFocusEffect(() => {
    if ([ROUTES.QUIZ_GAME_SCREEN]?.includes(routeName)) {
      bottomNavigation?.setOptions({ tabBarVisible: false });
    } else {
      bottomNavigation?.setOptions({ tabBarVisible: true });
    }
  });
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.QUIZ_START_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ROUTES.QUIZ_START_SCREEN}
        component={Quiz}
        initialParams={{
          bottomNavigationSetOptions: bottomNavigation?.setOptions,
        }}
      />
      <Stack.Screen
        name={ROUTES.QUIZ_GAME_SCREEN}
        component={QuizGameScreen}
        initialParams={{
          bottomNavigationSetOptions: bottomNavigation?.setOptions,
        }}
      />
    </Stack.Navigator>
  );
};
export default QuizStack;
