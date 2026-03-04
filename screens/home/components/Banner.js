import { StyleSheet, TouchableOpacity, View } from "react-native";
import { spaces } from "../../../constants/spaces";
import { colors } from "../../../constants/colors";

import TextBoldLg from "../../../ui-components/texts/TextBoldLg";
import TextMediumMd from "../../../ui-components/texts/TextMediumMd";

export default function Banner({ text }) {
  const onPressHandle = () => {};

  return (
    <View style={style.container}>
      <TextBoldLg>{text}</TextBoldLg>
      <TouchableOpacity onPress={onPressHandle}>
        <TextMediumMd style={{ color: colors.DARK }}>Voir tout</TextMediumMd>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spaces.MD,
    paddingHorizontal: spaces.LG,
  },
});
