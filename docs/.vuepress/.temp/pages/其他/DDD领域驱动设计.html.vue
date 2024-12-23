<template><div><h1 id="战略设计图" tabindex="-1"><a class="header-anchor" href="#战略设计图"><span>战略设计图</span></a></h1>
<h1 id="战术设计图" tabindex="-1"><a class="header-anchor" href="#战术设计图"><span>战术设计图</span></a></h1>
<h1 id="领域分层" tabindex="-1"><a class="header-anchor" href="#领域分层"><span>领域分层</span></a></h1>
<h3 id="_4层" tabindex="-1"><a class="header-anchor" href="#_4层"><span>4层</span></a></h3>
<p>1.展现层：controller层。无业务逻辑</p>
<p>2.应用服务层：此层可以包含查询逻辑，但核心业务逻辑必须下沉到领域层。</p>
<p>3.领域服务层：业务在这里组装。仓储（资源库）接口在此层定义。</p>
<p>4.基础设施层：仓储（资源库）实现层+PO持久化层。</p>
<figure><img src="https://img2020.cnblogs.com/blog/584866/202110/584866-20211011141738741-950766765.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h1 id="六边形架构" tabindex="-1"><a class="header-anchor" href="#六边形架构"><span>六边形架构</span></a></h1>
<p>适配器架构</p>
<figure><img src="https://ucc.alicdn.com/pic/developer-ecology/at4uaznghdxgm_5b7ec0f16d124d6bb06e34e3e29ab549.png?x-oss-process=image%2Fresize%2Cw_1400%2Fformat%2Cwebp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h1 id="cqrs架构" tabindex="-1"><a class="header-anchor" href="#cqrs架构"><span>CQRS架构</span></a></h1>
<h1 id="cola架构" tabindex="-1"><a class="header-anchor" href="#cola架构"><span>COLA架构</span></a></h1>
</div></template>


