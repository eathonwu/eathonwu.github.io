<template><div><h2 id="iptables" tabindex="-1"><a class="header-anchor" href="#iptables"><span>iptables</span></a></h2>
<p>原文链接： <a href="https://blog.csdn.net/daocaokafei/article/details/115091313" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/daocaokafei/article/details/115091313</a></p>
<p>“四表”是指 iptables 的功能，默认的 iptable s规则表有 filter 表（过滤规则表）、nat 表（地址转换规则表）、mangle（修改数据标记位规则表）、raw（跟踪数据表规则表）：</p>
<p>filter 表：控制数据包是否允许进出及转发，可以控制的链路有 INPUT、FORWARD 和 OUTPUT。<br>
nat 表：控制数据包中地址转换，可以控制的链路有 PREROUTING、INPUT、OUTPUT 和 POSTROUTING。<br>
mangle：修改数据包中的原数据，可以控制的链路有 PREROUTING、INPUT、OUTPUT、FORWARD 和 POSTROUTING。<br>
raw：控制 nat 表中连接追踪机制的启用状况，可以控制的链路有 PREROUTING、OUTPUT。</p>
<figure><img src="https://i-blog.csdnimg.cn/blog_migrate/7b400c5cabf7229714f2e8bc298ef7fa.gif" alt="Linux命令" tabindex="0" loading="lazy"><figcaption>Linux命令</figcaption></figure>
</div></template>


