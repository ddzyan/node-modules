### 简介

使用 loadtest 模块，实现 ab 接口压测类似的功能，此模块可以通过 js 文件启动，也可以通过命令行直接启动，输出的日志格式与 AB 也差不多，很方便

### 使用

先启动服务器

```sh
node ./server.js
```

#### 脚本配置方式

POST

```
node ./load-test/index.js

{ totalRequests: 100,  // 总共发送的请求数量
  totalErrors: 0, // 总共报错的请求数量(status不是200)
  totalTimeSeconds: 10.006077052, // 总共消耗的事件
  rps: 10, // 每秒发送的请求数量
  meanLatencyMs: 1.5, // 平均每个请求消耗的时间
  maxLatencyMs: 36, // 请求最大消耗时间
  minLatencyMs: 0, // 最小消耗时间
  percentiles: { '50': 1, '90': 1, '95': 1, '99': 36 }, // 请求消耗时间分布
  errorCodes: {}, // 错误状态码
  instanceIndex: 0 }
Tests run successfully
```

#### 直接启动

GET

```sh
# 开启2个线程，每个线程并发数为100
loadtest -c 2 --rps 100  http://127.0.0.1:3000
```

```sh
# 开启2个线程，总共发送5次
loadtest -c 2 -n 5  http://127.0.0.1:3000
```
