import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../../constants/Icon';
const HomePage = () => {
  return (
    <View>
      <Text>This is Home Page</Text>
      <Icon name={'add-circle-outline'} size={35} color={'red'} />
    </View>
  );
};

export default HomePage;
