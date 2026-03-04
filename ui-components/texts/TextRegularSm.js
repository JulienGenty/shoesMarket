import { StyleSheet, Text } from "react-native";
import { textSize } from "../../constants/textSize";

export default function TextRegularSm({ children, color }) {
  return (
    <Text style={[styles.text, { color: color }]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Regular",
    fontSize: textSize.SM,
  },
});
