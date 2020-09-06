import React, { useState, useEffect, useMemo, createContext } from 'react'
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

import { AuthContext } from './Screens/context'




// const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerScreen = ({ navigation, route, isdata }) => (
  <Drawer.Navigator initialRouteName={'Home'}>
    <Drawer.Screen name="Home" component={HomeScreen} initialParams={route} />

    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="settings" component={SettingsScreen} />
  </Drawer.Navigator>
);




export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState('');
  const [isdata, setIsdata] = useState({});
  const [count, setCount] = useState(5);

  useEffect(() => {
    getData()
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  }, [])

  const getData = () => {
    try {
      DefaultPreference.get('password').then(function (value) {
        if (value != null) {
          setIsSignedIn(value)
          setIsdata(value)
          console.log('getting defaulrprefrences from getdata', value)
        }
      });
    }
    catch (err) {
      alert(err)
    }
  }

  const authcontext = useMemo(() => {
    return {
      // signIn: () => {
      //   setIsLoading(false);
      //   setUserToken("asdf");
      // },
      signUp: () => {
        console.log('khuchnhi')
        getData();
        setIsLoading(false);
      },
      signOut: () => {
        DefaultPreference.clearAll().then(function () {
          console.log('')
        })
        console.log()
        setIsSignedIn('')
        setIsLoading(false);
      }
    };
  }, []);

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
                  <Stack.Screen name="Home" component={DrawerScreen} initialParams={{ data: isdata }} />
                  {/* <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} /> */}
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