import React from 'react';
import { View } from 'react-native';

import * as Types from 'app/types';

export type Props = Types.RootStackScreenBottomTabProps<Types.Route.Chat>;

export const ChatScreen: React.FC<Props> = () => {
  return <View />;
};
