import React from 'react'
import { View, Text, StatusBar, Platform, SafeAreaView, FlatList } from 'react-native'
import Card from '../components/Card'

const data = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
  {
    id: 8
  },
]
const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 30}}>
          <FlatList
            data={data}
            renderItem={({item}) => <Card details={item}/>}
            keyExtractor={(item) => item.id}
          />
          <StatusBar hidden={false}/>
      </View>
    </SafeAreaView>
  )
}

export default Home