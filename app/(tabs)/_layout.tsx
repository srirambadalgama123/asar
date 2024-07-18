import React, { Key } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '@/components/HomeScreen';
import YesNoScreen from '@/components/YesnoPage';
import QuestionScreen from '@/components/QuestionScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Sports') {
              iconName = focused ? 'football' : 'football-outline';
            } else if (route.name === 'Portfolio') {
              iconName = focused ? 'pie-chart' : 'pie-chart-outline';
            } else if (route.name === 'Wallet') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="Sports" component={HomeScreen} />
        <Tab.Screen name="Portfolio" component={HomeScreen} />
        <Tab.Screen name="Wallet" component={HomeScreen} />
      </Tab.Navigator>
  );
};


//Below code is to see other screens

// const App = () => {
//   return (
//      <QuestionScreen/>
//     <YesNoScreen/>
//   )
// }
export default App;
