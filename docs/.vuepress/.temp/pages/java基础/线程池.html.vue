<template><div><p>TODO</p>
<p>线程状态</p>
<ul>
<li>
<p>新建: new</p>
</li>
<li>
<p>就绪: 等待cpu调度 (start方法), Thread.yield() 会让线程从运行状态转换为就绪状态</p>
</li>
<li>
<p>运行 : running状态 ,Thread.sleep()不会释放线程,只是会释放cpu占用</p>
</li>
<li>
<p>阻塞: 等待资源</p>
</li>
<li>
<p>等待 : monitor.wait</p>
</li>
<li>
<p>终止: stop</p>
</li>
</ul>
<figure><img src="https://segmentfault.com/img/bVcHVEm" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
</div></template>


