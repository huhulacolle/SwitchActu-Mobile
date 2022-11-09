import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { WP_REST_API_Posts } from 'wp-types';
import { Card } from 'react-native-paper';
import dayjs from 'dayjs';

export default function Articles({navigation}: any) {

  const [Articles, setArticles] = useState<any[]>([]);

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
      {Articles.map((article: { id: React.Key | null | undefined; yoast_head_json: { og_image: { url: any; }[]; }; title: { rendered: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; date: string | number | Date | dayjs.Dayjs | null | undefined; }) => {
        return(
          <View key={article.id} style={{marginTop: 10}}>
            <Card onPress={() => navigation.navigate("Article", article)}>
              <Card.Cover source={{uri: article.yoast_head_json.og_image[0].url}} />
              <Card.Title
              title={article.title.rendered}
              subtitle={dayjs(article.date).format('DD/MM/YYYY')}
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
