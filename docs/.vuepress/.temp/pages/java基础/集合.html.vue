<template><div><h1 id="list" tabindex="-1"><a class="header-anchor" href="#list"><span>List</span></a></h1>
<ul>
<li>
<p>默认大小为10</p>
</li>
<li>
<p>扩容规则</p>
<ol>
<li>每次扩容 1.5倍</li>
<li>扩容后任然不够大小,直接使用最小的数据大小</li>
<li>大于最大容量,取最大容量</li>
</ol>
</li>
<li>
<p>扩展点</p>
<p>go slice扩容规则</p>
<ol>
<li>小于1024 ,扩容两倍</li>
<li>double容量不能容纳,直接使用预估的容量</li>
<li>大于1024 ,扩容1.25倍</li>
</ol>
</li>
</ul>
</div></template>


