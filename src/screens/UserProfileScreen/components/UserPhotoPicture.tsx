import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { userAvatar } from 'app/assets';

export interface Props {
  imageURL: string | null | undefined;
}

export const userImgSize = 200;

const styles = StyleSheet.create({
  userImg: {
    height: userImgSize,
    width: userImgSize,
    borderRadius: userImgSize,
    margin: 20,
  },
});

export const UserPhotoPicture: React.FC<Props> = ({ imageURL }) => (
  <Image source={imageURL ? { uri: imageURL } : userAvatar} style={styles.userImg} />
);
