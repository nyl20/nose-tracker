import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const ChartScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <Text>Chart Screen</Text>
      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      />
    </View>
  );
}

export default ChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },
});