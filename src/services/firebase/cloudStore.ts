import storage from '@react-native-firebase/storage';

export const uploadFile = async (fileUri: string): Promise<string> => {
  const reference = storage().ref(fileUri);
  await reference.putFile(fileUri);
  return reference.getDownloadURL();
};
