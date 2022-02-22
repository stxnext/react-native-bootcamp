import ImagePicker from 'react-native-image-crop-picker';

export const openImageLibrary: () => Promise<string> = async () => {
  const image = await ImagePicker.openPicker({
    width: 200,
    height: 200,
    compressImageQuality: 0.8,
    cropping: true,
    cropperCircleOverlay: true,
    multiple: false,
  });

  return image.path;
};
