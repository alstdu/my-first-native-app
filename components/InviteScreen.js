import React from "react";
import { View, Text, FlatList, Button, SafeAreaView, TouchableOpacity,Image } from "react-native";
import MyStyles from "../MyStyles";

// Used as a list of contacts 
// Each object contains the id, photo, name, and number
const DATA = [
  {
    id: 'contact1',
    photo: 'MyStyles.Circle',
    title: 'Kreesha',
    number: '123-456-7890',

  },
  {
    id: 'contact2',
    photo: 'string',
    title: 'Gaby',
    number: '123-456-7890',

  },
  {
    id: 'contact3',
    photo: 'string',
    title: 'Mom',
    number: '123-456-7890',
  },
  {
    id: 'contact4',
    photo: 'string',
    title: 'Zack',
    number: '123-456-7890',
  },
];

// TODO: use photo
//    For now we are using a circle as a placeholder, but eventually
//    we will use an image from the users contacts
const ContactView = ({ photo, title, number }) => (
  <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
    <View style={MyStyles.Circle}></View>
    <Text>{title}</Text>
    <Text>{number}</Text>
  </View>
);

export default function InviteScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end", backgroundColor: "white" }}>
      <View style={{ margin: 20, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        <Text style={MyStyles.Heading}>
          Invite Your Friends
        </Text>
        <Text>Yoga is better together</Text>
        {/* Just so I know the button is working since I don't have another page to navigate to yet */}
        <TouchableOpacity onPress={() => alert('Hi!')}>
          <Text style={MyStyles.TextButton}>Skip for now</Text>
        </TouchableOpacity>
      </View>
      <View style={MyStyles.InviteContainer}>
        {/* Create a list of contact items using the FlatList component.
        The 'data' prop is set to 'DATA' which is the array containing the contact info.
        Each item in the list is rendered using the 'ContactView' component, 
        which displays the contact's photo, name, and phone number.
        The 'keyExtractor' prop ensures each item has a unique key based on its 'id' property.*/}
        <FlatList
          contentContainerStyle={{justifyContent: "space-evenly", height: "100%"}}
          data={DATA}
          renderItem={({ item }) => <ContactView photo={item.photo} title={item.title} number={item.number} />}
          keyExtractor={item => item.id}
        />
        <View style={{justifyContent: "space-evenly"}}>
          {/* Temporary elements. Eventually use contact permissions to decide when to show add or invite */}
        <TouchableOpacity
          style={MyStyles.AddButton}>
          <Text
            style={MyStyles.ButtonText}
          >Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={MyStyles.AddButton}>
          <Text
            style={MyStyles.ButtonText}
          >Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={MyStyles.InviteButton}>
            <Image
              source={require('../assets/inviteButton.png')}>
            </Image>
        </TouchableOpacity>
        <TouchableOpacity
        style={MyStyles.InviteButton}>
            <Image
              source={require('../assets/inviteButton.png')}>
            </Image>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
