import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/home";

export default function App() {
  const [fontLoaded] = useFonts({
    Light: require("./assets/fonts/Montserrat-Light.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  return fontLoaded ? <HomeScreen /> : null;
}

const styles = StyleSheet.create({});
