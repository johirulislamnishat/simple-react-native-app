import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "./text/text";
import spacing from "../theme/spacing";
import { colors } from "../theme/colors";

export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset="h2">THE PLANET</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.white,
  },
});
