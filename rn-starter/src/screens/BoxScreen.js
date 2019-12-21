import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.parentStyle}>
			<View style={styles.viewOneStyle}></View>
			<View style={styles.viewTwoStyle}></View>
			<View style={styles.viewThreeStyle}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	parentStyle: {
		height: 300,
		borderWidth: 3,
		borderColor: 'black',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	viewOneStyle: {
		borderWidth: 3,
		backgroundColor: 'red',
		height: 90,
		width: 90,
	},
	viewTwoStyle: {
		borderWidth: 3,
		backgroundColor: 'green',
		height: 90,
		width: 90,
		top: 90,
	},
	viewThreeStyle: {
		borderWidth: 3,
		backgroundColor: 'blue',
		height: 90,
		width: 90,
	},
});

export default BoxScreen;
