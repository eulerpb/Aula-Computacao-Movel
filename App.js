import React, { SafeAreaView, View } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Users from './src/screens/Users';
import Manage from './src/screens/Manage';
import Estoque from './src/screens/Estoque';
import TelaTeste from './src/components/ScrollButton'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavBar = () => {
  const isFocused = useIsFocused();

  return (
    <Tab.Navigator tabBarOptions={{activeBackgroundColor:'#040834', 
      inactiveBackgroundColor:'#040834',
      activeTintColor: isFocused ? '#FCA311' : '#000',
      inactiveTintColor: '#E5E5E5'}}> 
      
      <Tab.Screen name="Pagina inicial" component={Home} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <View>
          <Ionicons name='home' color={color}size={20} />
        </View>
      )}}/>

      <Tab.Screen name="Usuários" component={Users} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <View>
          <Ionicons name='people' color={color} size={25} />
        </View>
      )}} />

      <Tab.Screen name="My Reads" component={TelaTeste} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <View>
          <Ionicons name='home' color={color} size={20} />
        </View>
      )}}/>

      <Tab.Screen name="Estoque" component={Estoque} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <View>
          <Ionicons name='clipboard' color={color} size={25} />
        </View>
      )}}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          {/*<Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Sign Up" component={SignUp}/>*/}
          <Stack.Screen name="Home" component={NavBar}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
