import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const MonthEventsScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      />
    </View>
  );
}

export default MonthEventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },
});