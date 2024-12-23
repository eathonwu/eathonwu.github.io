<template><div><!--more-->
<p>G的大小: 2-4k</p>
<p>线程的大小 M?</p>
<figure><img src="https://cdn.learnku.com/uploads/images/202003/11/58489/a4vWtvRWGQ.jpeg!large" alt="18-go-func调度周期.jpeg" tabindex="0" loading="lazy"><figcaption>18-go-func调度周期.jpeg</figcaption></figure>
<p>1、我们通过 go func () 来创建一个 goroutine；</p>
<p>2、有两个存储 G 的队列，一个是局部调度器 P 的本地队列、一个是全局 G 队列。新创建的 G 会先保存在 P 的本地队列中，如果 P 的本地队列已经满了就会保存在全局的队列中；</p>
<p>3、G 只能运行在 M 中，一个 M 必须持有一个 P，M 与 P 是 1：1 的关系。M 会从 P 的本地队列弹出一个可执行状态的 G 来执行，如果 P 的本地队列为空，就会想其他的 MP 组合偷取一个可执行的 G 来执行；</p>
<p>4、一个 M 调度 G 执行的过程是一个循环机制；</p>
<p>5、当 M 执行某一个 G 时候如果发生了 syscall 或则其余阻塞操作，M 会阻塞，如果当前有一些 G 在执行，runtime 会把这个线程 M 从 P 中摘除 (detach)，然后再创建一个新的操作系统的线程 (如果有空闲的线程可用就复用空闲线程) 来服务于这个 P；</p>
<p>6、当 M 系统调用结束时候，这个 G 会尝试获取一个空闲的 P 执行，并放入到这个 P 的本地队列。如果获取不到 P，那么这个线程 M 变成休眠状态， 加入到空闲线程中，然后这个 G 会被放入全局队列中</p>
<p>参考链接: <a href="https://learnku.com/articles/41728" target="_blank" rel="noopener noreferrer">https://learnku.com/articles/41728</a></p>
<p>进程和线程:<a href="http://staff.ustc.edu.cn/~huangwc/osppt/2.pdf" target="_blank" rel="noopener noreferrer">http://staff.ustc.edu.cn/~huangwc/osppt/2.pdf</a></p>
<p>视频理解:<a href="https://www.bilibili.com/video/BV1hv411x7we?p=16" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1hv411x7we?p=16</a></p>
</div></template>


