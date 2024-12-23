```bash
tmux ls

tmux attach -t  {sessionName}

tmux kill-session -t  {sessionName}

tmux switch -t {sessionName}

tmux rename-session -t {oldSessionName} {newSessionName}

Ctrl+b d：分离当前会话。
Ctrl+b s：列出所有会话。
Ctrl+b $：重命名当前会话。


```



窗口操作

```
上下划分
tmux split-window
左右划分
tmux split-window -h
选择 窗口
mux select-pane -UDRL
```



新建窗口

```
tmux new-window -t {windowName}

tmux rename-window -t {windowName}
```





切换窗口

````
# 切换到指定编号的窗口
$ tmux select-window -t <window-number>

# 切换到指定名称的窗口
$ tmux select-window -t <window-name>
````

