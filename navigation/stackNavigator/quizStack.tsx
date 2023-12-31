import { createStackNavigator } from "@react-navigation/stack";
import {
  getFocusedRouteNameFromRoute,
  useFocusEffect,
} from "@react-navigation/native";
import ROUTES from "../../constant/routes";
import Quiz from "../../screens/quiz";
import QuizGameScreen from "../../screens/quiz/screen/quizGameScreen";
import useHideNavBar from "../../hooks/useHideNavBar";

const Stack = createStackNavigator();

const QuizStack = ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route) as ROUTES;
  const { setIsStatusBarHidden } = useHideNavBar();

  useFocusEffect(() => {
    if ([ROUTES.QUIZ_GAME_SCREEN]?.includes(routeName)) {
      setIsStatusBarHidden(true);
    } else {
      setIsStatusBarHidden(false);
    }
  });
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.QUIZ_START_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.QUIZ_START_SCREEN} component={Quiz} />
      <Stack.Screen name={ROUTES.QUIZ_GAME_SCREEN} component={QuizGameScreen} />
    </Stack.Navigator>
  );
};
export default QuizStack;
