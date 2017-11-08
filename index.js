const loader = require("assemblyscript-loader");

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

loader.load("./hello.wasm", {
  imports: {
  }
}).then(module => {
  module.exports.hello();
});
