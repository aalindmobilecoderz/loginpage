import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'src/Screens/Login/LoginScreen';
import RegisterScreen from 'src/Screens/Register/RegisterScreen';
import BackHeader from 'src/Headers/BackHeader/BackHeader';
import BaseHeader from 'src/Headers/BaseHeader/BaseHeader';
import WelcomeScreen from 'src/Screens/Welcome/WelcomeScreen';
import ResetPasswordScreen from 'src/Screens/ResetPassword/ResetPasswordScreen';
const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator headerMode={'float'}>
      <RootStack.Screen
        name={'Welcome'}
        component={WelcomeScreen}
        options={{
          headerShown: false
        }}
      />
      <RootStack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{
          header: (_) => <BaseHeader {..._} />,
          headerTitle: 'Login',
          headerStyle: {
            height: 55,
          },
        }}
      />
      <RootStack.Screen
        name={'Reset'}
        component={ResetPasswordScreen}
        options={{
          header: (_) => <BackHeader {..._} />,
          headerTitle: 'Reset',
          headerStyle: {
            height: 55,
          },
        }}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
