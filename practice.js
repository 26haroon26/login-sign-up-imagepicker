import {StyleSheet,SafeAreaView,Button, Text,FlatList, TouchableOpacity, View} from 'react-native';
import React, {useState , useEffect} from 'react';
import axios from 'axios';


const Messages = ({ navigation }) => {
//   const [count, setCount] = useState(0);
//   const [data, setdata] = useState([]);
//   const [city, setcity] = useState("karachi");
//   const onPress = () => setCount(prevCount => prevCount + 1);

//   // useEffect(() => {
//     axios
//     .get(
//       `http://10.0.2.2:4000/products`
//     )
//     .then((response) => {
//      console.log(response.data);
//       setdata(response.data);
      
//     })
//     .catch((err) => {
//       console.log("err", err);
//     });
//     setcity("") 
   
//   }, [])
//  let setCategory = (e) => {
//     console.log(e.target.id)
// }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>

      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
        <Text>data:ad</Text>
      <FlatList
        data={data.data}
        renderItem={({item, index, separators}) => (
          <TouchableOpacity
            key={index}
          
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{backgroundColor: 'white'}}>
              <Text>price {item.price}</Text>
              <Text>description {item.description}</Text>
              <Text>name {item.name}</Text>


            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item._id}
      />
      <Button
        title="Go to Post"
        onPress={() => navigation.navigate('Post')}
      />
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    opacity:0.8
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default Messages;

