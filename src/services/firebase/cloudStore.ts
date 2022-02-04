import storage from '@react-native-firebase/storage';

export const uploadFile = async (fileUri: string): Promise<string> => {
  if (fileUri) {
    const reference = storage().ref(fileUri);
    await reference.putFile(fileUri);
    return await reference.getDownloadURL();
  } else {
    throw new Error('fileUri is undefined');
  }
};
