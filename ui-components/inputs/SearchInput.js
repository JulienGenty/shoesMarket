import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../constants/colors";
import { radius } from "../../constants/radius";
import { spaces } from "../../constants/spaces";
import { textSize } from "../../constants/textSize";

import Feather from "@expo/vector-icons/Feather";

export default function SearchInput({ placeholder, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Feather name="search" size={32} color="black" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: spaces.LG,
    backgroundColor: colors.WHITE,
    borderRadius: radius.FULL,
  },
  icon: { marginHorizontal: spaces.MD },
  input: {
    flex: 1,
    paddingVertical: spaces.SM,
    paddingRight: spaces.SM,
    color: colors.GREY,
    fontFamily: "Regular",
    fontSize: textSize.MD,
  },
});
