import React, { useEffect, useState } from 'react';
import { AsyncStorage, View, Text, Image, SafeAreaView, Button, TextInput, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
   let [userEmail, setUserEmail] = useState('');
   let [userPassword, setUserPassword] = useState('');
   let [loading, setLoading] = useState(false);
   let [errortext, setErrortext] = useState('');
   let [isLoggedIn, setIsLoggeIn] = useState('');
   let [data, setData] = useState([]);

   const handleSubmitPress = () => {
      // setErrortext('');
      // if (!userEmail && !userPassword) {
      //    alert('Please fill Email');
      // }
      // else {
         fetch('https://4072722c92e8.ngrok.io/login', {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               username: "sabkhuch kalyan",
               // message: "shi se coding kro",
               // title: 'foo',
               // body: 'bar',
               // userId: 1
            })
         })
         .then(response => response.json())
         .then(json => console.log("json dekho agya",json)) 
         .catch((error) => {
            console.error("error hai", error);
         })


      // }

   }

   return (
      <View style={styles.container}>
         <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <Image style={{
               width: 180, height: 180,
               resizeMode: "contain",
               alignItems: "center",
            }} source={require('../images/ambience.jpg')} />
         </View>
         <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
            <View style={styles.inputView}>
               <TextInput
                  style={styles.inputText}
                  onChangeText={UserEmail => setUserEmail(UserEmail)}
                  placeholder="Enter Email"
                  placeholderTextColor="#003f5c"
                  autoCapitalize="none"
                  keyboardType="email-address"
               />
            </View>
            <View style={styles.inputView}>
               <TextInput
                  style={styles.inputText}
                  onChangeText={UserPassword => setUserPassword(UserPassword)}
                  placeholder="Enter Password"
                  placeholderTextColor="#003f5c"
                  secureTextEntry={true}
               />
            </View>
            <TouchableOpacity
               style={styles.loginBtn}
               onPress={handleSubmitPress}>
               <Text style={{ fontSize: 20, color: 'white' }}>LOGIN</Text>
               <Text>online status: {isLoggedIn ? 'true' : 'false'}</Text>
            </TouchableOpacity>
            <Text
               onPress={() => navigation.navigate('Register')}>
               New Here ? Register
            </Text>
         </View>

      </View>
   );
};


export default LoginScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'space-around',
      // alignItems: 'center',
      backgroundColor: '#fff'
   },
   inputView: {
      width: "80%",
      backgroundColor: "#465881",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20
   },
   inputText: {
      height: 50,
      color: "white"
   },
   loginBtn: {
      width: "80%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10
   },


});
