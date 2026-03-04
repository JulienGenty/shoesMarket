import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../../../constants/colors";
import { spaces } from "../../../../constants/spaces";
import { radius } from "../../../../constants/radius";
import TextMediumSm from "../../../../ui-components/texts/TextMediumSm";
import TextMediumMd from "../../../../ui-components/texts/TextMediumMd";
import TextBoldLg from "../../../../ui-components/texts/TextBoldLg";
import Feather from "@expo/vector-icons/Feather";

export default function VerticalCard({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.items[0].image} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <View>
          <TextMediumSm style={{ color: colors.BLUE }}>TOP VENTE</TextMediumSm>
          <TextBoldLg style={{ color: colors.DARK, marginTop: spaces.SM }}>
            {item.name}
          </TextBoldLg>
        </View>
        <TextMediumMd style={{ color: colors.DARK }}>
          {item.price} $
        </TextMediumMd>
        <View style={styles.btn}>
          <Feather name="plus" size={24} color={colors.WHITE} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: "100%",
    padding: spaces.SM,
    backgroundColor: colors.WHITE,
    borderRadius: radius.REGULAR,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spaces.SM,
  },
  image: {
    width: "100%",
    height: "100%",
    transform: [
      { rotate: "-20deg" },
      { translateX: -spaces.SM },
      { translateY: -spaces.SM },
    ],
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: spaces.SM,
  },
  btn: {
    position: "absolute",
    bottom: -spaces.SM,
    right: -spaces.SM,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BLUE,
    borderTopLeftRadius: radius.REGULAR,
    borderBottomRightRadius: radius.REGULAR,
  },
});
