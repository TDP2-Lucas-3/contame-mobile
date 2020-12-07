import React, {useState} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Menu} from 'react-native-paper';

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
        <Menu.Item title="Instagram" icon="instagram" />
        <Menu.Item title="Facebook" icon="facebook" />
      </Menu>
    </View>
  );
};

export default SocialShare;
