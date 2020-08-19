module.exports = {
  presets: [
    [
    '@vue/app',
    {
      jsx: false   //https://github.com/akxcv/vuera/issues/80
    }]
  ],
  plugins: [
    "@babel/transform-react-jsx"
  ]
}
