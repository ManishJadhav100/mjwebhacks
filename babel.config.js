module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          navigation: './src/navigation',
          screens: './src/screens',
          themes: './src/themes',
          utils: './src/utils',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
