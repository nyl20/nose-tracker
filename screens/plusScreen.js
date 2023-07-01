import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons/Ionicons';
// import Icon from "react-native-ionicons";

const PlusScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <Text> Home Screen</Text>
      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      />
      {/* <Icon name='md-home' color='blue' /> */}
    </View>
  );
}

export default PlusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },
});