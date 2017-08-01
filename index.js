module.exports = {
  presets: [
    require('babel-preset-env').default(null, {
      useBuiltIns: true,
      targets: {
        browsers: [
          'last 2 versions'
        ]
      }
    })
  ],
  plugins: [
    require('babel-plugin-transform-exponentiation-operator'),
    [require('babel-plugin-transform-object-rest-spread'), {
      useBuiltIns: true
    }],
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-runtime')
  ]
}
