import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Articles from '../pages/Articles';
import News from '../pages/News';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      if (route.name === 'Articles') {
        return (
          <Ionicons
            name='newspaper-outline'
            size={size}
            color={color}
          />
        );
      } else if (route.name === 'Actualités') {
        return (
          <Ionicons
            name='star-outline'
            size={size}
            color={color}
          />
        );
      }
    },
    tabBarInactiveTintColor: 'black',
    tabBarActiveTintColor: 'red',
  })}
  >
    <Tab.Screen name="Articles" component={Articles} options={{ headerStyle: { backgroundColor: "red" }, headerTintColor: '#fff', }} />
    <Tab.Screen name="Actualités" component={News} options={{ headerStyle: { backgroundColor: "red" }, headerTintColor: '#fff', }} />
  </Tab.Navigator>
  )
}