module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://info.secretsoup.org/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "SecretSoupのホームページ", // Used in manifest.json
          shortName: "SecretSoup", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        googleAnalytics: {
            // trackingId: "G-Q396C70WT2",
            // anonymize: true, // Default true
            // environments: ["production"] // Default ["production"]
        }
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-Q396C70WT2"],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
