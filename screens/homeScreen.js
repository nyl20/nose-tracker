import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons/Ionicons';
// import Icon from "react-native-ionicons";

const HomeScreen = ({ navigation }) => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var dateString = new Date().toLocaleDateString();
  return (
    <View style={styles.container}>
      <Text> Home Screen</Text>
      <Text> {date}-{month}-{year}</Text>
      <View style={styles.today}>
        <Text style={{ fontSize: 40, marginBottom: 15, color: '#ff4e3d' }}>{dateString}</Text>
        <Text style={{ fontSize: 20 }}>Weather</Text>
        <Text style={{ fontSize: 20 }}>Pollen Count</Text>
        <Text style={{ fontSize: 23, marginTop: 15 }}>No Nosebleeds Today!</Text>
      </View>
      <Text>This Month</Text>
      {/* some stats about the current month */}
      <TouchableOpacity onPress={() => navigation.navigate('Month', {
        randomColor: 'red'
      })}>
        <View style={styles.button}>
          <Text >This Month</Text>
          <Text>Stats</Text>
        </View>

      </TouchableOpacity>


      {/* if there is event today, list the events */}
      <Text>Past Events</Text>

      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      />
      {/* <Icon name='md-home' color='blue' /> */}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    margin: 30,
    // justifyContent: 'center'
    // backgroundColor: '#ffdab1'
  },
  today: {
    // backgroundColor: '#ffdab1',
    padding: 20,
    fontSize: 50,
    width: '100%',
    // borderRadius: 10,
    // borderStyle: 'double',
    borderBottomWidth: 2,
    borderBottomColor: '#ff4e3d'
  },
  button: {
    backgroundColor: '#ffdab1',
    borderRadius: 10,
    width: '100%',
    padding: 20
  }
});