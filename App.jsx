import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  onPress,
  Alert,
} from 'react-native';
import React from 'react';
import Home from './src/pages/Home';
import Detail from './src/pages/detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Mok" component={Home} />
        <Stack.Screen name="Details" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
