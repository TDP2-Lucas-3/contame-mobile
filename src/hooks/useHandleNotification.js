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

    const event = ({type, detail}) => {
      if (type === EventType.PRESS) {
        handler(detail.notification);
      }
    };
    notifee.onForegroundEvent(event);
    notifee.onBackgroundEvent(async (x) => event(x));
  }, [handler]);
};

export default useHandleNotification;
