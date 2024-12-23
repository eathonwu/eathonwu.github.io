<template><div><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2>
<ol start="1387">
<li>将整数按权重排序<br>
已解答<br>
中等<br>
相关标签<br>
相关企业<br>
提示<br>
我们将整数 x 的 权重 定义为按照下述规则将 x 变成 1 所需要的步数：</li>
</ol>
<p>如果 x 是偶数，那么 x = x / 2<br>
如果 x 是奇数，那么 x = 3 * x + 1<br>
比方说，x=3 的权重为 7 。因为 3 需要 7 步变成 1 （3 --&gt; 10 --&gt; 5 --&gt; 16 --&gt; 8 --&gt; 4 --&gt; 2 --&gt; 1）。</p>
<p>给你三个整数 lo， hi 和 k 。你的任务是将区间 [lo, hi] 之间的整数按照它们的权重 升序排序 ，如果大于等于 2 个整数有 相同 的权重，那么按照数字自身的数值 升序排序 。</p>
<p>请你返回区间 [lo, hi] 之间的整数按权重排序后的第 k 个数。</p>
<p>注意，题目保证对于任意整数 x （lo &lt;= x &lt;= hi） ，它变成 1 所需要的步数是一个 32 位有符号整数。<br>
示例 1：</p>
<p>输入：lo = 12, hi = 15, k = 2<br>
输出：13<br>
解释：12 的权重为 9（12 --&gt; 6 --&gt; 3 --&gt; 10 --&gt; 5 --&gt; 16 --&gt; 8 --&gt; 4 --&gt; 2 --&gt; 1）<br>
13 的权重为 9<br>
14 的权重为 17<br>
15 的权重为 17<br>
区间内的数按权重排序以后的结果为 [12,13,14,15] 。对于 k = 2 ，答案是第二个整数也就是 13 。<br>
注意，12 和 13 有相同的权重，所以我们按照它们本身升序排序。14 和 15 同理。<br>
示例 2：</p>
<p>输入：lo = 7, hi = 11, k = 4<br>
输出：7<br>
解释：区间内整数 [7, 8, 9, 10, 11] 对应的权重为 [16, 3, 19, 6, 14] 。<br>
按权重排序后得到的结果为 [8, 10, 11, 7, 9] 。<br>
排序后数组中第 4 个数字为 7 。</p>
<p>提示：</p>
<p>1 &lt;= lo &lt;= hi &lt;= 1000<br>
1 &lt;= k &lt;= hi - lo + 1</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<p>递归</p>
<div class="language-.go line-numbers-mode" data-highlighter="shiki" data-ext=".go" data-title=".go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>func getKth(lo int, hi int, k int) int {</span></span>
<span class="line"><span>    arr:=make([]item,hi-lo+1)</span></span>
<span class="line"><span>    m:=make(map[int]int)</span></span>
<span class="line"><span>    m[2] = 1</span></span>
<span class="line"><span>    for i:=lo;i&#x3C;=hi;i++{</span></span>
<span class="line"><span>       if i%2==0 &#x26;&#x26; m[i/2]!=0{</span></span>
<span class="line"><span>            m[i] = m[i/2] + 1</span></span>
<span class="line"><span>            arr[i-lo] = item{val:i,weight:m[i]}</span></span>
<span class="line"><span>            continue</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>       w:=findWeight(i,m)</span></span>
<span class="line"><span>        arr[i-lo] = item{val:i,weight:w}</span></span>
<span class="line"><span>       m[i] = w</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 求第k大的数</span></span>
<span class="line"><span>    for i:=0;i&#x3C;len(arr);i++{</span></span>
<span class="line"><span>        for j:=i+1;j&#x3C;len(arr);j++{</span></span>
<span class="line"><span>            if arr[i].weight > arr[j].weight{</span></span>
<span class="line"><span>                 arr[i],arr[j] = arr[j],arr[i]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if arr[i].weight == arr[j].weight{</span></span>
<span class="line"><span>                 if arr[i].val>arr[j].val{</span></span>
<span class="line"><span>                    arr[i],arr[j] = arr[j],arr[i]</span></span>
<span class="line"><span>                 }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return arr[k-1].val</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type item struct{</span></span>
<span class="line"><span>    val int</span></span>
<span class="line"><span>    weight int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func findWeight(x int,m map[int]int)int{</span></span>
<span class="line"><span>    if x== 2{</span></span>
<span class="line"><span>        return 1 </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if m[x]!=0{</span></span>
<span class="line"><span>        return m[x]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if x%2==0{</span></span>
<span class="line"><span>        return 1 + findWeight(x/2,m)</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        return 1 + findWeight(3*x+1,m)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


