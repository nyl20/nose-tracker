import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import PastEventsScreen from '../screens/pastScreen';
import MonthEventsScreen from '../screens/monthScreen';



const hStack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <hStack.Navigator initialRouteName="Home"
    // screenOptions={{ headerShown: false }}
    >
      <hStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <hStack.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <hStack.Screen
        name="Month"
        component={MonthEventsScreen}
        options={{
          title: 'Last Month',
          headerStyle: {
            // backgroundColor: '#eae3d9'
            backgroundColor: '#ff4e3d'
          },
          headerTintColor: '#ffffff'
        }}
      />
      <hStack.Screen
        name="Past"
        component={PastEventsScreen}
        options={{
          title: 'Past Events',
          headerStyle: {
            // backgroundColor: '#ff9356'
            backgroundColor: '#ff4e3d'
          },
          headerTintColor: '#ffffff'
        }}
      />
    </hStack.Navigator>

  );
}