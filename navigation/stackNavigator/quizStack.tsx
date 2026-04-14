import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../constant/routes";
import Quiz from "../../screens/quiz";
import QuizGameScreen from "../../screens/quiz/screen/quizGameScreen";
import useHideNavBar from "../../hooks/useHideNavBar";

const Stack = createStackNavigator();

const QuizStack = () => {
  const { setIsStatusBarHidden } = useHideNavBar();
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.QUIZ_START_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
      screenListeners={{
        state: (e) => {
          const activeRoute = e.data.state.routes[e.data.state.index]
            ?.name as ROUTES;
          setIsStatusBarHidden(activeRoute === ROUTES.QUIZ_GAME_SCREEN);
        },
      }}
    >
      <Stack.Screen name={ROUTES.QUIZ_START_SCREEN} component={Quiz} />
      <Stack.Screen name={ROUTES.QUIZ_GAME_SCREEN} component={QuizGameScreen} />
    </Stack.Navigator>
  );
};
export default QuizStack;
