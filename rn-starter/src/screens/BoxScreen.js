import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textOneStyle}>Child #1</Text>
			<Text style={styles.textTwoStyle}>Child #2</Text>
			<Text style={styles.textThreeStyle}>Child #3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		height: 200,
		borderWidth: 3,
		borderColor: 'black',
		// flexDirection: 'row',
		// alignItems: 'center',
		// justifyContent: 'space-around',
	},
	textOneStyle: {
		borderWidth: 3,
		borderColor: 'red',
		flex: 4,
	},
	textTwoStyle: {
		borderWidth: 3,
		borderColor: 'red',
		flex: 2,
		alignSelf: 'center',
	},
	textThreeStyle: {
		borderWidth: 3,
		borderColor: 'red',
		flex: 4,
		alignSelf: 'flex-end',
	},
});

export default BoxScreen;
