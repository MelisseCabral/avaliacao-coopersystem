import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Investimentos from './src/screens/Investimentos';
import ResgateInvest from './src/screens/Resgate';
import { theme } from './src/styles/theme';

const Stack = createStackNavigator();
const optionsHeader = {
  headerStyle: {
    backgroundColor: theme.colors.primary.one,
    borderBottomWidth:5,
    borderBottomColor: theme.colors.secondary.one,
    
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',

  }
};

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Investimentos" 
            component={Investimentos} 
            options={optionsHeader}/>
          <Stack.Screen 
            name="Resgate" 
            component={ResgateInvest}
            options={optionsHeader} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
