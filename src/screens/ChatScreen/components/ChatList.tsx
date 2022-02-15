import React, { useRef } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { ChatListItem } from 'app/screens/ChatScreen/components/ChatListItem';
import { selectors } from 'app/store';
import { defaultTheme } from 'app/theme/default';

export const ChatList: React.FC = () => {
  const flatList = useRef<FlatList | null>(null);
  const messages = useSelector(selectors.getMessages);

  const scrollToEnd = () => flatList.current?.scrollToEnd({ animated: true });

  return (
    <FlatList
      ref={flatList}
      data={messages}
      renderItem={ChatListItem}
      onContentSizeChange={scrollToEnd}
      onLayout={scrollToEnd}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: defaultTheme.whiteLight,
  },
});
