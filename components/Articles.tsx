import { Button, FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { WP_REST_API_Posts } from 'wp-types';

export default function Articles({navigation}: any) {

  const [Articles, setArticles] = useState<WP_REST_API_Posts>([])

  useEffect(() => {
    getArticles();
  }, [])

  function getArticles() {
    axios.get("https://www.switch-actu.fr/wp-json/wp/v2/posts")
    .then(
      data => {
        setArticles(data.data);
      }
    )
    .catch(
      error => {
        alert(error)
      }
    )
  }  

  return (
    <ScrollView>
      {Articles.map(article => {
        return(
          <View>
            <Text key={article.id}> {article.title.rendered} </Text>
            <Button title='Bouton' onPress={() => navigation.navigate("Article", article.content.rendered)} />
          </View>
        )
      })}
    </ScrollView>
  )
}