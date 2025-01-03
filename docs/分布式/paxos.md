---
title: paxos
date: 2024-12-09T22:39:39+08:00
lastmod: 2024-12-09T22:39:39+08:00
author: notmtop
# avatar: /img/author.jpg
# authorlink: https://author.site
#cover: /img/cover.jpg
# images:
#   - /img/cover.jpg
categories:
  - 分布式
tags:
  - 分布式
  - paxos
# nolastmod: true
#draft: true
---

<!--more-->

Basic Paxos 中存在 3 个重要的角色：

1. **提议者（Proposer）**：也可以叫做协调者（coordinator），提议者负责接受客户端的请求并发起提案。提案信息通常包括提案编号 (Proposal ID) 和提议的值 (Value)。
2. **接受者（Acceptor）**：也可以叫做投票员（voter），负责对提议者的提案进行投票，同时需要记住自己的投票历史；
3. **学习者（Learner）**：如果有超过半数接受者就某个提议达成了共识，那么学习者就需要接受这个提议，并就该提议作出运算，然后将运算结果返回给客户端。



![img](https://oscimg.oschina.net/oscnet/up-890fa3212e8bf72886a595a34654918486c.png)

为了减少实现该算法所需的节点数，一个节点可以身兼多个角色。并且，一个提案被选定需要被半数以上的 Acceptor 接受。这样的话，Basic Paxos 算法还具备容错性，在少于一半的节点出现故障时，集群仍能正常工作。



# **Paxos** 三种角色:**Proposer**，**Acceptor**，**Learners**

**Proposer**:

只要 Proposer 发的提案被半数以上 Acceptor 接受，Proposer 就认为该提案里的 value 被选定 了。

**Acceptor**:
 只要 Acceptor 接受了某个提案，Acceptor 就认为该提案里的 value 被选定了。

**Learner**:
 Acceptor 告诉 Learner 哪个 value 被选定，Learner 就认为那个 value 被选定。



著作权归Guide所有 原文链接：https://javaguide.cn/distributed-system/protocol/paxos-algorithm.html#%E4%BB%8B%E7%BB%8D