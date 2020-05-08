## 简介
了解如何使用多线程解决CPU密集问题，注意不是多进程，而是多线程。多线程之间内存可以进行共享。与 child_process 或 cluster 不同， worker_threads 可以共享内存。 它们通过传输 ArrayBuffer 实例或共享 SharedArrayBuffer 实例来实现

此模块在12.X版本上正式上线，老版本为实验模块，使用建议升级到12.X以上版本