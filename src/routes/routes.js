import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Users from '../screens/Users';
import Estoque from '../screens/Estoque';
import ItemManage from '../screens/ItemManage';
import ItemCreate from '../screens/ItemCreate';
import NewUser from '../screens/NewUser';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavBar = () => {
  const isFocused = useIsFocused();

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor:'#FCA311',
    tabBarInactiveTintColor:'#E5E5E5',
    tabBarActiveBackgroundColor:'#040834',
    tabBarInactiveBackgroundColor:'#040834'}}> 
      
      <Tab.Screen name="Pagina inicial" component={Home} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <View>
          <Ionicons name='home' color={color}size={20} />
        </View>
      )}}/>

      <Tab.Screen name="Produtos" component={ItemManage} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <View>
          <Ionicons name='home' color={color} size={20} />
        </View>
      )}}/>

      <Tab.Screen name="Usuários" component={Users} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <View>
          <Ionicons name='people' color={color} size={25} />
        </View>
      )}} />

      <Tab.Screen name="Estoque" component={Estoque} options={{ headerShown: false, tabBarIcon: ({color}) => (
        <View>
          <Ionicons name='clipboard' color={color} size={25} />
        </View>
      )}}/>
    </Tab.Navigator>
  )
}

const AppNavigator = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Sign Up" component={SignUp}/>
          <Stack.Screen name="Home" component={NavBar}/>
          <Stack.Screen name="Criar Produto" component={ItemCreate}/>
          <Stack.Screen name="Novo Usuário" component={NewUser}/>

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default AppNavigator;