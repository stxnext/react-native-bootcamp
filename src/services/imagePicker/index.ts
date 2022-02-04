import ImagePicker from 'react-native-image-crop-picker';

import { userImgSize } from 'app/screens/UserProfileScreen/components/UserPhotoPicture';

export const openCamera: () => Promise<string | undefined> = async () => {
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
