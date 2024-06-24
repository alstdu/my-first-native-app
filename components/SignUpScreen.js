import React from "react";
import { Button, View, Text } from "react-native";
export default function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up</Text>
      <Button
        title="Continue"
        onPress={() => navigation.navigate("Invite")}
      />
    </View>
  );
}
