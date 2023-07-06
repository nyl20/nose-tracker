import React from "react";
import { View, Text, Button, StyleSheet, TextInput, } from 'react-native';
// import { Ionicons } from '@expo/vector-icons/Ionicons';
// import Icon from "react-native-ionicons";

const PlusScreen = ({ navigation }) => {
  return (
    <View style={plusStyles.container}>
      <Text style={{ fontSize: 35, marginBottom: 15, color: '#ff4e3d' }}>Add Nosebleed</Text>
      <Text>Date:</Text>
      <TextInput placeholder="today's date" style={plusStyles.input} />
      <Text>Time:</Text>
      <TextInput placeholder="today's date" style={plusStyles.input} />
      <Text>Weather:</Text>
      <TextInput placeholder="today's date" style={plusStyles.input} />
      <Text>Location:</Text>
      <TextInput placeholder="today's date" style={plusStyles.input} />
      <Text>Duration:</Text>
      {/* multiple choice or drop down */}
      <TextInput placeholder="today's date" style={plusStyles.input} />
      <Text>Intensity:</Text>
      {/* multiple choice or drop down */}
      <TextInput placeholder="today's date" style={plusStyles.input} />
      <Text>Remedy:</Text>
      <TextInput placeholder="today's date" style={plusStyles.input} />
      <Text>Nasal Spray:</Text>
      {/* multiple choice or drop down */}
      <TextInput placeholder="today's date" style={plusStyles.input} />
      <Text>Notes:</Text>
      {/* notes should have a bigger box */}
      <TextInput placeholder="today's date" style={plusStyles.input} multiline={true} />
      <Button title="Add Event" />
      <Button
        title="Submit"
        onPress={() => alert('Nosebleed Added!')}
      />
      {/* <Icon name='md-home' color='blue' /> */}
    </View>
  );
}

export default PlusScreen;

const plusStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    margin: 30,
    marginTop: 65
  },
  input: {
    width: '100%',
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});