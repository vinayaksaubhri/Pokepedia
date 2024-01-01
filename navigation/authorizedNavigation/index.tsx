import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompareArrowIcon from "../../assets/svg/compare_arrow";
import FavoriteIcon from "../../assets/svg/favorite";
import HomeOutlinedIcon from "../../assets/svg/home-outline";
import QuizIcon from "../../assets/svg/quiz";
import BottomTabUI from "../../components/bottomTabUI";
import ROUTES from "../../constant/routes";
import Favorites from "../../screens/favorites";
import CompareStack from "../stackNavigator/compareStack";
import HomeStack from "../stackNavigator/homeStack";
import QuizStack from "../stackNavigator/quizStack";
import { JSX } from "react";
import { SvgProps } from "react-native-svg";

const bottomTab = [
  {
    id: 1,
    name: ROUTES.HOME_STACK,
    component: HomeStack,
    icon: (
      args: JSX.IntrinsicAttributes & SvgProps & { isFocused?: boolean }
    ) => <HomeOutlinedIcon {...args} />,
  },
  {
    id: 2,
    name: ROUTES.COMPARE_STACK,
    component: CompareStack,
    icon: (
      args: JSX.IntrinsicAttributes & SvgProps & { isFocused?: boolean }
    ) => <CompareArrowIcon {...args} />,
  },
  {
    id: 3,
    name: ROUTES.QUIZ_STACK,
    component: QuizStack,
    icon: (
      args: JSX.IntrinsicAttributes & SvgProps & { isFocused?: boolean }
    ) => <QuizIcon {...args} />,
  },
  {
    id: 4,
    name: "Favorites",
    component: Favorites,
    icon: (
      args: JSX.IntrinsicAttributes & SvgProps & { isFocused?: boolean }
    ) => <FavoriteIcon {...args} />,
  },
];
const AuthorizedNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        initialRouteName={ROUTES.HOME_STACK}
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <BottomTabUI {...props} bottomTab={bottomTab} />}
      >
        {bottomTab.map((item) => (
          <Tab.Screen
            name={item.name}
            component={item.component}
            key={item.id}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};
export default AuthorizedNavigation;
