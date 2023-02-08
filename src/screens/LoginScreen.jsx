import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Logo from "../../assets/loginImg.svg"
const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar hidden={true}/>
        <LinearGradient
            colors={['#50aae2', '#5ed1d2']}
            style={styles.container}
        >
            <View>
                <TouchableOpacity style={{backgroundColor: "#84DED1", height: 40, width: 40, position: 'absolute', top: 30, left: 30, borderRadius: 40/2, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="close" size={24} color="#ffff"/>
                </TouchableOpacity>
                <View style={{marginTop: 35}}>
                    <Text style={{color: "#ffff", textAlign: "center", fontSize: 20, fontWeight: "400"}}>Sign in to Your Account</Text>
                    <View style={{marginTop: 20}}>
                    <Logo width={"100%"} height={200}/>
                    </View>
                    <View style={{paddingHorizontal: 50, marginTop: 30}}>
                        <TextInput placeholder="USERNAME" placeholderTextColor="#ffff" style={styles.input}/>
                        <TextInput placeholder="PASSWORD" placeholderTextColor="#ffff" style={styles.input}/>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: "#A3B6C8", fontWeight: "600"}}>LOG IN</Text>
                        </TouchableOpacity>
                        <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 80}}>
                            <Text style={{color: "#ffff", marginRight: 10}}>Don't have an account?</Text>
                            <Text style={{color: "#ffff", fontWeight: "600"}}>Sign up</Text>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    input:{
        width: "100%",
        borderRadius: 30,
        backgroundColor: "#6BC5DF",
        height: 60,
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: '400',
        color: "#ffff"
    },
    button:{
        height: 60,
        borderRadius: 30,
        backgroundColor: "#ffff",
        alignItems: "center",
        justifyContent: 'center',
    }
})
export default LoginScreen