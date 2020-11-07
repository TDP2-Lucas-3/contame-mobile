import {useEffect} from 'react';
import notifee, {EventType} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const useHandleNotification = (handler) => {
  useEffect(() => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      handler(remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          handler(remoteMessage);
        }
      });

    return notifee.onForegroundEvent(({type, detail}) => {
      if (type === EventType.PRESS) {
        handler(detail.notification);
      }
    });
  }, [handler]);
};

export default useHandleNotification;
