import RNFetchBlob from 'react-native-fetch-blob';

export const photoToBase64 = async (photo) => {
  const blob = await RNFetchBlob.fetch('GET', photo);
  return blob.base64();
};
