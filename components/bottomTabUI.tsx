import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale, verticalScale } from "../style/metrics";
import { COLORS, width } from "../style/style";
import TabIcon from "./tabIcon";

type BottomTabUiBarProps = BottomTabBarProps & {
  bottomTab: {
    id: number;
    name: string;
    component: () => JSX.Element;
    icon: JSX.Element;
  }[];
  hideBottomBar: Boolean;
};
const BottomTabUI = ({
  state,
  navigation,
  bottomTab,
  hideBottomBar,
}: BottomTabUiBarProps) => {
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
      display: hideBottomBar ? "none" : "flex",
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
            onPress={() => navigation.navigate(item.name)}
          />
        );
      })}
    </View>
  );
};
export default BottomTabUI;
