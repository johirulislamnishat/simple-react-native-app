import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../theme/colors";
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
