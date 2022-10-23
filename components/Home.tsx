import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Articles from './Articles';
import News from './News';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
  <Tab.Navigator>
    <Tab.Screen name="Articles" component={Articles} options={{ headerStyle: { backgroundColor: "red" }, headerTintColor: '#fff', }} />
    <Tab.Screen name="Actualités" component={News} />
  </Tab.Navigator>
  )
}