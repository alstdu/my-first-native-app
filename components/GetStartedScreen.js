
import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import MyStyles from "../MyStyles";

export default function GetStartedScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ImageBackground
                style={MyStyles.HomeBgImage}
                source={require('../assets/splashyoga.jpg')}>
            </ImageBackground>
            <View style={{margin: 15, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                <Text
                    style={MyStyles.Heading}
                >
                    Discover Yoga with Friends
                </Text>
                <Text style={{paddingRight: 50}}>Discover a new way to stay connected and healthy with our revolutionary yoga app!
                    Join live sessions, share your progress, and motivate each other in real-time.
                    Download now and elevate your yoga practice together</Text>
                <TouchableOpacity
                    style={MyStyles.ButtonContainer}
                    onPress={() => navigation.navigate("SignUp")}>
                    <Text
                        style={MyStyles.ButtonText}
                    >Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
