import React from 'react';
import { Image } from 'react-native';

import { userAvatar } from 'app/assets';

export interface Props {
  imageURL: string | null | undefined;
  size?: number | undefined;
}

export const userImageSize = 200;

export const UserPhoto: React.FC<Props> = ({ imageURL, size = userImageSize }) => (
  <Image
    source={imageURL ? { uri: imageURL } : userAvatar}
    style={{
      height: size,
      width: size,
      borderRadius: size,
      margin: 20,
    }}
  />
);
