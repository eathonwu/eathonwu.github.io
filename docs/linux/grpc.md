# 背景

RPC，全称`Remote Procedure Call`，中文译为远程过程调用。通俗地讲，使用RPC进行通信，调用**远程函数**就像调用**本地函数**一样，RPC底层会做好数据的序列化与传输，从而能使我们更轻松地创建分布式应用和服务。

![img](https://pic1.zhimg.com/80/v2-361866d30e1b42814b577280dd7afaf0_1440w.webp)

而gRPC，则是RPC的一种，它是**免费且开源**的，由谷歌出品。使用gRPC，我们只需要定义好每个API的Request和Response，剩下的gRPC这个框架会帮我们自动搞定。

# 通信流程

![img](https://pic3.zhimg.com/80/v2-13d685915ee28ac36b80b110d1deecca_1440w.webp)

通过stub桩代码对服务进行调用，桩代码里封装对应的编码解析、路由 登功能

## 定义对应proto

 ```protobuf
 syntax = "proto3";
 
 package greeter.srv;
 
 option go_package = "proto/greeter";
 
 service Greeter {
     rpc SayHello (HelloRequest) returns (HelloReply) {}
 }
 
 // The request message containing the user's name.
 message HelloRequest {
     string name = 1;
 }
 
 // The response message containing the greetings
 message HelloReply {
     string message = 1;
 }
 ```

## 根据proto生成对应stub代码

```
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative proto/greeter.proto
```

