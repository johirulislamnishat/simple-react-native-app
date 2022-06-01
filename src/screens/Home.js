import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/data";
import Text from "../components/text/text";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Details");
              }}
            >
              <View style={styles.item}>
                <View style={styles.items}>
                  <View
                    style={[styles.color, { backgroundColor: item.color }]}
                  />
                  <Text preset="h5" style={{ textTransform: "uppercase" }}>
                    {item.name}
                  </Text>
                </View>
                <AntDesign name="right" size={20} color="white" />
              </View>
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  list: {
    padding: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
    paddingBottom: 16,
  },
  items: {
    flexDirection: "row",
    alignItems: "center",
  },
  color: {
    height: 26,
    width: 26,
    borderRadius: 50,
    marginRight: 20,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
  },
});
