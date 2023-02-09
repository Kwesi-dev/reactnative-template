import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Tabs from "./src/components/Tabs";

const Stack = createNativeStackNavigator();
const statusbarHeight = getStatusBarHeight();

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image source={require("./assets/profile.png")} style={styles.img} />
        <View>
          <Text style={styles.title}>Welcome back, Sammy</Text>
          <Text style={styles.sub}>
            Your financial situation is looking very good
          </Text>
        </View>
      </View>
      <View>
        {/** progress bar */}
        <View
          style={{
            width: "100%",
            backgroundColor: "#E2E3E5",
            height: 10,
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: "60%",
              backgroundColor: "#5587F8",
              height: "100%",
              borderRadius: 10,
              position: "absolute",
              top: 0,
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 2,
        }}
      >
        <Text style={{ color: "#E2E3E5", fontSize: 12 }}>Beginner level</Text>
        <Text style={{ color: "#E2E3E5", fontSize: 12 }}>XP3658989</Text>
      </View>
      <Tabs />
    </View>
  );
};
function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: (props) => <CustomHeader {...props} />,
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingTop: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: Platform.OS === "android" ? statusbarHeight : 0,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginTop: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  sub: {
    fontSize: 12,
    color: "#E2E3E5",
  },
});

export default App;
