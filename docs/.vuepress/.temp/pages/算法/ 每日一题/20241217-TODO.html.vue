<template><div><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2>
<p><a href="https://leetcode.cn/problems/minimum-number-of-valid-strings-to-form-target-i/?envType=daily-question&amp;envId=2024-12-17" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/minimum-number-of-valid-strings-to-form-target-i/?envType=daily-question&amp;envId=2024-12-17</a></p>
<p>给你一个字符串数组 <code v-pre>words</code> 和一个字符串 <code v-pre>target</code>。</p>
<p>如果字符串 <code v-pre>x</code> 是 <code v-pre>words</code> 中 <strong>任意</strong> 字符串的</p>
<p>前缀</p>
<p>，则认为 <code v-pre>x</code> 是一个 <strong>有效</strong> 字符串。</p>
<p>现计划通过 <strong>连接</strong> 有效字符串形成 <code v-pre>target</code> ，请你计算并返回需要连接的 <strong>最少</strong> 字符串数量。如果无法通过这种方式形成 <code v-pre>target</code>，则返回 <code v-pre>-1</code>。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-golang line-numbers-mode" data-highlighter="shiki" data-ext="golang" data-title="golang" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>func minValidStrings(words []string, target string) int {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    prefixFunction := func(word, target string) []int {</span></span>
<span class="line"><span>        s := word + "#" + target</span></span>
<span class="line"><span>        n := len(s)</span></span>
<span class="line"><span>        pi := make([]int, n)</span></span>
<span class="line"><span>        for i := 1; i &#x3C; n; i++ {</span></span>
<span class="line"><span>            j := pi[i - 1]</span></span>
<span class="line"><span>            for j > 0 &#x26;&#x26; s[i] != s[j] {</span></span>
<span class="line"><span>                j = pi[j - 1]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if s[i] == s[j] {</span></span>
<span class="line"><span>                j++</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            pi[i] = j</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return pi</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    n := len(target)</span></span>
<span class="line"><span>    back := make([]int, n)</span></span>
<span class="line"><span>    for _, word := range words {</span></span>
<span class="line"><span>        pi := prefixFunction(word, target)</span></span>
<span class="line"><span>        m := len(word)</span></span>
<span class="line"><span>        for i := 0; i &#x3C; n; i++ {</span></span>
<span class="line"><span>            back[i] = int(math.Max(float64(back[i]), float64(pi[m + 1 + i])))</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // dp[i] = dp[i-back[i]] + 1</span></span>
<span class="line"><span>    // kmp 求对应backi</span></span>
<span class="line"><span>    dp := make([]int,len(target)+1)</span></span>
<span class="line"><span>    for i := 1; i &#x3C;= n; i++ {</span></span>
<span class="line"><span>        dp[i] = int(1e9)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for i:=0;i&#x3C;len(target);i++{</span></span>
<span class="line"><span>        dp[i + 1] = dp[i + 1 - back[i]] + 1</span></span>
<span class="line"><span>        if dp[i+1] > n{</span></span>
<span class="line"><span>            return -1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return dp[n]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="待跟进算法思想" tabindex="-1"><a class="header-anchor" href="#待跟进算法思想"><span>待跟进算法思想</span></a></h2>
<h3 id="kmp" tabindex="-1"><a class="header-anchor" href="#kmp"><span>kmp</span></a></h3>
<h3 id="字典树" tabindex="-1"><a class="header-anchor" href="#字典树"><span>字典树</span></a></h3>
</div></template>


