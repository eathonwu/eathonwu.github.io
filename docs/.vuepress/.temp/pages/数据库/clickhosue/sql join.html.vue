<template><div><p>clickhouse</p>
<p>常用操作</p>
<h2 id="join" tabindex="-1"><a class="header-anchor" href="#join"><span>join</span></a></h2>
<p>所有的join 操作基本范式都是</p>
<p>​				table1 join table2 on <a href="http://table.xxx=table2.xxx" target="_blank" rel="noopener noreferrer">table.xxx=table2.xxx</a></p>
<p>​				 join table3 on <a href="http://table1.xxx=table3.xxx" target="_blank" rel="noopener noreferrer">table1.xxx=table3.xxx</a></p>
<p>​				 join table4 on <a href="http://table2.xxx=table4.xxx" target="_blank" rel="noopener noreferrer">table2.xxx=table4.xxx</a></p>
<p>不允许先查询 再进行join,错误查询示例</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table_a  </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">12</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		(inner) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table_b  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	on</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> table_a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">table_b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	left joni table_c </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">on</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> table</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">table_c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">id</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  where</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> table_a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'xxxx"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<h3 id="inner-join操作" tabindex="-1"><a class="header-anchor" href="#inner-join操作"><span>(inner)join操作</span></a></h3>
</li>
</ul>
<figure><img src="http://c.biancheng.net/uploads/allimg/210824/092Z42610-0.gif" alt="SQL INNER JOIN" tabindex="0" loading="lazy"><figcaption>SQL INNER JOIN</figcaption></figure>
<p>​	内连接,去两个表on 交集</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table_a </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		(inner) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table_b  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	on</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> table_a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">table_b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  where</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> table_a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">xxxx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>
<ul>
<li>
<h3 id="left-join" tabindex="-1"><a class="header-anchor" href="#left-join"><span>Left join</span></a></h3>
<p>左边为空时,会导致不会查到任何数据</p>
<figure><img src="http://c.biancheng.net/uploads/allimg/210824/093001K37-0.gif" alt="SQL LEFT JOIN" tabindex="0" loading="lazy"><figcaption>SQL LEFT JOIN</figcaption></figure>
<p>左连接,取左表所有</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table_a </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		left join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table_b  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	on</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> table_a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">table_b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  where</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> table_a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">xxxx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<h3 id="right-join" tabindex="-1"><a class="header-anchor" href="#right-join"><span>right join</span></a></h3>
<figure><img src="http://c.biancheng.net/uploads/allimg/210824/09330262M-0.gif" alt="SQL RIGHT JOIN" tabindex="0" loading="lazy"><figcaption>SQL RIGHT JOIN</figcaption></figure>
<p>右表所有,加on条件左表</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>select * from table_a </span></span>
<span class="line"><span></span></span>
<span class="line"><span>		right join table_b  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>	on table_a.id =table_b.id </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  where table_a.name=''xxxx"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>full join</p>
</li>
<li>
<p>self join</p>
</li>
<li>
<p>cross join</p>
</li>
</ul>
<h2 id="union-all-union-distinct" tabindex="-1"><a class="header-anchor" href="#union-all-union-distinct"><span>union all /union  distinct</span></a></h2>
<p>基本语法</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> column1, column2 ...</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table1, table2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[WHERE condition1]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">UNION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> / </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">UNION ALL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> column1, column2 ...</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table1, table2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[WHERE condition2]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>union distinct会对数据进行去重,(mysql中union 本身就具有去重逻辑)</li>
<li>union all 直接将结果数据进行连接</li>
</ul>
</div></template>


