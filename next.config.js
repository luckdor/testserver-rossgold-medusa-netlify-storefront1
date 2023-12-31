const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    // domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "mwb-dhy00032.koyeb.app/uploads/images/"]
    domains: [
        // ...
        "https://mwb-dhy00032.koyeb.app",
      ],
    },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
