import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DefaultPreference from 'react-native-default-preference';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });


import SignIn from './Screens/SignIn';
import CreateAccount from './Screens/CreateAccount';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Details from './Screens/Details';
import Search from './Screens/Search';
import { Provider } from './Screens/context'

const { width, height } = Dimensions.get('window');





export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [UserToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  });

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 5000)
  // }, []);

  React.useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
          console.log('table create ho gyi hai');
        }
      );
    });
  }, []);

  // if (isLoading) {
  //   return <View style={styles.container}>
  //     <Image style={{
  //       width: 250, height: 250,
  //       resizeMode: "contain",
  //       alignItems: "center",
  //     }} source={require('./images/ambience.jpg')} />
  //     <Text style={styles.text}>AMBIENCE   ACADEMY</Text>
  //   </View>
  // }

  return (
    <Provider value={authContext}>
      {console.log("yha se autcontext bbhej rha hoo", authContext)}
      <NavigationContainer>
        {UserToken ? (
          <Drawer.Navigator>
            <Drawer.Screen name='Home' component={TabScreen} />
            <Drawer.Screen name='Profile' component={ProfileStackScreen} />
          </Drawer.Navigator>
        ) :
          (

            <AuthstackNav.Navigator>
              <AuthstackNav.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  title: "Sign_In",
                  headerTitleStyle: {
                    textAlign: "center",
                    flex: 1
                  },
                }} />
              <AuthstackNav.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{
                  title: "Create Account",
                  headerTitleStyle: {
                    textAlign: "center",
                    flex: 1,
                    marginLeft: -65
                  },
                }} />
            </AuthstackNav.Navigator>
          )}
      </NavigationContainer>
    </Provider>

  );
}

const AuthstackNav = createStackNavigator()
const tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='Home'
      component={Home} />
    <HomeStack.Screen
      name='Details'
      component={Details}
      options={({ route }) => ({
        title: route.params.name
      })} />
  </HomeStack.Navigator>
)

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='Profile' component={Profile} />
    <ProfileStack.Screen name='Search' component={Search} />
  </ProfileStack.Navigator>
)

const TabScreen = () => (
  <tab.Navigator>
    <tab.Screen name="Home" component={HomeStackScreen} options={{}} />
    <tab.Screen name="Profile" component={ProfileStackScreen} />
  </tab.Navigator>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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