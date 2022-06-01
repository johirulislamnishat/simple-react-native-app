import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Text from "../components/text/text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../theme/colors";

export default function Details() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <Text>Details</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
