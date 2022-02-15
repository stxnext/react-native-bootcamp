import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { userAvatar } from 'app/assets';

export interface Props {
  imageURL: string | null | undefined;
  size?: number | undefined;
}

export const userImageSize = 200;

export const UserPhoto: React.FC<Props> = ({ imageURL, size }) => (
  <Image source={imageURL ? { uri: imageURL } : userAvatar} style={styles(size).userImage} />
);

const styles = (size: number | undefined) =>
  StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    userImage: {
      height: size || userImageSize,
      width: size || userImageSize,
      borderRadius: size || userImageSize,
      margin: 20,
    },
  });
