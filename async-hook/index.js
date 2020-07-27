const fs = require('fs');
const async_hooks = require('async_hooks');
async_hooks
  .createHook({
    // 资源初始化
    init(asyncId, type, triggerAsyncId, resource) {
      fs.writeSync(1, `${type}(${asyncId}): trigger: ${triggerAsyncId}\n`);
    },
    // 资源销毁后
    destroy(asyncId) {
      fs.writeSync(1, `destroy: ${asyncId}\n`); // 输出到控制台
      // console.log 是异步操作
    },
  })
  .enable(); // 启动

async function A() {
  fs.writeSync(1, `A -> ${async_hooks.executionAsyncId()}\n`);
  setTimeout(() => {
    fs.writeSync(1, `A in setTimeout -> ${async_hooks.executionAsyncId()}\n`);
    B();
  });
}
async function B() {
  fs.writeSync(1, `B -> ${async_hooks.executionAsyncId()}\n`);
  process.nextTick(() => {
    fs.writeSync(
      1,
      `B in process.nextTick -> ${async_hooks.executionAsyncId()}\n`
    );
    C();
    C();
  });
}
function C() {
  fs.writeSync(1, `C -> ${async_hooks.executionAsyncId()}\n`);
  Promise.resolve().then(() => {
    fs.writeSync(1, `C in promise.then -> ${async_hooks.executionAsyncId()}\n`);
  });
}
fs.writeSync(1, `top level -> ${async_hooks.executionAsyncId()}\n`);
A();
