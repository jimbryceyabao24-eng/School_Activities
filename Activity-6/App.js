
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CartProvider } from './context/CartContext';

import ShopTab from './screens/ShopTab';
import CartTab from './screens/CartTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#2563eb',
            tabBarInactiveTintColor: '#64748b',
            tabBarStyle: {
              paddingBottom: 5,
              height: 60,
            },
          }}
        >
          <Tab.Screen
            name="Shop"
            component={ShopTab}
          />

          <Tab.Screen
            name="Cart"
            component={CartTab}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
