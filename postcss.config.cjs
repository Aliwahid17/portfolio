module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		cssnano: {
			preset: ['advanced', { discardComments: { removeAll: true } }]
		}
	}
};
