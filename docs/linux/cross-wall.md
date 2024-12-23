

## Final-shell 安装



## X-ui面板安装

通过x-ui安装trojan 保证的不填好用 ，fallback 回落不生效

```shell
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)
```

## 域名申请

https://www.namesilo.com/?rid=3853d48oc

## 证书申请

### acme.sh工具下载

```shell
curl https://get.acme.sh | sh -s email=ethanwu302@gmail.com
```

### 独立模式申请

需要保证

- 域名对应的ip是ok的
- 80端口是空闲的



```shell
acme.sh --issue -d notm.top --standalone --force
```

### 证书安装

```shell
acme.sh --install-cert -d notm.top \
  --key-file       /root/ca/server.key  \
  --fullchain-file /root/ca/server.crt 
```

### 证书自动更新

默认自动开启定时任务更新 ，通过crontab -l 查看，删除后可以通过以下命令添加

```
acme.sh  --install-cronjob
```



## 安装trojan

### 获取脚本

版本选择 	 https://github.com/p4gefau1t/trojan-go/releases

 wget 	 https://github.com/p4gefau1t/trojan-go/releases/download/v0.10.6/trojan-go-linux-386.zip

### 启动

```
nohup ./trojan-go -server -remote 127.0.0.1:80 -local 0.0.0.0:443 -key /root/ca/server.key -cert /root/ca/server.crt -password SFe8tvHQVm >nohup.out 2>&1 &
```



nohup ./trojan-go -server -remote 127.0.0.1:2017  -local 0.0.0.0:443 -key /root/ca/server.key -cert /root/ca/server.crt -password SFe8tvHQVm >nohup.out 2>&1 &

http://129.226.216.247:2017/
