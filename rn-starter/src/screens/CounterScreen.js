import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
	switch (action.type) {
		case 'incCounter':
			return {
				...state,
				counter: state.counter + action.payload,
			};
		case 'decCounter':
			return {
				...state,
				counter: state.counter - action.payload,
			};
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [{ counter }, dispatch] = useReducer(reducer, { counter: 0 });

	return (
		<View>
			<Button
				title='Increase'
				onPress={() => dispatch({ type: 'incCounter', payload: 1 })}
			/>
			<Button
				title='Decrease'
				onPress={() => dispatch({ type: 'decCounter', payload: 1 })}
			/>
			<Text>Current Count: {counter}</Text>
		</View>
	);
};

const style = StyleSheet.create({});

export default CounterScreen;
