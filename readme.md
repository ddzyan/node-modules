## 简介
nodejs 核心模块使用案例和适用场景分析，了解如何使用原生模块高效解决问题。

老仓库地址：https://github.com/ddzyan/node-module-example

此后会逐步迁移到新仓库中，老仓库将不再更新

### 进度
1. process_pool : 采用 child_process 封装一个进程池，来提高服务器任务处理效率。进程之间参数无法进行共享，如果需要进行传递，则需要通过 master 进行转发。
2. worker_threads_pool : 采用 worker_threads 封装一个线程池，来提高服务器任务处理效率。线程之间参数可以以特定的方式进行共享。线程锁所消耗的资源低于进程。