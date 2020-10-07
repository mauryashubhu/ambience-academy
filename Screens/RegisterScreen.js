import React, { useState, useContext,useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import DefaultPreference from 'react-native-default-preference';
import { AuthContext } from './context'
import NetInfo from "@react-native-community/netinfo";
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const RegisterScreen = ({ navigation }) => {
   const [userName, setUserName] = useState('');
   const [userPhone, setUserPhone] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userPassword, setUserPassword] = useState('');
   const [netCheck, setNetCheck] = useState(false);


   const { signUp } = useContext(AuthContext)

   useEffect(() => {

      NetInfo.fetch().then(state => {
         // console.log(
         //    'Connection 1: ' +
         //    state.type +
         //    ', Is connected1?: ' +
         //    state.isConnected);
         setNetCheck(state.isConnected);
      });

   }, []);


   const handleSubmitPress = () => {
      // alert(netCheck ? 'internet connected' : 'internet not connected')
      return (
         netCheck ? isOFFline() : isONline()
      )

   }

   const isOFFline = () => {
      console.log('offline me net aa rha hai')
      db.transaction(function (tx) {
         tx.executeSql(
            'INSERT INTO ambience (user_name, user_contact, user_email, user_password) VALUES (?,?,?,?)',
            [userName, userPhone, userEmail, userPassword],
            (tx, results) => {
               console.log('Results stroed in tables row', results.rowsAffected);
               if (results.rowsAffected > 0) {
                  Alert.alert(
                     'Success',
                     'You are Registered Successfully',
                     [
                        {
                           text: 'Ok',
                           onPress: () => saveData()
                        }
                     ],
                     { cancelable: false }
                  )

               } else alert('Registration Failed');
            }
         );
      });
   }

   const isONline = () => {
      console.log('userpassword', userPassword)
      if (!userEmail && !userPassword && !userPhone && !userName) {
         alert('Please fill properly');
      }
      // else {
      //     fetch('https://2b55d4d595ef.ngrok.io/form', {
      //         method: 'POST',
      //         headers: {
      //             Accept: 'application/json',
      //             'Content-Type': 'application/json'
      //         },
      //         body: JSON.stringify({
      //             username: userName,
      //             userphone: userPhone,
      //             useremail: userEmail,
      //             userpassword: userPassword,
      //         })
      //     })
      //         .then(response => response.json())
      //         .then(json => {
      //             console.log(json);
      //             if(json.status === "200"){
      //                 console.log("SAVEDATA KOO CALL JAANIHAI?")
      //                 // const data =json.data;
      //                 navigation.navigate('Login')
      //             }

      //         })
      //         .catch((error) => {
      //             console.error("error hai", error);
      //             alert(error)
      //             // alert('mail already exist')
      //         })
      // }
      saveData();
   }

   function saveData() {
      try {
         DefaultPreference.setMultiple({
            'useId': userPhone,
            'phone': userPhone,
            'email': userEmail,
            'password': userPassword
         }).then(function () {
            console.log('default prefrences me done')
            signUp();
            // navigation.navigate('Login')
         });
      }
      catch (err) {
         alert(err)
      }
   }

   return (
      <View style={styles.container}>
         <Text style={{ fontSize: 20, marginBottom: 40 }}>RegisterScreen</Text>
         <View style={styles.inputView}>
            <TextInput
               style={styles.inputText}
               value={userName}
               onChangeText={userName => setUserName(userName)}
               placeholder="Enter Name"
               placeholderTextColor="gray"
               autoCapitalize="none"
               keyboardType="email-address"
            />
         </View>
         <View style={styles.inputView}>
            <TextInput
               style={styles.inputText}
               value={userPhone}
               onChangeText={userPhone => setUserPhone(userPhone)}
               placeholder="Enter Phone"
               placeholderTextColor="gray"
            />
         </View>
         <View style={styles.inputView}>
            <TextInput
               style={styles.inputText}
               value={userEmail}
               onChangeText={UserEmail => setUserEmail(UserEmail)}
               placeholder="Enter Email"
               placeholderTextColor="gray"
               autoCapitalize="none"
               keyboardType="email-address"
            />
         </View>
         <View style={styles.inputView}>
            <TextInput
               style={styles.inputText}
               value={userPassword}
               onChangeText={UserPassword => setUserPassword(UserPassword)}
               placeholder="Enter Password"
               placeholderTextColor="gray"
               secureTextEntry={true}
            />
         </View>
         <TouchableOpacity onPress={() => handleSubmitPress()} style={styles.loginBtn}>
            <Text style={{ color: 'white' }}>SignUP</Text>
         </TouchableOpacity>
      </View>
   )


}

export default RegisterScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
      marginTop: 30,
   },
});