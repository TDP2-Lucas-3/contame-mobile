import notifee, {AndroidStyle} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

export function configure() {
  return messaging().onMessage(async ({notification, data}) =>
    displayNotification(notification, data),
  );
}

export async function displayNotification(notif, data) {
  const {title, body} = notif;
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title,
    body,
    importance: 'minimum',
    android: {
      channelId,
      style: {type: AndroidStyle.BIGTEXT, text: body},
      largeIcon: data.photo,
      smallIcon: 'ic_launcher_round',
      pressAction: {
        id: 'default',
      },
    },
    data: {reportId: data.id},
  });
}
