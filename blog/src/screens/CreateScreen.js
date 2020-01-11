import React, { useContex } from 'react';
import { StyleSheet } from 'react-native';

import BlogPostForm from '../components/BlogPostForm';

import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = () => useContex(Context);

	return <BlogPostForm />;
};
const styles = StyleSheet.create({});

export default CreateScreen;
