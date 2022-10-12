module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'prettier',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		'no-console': 'off',
		// 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
};
