import React from 'react';
import useAuthMutation from 'src/Services/AuthService/Hooks/useAuthMutation';
import IconButton from 'src/Components/Shared/IconButton/IconButton';
import Paper from 'src/Components/Shared/Paper/Paper';
import Typography from 'src/Components/Shared/Typography/Typography';
import {Alert} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function HomeHeader(props: StackHeaderProps) {
  const {scene, navigation} = props;
  const insets = useSafeAreaInsets();
  const {options} = scene.descriptor;
  const title = options?.headerTitle;
  const authMutation = useAuthMutation();
  const {logout} = authMutation;

  return (
    <Paper elevation={10} variant={'adaptivePrimary'}>
      <Paper h={insets.top} />
      <Paper ph={15} row h={55}>
        <Paper middle flex={1}>
          <IconButton
            name={'plus'}
            onPress={() => navigation.navigate('User')}
          />
        </Paper>
        <Paper flex={8} middle center>
          <Typography fontSize={20} variant={'white'}>
            {title}
          </Typography>
        </Paper>
        <Paper middle flex={1}>
          <IconButton
            name={'logout'}
            onPress={() =>
              Alert.alert('Logout', 'Are you sure?', [
                {
                  text: 'Yes',
                  style: 'destructive',
                  onPress: logout,
                },
                {
                  text: 'No',
                  style: 'cancel',
                },
              ])
            }
          />
        </Paper>
      </Paper>
    </Paper>
  );
}

export default HomeHeader;
