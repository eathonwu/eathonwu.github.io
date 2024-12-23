<template><div><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker run -d --name nginx -p 443:443 -v /root/emby/nginx/nginx.conf:/etc/nginx/nginx.conf -v /root/emby/nginx/conf.d:/etc/nginx/conf.d  -v /root/emby/nginx/data:/usr/share/local/nginx nginx:alpine</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


