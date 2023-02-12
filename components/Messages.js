import React, { useState, useEffect } from 'react';
import Camera from './camera'
import axios from 'axios';
// import { Camera, CameraType } from 'expo-camera';
import { StyleSheet, SafeAreaView, Image, TextInput, Text, FlatList, TouchableOpacity, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// function toggleCameraType() {
//   setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
// }
function Messages() {
  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();

  // if (!permission)

  //   if (!permission.granted)


      //   useEffect(() => {
      //   axios
      //   .get(
      //     `http://10.0.2.2:5001/api/v1/messages/63caaa5fc1a1b4bb3ff25f91`
      //     ,
      //   )
      //   .then((response) => {
      //    console.log(response.data);

      //   })
      //   .catch((err) => {
      //     console.log("err", err);
      //   });

      // }, [])
      return (
        <SafeAreaView style={styles.main}>

          <ScrollView >
            {/* <Camera style={styles.camera} type={type}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>{setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));}}>
                  <Text style={styles.text}>Flip Camera</Text>
                </TouchableOpacity>
              </View>
            </Camera> */}
            <Camera/>
            <View style={styles.container}>
              <Text style={styles.heading}>Muhammad Haroon</Text>
              <View style={styles.userLeft}>
                <View style={styles.imageLeft}>
                  <Image
                    style={styles.userImageLeft}
                    source={
                      { uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                  />
                </View>
                <View style={styles.messageLeft} >
                  <Text style={styles.textLeft}>hello</Text>
                  <Text style={styles.timeLeft}>23 june</Text>
                </View>
              </View>
              <View style={styles.userRight}>
                {/* <View style={styles.imageRight}>
              <Image
                style={styles.userImageRight}
                source={
                  { uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              />
            </View> */}
                <View style={styles.messageRight} >
                  <Text style={styles.textRight}>haroon</Text>
                  <Text style={styles.timeRight}>23 june</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.searchveiw}>
            <TextInput
              style={styles.Searchinput}
              // autoComplete='email'
              keyboardType='default'
              placeholderTextColor="white"
              // placeholderStyle={{alignItems:"center", fontFamily: 'roboto'}}
              placeholder="Search User"
            />
            <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={{ color: 'black', backgroundColor: 'yellow' }}> <Ionicons name="send" size={30} color="black" /></Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )
}
const styles = StyleSheet.create({
  main: {
    position: 'relative',
    height: '100%'
  },
  searchveiw: {
    position: 'absolute',
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // height: '100%',
    backgroundColor: '#FFFFFF',
  },
  heading: {
    color: '#2B60AC',
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 20,
  },
  Searchinput: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    height: 20,
    width: '90%',
    color: "white",
    borderColor: 'black',
    marginBottom: 5,
    textAlign: "center",
  }, forgot: {},
  userLeft: {
    flexDirection: "row",
    padding: 15,
    color: "white",
    alignItems: "center",
    width: "80%",
    alignSelf: "flex-start"
  }
  ,

  imageLeft: {
    alignSelf: "flex-start",
    width: 60, height: 60,
  },
  userImageLeft: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 50,

  },
  messageLeft: {
    paddingHorizontal: 5,

    alignItems: "flex-start",

    maxWidth: "80%",
  },
  textLeft: {
    paddingHorizontal: 10,
    color: 'black',
    padding: 10,
    backgroundColor: "#E8F5FD",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  timeLeft:
  {
    color: "#EF5388"
  },
  // text #C3D3E8
  // backgroundColor #2F66AF
  // right wale kely

  userRight: {
    flexDirection: "row-reverse",
    padding: 15,
    color: "white",
    alignItems: "center",
    width: "80%",
    alignSelf: "flex-end"
  }
  ,
  imageRight: {
    alignSelf: "flex-start",
    width: 60,
    height: 60,
  },
  userImageRight: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 50,
  },
  messageRight: {
    paddingHorizontal: 10,
    alignItems: "flex-end",
    maxWidth: "80%",
  },
  textRight: {
    paddingHorizontal: 10,
    color: 'white',
    padding: 10,
    backgroundColor: "#2F66AF",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 20,
    // fontWeight: 'b',
    fontSize: 20,
  }, timeRight:
  {
    color: "#EF5388"
  },
});

export default Messages