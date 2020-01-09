import createDataContext from './create DataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_BLOG_POST':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: `Blog Post #${state.length + 1}`,
				},
			];

		default:
			return state;
	}
};

const addBlogPost = dispatch => {
	return () => {
		dispatch({ type: 'ADD_BLOG_POST' });
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost },
	[],
);
