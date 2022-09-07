module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addFilter("removeTrailingSlash", function (url) {
    return url.replace(/\/+$/, "");
  });

  eleventyConfig.addFilter("cleanUrl", function (url) {
    return url.toLowerCase().replace(/[^a-z0-9]+/, "-");
  });

  return {
    templateFormats: ["njk"],
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
