import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";
import SearchSection from "./searchSection/index";
import NewsSection from "./newsSection/index";
import ListSection from "./listSection/index";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: "#000000",
        }}
      />
      <SearchSection />
      <ListSection />
      <NewsSection />
      <View
        style={{
          width: "100%",
          height: 106,
          backgroundColor: "#000000",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.LIGHT,
  },
});
