import { StyleSheet, Text } from "react-native";
import { textSize } from "../../constants/textSize";

export default function TextBoldLg({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "SemiBold",
    fontSize: textSize.LG,
  },
});
