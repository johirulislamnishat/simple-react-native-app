import { StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Text from "../components/text/text";
export default function Home() {
  return (
    <View>
      <Text preset="h1">App</Text>
      <Text preset="h2">App</Text>
      <Text preset="paragraph">Jottosob</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
