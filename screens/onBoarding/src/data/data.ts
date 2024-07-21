import { ColorValue, ImageSourcePropType } from "react-native";
import { COLORS } from "../../../../style/style";

export interface OnboardingData {
  id: number;
  animation: ImageSourcePropType;
  text: string;
  secondaryText: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require("../../../../assets/images/onBoarding1.png"),
    text: "Welcome to the Pokémon World!",
    secondaryText:
      "Embark on a Journey to Discover the Magical World of Pokémon with Pokepedia. Your journey begins here.",
    textColor: COLORS.primaryBlue,
    backgroundColor: COLORS.surface,
  },
  {
    id: 2,
    animation: require("../../../../assets/images/onBoarding2.png"),
    text: "Discover, Search, and Learn",
    secondaryText:
      "With Pokepedia, you can search for Pokémon, filter them by various criteria, dive into their detailed information, and even compare them. Your adventure awaits!",
    textColor: COLORS.primaryBlue,
    backgroundColor: COLORS.surface,
  },
  {
    id: 3,
    animation: require("../../../../assets/images/onBoarding3.png"),
    text: "The Ultimate Pokémon Challenge",
    secondaryText:
      "Put your skills to the test with our Pokémon quiz. Can you guess them all? Get ready to become a true Pokémon Master!",
    textColor: COLORS.primaryBlue,
    backgroundColor: COLORS.surface,
  },
];

export const paginationColorsArray: ColorValue[] = [
  "rgba(158, 84, 199, 1)",
  COLORS.primaryYellow,
  "rgba(153, 44, 41, 1)",
];

export default data;
