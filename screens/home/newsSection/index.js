import { StyleSheet, View } from "react-native";
import Banner from "../components/Banner";
import HorizontalCard from "./components/HorizontalCard";
import { shoes } from "../../../data/shoes";
import { spaces } from "../../../constants/spaces";

export default function NewsSection() {
  const item = shoes[0].stock.find((elem) => elem.new);
  console.log(item);
  console.log(item.id); // nik84p
  return (
    <View style={styles.container}>
      <Banner text="Nouveautés" />
      <HorizontalCard item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 160,
    paddingVertical: spaces.MD,
  },
});
