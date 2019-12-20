import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import EachColor from '../components/EachColor';

const COLOR_INCREMENT = 30;

const reducer = (state, action) => {
	switch (action.type) {
		case 'red':
			return {
				...state,
				red: state.red + action.payload,
			};
		case 'green':
			return {
				...state,
				green: state.green + action.payload,
			};
		case 'blue':
			return {
				...state,
				blue: state.blue + action.payload,
			};
		default:
			return state;
	}
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const { red, green, blue } = state;

	return (
		<View>
			<EachColor
				whichColor='Red'
				onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT })}
				onDecrease={() =>
					dispatch({ type: 'red', payload: -1 * COLOR_INCREMENT })
				}
			/>

			<EachColor
				whichColor='Green'
				onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT })}
				onDecrease={() =>
					dispatch({ type: 'green', payload: -1 * COLOR_INCREMENT })
				}
			/>

			<EachColor
				whichColor='Blue'
				onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT })}
				onDecrease={() =>
					dispatch({ type: 'blue', payload: -1 * COLOR_INCREMENT })
				}
			/>

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
