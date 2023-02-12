import React from 'react'
import { StyleSheet, SafeAreaView, Image, TextInput, Text, FlatList, TouchableOpacity, View, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// import { MaterialCommunityIcons } from '@expo/vector-icons'; 
function Profile() {
    // const myIcon =;
    // FaChevronRight
    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={styles.halfFirst}>
                    <Text style={{ fontSize: 40, color: "white" }}>Profile</Text>
                </View>
                <View style={styles.halfSecond}>

                </View>
                <View style={styles.profile}>
                    <View style={styles.image}>
                        <Image
                            style={styles.userImage}
                            source={
                                { uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        />
                        <View style={styles.userName}>
                            <Text>Muhammad Haroon</Text>
                        </View>
                        <View style={styles.userEmail}>
                            <Text>test@gmail.com</Text>
                        </View>

                    </View>
                    <View style={{}}>

                    <View style={styles.pageGroup}>
                        <Text style={styles.page}>Friends</Text>
                        <FontAwesome5 name="greater-than" size={15} color="#9BADC3" />
                    </View>
                    <View style={styles.pageGroup}>
                        <Text style={styles.page}>Info</Text>
                        <FontAwesome5 name="greater-than" size={15} color="#9BADC3" />
                    </View> 
                    <View style={styles.pageGroup}>
                        <Text style={styles.page}>My Projects</Text>
                        <FontAwesome5 name="greater-than" size={15} color="#9BADC3" />
                    </View>
                     <View style={styles.pageGroup}>
                        <Text style={styles.page}>Privacy</Text>
                        <FontAwesome5 name="greater-than" size={15} color="#9BADC3" />
                    </View>
                    </View>



                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FBFDFB',
        height: '100%',

    },
    halfFirst: {
        backgroundColor: '#2B60AC',
        height: '40%',
        borderWidth: 2, 
        borderColor: "white",
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    }, userImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2, borderColor: "white"
    },

    profile: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderColor: "grey",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 35,
        width: "90%",
        height: "60%",
        position: "relative",
        top: -40,
    },
    halfSecond: {

        // height: '60%',
    },
    image: {
        alignItems: "center",
        position: "absolute",
        top: -40,
    }, userName: { color: "#EF5388" }
    , pageGroup: {
        paddingHorizontal: 10,
        width: "70%",
        backgroundColor:"red",
        // alignItems: "flex-start",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
    }, page: {
        // padding: 20,
        fontSize: 15,
        color: "#9BADC3",

    },
});
export default Profile