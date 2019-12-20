import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EachColor = ({ whichColor, setColor, color }) => {
	const COLOR_INCREMENT = 30;

	return (
		<View>
			<Text>{whichColor}</Text>
			<Button
				title={`More ${whichColor}`}
				onPress={() => color < 255 && setColor(color + COLOR_INCREMENT)}
			/>
			<Button
				title={`Less ${whichColor}`}
				onPress={() => color > 0 && setColor(color - COLOR_INCREMENT)}
			/>
		</View>
	);
};

export default EachColor;
