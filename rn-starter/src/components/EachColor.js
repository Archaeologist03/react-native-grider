import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EachColor = ({ whichColor, onIncrease, onDecrease }) => {
	return (
		<View>
			<Text>{whichColor}</Text>
			<Button title={`More ${whichColor}`} onPress={() => onIncrease()} />
			<Button title={`Less ${whichColor}`} onPress={() => onDecrease()} />
		</View>
	);
};

export default EachColor;
