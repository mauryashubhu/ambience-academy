import React, { useEffect, useState, useContext, useCallback } from 'react';
import { AsyncStorage, View, Text, Image, SafeAreaView, Button, TextInput, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';
import { AuthContext } from './context'
import DefaultPreference from 'react-native-default-preference';
import NetInfo from "@react-native-community/netinfo";



const LoginScreen = ({ navigation }) => {
   let [userEmail, setUserEmail] = useState('');
   let [userPassword, setUserPassword] = useState('');
   const [netCheck, setNetCheck] = useState(false);


   const { signIn } = useContext(AuthContext)

   useEffect(() => {
      getData();
      // return () => {
      //To get the network state once
      NetInfo.fetch().then(state => {
         // console.log(
         //    'Connection 1: ' +
         //    state.type +
         //    ', Is connected1?: ' +
         //    state.isConnected);
         setNetCheck(state.isConnected);
      });

      // //Subscribe to network state updates
      // const unsubscribe = NetInfo.addEventListener(state => {
      //    console.log(
      //       'Connection type: ' +
      //       state.type +
      //       ', Is connected?: ' +
      //       state.isConnected);
      // });

      //To Unsubscribe the network state update
      // unsubscribe();
      // }
   }, [NetInfo])


   const handleSubmitPress = () => {
      // alert(netCheck ? 'internet connected' : 'internet not connected')
      return (
         netCheck ? isONline() : isOFFline()
      )

   }



   const isOFFline = () => {
      alert('offline')

   }

   const isONline = () => {
      console.log('is net connect', netCheck)
      // setErrortext('');
      if (!userEmail && !userPassword) {
         alert('Please fill details');
      }
      // else {
      //    fetch('https://2b55d4d595ef.ngrok.io/login', {
      //       method: 'POST',
      //       headers: {
      //          Accept: 'application/json',
      //          'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify({
      //          username: "finally ho hi gya",
      //          password: "password",
      //          // title: 'foo',
      //          // body: 'bar',
      //          // userId: 1
      //       })
      //    })
      //       .then(response => response.json())
      //       .then(json => {
      //          console.log(json)
      //          if (json.status === 400) {
      //             console.log('server error')
      //          }
      //          else if (json.status === 200) {
      //             console.log('login data mil gya')
      //             if (userEmail === json.data.email && userPassword === json.data.password) {
      //                signIn();
      //             } else {
      //                console.log('login credentials not matched')
      //             }
      //          } else {
      // console.log('please register again')
      //          }
      //       })
      //       .catch((error) => {
      //          console.error("error hai", error);
      //       })
      // }
      else { getData(userEmail) }
   }

   const  getData = (userEmail) => {
      console.log('login details fetching from default performance1')
      try {
         DefaultPreference.getMultiple(['email', 'password']).then(function (value) {
            console.log('getting defaulrprefrences from login', value)
            if (value[0] != null) {
               //  const {value} = value[0];
               console.log('getting defaulrprefrences from getdata', value)
               signIn(value)
            } 
            if(value[0] == null && userEmail ) {
               alert('do registeration first')
            }
         });
      }
      catch (err) {
         alert('please do registeration first', err)
      }
   }

   // function saveData() {
   //    if (!userEmail && !userPassword) {
   //       alert('Please fill details');
   //    }
   //    else try {
   //       DefaultPreference.setMultiple({
   //          //   'useId': userPhone,
   //          //   'phone': userPhone,
   //          'email': userEmail,
   //          'password': userPassword
   //       }).then(function () {
   //          console.log('done')
   //       });
   //       signIn()
   //    }
   //    catch (err) {
   //       alert(err)
   //    }
   // }

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
               {/* <Text>online status: {isLoggedIn ? 'true' : 'false'}</Text> */}
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
