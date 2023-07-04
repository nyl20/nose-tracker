import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { withNavigation } from 'react-navigation';
// import { Ionicons } from '@expo/vector-icons/Ionicons';
// import Icon from "react-native-ionicons";

const HomeScreen = ({ navigation }) => {
  var date = new Date().getDate();
  var month = new Date().toLocaleDateString('default', { month: 'long' });
  var year = new Date().getFullYear();
  var dateString = new Date().toLocaleDateString();
  let bleed = new Boolean(true);
  return (
    <View style={styles.container}>
      {/* <Text> Home Screen</Text>
      <Text> {date}-{month}-{year}</Text> */}
      <View style={styles.today}>
        <Text style={{ fontSize: 35, marginBottom: 15, color: '#ff4e3d' }}>{month} {date}, {year}</Text>
        <Text style={{ fontSize: 16 }}>Weather</Text>
        <Text style={{ fontSize: 16 }}>Pollen Count</Text>
        {bleed == true ?
          // if true then show the list of bleeds from today
          <TouchableOpacity style={styles.bleed}
            onPress={() => this.props.navigation.navigate('Chart')}>
            <Text style={{ fontSize: 20 }}>Bleed 1 Time</Text>
          </TouchableOpacity> : <Text style={{ fontSize: 23, marginTop: 15 }}>No Nosebleeds Today!</Text>}
      </View>
      {/* <Text>This Month</Text> */}
      {/* some stats about the current month */}
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Month', {
          randomColor: 'red'
        })}>
          <View >
            <Text style={{ fontSize: 20 }}>This Month</Text>
            <Text>Stats</Text>
            <Text>Total: 3</Text>
            <Text>Average Duration: Less than 5 minutes</Text>
          </View>

        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.past}
        onPress={() => this.props.navigation.navigate('Chart')}>
        <Text style={{ fontSize: 20 }}>All Past Events</Text>
      </TouchableOpacity>


      {/* if there is event today, list the events */}
      {/* <Text>Past Events</Text> */}

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
    // padding: 10,
    fontSize: 50,
    width: '100%',
    // borderRadius: 10,
    // borderStyle: 'double',
    borderBottomWidth: 2,
    borderBottomColor: '#ff4e3d'
  },
  button: {
    // backgroundColor: '#dbd451',
    backgroundColor: '#eae3d9',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    marginTop: 20,
    marginBottom: 20
  },
  past: {
    // backgroundColor: '#4cd7d0',
    // backgroundColor: '#ffdab1',
    backgroundColor: '#ff9356',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    marginBottom: 20
  },
  bleed: {
    // backgroundColor: '#eae3d9',
    // backgroundColor: '#ff9356',
    backgroundColor: '#ffdab1',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    marginTop: 20,
    marginBottom: 20
  }
});