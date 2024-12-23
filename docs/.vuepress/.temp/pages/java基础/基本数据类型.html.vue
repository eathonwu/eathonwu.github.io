<template><div><h2 id="integer" tabindex="-1"><a class="header-anchor" href="#integer"><span>Integer</span></a></h2>
<p>Integer == int  整型会自动装箱与拆箱,</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 323</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 323</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Interger == Integer 比较的时对象, -128-127 连接的是同一对象,其他的指向不同对象</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 323</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 323</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // false</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>String</span></a></h2>
<p>不可以变对象final</p>
<p>String 不可变性天生具备线程安全，可以在多个线程中安全地使用。</p>
<p>如果一个 String 对象已经被创建过了，那么就会从 String Pool 中取得引用。只有 String 是不可变的，才可能使用 String Pool。</p>
<table>
<thead>
<tr>
<th>JDK版本</th>
<th>是否有永久代，字符串常量池放在哪里？</th>
<th>方法区逻辑上规范，由哪些实际的部分实现的？</th>
</tr>
</thead>
<tbody>
<tr>
<td>jdk1.6及之前</td>
<td>有永久代，运行时常量池（包括字符串常量池），静态变量存放在永久代上</td>
<td>这个时期方法区在HotSpot中是由永久代来实现的，以至于<strong>这个时期说方法区就是指永久代</strong></td>
</tr>
<tr>
<td>jdk1.7</td>
<td>有永久代，但已经逐步“去永久代”，字符串常量池、静态变量移除，保存在堆中；</td>
<td>这个时期方法区在HotSpot中由<strong>永久代</strong>（类型信息、字段、方法、常量）和<strong>堆</strong>（字符串常量池、静态变量）共同实现</td>
</tr>
<tr>
<td>jdk1.8及之后</td>
<td>取消永久代，类型信息、字段、方法、常量保存在本地内存的元空间，但字符串常量池、静态变量仍在堆中</td>
<td>这个时期方法区在HotSpot中由本地内存的<strong>元空间</strong>（类型信息、字段、方法、常量）和<strong>堆</strong>（字符串常量池、静态变量）共同实现</td>
</tr>
</tbody>
</table>
<p>可变字符串:</p>
<ul>
<li>
<p>StringBuffer</p>
<p>线程不安全</p>
</li>
<li>
<p>StringBuilder</p>
<p>线程安全的，内部使用 synchronized 进行同步</p>
</li>
</ul>
<h2 id="throwable" tabindex="-1"><a class="header-anchor" href="#throwable"><span>throwable</span></a></h2>
<p>throwable 可以用来表示任何可以作为异常抛出的类，分为两种: <strong>Error</strong> 和 <strong>Exception</strong>。其中 Error 用来表示 JVM 无法处理的错误，Exception 分为两种:</p>
<ul>
<li><strong>受检异常</strong> : 需要用 try...catch... 语句捕获并进行处理，并且可以从异常中恢复；</li>
<li><strong>非受检异常</strong> : 是程序运行时错误，例如除 0 会引发 Arithmetic Exception，此时程序崩溃并且无法恢复。</li>
</ul>
<figure><img src="https://pdai.tech/images/pics/PPjwP.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</div></template>


