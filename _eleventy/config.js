module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addFilter("removeTrailingSlash", function (url) {

    console.log("RUNNING removeTrailingSlash");
    return url.replace(/\/+$/, '');
  })

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