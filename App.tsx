import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Article from './pages/Article';
import Home from './navigations/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name='Article' component={Article} options={{ headerStyle: { backgroundColor: "red" }, headerTintColor: '#fff', }} />
    </Stack.Navigator>
    <StatusBar style="light" />
  </NavigationContainer>

  );
}
