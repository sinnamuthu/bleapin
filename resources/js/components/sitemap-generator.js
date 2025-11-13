require("babel-register")({
  presets: ["es2015", "react"]
});
 
const router = require("./simple-router").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://www.bleap.in")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();