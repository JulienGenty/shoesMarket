import { StyleSheet, View } from "react-native";
import SearchInput from "../../../ui-components/inputs/SearchInput";
import { useState } from "react";
import { spaces } from "../../../constants/spaces";
import BrandsList from "./components/BrandsList";

export default function SearchSection() {
  const [InputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Trouvez vos shoes"
        value={InputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <BrandsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 120,
    justifyContent: "space-evenly",
    borderWidth: 1,
  },
});
