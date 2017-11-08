const loader = require("assemblyscript-loader");

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

loader.load("./hello.wasm", {
  imports: {
  }
}).then(module => {
  module.exports.hello();

  console.log("100 + 200 = ", module.exports.add(100, 200));
});
