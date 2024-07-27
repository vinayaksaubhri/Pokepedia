import { useEffect, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";
import { COLORS, FONTS } from "../../../style/style";
import {
  horizontalScale,
  scaleFont,
  verticalScale,
} from "../../../style/metrics";

type OtpInputProps = {
  length?: number;
  onOtpSubmit: (otp: string) => void;
};

const OtpInput: React.FC<OtpInputProps> = ({
  length = 4,
  onOtpSubmit = () => {},
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    if (inputRefs?.current?.[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange: (index: number, value: string) => void = (
    index,
    value
  ) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1); // this return the last value form the input field
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs?.current?.[index + 1]?.focus();
    }
  };

  const handleClick = (index: number) => {
    inputRefs?.current?.[index]?.setSelection(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs?.current?.[otp?.indexOf("")]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (
      e.nativeEvent.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs?.current?.[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => {
        return (
          <View style={styles.otpCell} key={index}>
            <TextInput
              style={styles.textStyle}
              ref={(input) => (inputRefs.current[index] = input)}
              value={value}
              onChangeText={(text) => handleChange(index, text)}
              onPressIn={() => handleClick(index)}
              onKeyPress={(e) => handleKeyDown(index, e)}
              autoFocus={index === 0}
            />
          </View>
        );
      })}
    </View>
  );
};
export default OtpInput;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 16,
  },
  otpCell: {
    width: horizontalScale(70),
    height: verticalScale(90),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLORS.secondaryYellow,
  },
  textStyle: {
    fontFamily: FONTS.RC_Bold,
    fontSize: scaleFont(34),
    color: COLORS.primaryYellow,
  },
});
