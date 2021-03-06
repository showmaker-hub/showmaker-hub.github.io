---
title: 如何实现远程控制电脑
tags:
  - 技术
  - 学习
categories:
  - 初意的小笔记
readmore: true
date: 2021-11-09 14:30:58
updated: 2021-11-09 15:00:58
---

　因为最近为期一周实训，需要用到keil5编译器，自己的电脑带上充电器有3.65kg实在是太重了，来回拿不方便，于是昨天晚上想了几种方法，最终找到一种最简单的

<!-- more -->

# 设备两种远程连接方式
## TCP
　　TCP协议是面向连接的可靠的网络传输层协议。无论是哪一方向另一方发送消息之前都会通过3次握手，建立连接后才能够发送消息。而且消息发送方能够确认消息最终是否准确送达。tcp提供了可靠的字节流服务，通过字节码传输数据。


　　TCP强制执行数据包排序，并且有一个检查实际通过的消息的方法。所以它更可靠。在吞吐量方面 - 例如，在特定时间内传输的数据量 - 实际上它们大致相同。

## UDP
　　UDP协议的无连接的，只要知道ip和端口号就能够发送消息，不需要通过握手，建立连接。而且UDP协议没有确认机制，客户端不知道发送服务端的消息是否发送成功。但是UDP在发送报文中会整个报文发送，既不会拆分，也不会合并。UDP协议发送简单高效，但是相比较而言不是十分可靠。


　　UDP的优点是延迟较低。因为它不检查订购或确认收到数据包 - 您的程序在到达时收到数据包。没有等待确认。以牺牲可靠性为代价，UDP几乎总能提供比TCP更好的性能。
## 两种协议区别
 -TCP基于连接，UDP无连接。

 -TCP对系统资源要求多，UDP对资源要求少。

 -TCP协议是流式协议，UDP是数据报模式。

 -TCP可靠，保证数据传输，UDP可能出现丢包情况。

 -TCP协议保证数据顺序，UDP不保证数据的顺序。

# 应用层实现方法
## 局域网实现(win家庭版不支持)
 -首先打开远程控制请求
<div align="center">
    <img src="https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/1.jpg" width="50%">
    </div>

 -确定防火墙已关闭


 -cmd输入ipconfig查看自己ip地址


 -cmd输入mstrc,输入ip和计算机密码即可实现远程桌面

> ~~连接成功后，你的远程电脑就会立刻进入待机状态，并且丝毫不影响你本地电脑的工作哦

## 外网实现
###端口映射
  需要做端口映射，原理就是给你的路由器发送一个识别请求，这样才能确认是你发送的数据

### 内网穿透
  内网穿透 简单说就是用你的内网服务器绑定一个公网ip，远程PC访问公网ip进行数据交换，小白实现起来过于复杂，推荐用第三方
####市面上主流的FRP服务
经过比较和测试，整理了下面几家内网穿透服务商供参考：

-浮居FRP
-量子互联
-Sakura Frp
-花生壳
以上四家内网穿透服务商均提供免费节点，付费服务也都比较稳定，适合长期使用。

> ~~当然，FRP服务商不限于这些，如果你有自己的内网穿透服务商，都可以配置实现远程桌面的功能。

#### 配置端口映射服务
　　以浮居FRP为例，展示如何通过配置内网穿透服务。
![详情](https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/2.png)
　　首先，需要选择合适的节点。免费节点一般资源有限，但基本足够使用。所有节点均可以穿透远程桌面服务，因此尽量选择国内节点即可。
![详情](https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/3.png)
　如上图所示进行配置。其中，“本地端口”应填写第一步记下的远程桌面的端口号。

　远程端口填写一个10000-19999范围内，顺口好记的端口即可，**一会儿连接时会需要这个端口。**

　绑定域名可填可不填。
![详情](https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/4.png)
　高级设置无需填写。
####下载并配置FRP管理软件
如果你使用浮居FRP作为服务商，建议使用koho大神开发的frpmgr软件：

[开发包](https://down.frp.cool/client/frpmgr-1.3.2.msi)

__如果你使用了其他服务商提供的端口映射服务，应当使用其他服务商提供的软件__，这里我们仅以浮居FRP作为例子。

![详情](https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/5.png)
选择配置文件，复制配置文件内容，并创建一个配置文件“frp.ini”粘贴进去。

（如果你不知道该如何修改文件扩展名，请[百度](https://www.baidu.com)。）

frpmgr 默认安装到：C:\Program Files\FRP，运行该目录下的frpmgr.exe。

![详情](https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/6.png)
点击“新建配置”，打开刚刚创建的配置文件，导入配置。

然后选中配置，点击“启动”按钮。


![详情](https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/7.png)


至此，端口映射配置完毕。frpmgr软件在开机时会自动启动端口映射，因此远程桌面的端口转发会自动生效，无需手动启动。
#### 连接测试
端口映射配置完成后，接下来测试是否可以正常连接。

随意选择一台**电脑**或**手机**，作为控制端。

> ~~手机版软件名为微软远程桌面，图标如下图：
> <div align="left">
    <img src="https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/8.png" width="80">
  </div>
> 自行至应用商店或网络下载！

## 第三方(方法简单)
### 向日葵远程助手
[向日葵官网](https://sunlogin.oray.com/)
 -下载向日葵远程工具，在客户端注册登陆账号，也可以使用绿色版，无需绑定账号


 -电脑打开主界面，可以看到本机的识别码和验证码。

 -记住识别码，并在控制电脑上输入


 -输入后，点击接受连接就可以了，连接成功即可进行远程操作。

### TeamViewer
[TeamView官网](https://www.teamviewer.com/)：最成熟的远程软件，具有会议、电话‘远程桌面等多种功能


　Teamviewer使用UDP作为其主要协议来建立与远程计算机的连接。他们只在UDP失败时才使用TCP 
  只需要注册一个账户就可以，个人版只能两个设备之前交互


