module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    templateFormats: ['njk'],
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  }
}