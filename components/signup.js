import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, TextInput, TouchableOpacity, View, Text, Alert } from 'react-native';
import axios from 'axios';
import { useContext } from "react";
import { GlobalContext } from "../context/Context";

const Signup = ({ navigation }) => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState();
  let { state, dispatch } = useContext(GlobalContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(state.baseUrl);
    try {
      let response = await axios.post(
       `${state.baseUrl}/signup`,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      navigation.navigate('Login')
      // toast.success("signin successful")
    } catch (error) {
      // Alert.alert(error.message)
      console.log('asasas',error.message);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.countContainer}>
          <Text style={styles.heading}>Signup</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            placeholder="First Name"
            // autoComplete='username'
            placeholderTextColor="white"
            keyboardType="default"

          />
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            keyboardType="default"
            placeholderTextColor="white"
            placeholder="Last Name"
          />

          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            // autoComplete='email'
            keyboardType='email-address'
            placeholderTextColor="white"
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

          {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'white' }}>SignUp</Text>
        </TouchableOpacity> */}
          <View style={styles.buttonGroup}>
            <View style={styles.group1}>
              <TouchableOpacity style={styles.forgot} onPress={handleSubmit}>
                <Text style={{ color: 'white' }}>Signup</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.group1}>
              <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: 'white' }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2B60AC',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  }, heading: {
    color: '#2B60AC',
    fontWeight: "600", fontSize: 50, marginBottom: 20,
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
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
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
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
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: "row",
    width: '80%',
    justifyContent: 'space-between',
  },
  countContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 2,
    // height: "50%",
    // borderRadius:,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: '#FFFFFF',
    width: '90%',
    backgroundColor: "#2B60AC",
    backgroundColor: "#FFF",
    alignSelf: "center",
  },
});

export default Signup;