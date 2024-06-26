import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import * as React from 'react';
// Tell React we will implement a navigator
import { NavigationContainer } from '@react-navigation/native';
// Creating the stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import the screen files
import GetStartedScreen from './components/GetStartedScreen';
import SignUpScreen from './components/SignUpScreen';
import InviteScreen from './components/InviteScreen';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, alignContent: "center" }}
      source={require('./assets/logo.png')}
    />
  );
}

export default function App() {
  return (
    // Wrap whole app in Navigation container
    //   Stack.Screen are the individual screens in the stack
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} />, headerTitleAlign: 'center', }} // This sets a custom header with logo that's centered
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} />,  headerTitleAlign: 'center', }}
        />
        <Stack.Screen
          name="Invite"
          component={InviteScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} />,  headerTitleAlign: 'center', }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
