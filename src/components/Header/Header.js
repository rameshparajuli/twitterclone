import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Appbar, Avatar, theme} from 'react-native-paper';
import {Icon, Colors} from '../../constants';

const Header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: Colors.defaultBlue}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
          color={theme.colors.primary}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image
            size={40}
            source={{
              uri:
                'https://lh3.googleusercontent.com/a-/AOh14Gjz0T56h5gRYcQ0P5td8gGjtjexEQTqh8gomxe9XQ',
            }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={previous ? title : <Icon name="twitter" size={40} />}
      />
    </Appbar.Header>
  );
};

export default Header;
