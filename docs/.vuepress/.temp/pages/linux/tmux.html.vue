<template><div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tmux</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tmux</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> attach</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  {sessionName}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tmux</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kill-session</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  {sessionName}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tmux</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> switch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {sessionName}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tmux</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rename-session</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {oldSessionName}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {newSessionName}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Ctrl+b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> d：分离当前会话。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Ctrl+b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> s：列出所有会话。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Ctrl+b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">：重命名当前会话。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>窗口操作</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>上下划分</span></span>
<span class="line"><span>tmux split-window</span></span>
<span class="line"><span>左右划分</span></span>
<span class="line"><span>tmux split-window -h</span></span>
<span class="line"><span>选择 窗口</span></span>
<span class="line"><span>mux select-pane -UDRL</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建窗口</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>tmux new-window -t {windowName}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tmux rename-window -t {windowName}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换窗口</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 切换到指定编号的窗口</span></span>
<span class="line"><span>$ tmux select-window -t &#x3C;window-number></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 切换到指定名称的窗口</span></span>
<span class="line"><span>$ tmux select-window -t &#x3C;window-name></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


