import React, {useMemo} from 'react';
import {Image, StyleSheet} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import useUserQuery from 'src/Services/UserService/Hooks/useUserQuery';
import Container from 'src/Components/Shared/Container/Container';
import Paper from 'src/Components/Shared/Paper/Paper';
import Typography from 'src/Components/Shared/Typography/Typography';
import {useThemeValue} from 'src/Recoil/Atoms/themeAtom';

function DetailScreen() {
  const userQuery = useUserQuery();
  const {user, loading} = userQuery;
  const theme = useThemeValue();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        imageStyle: {height: 80, width: 80, borderRadius: 40},
      }),
    [],
  );

  return (
    <Container>
      {loading && (
        <Paper flex={1} middle center>
          <MaterialIndicator color={theme.colors.primary} />
        </Paper>
      )}
      {user && (
        <Paper p={15}>
          <Paper center>
            <Image source={{uri: user.avatar}} style={styles.imageStyle} />
          </Paper>
          <Paper h={50} />
          <Paper b={1}>
            <Paper ph={15} h={50} row>
              <Paper middle flex={1}>
                <Typography>Name</Typography>
              </Paper>
              <Paper row center flex={3}>
                <Typography>{user.name}</Typography>
              </Paper>
            </Paper>
            <Paper b={0.5} />
            <Paper ph={15} h={50} row>
              <Paper middle flex={1}>
                <Typography>Email</Typography>
              </Paper>
              <Paper row center flex={3}>
                <Typography textTransform={'lowercase'}>
                  {user.email}
                </Typography>
              </Paper>
            </Paper>
          </Paper>
          <Paper h={50} />
        </Paper>
      )}
    </Container>
  );
}

export default DetailScreen;
