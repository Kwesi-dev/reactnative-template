import React, { useEffect, useState } from 'react'
import { View, StatusBar,SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import Card from '../components/Card'

const data = [
  {
    id: 1,
    bgColor: "#5185FF",
    pColor: "#4374E5"
  },
  {
    id: 2,
    bgColor: "#4FD2C2",
    pColor: "#52B2B4"
  },
  {
    id: 3,
    bgColor: "#6163D0",
    pColor: "#4753B9"
  },
  {
    id: 4,
    bgColor: "#FF85AE",
    pColor: "#4374E5"

  },
  {
    id: 5,
    bgColor: "#5185FF",
    pColor: "#52B2B4"

  },
  {
    id: 6,
    bgColor: "#4FD2C2",
    pColor: "#4753B9"

  },
  {
    id: 7,
    bgColor: "#6163D0"
  },
  {
    id: 8,
    bgColor: "#FF85AE"
  },
]
const Home = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  },[])
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 30}}>
          {loading ?
            <ActivityIndicator size="large" /> :
            <FlatList
              data={data}
              renderItem={({item}) => <Card details={item}/>}
              keyExtractor={(item) => item.id}
            />
          }
          <StatusBar hidden={false}/>
      </View>
    </SafeAreaView>
  )
}

export default Home