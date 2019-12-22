import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer K1nKpQJAHRKx9mFWlurfiHDLbFFhI6JdI9QxVy2cMW77zjooEWs_e6o0IosbMjtbGDXiaIxAqcA6QFynOgKVJIAdiLwYSfOE7MZCZleiXbleAajXdrp-owHEAVT_XXYx',
	},
});
