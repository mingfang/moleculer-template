const web = require('moleculer-web');

module.exports = {
	name: "{{project_name}}",
	mixins: [
		web,
	],

	settings: {
		port: process.env.PORT || 3000,
		assets: {
			folder: 'public',
		}
	},
};
