import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompareArrowIcon from "../../assets/svg/compare_arrow";
import FavoriteIcon from "../../assets/svg/favorite";
import HomeOutlinedIcon from "../../assets/svg/home-outline";
import QuizIcon from "../../assets/svg/quiz";
import BottomTabUI from "../../components/bottomTabUI";
import Compare from "../../screens/compare";
import Favorites from "../../screens/favorites";
import Quiz from "../../screens/quiz";
import HomeStack from "../stackNavigator/homeStack";

const bottomTab = [
  {
    id: 1,
    name: "Home",
    component: HomeStack,
    icon: <HomeOutlinedIcon />,
  },
  {
    id: 2,
    name: "Compare",
    component: Compare,
    icon: <CompareArrowIcon />,
  },
  {
    id: 3,
    name: "Quiz",
    component: Quiz,
    icon: <QuizIcon />,
  },
  {
    id: 4,
    name: "Favorites",
    component: Favorites,
    icon: <FavoriteIcon />,
  },
];
const AuthorizedNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
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
