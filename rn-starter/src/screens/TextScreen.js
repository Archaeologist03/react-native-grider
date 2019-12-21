import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View>
			<View>
				<Text>Enter Name:</Text>
				<TextInput
					style={styles.input}
					autoCapitalize='none'
					autoCorrect={false}
					value={name}
					onChangeText={newValue => setName(newValue)}
				/>
				<Text>My name is {name}</Text>
			</View>
			<Text>{'\n'}</Text>
			<View>
				<Text>Enter Password:</Text>
				<TextInput
					style={styles.input}
					autoCapitalize='none'
					autoCorrect={false}
					value={password}
					onChangeText={newValue => setPassword(newValue)}
				/>
				{password.length < 5 && password !== '' && (
					<Text>Password must be at least 5 characters long.</Text>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
});

export default TextScreen;
