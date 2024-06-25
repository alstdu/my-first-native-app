import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import MyStyles from "../MyStyles";
export default function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up</Text>
      <TouchableOpacity
        style={MyStyles.ButtonContainer}
        onPress={() => navigation.navigate("Invite")}>
          <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
