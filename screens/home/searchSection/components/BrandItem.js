import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import TextBoldLg from "../../../../ui-components/texts/TextBoldLg";
import { colors } from "../../../../constants/colors";
import { spaces } from "../../../../constants/spaces";
import { radius } from "../../../../constants/radius";
import { brands } from "../../../../data/brands";

export default function BrandsItem({
  item,
  index,
  selectedBrand,
  setSelectedBrand,
}) {
  const onPress = () => {
    setSelectedBrand(item.name);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginLeft: index === 0 ? spaces.LG : 0,
        marginRight: index === brands.length - 1 ? spaces.LG : 0,
      }}
    >
      {item.name === selectedBrand ? (
        <View style={styles.selectedContainer}>
          <View style={styles.iconContainer}>
            <Image source={item.logo} style={styles.image} />
          </View>
          <TextBoldLg style={styles.brandText}>
            {item.name.replace("-", " ")}
          </TextBoldLg>
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <Image source={item.logo} style={styles.image} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectedContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.FULL,
    backgroundColor: colors.BLUE,
    padding: spaces.SM,
  },
  iconContainer: {
    padding: spaces.SM,
    borderRadius: radius.FULL,
    backgroundColor: colors.WHITE,
  },
  image: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  brandText: {
    color: colors.WHITE,
    marginHorizontal: spaces.MD,
    textTransform: "capitalize",
  },
});
