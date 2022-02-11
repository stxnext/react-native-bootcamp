import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { userAvatar } from 'app/assets';

export interface Props {
  imageURL: string | null | undefined;
  size?: number | undefined;
}

export const userImgSize = 200;

const styles = (size: number | undefined) =>
  StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    userImg: {
      height: size ? size : userImgSize,
      width: size ? size : userImgSize,
      borderRadius: size ? size : userImgSize,
      margin: 20,
    },
  });

export const UserPhoto: React.FC<Props> = ({ imageURL, size }) => (
  <Image source={imageURL ? { uri: imageURL } : userAvatar} style={styles(size).userImg} />
);
