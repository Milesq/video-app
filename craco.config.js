const babelConfig = {
  plugins: [
    [
      'babel-plugin-jsx-remove-data-test-id',
      {
        attributes: 'data-testid',
      },
    ],
  ],
}

module.exports = {
  devServer: {
    open: false,
  },
  jest: {
    configure(cfg) {
      cfg.setupFilesAfterEnv = ['<rootDir>/setupTests.ts']
      cfg.roots = ['<rootDir>/__tests__']
      delete cfg.testMatch
      return cfg
    },
  },
}

if (process.env.NODE_ENV === 'production') {
  module.exports.babel = babelConfig
}
