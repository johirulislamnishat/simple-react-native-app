import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import Text from "./text/text";
import { colors } from "../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backBtn }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign
            style={{ paddingRight: 16 }}
            name="arrowleft"
            size={40}
            color="white"
          />
        </Pressable>
      )}
      <Text preset="h2">THE PLANET</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: 16,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.white,
  },
});
