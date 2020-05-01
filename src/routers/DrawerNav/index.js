import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import {HomePage} from '../../screens';
import FeedStack from '../StackNav';
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({...props}) => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={FeedStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
