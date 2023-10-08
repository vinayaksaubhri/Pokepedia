import { StyleSheet, Text, View } from "react-native";
import StatsBar from "../../../components/statsBar";
const AnimatedStatsComparator = () => {
  return (
    <>
      <StatsBar value={20} statsTitle="HP" comparatorMode />
      <StatsBar value={20} statsTitle="Attack" comparatorMode />
      <StatsBar value={30} statsTitle="Defense" comparatorMode />
      <StatsBar value={40} statsTitle="Sp. Atk" comparatorMode />
      <StatsBar value={50} statsTitle="Sp. Def" comparatorMode />
      <StatsBar value={60} statsTitle="Speed" comparatorMode />
    </>
  );
};
export default AnimatedStatsComparator;
const styles = StyleSheet.create({});
