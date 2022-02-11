import ImagePicker from 'react-native-image-crop-picker';

import { userImgSize } from 'app/components/UserPhoto';

export const openImageLibrary: () => Promise<string> = async () => {
  const image = await ImagePicker.openPicker({
    width: userImgSize,
    height: userImgSize,
    compressImageQuality: 0.8,
    cropping: true,
    cropperCircleOverlay: true,
    multiple: false,
  });

  return image.path;
};
