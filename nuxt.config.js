const pkg = require("./package");

module.exports = {
    mode: "universal",

    generate: {
        routes: ["/posts/1", "/posts/2", "/posts/3"]
    },

    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: "en"
        },
        title: pkg.name,
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: pkg.description
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    server: {
        port: process.env.PORT || 8000, // default: 3000
        host: "0.0.0.0" // default: localhost
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },

    /*
     ** Global CSS
     */
    css: [
        // 'bulma',
        // '~/assets/global.css',
        "~/assets/global.styl"
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        "@nuxtjs/axios"
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};
