<template><div><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2>
<p><a href="https://leetcode.cn/problems/find-indices-of-stable-mountains/" target="_blank" rel="noopener noreferrer">3285. 找到稳定山的下标</a></p>
<p>已解答</p>
<p>简单</p>
<p>相关标签</p>
<p>相关企业</p>
<p>有 <code v-pre>n</code> 座山排成一列，每座山都有一个高度。给你一个整数数组 <code v-pre>height</code> ，其中 <code v-pre>height[i]</code> 表示第 <code v-pre>i</code> 座山的高度，再给你一个整数 <code v-pre>threshold</code> 。</p>
<p>对于下标不为 <code v-pre>0</code> 的一座山，如果它左侧相邻的山的高度 <strong>严格****大于</strong> <code v-pre>threshold</code> ，那么我们称它是 <strong>稳定</strong> 的。我们定义下标为 <code v-pre>0</code> 的山 <strong>不是</strong> 稳定的。</p>
<p>请你返回一个数组，包含所有 <strong>稳定</strong> 山的下标，你可以以 <strong>任意</strong> 顺序返回下标数组。</p>
<p><strong>示例 1：</strong></p>
<p>**输入：**height = [1,2,3,4,5], threshold = 2</p>
<p><strong>输出：</strong>[3,4]</p>
<p><strong>解释：</strong></p>
<ul>
<li>下标为 3 的山是稳定的，因为 <code v-pre>height[2] == 3</code> 大于 <code v-pre>threshold == 2</code> 。</li>
<li>下标为 4 的山是稳定的，因为 <code v-pre>height[3] == 4</code> 大于 <code v-pre>threshold == 2</code>.</li>
</ul>
<p><strong>示例 2：</strong></p>
<p>**输入：**height = [10,1,10,1,10], threshold = 3</p>
<p><strong>输出：</strong>[1,3]</p>
<p><strong>示例 3：</strong></p>
<p>**输入：**height = [10,1,10,1,10], threshold = 10</p>
<p><strong>输出：</strong>[]</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> stableMountains</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> []</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">threshold</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) []</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> ret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> []</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">len</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">threshold</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            ret</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> ret</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


