<template><div><p>负载均衡介入层</p>
<p>应用集群层</p>
<p>分布式服务层</p>
<p>资源层</p>
<p>qps</p>
<p>redis 单机 10万qps</p>
<p>单个应用</p>
<p>数据库8C 16G, 几千qps 左右</p>
<p>单机数据库 -----&gt; 分业务----------&gt; 读写分离--------------&gt; 分库分表</p>
<p>clickhouse 写入50万 qps</p>
<p>kakfa 使用Kafka 使用到了 <code v-pre>mmap</code> 和 <code v-pre>sendfile</code> 的方式来实现<code v-pre>零拷贝</code>。分别对应 Java 的 <code v-pre>MappedByteBuffer</code> 和 <code v-pre>FileChannel.transferTo</code></p>
</div></template>


