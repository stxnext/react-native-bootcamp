import React, { useCallback, useRef } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { MessageListItem } from 'app/screens/ChatScreen/components';
import { selectors } from 'app/store';
import { theme } from 'app/theme';
import * as Types from 'app/types';

export const MessageList: React.FC = () => {
  const flatList = useRef<FlatList | null>(null);
  const messages = useSelector(selectors.getMessages);

  const scrollToEnd = () => flatList.current?.scrollToEnd({ animated: true });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Types.Message>) => <MessageListItem message={item} />,
    [],
  );

  return (
    <FlatList
      ref={flatList}
      data={messages}
      renderItem={renderItem}
      onContentSizeChange={scrollToEnd}
      onLayout={scrollToEnd}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: theme.whiteLight,
  },
});
