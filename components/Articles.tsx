import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { WP_REST_API_Posts } from 'wp-types';
import { Card } from 'react-native-paper';

export default function Articles({navigation}: any) {

  const [Articles, setArticles] = useState<WP_REST_API_Posts>([]);

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
    <ScrollView style={style.cardview}>
      {Articles.map(article => {
        return(
          <View key={article.id} style={{marginTop: 10}}>
            <Card onPress={() => navigation.navigate("Article", article)}>
              <Card.Title
              title={article.title.rendered}
              />
            </Card>
          </View>
        )
      })}
    </ScrollView>
  )
}

const style = StyleSheet.create({
  cardview: {
    paddingLeft: 10,
    paddingRight: 10
  }
})
