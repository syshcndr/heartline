import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from './EntryScreen'; // Assuming you move your existing App code here
import GiftScreen from './GiftScreen'; // Your new screen component
import Gift from './Gift'; // Your new screen component
import theme from './theme';
import AccessScreen from './AccessScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTintColor: '#D00000',
        contentStyle: theme.background,
        headerShadowVisible: false
      }}>
        <Stack.Screen name="Access Screen" component={AccessScreen} options={{ headerTitle: '' }} />
        <Stack.Screen name="Heart Gifts" component={EntryScreen} options={{ headerTitle: '' }} />
        <Stack.Screen name="Heart Gifts Products" component={GiftScreen} options={{ headerTitle: '' }} />
        <Stack.Screen name="Gift" component={Gift} options={{ headerTitle: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
