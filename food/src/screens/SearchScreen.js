import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import useResults from '../hooks/useResults';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

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
