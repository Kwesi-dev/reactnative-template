import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator()

const CustomHeader = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.title}>Trial</Text>
    </View>
  )
}
function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="Login" component={LoginScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Home" component={Home} 
          options={{
            header: (props) => <CustomHeader {...props}/>
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
