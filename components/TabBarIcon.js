import React from 'react';
import styles from '../assets/styles/index';
import Icon from './Icon';
import { Text } from 'react-native';

export default function TabBarIcon(props) {
	const iconFocused = props.focused ? '#7444C0' : '#363636';
	return (
		<Text style={[ styles.iconMenu, { color: iconFocused } ]}>
			<Icon name={props.icon} />
		</Text>
	);
}
