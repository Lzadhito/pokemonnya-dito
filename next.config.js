const withPWA = require('next-pwa');

module.exports = withPWA({
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/pokemon',
				permanent: true,
			},
		];
	},
	pwa: {
		dest: 'public',
	},
});
