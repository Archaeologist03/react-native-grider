import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import yelp from '../api/yelp';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		searchApi('pasta')
	}, []);

	const searchApi = async searcTerm => {
		console.log('1212');
		
		try {
			const response = await yelp.get('/search', {
				params: {
					term: searcTerm,
					limit: 50,
					location: 'san jose',
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage('Something went wrong');
		}
	};

	return (
		<View>
			<SearchBar
				term={term}
				setTerm={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>{results.length} </Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
