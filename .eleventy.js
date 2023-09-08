const litPlugin = require('@lit-labs/eleventy-plugin-lit');

module.exports = eleventyConfig => {
	// Tell 11ty to use the .eleventyignore and ignore our .gitignore file
	eleventyConfig.setUseGitIgnore(false);

	eleventyConfig.addPassthroughCopy('./src/fonts');
	eleventyConfig.addPassthroughCopy('./src/images');

	// config.addFilter('md', require('./src/filters/md.js'));
  eleventyConfig.addPlugin(litPlugin, {
    mode: 'worker',
    componentModules: [
    //   'js/demo-greeter.js',
    //   'js/other-component.js',
    ],
  });

	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist'
		}
	};
};
