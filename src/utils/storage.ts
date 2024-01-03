import * as SecureStore from 'expo-secure-store';

export const setToken = async (token: string) => {
  await SecureStore.setItemAsync('access_token', token);
};

export const removeToken = async () => {
  await SecureStore.deleteItemAsync('access_token');
};

export const getToken = (callback: (token: string | null) => void): void => {
    SecureStore.getItemAsync('access_token')
      .then((token) => {
        callback(token);
      })
      .catch((error) => {
        console.error('Error retrieving token:', error);
        callback(null);
      });
  };




