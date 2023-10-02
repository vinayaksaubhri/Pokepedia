import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale, verticalScale } from "../style/metrics";
import { COLORS, width } from "../style/style";
import TabIcon from "./tabIcon";
import { useHaptic } from "../hooks/useHaptic";

type BottomTabUiBarProps = BottomTabBarProps & {
  bottomTab: {
    id: number;
    name: string;
    component: () => JSX.Element;
    icon: JSX.Element;
  }[];
};
const BottomTabUI = ({
  state,
  navigation,
  bottomTab,

  ...props
}: BottomTabUiBarProps) => {
  const hapticSelection = useHaptic("light");

  const homeTabBarVisible =
    props.descriptors[state.routes[0].key].options?.tabBarVisible === undefined
      ? true
      : props.descriptors[state.routes[0].key].options?.tabBarVisible;
  const compareTabBarVisible =
    props.descriptors[state.routes[1].key].options?.tabBarVisible === undefined
      ? true
      : props.descriptors[state.routes[1].key].options?.tabBarVisible;
  const quizTabBarVisible =
    props.descriptors[state.routes[2].key].options?.tabBarVisible === undefined
      ? true
      : props.descriptors[state.routes[2].key].options?.tabBarVisible;

  const showBottomNavigator =
    homeTabBarVisible && quizTabBarVisible && compareTabBarVisible;

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
      zIndex: 1,
      display: showBottomNavigator === false ? "none" : "flex",
    },
  });
  return (
    <View style={styles.container}>
      {bottomTab.map((item, index) => {
        return (
          <TabIcon
            icon={item.icon}
            key={item.id}
            label={item.name}
            isFocused={state.index === index}
            onPress={() => {
              hapticSelection();
              navigation.navigate(item.name);
            }}
          />
        );
      })}
    </View>
  );
};
export default BottomTabUI;
