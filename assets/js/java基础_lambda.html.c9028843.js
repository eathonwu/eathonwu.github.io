"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5518],{898:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>e});var t=a(641);const n={},l=(0,a(6262).A)(n,[["render",function(i,s){return(0,t.uX)(),(0,t.CE)("div",null,s[0]||(s[0]=[(0,t.Fv)('<h2 id="optional" tabindex="-1"><a class="header-anchor" href="#optional"><span>Optional</span></a></h2><p>Optional用法:</p><ul><li><p>无法判断被调用传递过来的list 是否为空, 可以省略if null的判断条件</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> carsFiltered </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Optional</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ofNullable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(cars)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">orElseGet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(Collections</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">::</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">emptyList)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(Objects</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">::</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">nonNull)</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //filtering car object that are null</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(Car</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">::</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">getName)</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //now it&#39;s a stream of Strings</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(Objects</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">::</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">nonNull)</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //filtering null in Strings</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(name </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">startsWith</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;M&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">collect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Collectors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //back to List of Strings</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li></ul>',3)]))}]]),e=JSON.parse('{"path":"/java%E5%9F%BA%E7%A1%80/lambda.html","title":"","lang":"zh-CN","frontmatter":{"description":"Optional Optional用法: 无法判断被调用传递过来的list 是否为空, 可以省略if null的判断条件","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java%E5%9F%BA%E7%A1%80/lambda.html"}],["meta",{"property":"og:site_name","content":"ntom"}],["meta",{"property":"og:description","content":"Optional Optional用法: 无法判断被调用传递过来的list 是否为空, 可以省略if null的判断条件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-23T14:28:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-23T14:28:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-23T14:28:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"notm\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Optional","slug":"optional","link":"#optional","children":[]}],"git":{"createdTime":1734964134000,"updatedTime":1734964134000,"contributors":[{"name":"Yang Yang","username":"Yang Yang","email":"yangyang@YangdeMacBook-Air.local","commits":1,"url":"https://github.com/Yang Yang"}]},"readingTime":{"minutes":0.26,"words":79},"filePathRelative":"java基础/lambda.md","localizedDate":"2024年12月23日","autoDesc":true}')},6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,t]of s)a[i]=t;return a}}}]);