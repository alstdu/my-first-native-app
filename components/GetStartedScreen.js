
import React from "react";
import { Button, View, Text } from "react-native";

export default function GetStartedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}
