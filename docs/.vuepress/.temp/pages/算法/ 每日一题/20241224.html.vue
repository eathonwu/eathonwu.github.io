<template><div><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2>
<ol start="1705">
<li>吃苹果的最大数目<br>
中等<br>
相关标签<br>
相关企业<br>
提示<br>
有一棵特殊的苹果树，一连 n 天，每天都可以长出若干个苹果。在第 i 天，树上会长出 apples[i] 个苹果，这些苹果将会在 days[i] 天后（也就是说，第 i + days[i] 天时）腐烂，变得无法食用。也可能有那么几天，树上不会长出新的苹果，此时用 apples[i] == 0 且 days[i] == 0 表示。</li>
</ol>
<p>你打算每天 最多 吃一个苹果来保证营养均衡。注意，你可以在这 n 天之后继续吃苹果。</p>
<p>给你两个长度为 n 的整数数组 days 和 apples ，返回你可以吃掉的苹果的最大数目。<br>
示例 1：</p>
<p>输入：apples = [1,2,3,5,2], days = [3,2,1,4,2]<br>
输出：7<br>
解释：你可以吃掉 7 个苹果：</p>
<ul>
<li>第一天，你吃掉第一天长出来的苹果。</li>
<li>第二天，你吃掉一个第二天长出来的苹果。</li>
<li>第三天，你吃掉一个第二天长出来的苹果。过了这一天，第三天长出来的苹果就已经腐烂了。</li>
<li>第四天到第七天，你吃的都是第四天长出来的苹果。<br>
示例 2：</li>
</ul>
<p>输入：apples = [3,0,0,0,0,2], days = [3,0,0,0,0,2]<br>
输出：5<br>
解释：你可以吃掉 5 个苹果：</p>
<ul>
<li>第一天到第三天，你吃的都是第一天长出来的苹果。</li>
<li>第四天和第五天不吃苹果。</li>
<li>第六天和第七天，你吃的都是第六天长出来的苹果。</li>
</ul>
<p>提示：</p>
<p>apples.length == n<br>
days.length == n<br>
1 &lt;= n &lt;= 2 * 104<br>
0 &lt;= apples[i], days[i] &lt;= 2 * 104<br>
只有在 apples[i] = 0 时，days[i] = 0 才成立</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<h2 id="算法思想" tabindex="-1"><a class="header-anchor" href="#算法思想"><span>算法思想</span></a></h2>
<p>贪心算法，很难理解</p>
</div></template>


