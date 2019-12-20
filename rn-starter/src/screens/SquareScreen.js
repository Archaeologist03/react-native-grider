import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import EachColor from '../components/EachColor';

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	return (
		<View>
			<EachColor whichColor='Red' setColor={setRed} color={red} />

			<EachColor whichColor='Green' setColor={setGreen} color={green} />

			<EachColor whichColor='Blue' setColor={setBlue} color={blue} />

			<View
				style={{
					height: 150,
					width: 150,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
