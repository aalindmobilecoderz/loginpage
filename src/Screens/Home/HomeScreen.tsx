import {useNavigation} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {Image, StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Container from 'src/Components/Shared/Container/Container';
import Paper from 'src/Components/Shared/Paper/Paper';
import Typography from 'src/Components/Shared/Typography/Typography';
import {FlatList} from 'react-native-bidirectional-infinite-scroll';
import useUsersQuery from 'src/Services/UserService/Hooks/useUsersQuery';

function HomeScreen() {
  const usersQuery = useUsersQuery();
  const {users, fetchPreviousPage, fetchNextPage} = usersQuery;
  const navigation = useNavigation();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        imageStyle: {height: 40, width: 40, borderRadius: 20},
        flatListStyle: {flex: 1},
      }),
    [],
  );

  return (
    <Container>
      {users.length > 0 && (
        <FlatList
          data={users}
          renderItem={({item, index}) => (
            <Ripple
              onPress={() => navigation.navigate('Detail', {id: item.id})}>
              <Paper ph={15} minHeight={80} center row key={index}>
                <Paper middle flex={0}>
                  <Image
                    source={{uri: item.avatar}}
                    style={styles.imageStyle}
                  />
                </Paper>
                <Paper w={15} />
                <Paper flex={1}>
                  <Typography fontSize={14}>{item.name}</Typography>
                  <Typography
                    textTransform={'lowercase'}
                    variant={'placeholder'}>
                    {item.email}
                  </Typography>
                </Paper>
              </Paper>
            </Ripple>
          )}
          activityIndicatorColor={'black'}
          keyExtractor={(item) => `${item?.id}`}
          onStartReached={async () => {
            await fetchPreviousPage();
          }}
          onEndReached={async () => {
            await fetchNextPage();
          }}
          ItemSeparatorComponent={() => <Paper h={1} variant={'divider'} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}

export default HomeScreen;
