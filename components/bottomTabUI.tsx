import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TabIcon from "./tabIcon";
import { COLORS, width } from "../style/style";
import HomeOutlinedIcon from "../assets/svg/home-outline";
import CompareArrowIcon from "../assets/svg/compare_arrow";
import QuizIcon from "../assets/svg/quiz";
import FavoriteIcon from "../assets/svg/favorite";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { moderateScale, verticalScale } from "../style/metrics";

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
const bottomTab = [
  {
    id: 1,
    name: "Home",
    component: Home,
    icon: <HomeOutlinedIcon />,
  },
  {
    id: 2,
    name: "Compare",
    component: Setting,
    icon: <CompareArrowIcon />,
  },
  {
    id: 3,
    name: "Quiz",
    component: Home,
    icon: <QuizIcon />,
  },
  {
    id: 4,
    name: "Favorites",
    component: Home,
    icon: <FavoriteIcon />,
  },
];
const BottomTabUI = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {bottomTab.map((item, index) => {
        return (
          <TabIcon
            icon={item.icon}
            key={item.id}
            label={item.name}
            isFocused={state.index === index}
            onPress={() => navigation.navigate(item.name)}
          />
        );
      })}
    </View>
  );
};
export default BottomTabUI;
const styles = StyleSheet.create({
  container: {
    height: verticalScale(60),
    position: "absolute",
    bottom: verticalScale(20),
    width: width * 0.9,
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.primaryYellow,
    borderRadius: moderateScale(100),
    flexDirection: "row",
    padding: moderateScale(16),
  },
});
