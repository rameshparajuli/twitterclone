import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Portal, FAB} from 'react-native-paper';
import {Messages, Notifications, Feeds} from '../../screens';
import {useIsFocused} from '@react-navigation/native';
import {Colors} from '../../constants';
const Tab = createMaterialBottomTabNavigator();

const BottomTabs = (props) => {
  const isFocused = useIsFocused();

  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Feed';

  let icon = 'feather';

  switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  }
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        shifting={true}
        activeColor={Colors.defaultBlue}
        inactiveColor={Colors.defaultBlack}
        barStyle={{backgroundColor: 'transparent'}}>
        <Tab.Screen
          name="Home"
          component={Feeds}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: 'bell-outline',
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarIcon: 'message-text-outline',
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={{
            position: 'absolute',
            bottom: 100,
            right: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          color={Colors.defaultWhite}
        />
      </Portal>
    </React.Fragment>
  );
};

export default BottomTabs;
