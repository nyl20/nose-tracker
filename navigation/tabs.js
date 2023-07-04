import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/homeScreen';
import ChartScreen from '../screens/chartScreen';
import PlusScreen from '../screens/plusScreen';
import ProfileScreen from '../screens/profileScreen';
// import AddScreen from '../screens/addScreen';
// import { TouchableOpacity } from "react-native/types";
// import { Ionicons } from '@expo/vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const CustomTab = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...tabstyles.shadow
    }}
    onPress={onPress}
  >
    <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: "tomato" }}>{children}</View>
  </TouchableOpacity>
);

const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({ children, onPress }) => (
//   <TouchableOpacity
//     style={{
//       top: -30,
//       justifyContent: 'center',
//       alignItenms: 'center',
//       ...styles.shadow
//     }}
//     onPress={onPress}
//   >
//     <View style={{
//       width: 70,
//       height: 70,
//       borderRadius: 35,
//       backgroundColor: "#e32f45"
//     }}>
//       {children}
//     </View>
//   </TouchableOpacity>
// );


const Tabss = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'md-home' : 'md-home-outline';
          } else if (route.name === 'Add') {
            iconName = 'ios-add';
            return <Ionicons name={iconName} size={32} color='white' />;
          } else if (route.name === 'Chart') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          }
          return <Ionicons name={iconName} size={32} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { bottom: 5 },
        tabBarItemStyle: { marginTop: 8 }
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Add" component={PlusScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTab {...props} />
          )
        }} />

      <Tab.Screen name="Chart" component={ChartScreen} />

    </Tab.Navigator>

  );
}


const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // showLabel: false,
        height: 90
      }}>
      <Tab.Screen name="Home" component={HomeScreen}
      // options={{
      //   tabBarIcon: ({ focused }) => {
      //     return (
      //       // <View style={{alignItems: 'center', justifyContent: 'center', top:10}>
      //       <Ionicons name='md-home' size={32} color='blue' />
      //       // </View>
      //     );
      //   }
      // }}
      />

      <Tab.Screen name="Add" component={PlusScreen}
      // options={{
      //   tabBarButton: (props) => (
      //     <CustomTabBarButton {...props} />
      //   )
      // }}


      />

      <Tab.Screen name="Chart" component={ChartScreen}
      // options={{
      //   tabBarIcon: ({ focused }) => (
      //     // <View style={{alignItems: 'center', justifyContent: 'center', top:10}>
      //     <Ionicons name='stats-chart' size={32} color='blue' />
      //     // </View>
      //   )
      // }} 
      />

    </Tab.Navigator>

  );
}

const tabstyles = StyleSheet.create({
  shadow: {
    // shadowColor: '#7F5DF0',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

// to use as component, have to export it
export default Tabss;