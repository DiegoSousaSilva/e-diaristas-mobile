module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            data: "./src/data",
            pages: "./src/pages",
            ui: "./src/ui",
            "@styles": "./src/ui/styles",
            "@assets": "./assets",
          },
        },
      ],
      ["react-native-paper/babel"],
    ],
  };
};
