import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../../../constants/colors";
import { spaces } from "../../../../constants/spaces";
import { radius } from "../../../../constants/radius";
import TextMediumMd from "../../../../ui-components/texts/TextMediumMd";
import TextBoldMd from "../../../../ui-components/texts/TextBoldMd";
import TextBoldXl from "../../../../ui-components/texts/TextBoldXl";

export default function HorizontalCard({ item }) {
  console.log(item.items[0].image);
  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <View>
          <TextMediumMd style={{ color: colors.BLUE }}>
            MEILLEUR CHOIX
          </TextMediumMd>
          <TextBoldXl style={{ color: colors.DARK }}>{item.name}</TextBoldXl>
        </View>
        <TextBoldMd style={{ color: colors.DARK }}>{item.price} $</TextBoldMd>
      </View>
      <View style={styles.imageContainer}>
        <Image source={item.items[0].image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "80%",
    marginHorizontal: spaces.LG,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.WHITE,
    borderRadius: radius.REGULAR,
  },
  descriptionContainer: {
    flex: 1,
    height: "90%",
    justifyContent: "space-between",
    padding: spaces.LG,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spaces.MD,
  },
  image: {
    width: "100%",
    height: "100%",
    transform: [
      { scale: 1.25 },
      { rotate: "-20deg" },
      { translateX: -spaces.MD },
      { translateY: -spaces.LG },
    ],
  },
});
