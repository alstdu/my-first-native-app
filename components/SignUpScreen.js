import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import MyStyles from "../MyStyles";
export default function SignUpScreen({ navigation }) {
  return (
    // The way I remember views is that they are like divs
    // So here I am setting up a flex layout for each of the sections
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end", backgroundColor: "white" }}>
      <View style={{marginTop: 40, marginLeft: 20, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        <Text
          style={MyStyles.Heading}
        >
          Let's Get Started
        </Text>
        <Text>Get ready for a unique experience!</Text>
      </View>
      {/* A view for the sign up form using TextInput */}
      <View style={MyStyles.InputContainer}>
        <Text>Name</Text>
        <TextInput style={MyStyles.input} placeholder="Name" />
        <Text>Email</Text>
        <TextInput style={MyStyles.input} placeholder="Email" />
        <Text>Password</Text>
        <TextInput style={MyStyles.input} placeholder="Password" />
        {/* Using Touchable Opacity to style the component like a button */}
        <TouchableOpacity
          style={MyStyles.ButtonContainer}
          onPress={() => navigation.navigate("Invite")}>
          <Text
            style={MyStyles.ButtonText}
          >Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
