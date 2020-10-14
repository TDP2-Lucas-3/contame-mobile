import Geolocation from '@react-native-community/geolocation';
import Permissions from 'react-native-permissions';

function getCurrentLocation(options) {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      resolve,
      ({code, message}) =>
        reject(
          Object.assign(new Error(message), {name: 'PositionError', code}),
        ),
      options,
    );
  });
}

async function getUserLocation() {
  let response = await Permissions.check('location');
  if (response === 'authorized') {
    return await getCurrentLocation();
  }

  try {
    await Permissions.request('location');
    return await getCurrentLocation();
  } catch {
    return null;
  }
}

export {getUserLocation};
