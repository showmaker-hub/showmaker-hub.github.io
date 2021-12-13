---
title: hexo添加b站外链
date: 202-11-22 16:24:55
updated: 2021-11-22 16:32:55
tags:
  - 学习
  - 笔记
readmore: true
categories:
  - 初意的小笔记
---

　　Hexo搭建博客后，如果想在博客中分享视频，避免网站服务器带宽的限制，需要添加其他视频网站的外链播放器，具体该怎么操作呢？
<!-- more -->

# hexo-tag-aplayer

[hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer) 是 [DPlayer](https://github.com/DIYgod/DPlayer) 播放器的 Hexo 标签插件。

因为版本维护者不再支持新版本的更新，有些bug没有解决，所以对于高版本的Hexo支持不友好，甚至安装阶段就会报错。所以，我不是很支持继续使用该方法。

# 视频网站外链
　　Hexo 支持 iframe 的方式插入视频，所示我们可以把视频上传到哔哩哔哩、优酷、腾讯视频等，然后生成外链再拿来用。<br>
　　大部分视频网站的外链播放器在视频开头都会加上30秒-2分钟的广告，于是选择B站，无广告，无广告，无广告！

## 去B站获取视频外链
选择视频下方“分享”里的嵌入代码，而不是视频地址。否则进入 Hexo 博客后，网页会自动跳转到 bilibili 的视频页面，而不是自己的博客页面。
![1](https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/bilibili.jpg)

Markdown 中可以直接插入 html 代码，但是hexo给我们特意准备了一个 raw 标签来插入html代码，防止一些其他因素的干扰，这里我们就使用raw来插入视频外链。
```
{% raw %}
<iframe src="//player.bilibili.com/player.html?aid=90978812&cid=155358422&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
{% endraw %}
```
因为外链html没有和Hexo适配，所以在网页上打开，界面靠左并且窗口小，显得很难看，不够大气。

![1](https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/b.jpg)

## 美化播放器样式
这里分享一个很巧妙的偷懒方法，我们可以去[Hexo](https://hexo.io/zh-cn/docs/)的 官网，看看作者是如何布局的，然后把代码抄回来。

![1](https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/images1/c.jpg)

那么，我们只要把布局中的src，替换为自己的外链地址，就可以设置好视频的布局。

```
{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
<iframe src="//player.bilibili.com/player.html?aid=285926619&bvid=BV11f4y127AC&cid=200752085&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; Left: 0; top: 0;" ></iframe></div>
{% endraw %}

```
{% raw %}
<div class="video_src"><iframe src="https://player.bilibili.com/player.html?aid=548663174&amp;bvid=BV1eq4y157yy&amp;cid=429492845&page=1&high_quality=1" height="660px" width="100%" "frameborder="no" scrolling="no" allowfullscreen="allowfullscreen"> </iframe></div>
{% endraw %}
