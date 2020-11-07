import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

export function configure() {
  return messaging().onMessage(async ({notification}) =>
    displayNotification(notification),
  );
}

export async function displayNotification({title, body}) {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title,
    body,
    android: {
      channelId,
      smallIcon: 'ic_launcher_round',
    },
  });
}
