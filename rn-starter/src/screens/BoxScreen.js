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
	},
	textOneStyle: {
		borderWidth: 3,
		borderColor: 'red',
		// ...StyleSheet.absoluteFillObject = position: 'absolute' + all four sides : 0 ex top: 0 etc..
		...StyleSheet.absoluteFillObject,
	},
	textTwoStyle: {
		borderWidth: 3,
		borderColor: 'red',
	},
	textThreeStyle: {
		borderWidth: 3,
		borderColor: 'red',
		left: 30,
	},
});

export default BoxScreen;
