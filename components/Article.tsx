import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';
import Constants from 'expo-constants';

export default function Article({route}: any) {

  const Article = route.params;


  return (
    <ScrollView>
      <Text>
        {Article}
      </Text>
    </ScrollView>
  )
}
