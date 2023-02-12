import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Image, TextInput, Text, FlatList, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const Messages = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Name',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Name',
  },
  {
    id: '3',
    name: 'Third Name',
  }, {
    id: '4',
    name: 'Third Name',
  }, {
    id: '44',
    name: 'Third Name',
  }, {
    id: '58654a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Name',
  }, {
    id: '58654a0f5-3da1-471f-bd96-145571e29d72',
    name: 'Third Name',
  }, {
    id: '58654a0f-3d4545a1-471f-bd96-145571e29d72',
    name: 'Third Name',
  }, {
    id: '58654a0f-3d666a1-471f-bd96-145571e29d72',
    name: 'Third Name',
  },
];
const Item = ({ name }) => (

  <View style={styles.user}>
    <View style={styles.user1}>
      <Image
        style={styles.userImage}
        source={
          { uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      <Text style={styles.recipientName}>{name}</Text>
    </View>
    <View style={styles.user2}>
      <Text style={styles.date}>23 june</Text>
      <Text style={styles.messageCount}>1</Text>
    </View>

  </View>

);
const Post = ({ navigation }) => {
  const [recipient, setRecipient] = useState('');
  const [data, setData] = useState('');
  return (
    <SafeAreaView>
      <ScrollView >
        <View style={styles.container}>
          <View style={styles.search}>
            <TextInput
              style={styles.Searchinput}
              onChangeText={setRecipient}
              // autoComplete='email'
              keyboardType='default'
              placeholderTextColor="white"
              // placeholderStyle={{alignItems:"center", fontFamily: 'roboto'}}
              placeholder="Search User"
            />
          </View>
          <View style={styles.allUser}>
            {Messages.map((e, index) => {
              return <View style={styles.user} key={index}>

                <View style={styles.user1} >
                  <Image
                    style={styles.userImage}
                    source={
                      { uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                  />
                  <Text style={styles.recipientName}>{e.name}</Text>
                </View>
                <View style={styles.user2}>
                  <Text style={styles.date}>23 june</Text>
                  <Text style={styles.messageCount}>1</Text>
                </View>
                <TouchableOpacity  onPress={()=>{navigation.navigate('Login')}}>
                <Text >logout</Text>
              </TouchableOpacity>
              </View>

            })}
            {/* <FlatList
              data={Messages}
              // scrollShown ={false}
              renderItem={({ item }) => <Item name={item.name} />}
              keyExtractor={item => item.id}
            /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2B60AC',
  },
  search: {
    width: '80%',
    paddingVertical: 20,
    justifyContent: "center",
  },
  Searchinput: {
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
    width: '100%',
    color: "white",
    borderColor: 'white',
    marginBottom: 5,
    textAlign: "center",
  },
  allUser: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderTopLeftRadius: 60,
  },
  user: {
    flexDirection: "row",
    padding: 10,
    color: "white",
    alignItems: "center",
    width: "100%",
  },
  user1: {
    flexDirection: "row",
    padding: 10,
    height: 70,
    justifyContent: "flex-start",
    width: '80%',
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  recipientName: {
    paddingHorizontal: 10, color: '#EF5388',
    fontWeight: "bold",
  },
  user2: {
    // width: '20%',
    // height: 70,
    display:"flex",
    // flexDirection:"row",
    // padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  date: {
    color: '#EF5388'
  },
  messageCount: {
    borderRadius: 50,
    textAlign: "center",
    height: 25,
    width: 25,
    marginTop:5,
    padding: 3, color: "white",
    backgroundColor: '#EF5388',
  },
});
export default Post;