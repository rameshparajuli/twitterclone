import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Details, Feed, Header} from '../../components';
import BottomTabs from '../BottomNav';
const Stack = createStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Feed"
        component={BottomTabs}
        options={{headerTitle: 'Twitter'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerTitle: 'Tweet'}}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;
