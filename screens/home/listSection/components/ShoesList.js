import { FlatList, StyleSheet } from "react-native";
import { shoes } from "../../../../data/shoes";
import VerticalCard from "./VerticalCard";
import { spaces } from "../../../../constants/spaces";
import ListItemSeparator from "../../../../ui-components/separators/listItemSeparator";

export default function ShoesList() {
  const data = shoes[0].stock.filter((elem) => !elem.new);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => <VerticalCard item={item} />}
      ItemSeparatorComponent={<ListItemSeparator width={spaces.LG} />}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: spaces.LG,
  },
});
