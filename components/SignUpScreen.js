import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import MyStyles from "../MyStyles";
export default function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Name</Text>
      <TextInput style={MyStyles.input} placeholder="Name" />
      <Text>Email</Text>
      <TextInput style={MyStyles.input} placeholder="Email" />
      <Text>Password</Text>
      <TextInput style={MyStyles.input} placeholder="Password" />
      <TouchableOpacity
        style={MyStyles.ButtonContainer}
        onPress={() => navigation.navigate("Invite")}>
          <Text
          style={MyStyles.ButtonText}
          >Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
