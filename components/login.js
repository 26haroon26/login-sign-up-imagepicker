import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView,TouchableOpacity, View, Text, Alert } from 'react-native';

import axios from 'axios';
import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import { io } from "socket.io-client";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState('');
  let { state, dispatch } = useContext(GlobalContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email,password);
    
    try {
      // const data = new FormData(event.currentTarget);
      let response = await axios.post(
        `http://10.0.2.2:4000/api/v1/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch({
        type: "USER_LOGIN",
        payload: response.data.profile,
      });
      navigation.navigate('Root')
      console.log('succes');

      // toast.success("signin successful")
    } catch (error) {
      // Alert.alert(` server${error.response.data.message}`);
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
      {/* <KeyboardAvoidingView enabled > */}
        <View style={styles.countContainer}>

        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          // autoComplete='email'
          keyboardType='email-address'
          placeholderTextColor="white"
          // placeholderStyle={{alignItems:"center", fontFamily: 'roboto'}}
          placeholder="Email"
        />

        <TextInput
          onChangeText={setPassword}
          // autoComplete='current-password'
          keyboardType="default"
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="white"

        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <View style={styles.buttonGroup}>
          <View style={styles.group1}>
            <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={{ color: 'white' }}>Forgot-Pas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.group1}>
            <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('Signup')}>
              <Text style={{ color: 'white' }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>

        </View>
       {/* </ KeyboardAvoidingView> */}
      </View>

    </SafeAreaView>

  );r
};

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#2B60AC',
    height:'100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
     },
  heading:{
    color:'#2B60AC',
    fontWeight:"600",fontSize:50,marginBottom:20,
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    backgroundColor: '#2B60AC',
    width: '80%',
    color: "white",
    borderColor: 'white',
    marginBottom: 5,
    textAlign: "center",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2B60AC',
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: '80%',

  },
  group1: {
    width: '48%',
  },
  forgot: {
    width: "100%",
    backgroundColor: '#2B60AC',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: "row",
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  countContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical:20,
     borderWidth:2,
    // height:"50%",
    // borderRadius:,
    borderTopLeftRadius:50,
    borderBottomRightRadius:50,
    borderColor:'#FFFFFF',
    width:'90%',
    backgroundColor:"#2B60AC",
    backgroundColor:"#FFF",
    alignSelf:"center",
  },
});

export default Login;