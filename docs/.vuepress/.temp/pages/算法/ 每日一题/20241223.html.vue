<template><div><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2>
<ol start="855">
<li>考场就座<br>
尝试过<br>
中等<br>
相关标签<br>
相关企业<br>
在考场里，有 n 个座位排成一行，编号为 0 到 n - 1。</li>
</ol>
<p>当学生进入考场后，他必须坐在离最近的人最远的座位上。如果有多个这样的座位，他会坐在编号最小的座位上。(另外，如果考场里没有人，那么学生就坐在 0 号座位上。)</p>
<p>设计一个模拟所述考场的类。</p>
<p>实现 ExamRoom 类：</p>
<p>ExamRoom(int n) 用座位的数量 n 初始化考场对象。<br>
int seat() 返回下一个学生将会入座的座位编号。<br>
void leave(int p) 指定坐在座位 p 的学生将离开教室。保证座位 p 上会有一位学生。</p>
<p>示例 1：</p>
<p>输入：<br>
[&quot;ExamRoom&quot;, &quot;seat&quot;, &quot;seat&quot;, &quot;seat&quot;, &quot;seat&quot;, &quot;leave&quot;, &quot;seat&quot;]<br>
[[10], [], [], [], [], [4], []]<br>
输出：<br>
[null, 0, 9, 4, 2, null, 5]<br>
解释：<br>
ExamRoom examRoom = new ExamRoom(10);<br>
examRoom.seat(); // 返回 0，房间里没有人，学生坐在 0 号座位。<br>
examRoom.seat(); // 返回 9，学生最后坐在 9 号座位。<br>
examRoom.seat(); // 返回 4，学生最后坐在 4 号座位。<br>
examRoom.seat(); // 返回 2，学生最后坐在 2 号座位。<br>
examRoom.leave(4);<br>
examRoom.seat(); // 返回 5，学生最后坐在 5 号座位。</p>
<p>提示：</p>
<p>1 &lt;= n &lt;= 109<br>
保证有学生正坐在座位 p 上。<br>
seat 和 leave 最多被调用 104 次。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-.go line-numbers-mode" data-highlighter="shiki" data-ext=".go" data-title=".go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>type ExamRoom struct {</span></span>
<span class="line"><span>	items []bool</span></span>
<span class="line"><span>	seat  int</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Constructor(n int) ExamRoom {</span></span>
<span class="line"><span>	items := make([]bool, n)</span></span>
<span class="line"><span>	//    for i:=0;i&#x3C;n;i++{</span></span>
<span class="line"><span>	//     items[i]=item{preIndex:-1,nextIdx:-1}</span></span>
<span class="line"><span>	//    }</span></span>
<span class="line"><span>	return ExamRoom{items: items}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ExamRoom) Seat() int {</span></span>
<span class="line"><span>	if this.seat == 0 {</span></span>
<span class="line"><span>		this.items[0] = true</span></span>
<span class="line"><span>		this.seat = 1</span></span>
<span class="line"><span>		return 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// 找寻未占用位置的最大距离</span></span>
<span class="line"><span>	preMaxIdx := 0</span></span>
<span class="line"><span>	maxLen := 0</span></span>
<span class="line"><span>    arrLen := len(this.items)</span></span>
<span class="line"><span>	for i := 0; i &#x3C; len(this.items); {</span></span>
<span class="line"><span>		if this.items[i] == true {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		rightj := i</span></span>
<span class="line"><span>		for j := i + 1; j &#x3C; len(this.items); j++ {</span></span>
<span class="line"><span>			if this.items[j] == true {</span></span>
<span class="line"><span>				break</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			rightj = j</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		l := rightj - i + 1 </span></span>
<span class="line"><span>		if l%2 == 0 &#x26;&#x26; (l-1) > maxLen {</span></span>
<span class="line"><span>			maxLen = rightj - i + 1</span></span>
<span class="line"><span>			preMaxIdx = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if l%2 == 1 &#x26;&#x26; l > maxLen {</span></span>
<span class="line"><span>			maxLen = rightj - i + 1</span></span>
<span class="line"><span>			preMaxIdx = i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if rightj == arrLen - 1  &#x26;&#x26;  (rightj-i+1) * 2 + 1 > l {</span></span>
<span class="line"><span>            preMaxIdx = i</span></span>
<span class="line"><span>            maxLen =  (rightj-i+1) * 2 + 1 </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if rightj == i {</span></span>
<span class="line"><span>			i++</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			i = rightj + 1</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	ret := preMaxIdx + maxLen/2 - 1</span></span>
<span class="line"><span>	if maxLen%2 == 1 {</span></span>
<span class="line"><span>		ret = ret + 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if preMaxIdx+maxLen >= len(this.items) {</span></span>
<span class="line"><span>		ret = len(this.items) - 1</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>    if preMaxIdx == 0 {</span></span>
<span class="line"><span>		ret = 0</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	this.items[ret] = true</span></span>
<span class="line"><span>	this.seat++</span></span>
<span class="line"><span>	return ret</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *ExamRoom) Leave(p int) {</span></span>
<span class="line"><span>	this.items[p] = false</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Your ExamRoom object will be instantiated and called as such:</span></span>
<span class="line"><span> * obj := Constructor(n);</span></span>
<span class="line"><span> * param_1 := obj.Seat();</span></span>
<span class="line"><span> * obj.Leave(p);</span></span>
<span class="line"><span> */</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


