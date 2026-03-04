import { FlatList, StyleSheet } from "react-native";
import { shoes } from "../../../../data/shoes";
import VerticalCard from "./VerticalCard";
import { spaces } from "../../../../constants/spaces";
import ListItemSeparator from "../../../../ui-components/separators/listItemSeparator";

export default function ShoesList({ selectedBrand, inputValue }) {
  const data = shoes
    .find((elem) => elem.brand === selectedBrand)
    .stock.filter((item) => !item.new);

  const filterData = inputValue
    ? data.filter((elem) =>
        elem.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()),
      )
    : data;

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={filterData}
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
