import React, {useState} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Menu} from 'react-native-paper';
import Share from 'react-native-share';

const SocialShare = (props) => {
  const [visible, setVisible] = useState(false);
  const shareIcon = (
    <Icon
      name="share-square"
      type="font-awesome-5"
      color="white"
      onPress={() => setVisible(!visible)}
    />
  );

  return (
    <View style={props.containerStyle}>
      <Menu
        anchor={shareIcon}
        visible={visible}
        onDismiss={() => setVisible(false)}>
        <Menu.Item
          title="Instagram"
          icon="instagram"
          onPress={() => props.onShareTo(Share.Social.INSTAGRAM)}
        />
        <Menu.Item
          title="Facebook"
          icon="facebook"
          onPress={() => props.onShareTo(Share.Social.FACEBOOK)}
        />
      </Menu>
    </View>
  );
};

export default SocialShare;
