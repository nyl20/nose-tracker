import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/homeScreen';
import ChartScreen from '../screens/chartScreen';
import ProfileScreen from '../screens/profileScreen';
import { Ionicons } from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


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
      <Tab.Screen name="Chart" component={ChartScreen}
      // options={{
      //   tabBarIcon: ({ focused }) => (
      //     // <View style={{alignItems: 'center', justifyContent: 'center', top:10}>
      //     <Ionicons name='stats-chart' size={32} color='blue' />
      //     // </View>
      //   )
      // }} 
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
      // options={{
      //   tabBarIcon: ({ focused }) => (
      //     // <View style={{alignItems: 'center', justifyContent: 'center', top:10}>
      //     <Ionicons name='ios-person-circle' size={32} color='blue' />
      //     // </View>
      //   )
      // }} 
      />
    </Tab.Navigator>

  );
}

// to use as component, have to export it
export default Tabs;