## nginx

```
docker run -d --name nginx -p 443:443 -v /root/emby/nginx/nginx.conf:/etc/nginx/nginx.conf -v /root/emby/nginx/conf.d:/etc/nginx/conf.d  -v /root/emby/nginx/data:/usr/share/local/nginx nginx:alpine
```

