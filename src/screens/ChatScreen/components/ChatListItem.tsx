import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { UserPhoto } from 'app/components';
import { FirebaseDocument } from 'app/types/firebase';

interface Props {
  item: FirebaseDocument;
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    height: 150,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

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
