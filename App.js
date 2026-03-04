import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
// fonts
import TextBoldXl from "./ui-components/texts/TextBoldXl";
import TextBoldLg from "./ui-components/texts/TextBoldLg";
import TextBoldMd from "./ui-components/texts/TextBoldMd";
import TextBoldSm from "./ui-components/texts/TextBoldSm";
import TextMediumMd from "./ui-components/texts/TextMediumMd";
import TextMediumSm from "./ui-components/texts/TextMediumSm";
import TextRegularMd from "./ui-components/texts/TextRegularMd";
import TextRegularSm from "./ui-components/texts/TextRegularSm";

import { colors } from "./constants/colors";

export default function App() {
  const [fontLoaded] = useFonts({
    Light: require("./assets/fonts/Montserrat-Light.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  return fontLoaded ? (
    <View style={styles.container}>
      <TextBoldSm color={colors.BLUE}>
        Open up App.js to start working on your app!
      </TextBoldSm>
      <TextBoldMd color={colors.BLUE}>
        Open up App.js to start working on your app!
      </TextBoldMd>
      <TextBoldLg color={colors.BLUE}>
        Open up App.js to start working on your app!
      </TextBoldLg>
      <TextBoldXl color={colors.BLUE}>
        Open up App.js to start working on your app!
      </TextBoldXl>
      <TextMediumMd color={colors.BLUE}>
        Open up App.js to start working on your app!
      </TextMediumMd>
      <TextMediumSm color={colors.BLUE}>
        Open up App.js to start working on your app!
      </TextMediumSm>
      <TextRegularMd color={colors.BLUE}>
        Open up App.js to start working on your app!
      </TextRegularMd>
      <TextRegularSm color={colors.BLUE}>
        Open up App.js to start working on your app!
      </TextRegularSm>
      <StatusBar style="auto" />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
