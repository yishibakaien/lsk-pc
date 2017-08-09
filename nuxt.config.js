const resolve = require('path').resolve

const isVueRule = (rule) => {
  return rule.test.toString() === '/\\.vue$/'
}
const isSASSRule = (rule) => {
  return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1
}
const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      resolve(__dirname, 'assets/sass/var.scss'),
      resolve(__dirname, 'assets/sass/mixin.scss')
    ]
  }
}
module.exports = {
  head: {
    title: '蕾丝控',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'lacewang',
        name: 'lacewang',
        content: 'lacewang,ts57'
      }, {
        name: 'renderer',
        content: 'webkit'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#D40073'
  },
  extractCSS: true,
  filenames: {
    vendor: 'vendor.[hash:12].js',
    app: 'hare.[chunkhash:12].js',
    css: 'hare.[contenthash:12].css'
  },
  css: [
    '~/theme/index.css', {
      src: '~/assets/sass/main.scss',
      lang: 'scss'
    }
  ],
  babel: {
    plugins: [
      [
        'component',
        [
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-default'
          }
        ]
      ]
    ]
  },
  build: {
    vendor: [
      'axios', 'element-ui', 'vue-lazyload'
    ],
    /*
    ** Extend Nuxt Webpack config
    */
    extend (config) {
      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.query.loaders.sass.push(sassResourcesLoader)
          rule.query.loaders.scss.push(sassResourcesLoader)
        }
        if (isSASSRule(rule)) {
          rule.use.push(sassResourcesLoader)
        }
      })
    },
    postcss: [require('postcss-salad')({
      'browsers': [
        'ie > 8', 'last 20 versions'
      ],
      'features': {
        'bem': {
          'shortcuts': {
            'component': 'b',
            'modifier': 'm',
            'descendent': 'e'
          },
          'separators': {
            'descendent': '__',
            'modifier': '--'
          }
        }
      }
    })],
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: ['~plugins/element-ui', '~plugins/components/index', '~plugins/lazyLoad.js', '~plugins/vuex-router-sync.js']
}
