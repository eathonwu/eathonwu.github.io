<template><div><h1 id="zab-zookeeper-atomic-broadcast-zookeeper-原子消息广播协议-协议包括两种基本的模-式-崩溃恢复和消息广播" tabindex="-1"><a class="header-anchor" href="#zab-zookeeper-atomic-broadcast-zookeeper-原子消息广播协议-协议包括两种基本的模-式-崩溃恢复和消息广播"><span>ZAB( ZooKeeper Atomic Broadcast , ZooKeeper 原子消息广播协议)协议包括两种基本的模 式:崩溃恢复和消息广播</span></a></h1>
<p>**1.**崩溃恢复:主要就是 <strong>Leader</strong> 选举过程</p>
<p>2.**数据同步:<strong>Leader</strong> 服务器与其他服务器进行数据同步</p>
<p>**3.**消息广播:<strong>Leader</strong> 服务器将数据发送给其他服务器</p>
</div></template>


