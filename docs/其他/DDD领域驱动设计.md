---
title: 'DDD领域驱动设计'
---
# 战略设计图



# 战术设计图



# 领域分层

### 4层

1.展现层：controller层。无业务逻辑

2.应用服务层：此层可以包含查询逻辑，但核心业务逻辑必须下沉到领域层。

3.领域服务层：业务在这里组装。仓储（资源库）接口在此层定义。

4.基础设施层：仓储（资源库）实现层+PO持久化层。

![img](https://img2020.cnblogs.com/blog/584866/202110/584866-20211011141738741-950766765.png)

# 六边形架构

适配器架构

![img](https://ucc.alicdn.com/pic/developer-ecology/at4uaznghdxgm_5b7ec0f16d124d6bb06e34e3e29ab549.png?x-oss-process=image%2Fresize%2Cw_1400%2Fformat%2Cwebp)



# CQRS架构



# COLA架构