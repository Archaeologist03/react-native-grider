import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const name = 'X';

	return (
		<View>
			<Text style={styles.startedStyle}>
				Getting started with react native..
			</Text>
			<Text style={styles.myNameStyle}>My name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	startedStyle: {
		fontSize: 45,
	},
	myNameStyle: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
