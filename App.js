import React from 'react';
import {
  View,
  SafeAreaView, // To make sure we don't display anything on the notch of the phone
  StyleSheet,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen  from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import AboutScreen from './screens/AboutScreen';
import BrowseScreen from './screens/BrowseScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Create" component={CreateScreen} 
          options={{
            title: 'Create Product',
            tabBarLabel: 'Create',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Browse" component={BrowseScreen} 
          options={{
            tabBarLabel: 'Browse',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="file-table" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="About" component={AboutScreen} 
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-box" color={color} size={size} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;
