import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { UserPhoto } from 'app/components';
import * as Types from 'app/types';

interface Props {
  message: Types.Message;
}

export const MessageListItem: React.FC<Props> = ({ message: { photoUrl, email, text } }) => {
  return (
    <View style={styles.listItem}>
      <UserPhoto imageURL={photoUrl} size={75} />
      <View>
        <Text>User: {email}</Text>
        <Text>Message: {text}</Text>
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
