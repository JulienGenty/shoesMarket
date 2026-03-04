import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoaded] = useFonts({
    Light: require("./assets/fonts/Montserrat-Light.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  return fontLoaded ? (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Light" }}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={{ fontFamily: "Regular" }}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={{ fontFamily: "Medium" }}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={{ fontFamily: "SemiBold" }}>
        Open up App.js to start working on your app!
      </Text>
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
