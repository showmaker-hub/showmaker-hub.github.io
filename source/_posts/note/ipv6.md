---
title: 家庭网络如何打开ipv6
date: 2022-02-10 16:24:55
updated: 2022-02-10 21:46:32
tags:
  - 学习
  - 笔记
readmore: true
categories:
  - 初意的小笔记
---
目前国内的网络正在快速的向IPv6升级中，本文主要介绍家用路由器关于IPv6的上网设置方法。
<!-- more -->

# 确认宽带线路是否支持IPv6
确认宽带支持IPv6最直接的方法是：电脑直接连接宽带，可以获取到IPv6全球地址，则说明宽带支持IPv6，如下图：


[![HNEige.png](https://s4.ax1x.com/2022/02/10/HNEige.png)](https://imgtu.com/i/HNEige)


    注意：若电脑直连光猫无法获取到2开头的IPv6公网地址，则说明线路不支持IPv6，需要联系ISP确认和更改光猫设置。


# 设置方法
确认线路支持IPv6后，根据路由器IPv4的上网方式，选择合适的IPv6上网方式。
## 路由器IPv4上网方式为“宽带拨号上网”，IPv6选“宽带拨号上网”
若路由器的上网方式为IPv4宽带拨号，且拨号成功后能正常上网

在“路由器管理界面→路由设置→IPv6设置”中，将IPv6功能开启，WAN口连接类型选择宽带拨号上网，并勾选“复用IPv4拨号链路”，然后点击“连接”，如下图：

[![HNEC9O.png](https://s4.ax1x.com/2022/02/10/HNEC9O.png)](https://imgtu.com/i/HNEC9O)

## 路由器IPv4上网方式为“自动获得IP地址”，IPv6选“桥模式”
若路由器的上网方式为自动获得IP地址，且获取IP地址后能正常上网

则在“路由器管理界面→路由设置→IPv6设置”中，将IPv6功能开启，WAN口连接类型选择“桥模式”，点击“保存”，如下图：

[![HNEp4K.png](https://s4.ax1x.com/2022/02/10/HNEp4K.png)](https://imgtu.com/i/HNEp4K)

# 测试电脑获取的IPv6地址是否可以正常联网
设置完路由器的IPv6功能后，电脑重新连接路由器网络，获取到公网IPv6地址后，打开浏览器输入[www.test-ipv6.com](https://www.test-ipv6.com/)，就可以看到线路是否支持IPv6了。

[![HNEP3D.png](https://s4.ax1x.com/2022/02/10/HNEP3D.png)](https://imgtu.com/i/HNEP3D)