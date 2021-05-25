import {useNavigation} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {Image, StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Container from 'src/Components/Shared/Container/Container';
import Paper from 'src/Components/Shared/Paper/Paper';
import Typography from 'src/Components/Shared/Typography/Typography';
import {FlatList} from 'react-native-bidirectional-infinite-scroll';
import useUsersQuery from 'src/Services/UserService/Hooks/useUsersQuery';
import useAuthMutation from 'src/Services/AuthService/Hooks/useAuthMutation';
import Body from 'src/Components/Shared/Body/Body';
import Click from 'src/Components/Shared/Click/Click';
function WelcomeScreen() {
  const authMutation = useAuthMutation();
  const {loading, login} = authMutation;
  const navigation = useNavigation();

  return (
    <Container statusBarBackgroundColor={'white'}>
      <Body>
        <Paper style={styles.logoView}>
          <Image
            source={require('src/Assets/images/wlogo.png')}
            style={{width: 405, height: 280}}
        />
        </Paper>
        <Paper p={30} />
        <Paper p={50} w100 h100 middle flex={1}>
          <Paper p={100} />
          <Click
            middle
            center
            variant={'onSurface'}
            onPress={() => {
              navigation.navigate('Login');
            }}
            bg={'red'}
            br={30}
            h={60}>
            Login
          </Click>
          <Paper p={10} />
          <Typography style={{alignSelf: 'center'}}>
            Forget Password ?{' '}
            <Typography
              style={{color: 'red'}}
              onPress={() => {
                navigation.navigate('Reset');
              }}>
              {' '}
              Reset
            </Typography>
          </Typography>
        </Paper>
      </Body>
    </Container>
  );
}
const styles = StyleSheet.create({
  logoView: {
    width: '100%',
    height: 150,
    display: 'flex',
    paddingTop: 80,
  },
});
export default WelcomeScreen;