import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { UserPhoto } from 'app/components';
import * as Types from 'app/types';

interface Props {
  item: Types.FirebaseDocument;
}

export const ChatListItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <UserPhoto imageURL={item.photoUrl} size={75} />
      <View>
        <Text>User: {item.email}</Text>
        <Text>Message: {item.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
