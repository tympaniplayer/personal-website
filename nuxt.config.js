import Mode from "frontmatter-markdown-loader/mode";

const path = require("path");
const glob = require("glob");
import hljs from "highlight.js";
const markdownIt = require("markdown-it");
const markdownItClass = require("@toycode/markdown-it-class");

async function getDynamicPaths(urlFilePathTable) {
  return [].concat(
    ...Object.keys(urlFilePathTable).map(url => {
      var filePathGlob = urlFilePathTable[url];
      return glob
        .sync(filePathGlob, { cwd: "content" })
        .map(filepath => `${url}/${path.basename(filepath, ".md")}`);
    })
  );
}

export default async () => {
  return {
    mode: "universal",
    head: {
      title: process.env.npm_package_name || "",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || ""
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    generate: {
      routes: await getDynamicPaths({ "/posts": "posts/*.md" })
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: ["@/assets/styles.scss"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
      // Doc: https://buefy.github.io/#/documentation
      "nuxt-buefy",
      // Doc: https://axios.nuxtjs.org/usage
      "@nuxtjs/axios"
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {
        config.module.rules.push({
          test: /\.md$/,
          include: path.resolve(__dirname, "content"),
          loader: "frontmatter-markdown-loader",
          options: {
            mode: [Mode.VUE_COMPONENT, Mode.META],
            markdownIt: markdownIt({
              highlight: function(str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return (
                      '<pre class="hljs"><code>' +
                      hljs.highlight(lang, str, true).value +
                      "</code></pre>"
                    );
                  } catch (__) {}
                }

                return (
                  '<pre class="hljs"><code>' +
                  md.utils.escapeHtml(str) +
                  "</code></pre>"
                );
              }
            }).use(markdownItClass, {
              h1: "title"
            })
          }
        });

        if (ctx.isDev) {
          config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
        }
      }
    }
  };
};
