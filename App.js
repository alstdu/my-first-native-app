import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image} from 'react-native';
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

export default function App() {
  return (
    // Wrap whole app in Navigation container
    //   Stack.Screen are the individual screens in the stack
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{ title: 'Welcome' }} // This sets the title of the screen
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="Invite"
          component={InviteScreen}
          options={{ title: 'Invite' }}
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
