import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

const options: CameraOptions = {
  mediaType: 'photo',
};

export const openCamera: () => Promise<string | undefined> = async () => {
  const result = await launchCamera(options);
  return result.assets?.shift()?.fileName;
};

export const openImageLibrary: () => Promise<string | undefined> = async () => {
  const result = await launchImageLibrary(options);
  return result.assets?.shift()?.fileName;
};
