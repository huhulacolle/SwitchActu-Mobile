import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import WebView from 'react-native-webview';
import { WP_REST_API_Post } from 'wp-types';

export default function Article({route, navigation}: any) {

  const Article: WP_REST_API_Post = route.params;

  useEffect(() => {
    navigation.setOptions({ title: Article.title.rendered, });
  }, [])
  

  return (
    <View style={{ flex: 1 }}>
      <WebView
      minimumFontSize={40}
      source={{ html: `
      <style>
      .container {
        padding-right: 20px;
        padding-left: 20px;
        margin-right: auto;
        margin-left: auto;
      }
      </style>
      
      <div class="container">
        <div style="text-align: center">
          <h1>${Article.title.rendered}</h1>
        </div>
        ${Article.content.rendered}
      </div>
      ` }}
      startInLoadingState
      setBuiltInZoomControls={false}
      />
    </View>
  )
}