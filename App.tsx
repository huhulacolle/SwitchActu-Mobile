import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Article from './components/Article';
import Home from './components/Home';

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
