import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import {NewPost} from '../screens/NewPost';

import HomeSvg from '../assets/menu/Home.svg'
import AddPost from '../assets/menu/AddPost.svg'
import ListSvg from '../assets/menu/List.svg'
import InformationUser from '../screens/InformationUser';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    
      <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle:{
                    height: 72,
                    backgroundColor: '#ffff',
                    position: 'absolute',
                    marginLeft: 24,
                    marginRight: 24,
                    
                }

            }}
      >
        <Tab.Screen name="Home" component={StackApp} 
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

const Stack = createNativeStackNavigator();

function StackApp() {
  return (
   
      <Stack.Navigator screenOptions={{
            headerShown: false,
            
      }}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="InformationUser" component={InformationUser} />
      </Stack.Navigator>
      
  );
}