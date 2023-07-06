import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const ChartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, marginBottom: 15, color: '#ff4e3d' }}>Charts</Text>
      {/* charts with bar charts of impacting factors, stats */}
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
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#8fcbbc',
    margin: 30,
    marginTop: 65
  },
});