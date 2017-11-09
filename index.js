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

function add(x, y, cb) {
  if (add.impl) {
    cb(add.impl(x, y));
  } else {
    loader.load("./hello.wasm", {
      imports: {
      }
    }).then(module => {
      add.impl = module.exports.add;
      cb(add.impl(x, y));
    });
  }
}

add(1, 2, (result) => console.log(result));
add(10, 20, (result) => console.log(result));
