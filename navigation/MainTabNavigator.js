import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import Messages from '../screens/Messages';

const config = Platform.select({
	web: { headerMode: 'none' },
	default: { headerMode: 'none' }
});

const HomeStack = createStackNavigator(
	{
		Home: Home
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel: 'Explore',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} icon="explore" name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
	)
};

HomeStack.path = '';

const MatchesStack = createStackNavigator(
	{
		Maches: Matches
	},
	config
);

MatchesStack.navigationOptions = {
	tabBarLabel: 'Matches',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} icon="heart" name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
	)
};

MatchesStack.path = '';

const ChatStack = createStackNavigator(
	{
		Chat: Messages
	},
	config
);

ChatStack.navigationOptions = {
	tabBarLabel: 'Chat',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} icon="chat" name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
	)
};

ChatStack.path = '';

const ProfileStack = createStackNavigator(
	{
		Profile: Profile
	},
	config
);
ProfileStack.navigationOptions = {
	tabBarLabel: 'Profile',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} icon="user" name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
	)
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	MatchesStack,
	ChatStack,
	ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
