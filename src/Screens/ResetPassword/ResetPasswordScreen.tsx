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
function ResetPasswordScreen() {
  const authMutation = useAuthMutation();
  const {loading, login} = authMutation;
  const navigation = useNavigation();

  return (
    <Container statusBarBackgroundColor={'red'}>
      <Body>
        
      </Body>
    </Container>
  );
}
export default ResetPasswordScreen;