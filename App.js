// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Estudiantes from './src/screens/Estudiantes';
import Comidas from './src/screens/Comidas';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Estudiantes') {
                iconName = 'school';
              } else if (route.name === 'Comidas') {
                iconName = 'food';
              }

              return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Estudiantes" component={Estudiantes} options={{ headerShown: false }}/>
          <Tab.Screen name="Comidas" component={Comidas} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
