import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from '../screens/Home';
import {NewPost} from '../screens/NewPost';

import HomeSvg from '../assets/menu/Home.svg'
import AddPost from '../assets/menu/AddPost.svg'
import ListSvg from '../assets/menu/List.svg'

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    
      <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:{
                    height: 72,
                    backgroundColor: '#ffff',
                    position: 'absolute',
                    marginLeft: 24,
                    marginRight: 24,
                    
                }

            }}
      >
        <Tab.Screen name="Home" component={Home} 
            options = {{
                tabBarIcon: ({focused }) =>
                (
                   <HomeSvg  strokeWidth={2.0} stroke={focused ? '#0E1647':'#BABCBF'}/>
                )
            }}
        />
        <Tab.Screen name="NewPost" component={NewPost} 
                 options = {{
                    tabBarIcon: ({focused }) =>
                    (
                       <AddPost strokeWidth={2.0} stroke={focused ? '#0E1647':'#BABCBF'}/>
                    )
                }}
        />
      </Tab.Navigator>
  );
}