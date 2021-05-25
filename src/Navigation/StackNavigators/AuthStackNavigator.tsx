import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'src/Screens/Home/HomeScreen';
import DetailScreen from 'src/Screens/Detail/DetailScreen';
import UserScreen from 'src/Screens/User/UserScreen';
import BackHeader from 'src/Headers/BackHeader/BackHeader';
import HomeHeader from 'src/Headers/HomeHeader/HomeHeader';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator headerMode={'float'}>
      <AuthStack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          header: (_) => <HomeHeader {..._} />,
          headerTitle: 'Home',
          headerStyle: {
            height: 55,
          },
        }}
      />
      <AuthStack.Screen
        name={'Detail'}
        component={DetailScreen}
        options={{
          header: (_) => <BackHeader {..._} />,
          headerStyle: {
            height: 55,
          },
        }}
      />
      <AuthStack.Screen
        name={'User'}
        component={UserScreen}
        options={{
          header: (_) => <BackHeader {..._} />,
          headerTitle: 'Add User',
          headerStyle: {
            height: 55,
          },
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
