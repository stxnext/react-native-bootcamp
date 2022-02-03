import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

export const uploadFile = async (fileUri: string): Promise<string> => {
  if (fileUri) {
    const reference = storage().ref(fileUri);
    const pathToFile = `${utils.FilePath.CACHES_DIRECTORY}/` + fileUri;
    await reference.putFile(pathToFile);
    return await reference.getDownloadURL();
  } else {
    throw new Error('fileUri is undefined');
  }
};
