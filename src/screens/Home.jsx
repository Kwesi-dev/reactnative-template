import React from 'react'
import { View, Text, StatusBar, Platform, SafeAreaView, ScrollView } from 'react-native'
import Card from '../components/Card'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 20, marginTop: 30}}>
          <Card/>
          <StatusBar hidden={false}/>
      </View>
    </SafeAreaView>
  )
}

export default Home