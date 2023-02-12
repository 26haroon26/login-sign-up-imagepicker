import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, TextInput, TouchableOpacity, View, Text, Stack } from 'react-native';

import axios from 'axios';


const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState(" ");
  // const onPress = () => setCount(prevCount => prevCount + 1);

  // useEffect(() => {
  //   axios
  //   .get(
  //     `http://10.0.2.2:4000/products`
  //   )
  //   .then((response) => {
  //    console.log(response.data);
  //     setdata(response.data);

  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //   });
  //   setcity("")



  // }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.countContainer}>
          <Text style={styles.heading}>ForgotPassword</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            // autoComplete='email'
            keyboardType='email-address'
            placeholderTextColor="white"
            placeholder="Email"
          />

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: 'white' }}>ForgotPassword</Text>
          </TouchableOpacity>

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
  }, container: {
    flex: 1,
  }, heading: {
    color: '#2B60AC',
    fontWeight: "600", fontSize: 30, marginBottom: 20,
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
  countContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical:20,
    borderWidth: 2,
    // height: "30%",
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

export default ForgotPassword;