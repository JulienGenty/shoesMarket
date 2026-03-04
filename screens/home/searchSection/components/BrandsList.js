import { FlatList, StyleSheet } from "react-native";
import { brands } from "../../../../data/brands";
import BrandItem from "./BrandItem";
import { spaces } from "../../../../constants/spaces";
import { useState } from "react";
import ItemHorizontalSeparator from "./ItemHorizontalSeparator";

export default function BrandsList() {
  const [selectedBrand, setSelectedBrand] = useState("nike");

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={brands}
      keyExtractor={(item) => item.name}
      renderItem={({ item, index }) => (
        <BrandItem
          item={item}
          index={index}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
      )}
      style={styles.container}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={ItemHorizontalSeparator}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  content: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});
