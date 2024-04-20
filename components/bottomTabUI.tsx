import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale, verticalScale } from "../style/metrics";
import { COLORS, DARK_COLORS, width } from "../style/style";
import TabIcon from "./tabIcon";
import { useHaptic } from "../hooks/useHaptic";
import useHideNavBar from "../hooks/useHideNavBar";
import useTheme from "../hooks/useTheme";
import ROUTES from "../constant/routes";
import { SvgProps } from "react-native-svg";

type BottomTabUiBarProps = BottomTabBarProps & {
  bottomTab: (
    | {
        id: number;
        name: ROUTES;
        component: ({
          navigation,
          route,
        }: {
          navigation: any;
          route: any;
        }) => JSX.Element;
        icon: (
          args: JSX.IntrinsicAttributes &
            SvgProps & {
              isFocused?: boolean;
            }
        ) => JSX.Element;
      }
    | {
        id: number;
        name: string;
        component: () => JSX.Element;
        icon: (
          args: JSX.IntrinsicAttributes &
            SvgProps & {
              isFocused?: boolean;
            }
        ) => JSX.Element;
      }
  )[];
};

const BottomTabUI = ({
  state,
  navigation,
  bottomTab,
  ...props
}: BottomTabUiBarProps) => {
  const hapticSelection = useHaptic("light");
  const { isDarkMode } = useTheme();
  const { isStatusBarHidden } = useHideNavBar();

  const styles = StyleSheet.create({
    container: {
      height: verticalScale(60),
      position: "absolute",
      bottom: verticalScale(20),
      width: width * 0.9,
      alignSelf: "center",
      justifyContent: "space-between",
      backgroundColor: isDarkMode
        ? DARK_COLORS.secondarySurface
        : COLORS.primaryYellow,
      borderRadius: moderateScale(100),
      flexDirection: "row",
      padding: moderateScale(16),
      display: isStatusBarHidden ? "none" : "flex",
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
