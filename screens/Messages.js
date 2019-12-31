import React from 'react';
import styles from '../assets/styles';

import { SafeAreaView, Text, TouchableOpacity, ImageBackground, View, FlatList } from 'react-native';
import Message from '../components/Message';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';

const Messages = () => {
	return (
		<ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
			<View style={styles.containerMessages}>
				<SafeAreaView>
					<View style={styles.top}>
						<Text style={styles.title}>Messages</Text>
						<TouchableOpacity>
							<Text style={styles.icon}>
								<Icon name="optionsV" />
							</Text>
						</TouchableOpacity>
					</View>

					<FlatList
						data={Demo}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<Message image={item.image} name={item.name} lastMessage={item.message} />
							</TouchableOpacity>
						)}
					/>
				</SafeAreaView>
			</View>
		</ImageBackground>
	);
};

export default Messages;
