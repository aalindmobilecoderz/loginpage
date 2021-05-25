import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import useAuthMutation from 'src/Services/AuthService/Hooks/useAuthMutation';
import Body from 'src/Components/Shared/Body/Body';
import Click from 'src/Components/Shared/Click/Click';
import Container from 'src/Components/Shared/Container/Container';
import FormInput from 'src/Components/Shared/FormInput/FormInput';
import Paper from 'src/Components/Shared/Paper/Paper';
import {useNavigation} from '@react-navigation/core';
import {Icon} from 'react-native-elements';
import {TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

function LoginScreen() {
  const [passwordSecured, setPasswordSecured] = useState(true);
  const authMutation = useAuthMutation();
  const {loading, login} = authMutation;
  const {control, formState, getValues} = useForm({
    defaultValues: {
      email: 'eve.holt@reqres.in',
      password: '12345678',
    },
    mode: 'onChange',
  });
  const navigation = useNavigation();

  return (
    <Container statusBarBackgroundColor={'red'}>
      <Body>
        <Paper p={45} w100 h100 middle flex={1}>
        <Paper style={styles.logoView}>
            <Image
              source={require('src/Assets/images/app_logo.png')}
              style={{width: 130, height: 100}}
            />
          </Paper>
          <Paper h={30} />
          <Paper w100 h={60} bg={'white'} elevation={20} br={30} ph={10} flex={0} row={'row'} center >
            <Icon
              color="red"
              name="mobile"
              type="font-awesome"
              size={50}
              style={{paddingLeft: 10}}
            />
            <TextInput style={styles.inputText} placeholder={'Mobile Number'}/>
          </Paper>
          <Paper h={15} />
          <Paper w100 h={60} bg={'white'} elevation={20} br={30} ph={10} flex={0} row={'row'} center >
            <Icon
              color="red"
              name="lock"
              type="font-awesome"
              size={35}
              style={{paddingLeft: 10}}
            />
            <TextInput
              style={styles.inputText}
              placeholder={'Password'}
              secureTextEntry={passwordSecured}
              textContentType="password"
            />
            <TouchableOpacity
              style={{padding: 4}}
              onPress={() => {
                setPasswordSecured(!passwordSecured);
              }}>
              <Icon name="eye" color="red" type="font-awesome-5" size={20} />
            </TouchableOpacity>
          </Paper>
          <Paper h={30} />
          <Click
            middle
            center
            variant={'onSurface'}
            onPress={() => {
              login(getValues());
            }}
            loading={loading}
            bg={'red'}
            br={30}
            h={60}>
            Login
          </Click>
          <Paper h={30} />
        </Paper>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  inputText: {
    flex: 1,
    paddingHorizontal: 12,
    paddingLeft: 0,
    textAlign: 'center',
  },
  logoView: {
    alignSelf: 'center',
    paddingBottom: 20,
  },
});
export default LoginScreen;
