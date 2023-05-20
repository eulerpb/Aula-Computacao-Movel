import {SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import SignUp from './src/screens/Cadastro';
import Home from './src/screens/Home';
import Users from './src/screens/Users';
import Manage from './src/screens/Manage';
import Estoque from './src/screens/Estoque';


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen name="Manage" component={Manage} />
          <Stack.Screen name="Estoque" component={Estoque} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
