import React from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({name, ...props}) => (
  <Icon
    // name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
    {...props}
  />
);
