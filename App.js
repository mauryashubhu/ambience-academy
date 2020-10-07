import React, { useState, useEffect, useMemo, createContext, useCallback } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { NavigationContainer, createSwitchNavigator } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DefaultPreference from 'react-native-default-preference';

import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'

import HomeScreen from './Screens/home/HomeScreen'
import ProfileScreen from './Screens/home/ProfileScreen'
import SettingsScreen from './Screens/home/SettingsScreen'
import TopicScreen from './Screens/components/Topics'
import pdfViewScreen from './Screens/components/pdfview'
import videoScreen from './Screens/components/videoScreen'

import { AuthContext } from './Screens/context'
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });



// const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerScreen = ({navigation, route }) => (
  <Drawer.Navigator initialRouteName={'Home'}>
    {console.log('app params', route)}
    <Drawer.Screen name="Home" component={HomeScreen} initialParams={route} />

    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="settings" component={SettingsScreen} />
  </Drawer.Navigator>
);




export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // getData();
    db.transaction(function (txn) {
      txn.executeSql(
         "SELECT name FROM sqlite_master WHERE type='table' AND name='ambience'",
         [],
         function (tx, res) {
            console.log('item in table:', res.rows.length);
            if (res.rows.length == 0) {
               txn.executeSql('DROP TABLE IF EXISTS ambience', []);
               txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS ambience(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_email VARCHAR(255), user_password VARCHAR(20))',
                  []
               );
            } else {console.log('database entry ' , res.rows.item(0))}
         }
      );
   });


    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  }, [])

  function getData() {
    try {
      DefaultPreference.getMultiple(['email', 'password']).then(function (value) {
        if (value[0] != null) {
          setIsSignedIn(value[0])
          // setIsdata(value[0])
          console.log('getting defaulrprefrences from getdata', value[0])
        } 
      });
    }
    catch (err) {
      alert(err)
    }
  }

  const authcontext = useMemo(() => {
    return {
      signIn: (value) => {
        console.log('signIN me call aayigyi')
        // getData();
        setIsSignedIn(value)
        setIsLoading(false);
        // setUserToken("asdf");
      },
      signUp: (value) => {
        console.log('signup me call aayigyi')
        getData();
        // setIsSignedIn(value)
        setIsLoading(false);
      },
      signOut: () => {
        DefaultPreference.clearAll().then(function () {
          console.log('default pref kahaali kr diya')
        })
        console.log('log out me call agyi...')
        setIsSignedIn(false)
        setIsLoading(false);
      }
    };
  });

  if (isLoading) {
    return <View style={styles.container}>
      <Image style={{
        width: 250, height: 250,
        resizeMode: "contain",
        alignItems: "center",
      }} source={require('./images/ambience.jpg')} />
      <Text style={styles.text}>AMBIENCE   ACADEMY</Text>
    </View>
  } else {
    return (
      <AuthContext.Provider value={authcontext}>
        <NavigationContainer>
          <Stack.Navigator headerMode={'none'}>
            {(!isSignedIn) ? (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />

              </>
            ) : (
                <>
                  <Stack.Screen name="Home" component={DrawerScreen} 
                  // initialParams={{ data: isdata }} 
                  />
                  <Stack.Screen name="topic" component={TopicScreen} />
                  <Stack.Screen name="pdfview" component={pdfViewScreen} />
                  <Stack.Screen name="videoscreen" component={videoScreen} />
                </>
              )
            }
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'

  },
  text: {
    fontSize: 20,
    marginTop: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'verdana',
    color: 'red',
    textShadowColor: 'grey',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,

  }
});